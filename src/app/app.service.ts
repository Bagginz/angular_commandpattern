import { Injectable } from "@angular/core";
import { Icommand } from "./icommand.model";
@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}
  undocommand = [] as Icommand[];
  redocommand = [] as Icommand[];
  addCommand(command: Icommand) {
    this.undocommand.push(command);
    return command.excute();
  }

  removeCommand(command: Icommand) {
    this.undocommand.push(command);
    return command.excute();
  }

  redoCommand() {
    this.redocommand.pop().redo();
  }

  undoCommand() {
    this.redocommand.push(this.undocommand[this.undocommand.length - 1]);
    this.undocommand.pop().undo();
  }
}
