import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './core/constants/routes';

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
