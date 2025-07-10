import { Base } from "..";
import { Definition, Pagination, Process } from "./types";

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
}