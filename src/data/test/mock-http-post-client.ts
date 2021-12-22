import {
  HttpPostClient,
  HttpPostParams,
} from 'data/protocols/http/http-post-client';

export class HttpPostCLientSpy implements HttpPostClient {
  url?: string;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
