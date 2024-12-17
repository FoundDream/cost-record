import { postRequest } from "../utils/api";
import { bill } from "./getBillsInfo";

interface addBillArgs {
  billId: string;
  amount: number;
  type: number;
  category: string;
  description: string;
}

interface ResponseAddBillInfo {
  bill: bill;
}

export const addBill = ({
  billId,
  amount,
  type,
  category,
  description,
}: addBillArgs) => {
  return postRequest<ResponseAddBillInfo>(`/api/v1/bills/${billId}`, {
    amount,
    type,
    category,
    description,
  });
};
