import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @HostBinding('class') className = '';

    constructor(private overlay: OverlayContainer) {}

    handleDarkMode(val: boolean) {
        if (val) {
            this.className = 'darkMode';
            this.overlay.getContainerElement().classList.add(this.className);
        } else {
            this.overlay.getContainerElement().classList.remove(this.className);
            this.className = '';
        }
    }
}
