import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './Components/component-a/component-a.component';
import { ComponentBComponent } from './Components/component-b/component-b.component';
import { ComponentCComponent } from './Components/component-c/component-c.component';
import { ComponentDComponent } from './Components/component-d/component-d.component';
import { TestService } from './Services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicComponent } from './Components/dynamic/dynamic.component';
import { FormsModule } from '@angular/forms';
import { PopupAComponent } from './Components/popup-a/popup-a.component';
import { PopupBComponent } from './Components/popup-b/popup-b.component';
import { PopupCComponent } from './Components/popup-c/popup-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent,
    DynamicComponent,
    PopupAComponent,
    PopupBComponent,
    PopupCComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
