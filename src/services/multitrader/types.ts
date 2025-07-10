export type User = {
  uniqueID: number
  userID: number
  fullName: string
  blocked: boolean
  userName?: string
  emailAddress?: string
  phoneNumber?: string
  debtorNumber?: string
  routeCode?: string
}

export type SearchParams = {
  search?: string
  offset?: number
  limit?: number
}

export type MachineKind = {
  uniqueID: number
  kindCode: string
  description: string
}

export type Machine = {
  uniqueID: number
  code: string
  description: string
  kindCode: string
  debtorNumber?: number
  imageID?: number
  memo?: string
  length?: number
  width?: number
  height?: number
  idnr?: number
  year?: number
  month?: number
  brand?: string
  type?: string
  firmwareVersion?: string
  softwareVersion?: string
  reference?: string
  grossWeight?: number
  netWeight?: number
}

export type ArticleRequest = {
  articleKeys: ArticleKey[]
  debtorNumber: string
}

export type Article = {
  articleKey: ArticleKey
  articlePrices: {
    quantity: number
    price: number
    priceType: string
  }[]
  warehouses: {
    code: string
    description: string
    stock: number
    salesQuantity: number
  }[]
  description: string
  remark: string
}

export type ArticleKey = {
  guid: string
  uniqueID: number
  articleCode: string
  articleGroupCode: string
  brandName: string
  externalBrandCode: string
  externalGroupCode: string
  ean: string
  requestedQuantity: number
}

export type ImportRequest = {
  ftp_url: string
  ftp_port: number
  ftp_user: string
  ftp_password: string
  ftp_active: boolean
  ftp_secure: boolean
  ftp_filename: string
  magcod: string
  levnr: string
  findArticlesByCode: string
  addNewArticlesInd: string
  updateArticlesInd: string
  updatePricesOnlyInd: string
  updatePricesCode: string
  calcKortperciInd: string
  articleGroupMustMatchInd: string
  recalcPriceToPerOneInd: string
  artgrpSrcCode: string
  overrideArtgrp: string
  ondgrpSrcCode: string
  overrideOndgrp: string
  updateStockPricesCode: string
  emailadres: string
  priorcodImport: string
  importfile_fullpath: string
  queuePriority: number
  logActivityStream: boolean
  forceimportInd: string
}

export type OrderRequest = {
  articles: Article[]
  debtorNumber: string
  reference: string
  externalReference: string
  internalReference: string
  shippingMethod: string
}

export type Order = {
  orderNumber: string
  debtorNumber: string
  orderType: string
  orderDate: string
  deliveryDate: string
  reference: string
  customerReference: string
  shippingMethod: string
  orderState: string
  logisticalState: string
  currency: string
  totalAmountExclusiveVat: number
  totalAmountVat: number
  totalAmountInclusiveVat: number
  warehouseCode: string
}

export type OrderParams = {
  openOrdersOnly?: boolean
  orderType?: string
  offset?: number
  limit?: number
}