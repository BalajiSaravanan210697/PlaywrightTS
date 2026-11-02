import { APIRequestContext, APIRequest, APIResponse } from "@playwright/test";

export class APIUtils {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(endpoint);
  }
  async post(endpoint: string, body: object): Promise<APIResponse> {
    return await this.request.post(endpoint, { data: body });
  }

  async put(endpoint: string, body: object): Promise<APIResponse> {
    return await this.request.put(endpoint, { data: body });
  }
  async patch(endpoint: string, body: object): Promise<APIResponse> {
    return await this.request.patch(endpoint, { data: body });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(endpoint);
  }
}
