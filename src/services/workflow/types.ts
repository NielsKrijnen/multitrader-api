export type Pagination<T extends Record<string, any>> = {
  items: T[]
  page: number
  hasNext: boolean
}

export type Definition = {
  id: number
  name: string
  description: string
}

export type Process = {
  instanceNumber: string
  description: string
  definition: Definition
  relationId: number
  relationNumber: number
  relationSearchName: string
  messageCount: number
  firstMessage: Message
  lastMessage: Message
  submitterName: string
  submitterEmail: string
  tasks: {
    taskNumber: number
    stateType: string
    taskDescription: string
    priority: string
    executors: string[]
    executorGroups: string[]
    owner: string
    plannedStartDate: string
    plannedEndDate: string
    startDate: string
    endDate: string
    escalationDate: string
    fatalDate: string
    status: string
  }[]
  externalCode: string
  externalReferences: string[]
  startDate: string
  endDate: string
}

export type CreateProcess = {
  description: string
  authorName: string
  authorEmail: string
  message: string
  attachments: Attachment[]
}

export type Attachment = {
  id: number
  fileName: string
  encodedContent: string
}

export type Message = {
  id: number
  author: string
  message: string
  dateTime: string
}