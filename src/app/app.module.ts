import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './core/components/navbar/navbar.component.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NavbarModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
