import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MaincomponentComponent } from "./maincomponent/maincomponent.component";

import { AppService } from "./app.service";

@NgModule({
  declarations: [AppComponent, MaincomponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AppService],
  bootstrap: [MaincomponentComponent]
})
export class AppModule {}
