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