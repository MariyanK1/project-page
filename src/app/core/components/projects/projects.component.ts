import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { PROJECT_DATA } from '../../constants/projects-data';
import { CommonModule } from '@angular/common';
import { ICON_EXT, ICON_PATH } from '../../constants/icons';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatCardModule,
        MatProgressBarModule,
        MatDividerModule,
        MatButtonModule,
        MatGridListModule,
        CommonModule,
        MatTooltipModule,
    ],
})
export class ProjectsComponent {
    public projectsData = PROJECT_DATA;
    public iconPath = ICON_PATH;
    public iconExt = ICON_EXT;
}
