import { Icommand } from "../icommand.model";
import { CommandItem } from "../app.model";
export class RemovecommandComponent implements Icommand {
  commanditem: CommandItem;
  index: number;
  previouse: string;
  previouseIndex: number;
  redoItem = [] as number[];
  constructor(commanditem: CommandItem, index: number) {
    this.commanditem = commanditem;
    this.index = index;
  }
  excute() {
    this.redoItem.push(this.index);
    this.previouseIndex = this.index;
    this.previouse = this.commanditem.commandList[this.index];
    this.commanditem.commandList.splice(this.index, 1);
  }
  undo() {
    this.commanditem.commandList.splice(this.previouseIndex, 0, this.previouse);
  }
  redo() {
    this.commanditem.commandList.splice(this.redoItem[0], 1);
    this.redoItem.splice(this.redoItem.length - 1, 1);
  }
}
