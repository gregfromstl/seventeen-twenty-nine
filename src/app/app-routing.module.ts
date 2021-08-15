import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: '', component: CardListComponent, pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
  { path: 'task/:task', component: TaskComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
