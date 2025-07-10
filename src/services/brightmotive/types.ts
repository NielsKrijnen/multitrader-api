export type PostPrices = {
  articles: {
    erp_code: string
    qty: number
  }[]
  customer_code: string
  store_code: string
}

export type PostStocks = {
  erp_codes: string[]
  location_refs: string[]
}

export type OrderHistoryParams = {
  start: string
  end: string
  customer_code?: string
  erp_order_code?: string
}

export type PlaceOrderRequest = {
  order: {
    customer_code: string
    line_items: {
      erp_code: string
      description: string
      qty: number
      total_net_price: number
      total_gross_price: number
      vehicle: {
        ktype: number
        license_plate: string
        name: string
      }
      license_plate_order: {
        color: string
        document_number: string
        duplication_code: number
        issue_code: string
        laminate_code: string
        laminate_code2: string
        license_plate: string
        print: string
        reason: string
        report_code: string
        shape: string
      }
      remark: string
      reference: {
        articleCode: string
      }
      customer_scheduled_ride_starts_at: string
      customer_scheduled_ride_ends_at: string
      return_type: string
      validated_warranty: boolean
      original_id: string
      original_erp_order_code: string
      original_line_number: string
    }[]
    created_by: {
      email: string
      id: number
      name: string
      role: string
    }
    brightmotive_order_id: string
    external_reference: string
    remark: string
    desired_delivery_time: string
    desired_delivery_time_formatted: string
  }
}