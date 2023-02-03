import { ChangeDetectionStrategy, Component, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Output('darkMode') darkMode = new BehaviorSubject(false);

    toggleDarkMode(): void {
        this.darkMode.next(!this.darkMode.value);
    }
}
