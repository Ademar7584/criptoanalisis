import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { HeaderTwoRoutingModule, routedComponents } from './headertwo-routing.module';

@NgModule({
  imports: [
      ThemeModule,
      HeaderTwoRoutingModule
  ],
  declarations:[
      ...routedComponents,
  ],
  providers:[]
})
export class MarketModule {}