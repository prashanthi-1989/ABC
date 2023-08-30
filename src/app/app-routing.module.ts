import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './Components/component-a/component-a.component';
import { ComponentBComponent } from './Components/component-b/component-b.component';
import { ComponentCComponent } from './Components/component-c/component-c.component';
import { ComponentDComponent } from './Components/component-d/component-d.component';
import { DynamicComponent } from './Components/dynamic/dynamic.component';

const routes: Routes = [
  {
    path: 'A', component: ComponentAComponent
  },
  {
    path: 'B', component: ComponentBComponent
  },
  {
    path: 'C', component: ComponentCComponent
  },
  {
    path: 'D', component: ComponentDComponent
  },
  {
    path: 'Dynamic', component: DynamicComponent
  },
  {
    path: '', component: ComponentAComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
