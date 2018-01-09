import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComCar  }      from './products/car/car-main.component';
import { ComParent }    from './products/parent-child/parent.component';
import { ComBike }      from './products/bike/bike-main.component';
import { ComUI }        from './products/ui/ui.component';
import { ComMessage }   from './products/webSocket/message.component';
import { ComBoat }      from './services/boat/boat.component';
import { ComEmployee }  from './services/employee/employee.component';
import { ComCustomer }  from './services/customer/customer.component';


const mainRoutes: Routes = [
    { path: 'tabBike',  component: ComBike },
    { path: 'tabCar',   component: ComCar },
    { path: 'tabBoat',  component: ComBoat },
    { path: 'tabParentChild',   component: ComParent },
    { path: 'tabUI', component: ComUI },
    { path: 'tabWebSocket',  component: ComMessage },
    { path: 'tabEmpApi',  component: ComEmployee },
    { path: 'tabCustApi', component: ComCustomer },
    { path: '',   redirectTo: 'product4', pathMatch: 'full' },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
