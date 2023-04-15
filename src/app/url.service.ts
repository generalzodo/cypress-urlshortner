import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ShortenedUrlResponse {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private apiUrl = 'https://api.shrtco.de/v2/shorten';

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string): Observable<{}> {
    return this.http
      .get<ShortenedUrlResponse>(this.apiUrl, { params: { url: longUrl } })
      .pipe(
        map(response => {
          // const { short_link, short_link2 } = response.result;
          return {url1: response.result.short_link, url2: response.result.short_link2};
        })
      );
  }
}
