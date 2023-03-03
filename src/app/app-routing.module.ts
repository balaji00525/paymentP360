import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountToPayComponent} from './amounttopay/amount-to-pay.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MakeapaymentComponent } from './makeapayment/makeapayment.component';
import { OtpscreenComponent } from './otpscreen/otpscreen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'amountToPay' , component:AmountToPayComponent},
  {path:'makeapayment',  component:MakeapaymentComponent},
  {path:'otp', redirectTo:'/otpscreen', pathMatch:'full'},
  {path:'otpscreen',component:OtpscreenComponent},
  {path:'confirmation', redirectTo:'/confirmation', pathMatch:'full'},
  {path:'makeapayment', redirectTo:'/makepayment', pathMatch:'full'},
  {path:'confirmation', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
