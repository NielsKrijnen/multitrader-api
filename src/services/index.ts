import { Settings } from "../client";

export class Base {
  constructor(private readonly settings: Settings) {}

  protected async get<T>(path: string, params?: Record<string, any>) {
    const url = new URL(this.settings.base + path)
    if (params) {
      for (const key of Object.keys(params)) {
        url.searchParams.set(key, params[key])
      }
    }

    const response = await this.settings.fetch(url, {
      method: "GET",
      headers: this.settings.headers
    })

    if (response.ok) {
      const text = await response.text()
      try {
        return JSON.parse(text) as T
      } catch {
        return text as T
      }
    } else {
      const text = await response.text()
      let error: any
      try {
        error = JSON.parse(text)
      } catch {
        error = text
      }
      throw error
    }
  }

  protected async post<T>(path: string, body: Record<string, any>) {
    const url = new URL(this.settings.base + path)

    const response = await this.settings.fetch(url, {
      method: "POST",
      headers: this.settings.headers,
      body: JSON.stringify(body)
    })

    if (response.ok) {
      return await response.json() as T
    } else {
      throw await response.json()
    }
  }

  protected async put<T>(path: string, body: Record<string, any>) {
    const url = new URL(this.settings.base + path)

    const response = await this.settings.fetch(url, {
      method: "PUT",
      headers: this.settings.headers,
      body: JSON.stringify(body)
    })

    if (response.ok) {
      return await response.json() as T
    } else {
      throw await response.json()
    }
  }
}