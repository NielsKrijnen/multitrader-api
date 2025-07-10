import { Base } from "..";
import { Machine, MachineKind, SearchParams, User } from "./types";

export class Multitrader extends Base {
  getUser() {
    return this.get<User>("/user")
  }

  getUserByDebnr(debnr: string) {
    return this.get<User>(`/user/deb/${debnr}`)
  }

  listUsers(params?: SearchParams) {
    return this.get<User[]>("/user/list", params)
  }

  createMachine(machine: Omit<Machine, "uniqueID">) {
    return this.post<Machine>("/machine", machine)
  }

  listMachines(params?: Omit<SearchParams, "search">) {
    return this.get<Machine[]>("/machines", params)
  }

  getMachine(uniqueID: number) {
    return this.get<Machine>(`/machine/${uniqueID}`)
  }

  updateMachine(uniqueID: number, machine: Partial<Omit<Machine, "uniqueID">>) {
    return this.put<Machine>(`/machine/${uniqueID}`, machine)
  }

  getMachineImage(uniqueID: number, imageID: number) {
    return this.get<string>(`/machine/${uniqueID}/image/${imageID}`)
  }

  listMachineKinds(params?: Omit<SearchParams, "search">) {
    return this.get<MachineKind[]>("/machinekinds", params)
  }
}