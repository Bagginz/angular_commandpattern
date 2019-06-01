import { Icommand } from "../icommand.model";
import { CommandItem } from "../app.model";

export class UndocommandComponent implements Icommand {
  commanditem: CommandItem;
  constructor(commanditem: CommandItem) {
    this.commanditem = commanditem;
  }
  excute() {}
  undo() {
    switch (
      this.commanditem.lastCommand[this.commanditem.lastCommand.length - 1]
    ) {
      case "ADD":
        this.commanditem.removeList.push(
          this.commanditem.commandList[this.commanditem.commandList.length - 1]
        );
        this.commanditem.commandList.splice(
          this.commanditem.commandList.length - 1,
          1
        );
        this.commanditem.lastCommand.splice(
          this.commanditem.commandList.length - 1,
          1
        );
        break;
      case "REMOVE":
        this.commanditem.commandList.push(
          this.commanditem.removeList[this.commanditem.removeList.length - 1]
        );
        this.commanditem.removeList.splice(
          this.commanditem.removeList.length - 1,
          1
        );
        this.commanditem.lastCommand.splice(
          this.commanditem.commandList.length - 1,
          1
        );
        break;
      default:
        break;
    }
  }
  redo() {}
}
