import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmounttopayComponent } from './amounttopay/amounttopay.component';
import { MakeapaymentComponent } from './makeapayment/makeapayment.component';
import { OtpscreenComponent } from './otpscreen/otpscreen.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { VerifyComponent } from './common/verify/verify.component';
import { CancelComponent } from './common/cancel/cancel.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AmounttopayComponent,
    MakeapaymentComponent,
    OtpscreenComponent,
    ConfirmationComponent,
    HeaderComponent,
    VerifyComponent,
    CancelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
