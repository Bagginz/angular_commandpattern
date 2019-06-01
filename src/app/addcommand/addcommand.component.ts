import { Icommand } from "../icommand.model";
import { CommandItem } from "../app.model";

export class AddcommandComponent implements Icommand {
  commanditem: CommandItem;
  name: string;
  redoItem = [] as string[];
  constructor(commanditem: CommandItem, name: string) {
    this.commanditem = commanditem;
    this.name = name;
  }

  excute() {
    this.commanditem.commandList.push(this.name);
  }
  undo() {
    this.redoItem.push(
      this.commanditem.commandList[this.commanditem.commandList.length - 1]
    );
    this.commanditem.commandList.splice(
      this.commanditem.commandList.length - 1,
      1
    );
  }
  redo() {
    this.commanditem.commandList.push(this.redoItem[this.redoItem.length - 1]);
    this.redoItem.splice(this.redoItem.length - 1, 1);
  }
}
