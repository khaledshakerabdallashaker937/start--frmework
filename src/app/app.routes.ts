import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartframeworkComponent } from './startframework/startframework.component';

export const routes: Routes = [ 
   {path:'',redirectTo:'about',pathMatch:'full' },
   {path:'about',component:AboutComponent,title:'about'},
   {path:'contact',component:ContactComponent,title:'contact'},
   {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
   {path:'startframework',component:StartframeworkComponent,title:'startframework'},
   {path:'**',component:NotfoundComponent,title:'notfound'}
];

