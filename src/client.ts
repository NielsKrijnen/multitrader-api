import { Multitrader } from "./services/multitrader";
import { Workflow } from "./services/workflow";

type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>

export type Settings = {
  base: string
  headers: Record<string, string>
  fetch: Fetch
}

type Config = {
  subdomain: string
  auth?: {
    username: string
    password: string
  }
  fetch?: Fetch
}

export class MultitraderAPI {
  private readonly settings: Settings

  constructor(config: Config) {
    this.settings = {
      base: `https://${config.subdomain}.multitrader.nl/rest`,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      fetch: config.fetch ?? fetch
    }
    if (config.auth) {
      this.settings.headers["Authorization"] = "Basic " + btoa(config.auth.username + ':' + config.auth.password)
    }
  }

  get multitrader() {
    return new Multitrader(this.settings)
  }

  get workflow() {
    return new Workflow(this.settings)
  }
}