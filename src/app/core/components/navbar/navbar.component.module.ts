import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from 'src/app/app-routing,module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
        MatIconModule,
        MatTooltipModule,
    ],
    exports: [NavbarComponent],
})
export class NavbarModule {}
