export interface billType{
    accountNo:number;
    amount: number;
    accountList: accountType[],
    paymentType:string;
    cardNo:number;
    fee:string;
    recipient:string;
    mobile: number;
    confirmation:number;
    imagePath: string;
    image:string;
    enrolledAs:string;
}
export interface accountType {
    accountType: string;
    balance: string;
  }