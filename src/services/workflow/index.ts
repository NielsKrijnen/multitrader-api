import { Base } from "..";
import { Attachment, CreateProcess, Definition, Message, Pagination, Process } from "./types";

export class Workflow extends Base {
  listDefinitions() {
    return this.get<Pagination<Definition>>("/wf/definition")
  }

  getDefinition(definitionId: number) {
    return this.get<Definition>(`/wf/definition/${definitionId}`)
  }

  listProcesses(definitionId: number) {
    return this.get<Pagination<Process>>(`/wf/definition/${definitionId}/process`)
  }

  getProcess(definitionId: number, instanceNumber: string) {
    return this.get<Process>(`/wf/definition/${definitionId}/process/${instanceNumber}`)
  }

  createProcess(definitionId: number, process: CreateProcess) {
    return this.put<Process>(`/wf/definition/${definitionId}/process`, process)
  }

  listMessages(definitionId: number, instanceNumber: string, page?: number) {
    return this.get<Pagination<Message>>(`/wf/definition/${definitionId}/process/${instanceNumber}/messages`, { page })
  }

  getMessage(definitionId: number, instanceNumber: string, messageId: number) {
    return this.get<Message>(`/wf/definition/${definitionId}/process/${instanceNumber}/messages/${messageId}`)
  }

  listAttachments(definitionId: number, instanceNumber: string, messageId: number) {
    return this.get<Pagination<Attachment>>(`/wf/definition/${definitionId}/process/${instanceNumber}/messages/${messageId}/attachments`)
  }

  getAttachment(definitionId: number, instanceNumber: string, messageId: number, index: number) {
    return this.get<Attachment>(`/wf/definition/${definitionId}/process/${instanceNumber}/messages/${messageId}/attachments/${index}`)
  }
}