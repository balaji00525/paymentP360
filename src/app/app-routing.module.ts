import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountToPayComponent} from './screen/amount-to-pay/amount-to-pay.component';
import { ConfirmationComponent } from './screen/confirmation/confirmation.component';
import { MakeAPaymentComponent } from './screen/make-a-payment/make-a-payment.component';
import { OtpScreenComponent } from './screen/otp-screen/otp-screen.component';
import { HomeComponent } from './screen/home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'amountToPay' , component:AmountToPayComponent},
  {path:'makeapayment',  component:MakeAPaymentComponent},
  {path:'otp', redirectTo:'/otpscreen', pathMatch:'full'},
  {path:'otpscreen',component:OtpScreenComponent},
  {path:'confirmation', redirectTo:'/confirmation', pathMatch:'full'},
  {path:'makeapayment', redirectTo:'/makepayment', pathMatch:'full'},
  {path:'confirmation', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
