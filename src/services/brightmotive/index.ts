import { Base } from "..";
import { OrderHistoryParams, PlaceOrderRequest, PostPrices, PostStocks } from "./types";

export class Brightmotive extends Base {
  listArticles() {
    return this.get("/bm/articles")
  }

  postPrices(prices: PostPrices) {
    return this.post("/bm/articles/prices", prices)
  }

  postStocks(stocks: PostStocks) {
    return this.post("/bm/articles/stocks", stocks)
  }

  listCustomers() {
    return this.get("/bm/customers")
  }

  getOrderHistory(params: OrderHistoryParams) {
    return this.get("/bm/orders/history", params)
  }

  placeOrderRequest(request: PlaceOrderRequest) {
    return this.post("/bm/orders/placeorder", request)
  }
}