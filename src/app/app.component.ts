import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
} from '@angular/core';
import { THEME_MODE } from './core/constants/theme-modes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @HostBinding('class') className = THEME_MODE.DARK;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.document.body.className = `mat-app-background`;
    }

    handleDarkMode(isDarkMode: boolean) {
        if (isDarkMode) {
            this.className = THEME_MODE.DARK;
            this.document.body.classList.add(this.className);
        } else {
            this.document.body.classList.remove(this.className);
            this.className = THEME_MODE.LIGHT;
        }
    }
}
