import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // 路径可能需要根据你的项目结构进行调整
import { RecentSixYearsComponent } from './recent-six-years/recent-six-years.component';
import { FashionListComponent } from './fashion-list/fashion-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fashion-list', component: FashionListComponent },
  { path: 'recent-six-years', component: RecentSixYearsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
