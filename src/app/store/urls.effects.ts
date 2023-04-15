import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { shortenUrl, shortenUrlSuccess, shortenUrlFailure } from './urls.actions';
import { UrlService } from '../url.service';

@Injectable()
export class UrlEffects {
  constructor(private actions$: Actions, private urlService: UrlService) {}

  shortenUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shortenUrl),
      switchMap(action =>
        this.urlService.shortenUrl(action.url).pipe(
          map(data => shortenUrlSuccess({ shortenedUrls: data})),
          catchError(error => of(shortenUrlFailure({ error: error.message })))
        )
      )
    )
  );
}
