import {refreshToken} from "@/shared/lib/refreshToken";

interface FetcherOptions {
  req?: Request; // SSR only
  headers?: HeadersInit;
  retry?: boolean;
};

export async function fetcher(
  input: RequestInfo | URL,
  init: RequestInit = {},
  options: FetcherOptions = {}
): Promise<Response | null> {
  const { req, headers = {}, retry = false } = options;

  const isServer = typeof window === 'undefined';

  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
  const url = typeof input === 'string' ? baseURL + input : input;

  const finalHeaders: HeadersInit = {
    ...headers,
    ...(isServer && req
      ? { cookie: req.headers.get('cookie') || '' }
      : {}),
  };

  const response = await fetch(url, {
    ...init,
    headers: finalHeaders,
    credentials: 'include', // for CSR: include cookie
  });

  // 액세스 토큰 만료 → refresh 요청 → 재시도
  if (response.status === 401 && !retry) {
    const refreshSuccess = await refreshToken(req);

    if (refreshSuccess) {
      return fetcher(input, init, {
        ...options,
        retry: true,
      });
    } else {
      // 로그아웃 처리 또는 null 반환
      return null;
    }
  }

  return response;
}