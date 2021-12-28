import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AppBreadcrumbService } from 'src/app/services/BreadCrumbService/app.breadcrumb.service';
import { AppMainComponent } from '../main/app.main.component';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    home: MenuItem;

    search: string;

    constructor(public breadcrumbService: AppBreadcrumbService, public appMain: AppMainComponent) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
