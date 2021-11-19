import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../services/BreadCrumbService/app.breadcrumb.service';

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent {
    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Typography', routerLink: ['/utilities/typography'] }
        ]);
    }
}
