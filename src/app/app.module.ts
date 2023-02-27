import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmounttopayComponent } from './amounttopay/amounttopay.component';
import { MakeapaymentComponent } from './makeapayment/makeapayment.component';
import { OtpscreenComponent } from './otpscreen/otpscreen.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './common/button/button.component';
import { BtncancelComponent } from './common/btncancel/btncancel.component';
import { DatePipe } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AmounttopayComponent,
    MakeapaymentComponent,
    OtpscreenComponent,
    ConfirmationComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    BtncancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    OverlayModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
