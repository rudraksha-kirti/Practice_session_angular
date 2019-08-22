import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { UtilsModule } from './utils/utils.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectivesModule } from './directives/directives.module';
import {LifecycleModule} from './lifecycle/lifecycle.module'
@NgModule(
    {
        declarations: [ /* components, directives, filters */
            AppComponent, AboutComponent, PageNotFoundComponent
        ],
        imports: [
            BrowserModule, /* only App module will import Browser module (built-in directives etc. are here) */
            EventsModule,
            AppRoutingModule,
            UtilsModule,
            DirectivesModule,
            LifecycleModule
        ],
        providers: [], /* services */
        bootstrap: [AppComponent]
    }
)
export class AppModule { }
