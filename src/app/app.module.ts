import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './core/components/navbar/navbar.component.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing,module';

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [BrowserModule, NavbarModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
