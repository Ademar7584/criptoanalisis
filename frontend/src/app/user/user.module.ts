import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule} from './user-routing.module';
import { ThemeModule } from '../@theme/theme.module';
//import { newsAllComponent } from '../@theme/components/newsAll/newsAll.component';
import { MomentModule } from 'angular2-moment';
import { EditComponent } from './edit/edit.component';
import { NewsModule } from '../pages/news/news.module';
import { SignalsModule } from '../pages/signals/signals.module';

const USER_COMPONENTS = [
    UserComponent,
    ProfileComponent,
    EditComponent,
];

@NgModule({
    imports: [
        UserRoutingModule,
        ThemeModule,
        MomentModule,
        NewsModule,
        SignalsModule
    ],
    exports: [
        //newsAllComponent
    ],
    declarations: [
        ...USER_COMPONENTS,
        //newsAllComponent
    ],
    providers: [],
})
export class UserModule { }
