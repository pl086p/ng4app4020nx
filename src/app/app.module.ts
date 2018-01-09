import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material';
import { TabsModule }    from 'ngx-bootstrap';

// my modules with this application
import { AppRoutingModule }  from './app.routing.module';
import { MySharedModule }    from './my-shared/my-shared.module';

// Components
import { AppComponent }      from './app.component';
import { ComBike }           from './products/bike/bike-main.component';
import { BikeInfoComponent } from './products/bike/bike-info.component';
import { ComParent }         from './products/parent-child/parent.component';
import { ComChild }          from './products/parent-child/child.component';
import { ComCar }            from './products/car/car-main.component';
import { ComCarList }        from './products/car/car-list.component';
import { ComCarDetail }      from './products/car/car-detail.component';
import { ComUI }                    from './products/ui/ui.component';
import { BootstrapComponent }       from './products/ui/bootstrap.component';
import { NgxTabComponent }          from './products/ui/ngx-tab.component';
import { OriginBootstrapComponent } from './products/ui/origin-bootstrap.component';
import { ComMessage }               from './products/webSocket/message.component';
import { ComBoat }                  from './services/boat/boat.component';
import { ComBoatDetail}             from './services/boat/boat-detail.component';
import { ComEmployee }              from './services/employee/employee.component';
import { EmployeeDetailComponent}   from './services/employee/employee-detail.component';
import { ComCustomer }              from './services/customer/customer.component';
import { CustomerDetailComponent}   from './services/customer/customer-detail.component';



@NgModule({
    declarations: [
        AppComponent,
        ComBoat, ComBoatDetail,
        ComBike, BikeInfoComponent,
        ComCar, ComCarList, ComCarDetail, 
        ComParent, ComChild, 
        ComUI, BootstrapComponent, NgxTabComponent, OriginBootstrapComponent, 
        ComMessage,
        ComEmployee, EmployeeDetailComponent,        
        ComCustomer, CustomerDetailComponent
        //InMemoryWebApiModule,
        //InMemoryDataService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,       
        MatTabsModule,
        TabsModule.forRoot(),
        AppRoutingModule,
        MySharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
