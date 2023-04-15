import { createReducer, on } from '@ngrx/store';
import { shortenUrl, shortenUrlSuccess, shortenUrlFailure } from './urls.actions'
import { initialUrlsState } from './url.state';


export const urlReducer = createReducer(
  initialUrlsState,
  on(shortenUrl, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(shortenUrlSuccess, (state, { shortenedUrls }) => ({
    ...state,
    loading: false,
    shortenedUrls,
    error: null
  })),
  on(shortenUrlFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
