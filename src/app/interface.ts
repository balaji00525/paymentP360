export interface IBillType {
  accountNo: number;
  amount: number;
  accountList: IAccountType[];
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
export interface IAccountType {
  accountType: string;
  balance: string;
}
