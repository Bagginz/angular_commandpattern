import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { AddcommandComponent } from "../addcommand/addcommand.component";
import { RemovecommandComponent } from "../removecommand/removecommand.component";
import { UndocommandComponent } from "../undocommand/undocommand.component";
import { CommandItem } from "../app.model";
@Component({
  selector: "app-maincomponent",
  templateUrl: "./maincomponent.component.html",
  styleUrls: ["./maincomponent.component.css"]
})
export class MaincomponentComponent implements OnInit {
  textinput: string;
  nameArr = {
    commandList: ["first"]
  } as CommandItem;
  bEnableUndobtn = false;
  constructor(public appservice: AppService) {
    this.textinput = "";
  }

  ngOnInit() {}

  addComponent(name: string) {
    this.appservice.addCommand(new AddcommandComponent(this.nameArr, name));
    this.textinput = "";
    this.bEnableUndobtn = true;
  }

  removeComponent(index: number) {
    this.appservice.removeCommand(
      new RemovecommandComponent(this.nameArr, index)
    );
    this.bEnableUndobtn = true;
  }

  undoComponent() {
    this.appservice.undoCommand();
    this.bEnableUndobtn = false;
  }

  redoComponent() {
    this.appservice.redoCommand();
  }
}
