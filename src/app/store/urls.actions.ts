import { createAction, props } from '@ngrx/store';

export const shortenUrl = createAction(
  '[URL] Shorten URL',
  props<{ url: string }>()
);

export const shortenUrlSuccess = createAction(
  '[URL] Shorten URL Success',
  props<{ shortenedUrls: {} }>()
);

export const shortenUrlFailure = createAction(
  '[URL] Shorten URL Failure',
  props<{ error: string }>()
);
