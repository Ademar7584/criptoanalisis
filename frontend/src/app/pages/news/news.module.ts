import { NgModule } from '@angular/core';

import { ThemeModule } from './../../@theme/theme.module';
import { NewsRoutingModule, routedComponents } from './news-routing.module';
import { FormsModule } from '@angular/forms';

import { newsListComponent } from './list/newsList.component';
import { newsViewComponent } from './view/newsView.component';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    ThemeModule,
    NewsRoutingModule,
    FormsModule
    
  ],
  exports:[
    newsListComponent,
    newsViewComponent,
  ],
  declarations:[
    ...routedComponents,
    newsListComponent,
    newsViewComponent
  ],
  providers:[NewsService]
})

export class NewsModule {}
