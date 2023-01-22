import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing,module';
import { NavbarModule } from './core/components/navbar/navbar.component.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NavbarModule],
    providers: [],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
