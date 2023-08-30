import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ComponentCComponent } from '../component-c/component-c.component';
import { PopupAComponent } from '../popup-a/popup-a.component';
import { PopupBComponent } from '../popup-b/popup-b.component';
import { PopupCComponent } from '../popup-c/popup-c.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  selectedOption: string;
  // @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  constructor(
    private dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.selectedOption = "componentA";
    // this.container = null;
  }

  openPopup(): void {
    this.popupContainer.clear();
    let componentFactory;

    switch (this.selectedOption) {
      // Replace these with your actual component classes
      case 'componentA':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupAComponent);
        break;
      case 'componentB':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupBComponent);
        break;
      case 'componentC':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupCComponent);
        break;
    }

    if (componentFactory) {
      const componentRef = componentFactory.create(this.popupContainer.injector);
      // this.popupContainer.insert(componentRef.hostView);

      this.dialog.open(DialogComponent, {
        width: '400px',
        data: { componentRef }, // Pass the componentRef to the dialog
      });
    }
  }

  ngOnInit(): void {
  }


}
