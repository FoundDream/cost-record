import { getRequest } from "../utils/api";

export interface bill {
  _id: string;
  amount: number;
  type: 0 | 1;
  category: string;
  description?: string;
  date: Date;
  icon: string;
  createdBy: string;
}
interface ResponseBillsInfo {
  bills: [bill];
}

export const getBillsInfo = () => {
  return getRequest<ResponseBillsInfo>("/api/v1/bills");
};
