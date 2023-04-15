import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { shortenUrl } from './store/urls.actions';
import { UrlsState } from './store/url.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = '';
  loading$: Observable<boolean>;
  shortenedUrls: Observable<{}>;
  urls: any = {}
  // error$: Observable<string>;

  constructor(private store: Store<{ urls: UrlsState }>) {
    this.loading$ = store.select(state => state.urls.loading);
    this.shortenedUrls = store.select(state => state.urls.shortenedUrls);
    
    this.shortenedUrls.subscribe((urls) => {
      console.log(urls);
      this.urls = urls
      
    });
    
    
    // this.error$ = store.select(state => state.urls.error);
  }

  onShorten() {
    if (this.url) {
      this.store.dispatch(shortenUrl({ url: this.url }));
    }
  }

  // 
  // get error() {
  //   return this.error$.subscribe();
  // }
}