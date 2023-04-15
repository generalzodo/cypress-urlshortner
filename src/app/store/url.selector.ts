import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UrlsState } from './url.state';


export const selectUrlsState = createFeatureSelector<UrlsState>('urls');

export const selectShortenedUrls = createSelector(
  selectUrlsState,
  (state: UrlsState) => state.shortenedUrls
);

export const selectLoading = createSelector(
  selectUrlsState,
  (state: UrlsState) => state.loading
);

export const selectError = createSelector(
  selectUrlsState,
  (state: UrlsState) => state.error
);
