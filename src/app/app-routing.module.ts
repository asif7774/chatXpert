import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReloginComponent } from './common-component/relogin/relogin.component';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { showHeader: true, showSidebar: false, showFooter: true,  compactLayout: false }
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
    data: { showHeader: true, showSidebar: false, showFooter: false,  compactLayout: false }
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule),
    data: { showHeader: true, showSidebar: true, showFooter: false,  compactLayout: false }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { showHeader: true, showSidebar: true, showFooter: false,  compactLayout: false }
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule),
    data: { showHeader: true, showSidebar: true, showFooter: false,  compactLayout: false }
  },
  {
    path: 'experts',
    loadChildren: () => import('./expert/expert.module').then(m => m.ExpertModule),
    data: { showHeader: true, showSidebar: true, showFooter: false,  compactLayout: false }
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then(m => m.CallsModule),
    data: { showHeader: true, showSidebar: true, showFooter: false,  compactLayout: false }
  },
  { 
    path: 'relogin', 
    component: ReloginComponent,
    data: { showHeader: true, showSidebar: false, showFooter: false,  compactLayout: false }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
