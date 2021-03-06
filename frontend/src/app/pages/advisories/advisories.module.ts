import { NgModule } from '@angular/core';
import { ThemeModule } from './../../@theme/theme.module';
import { AdvisoryRoutingModule, routedComponents } from './Advisories-routing.module';
import { AdvisoriesService } from './advisories.service';
import { scheduleComponent } from '../../@theme/components';

//import { userDesignComponent } from '../../@theme/components';


@NgModule({
  imports: [
      ThemeModule,
      AdvisoryRoutingModule
  ],
  declarations:[
      ...routedComponents,
      
 //     userDesignComponent
  ],
  exports:[]
,  providers:[AdvisoriesService]
})
export class AdvisoryModule {}