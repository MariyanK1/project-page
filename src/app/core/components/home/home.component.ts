import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

import { ICON_NAMES, ICON_EXT, ICON_PATH } from 'src/app/core/constants/icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, MatTooltipModule, MatDividerModule],
})
export class HomeComponent {
    public iconExt = ICON_EXT;
    public iconPath = ICON_PATH;
    public iconNames = ICON_NAMES;
}
