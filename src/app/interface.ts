export interface billType {
  accountNo: number;
  amount: number;
  accountList: accountType[];
  paymentType: string;
  cardNo: number;
  fee: string;
  recipient: string;
  mobile: number;
  confirmation: number;
  userLogo: string;
  tickImage: string;
  bankLogo: string;
  enrolledAs?: string;
  dueDate?:string;
}
export interface accountType {
  accountType: string;
  balance: string;
}
