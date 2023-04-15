export interface UrlsState {
  shortenedUrls: {};
  loading: boolean;
  error: string | null;
}

export const initialUrlsState: UrlsState = {
  shortenedUrls: {},
  loading: false,
  error: null,
};
