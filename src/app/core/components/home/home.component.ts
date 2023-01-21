import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ICON_NAMES, ICON_EXT, ICON_PATH } from 'src/app/core/constants/icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, MatTooltipModule],
})
export class HomeComponent {
    iconExt = ICON_EXT;
    iconPath = ICON_PATH;
    iconNames = ICON_NAMES;
}
