import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from 'src/app/app-routing,module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
        MatIconModule,
    ],
    exports: [NavbarComponent],
})
export class NavbarModule {}
