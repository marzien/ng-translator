import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_KEY = 'AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

  constructor(private http: HttpClient) { }

  translate(text: string) {
    return this.http.post(this.url, {
      source: 'en',
      q: text,
      target: 'de'
    }).pipe(
      map((res: any) => {
        return res.data.translations[0].translatedText;
      })
    );
  }
}
