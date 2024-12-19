import { postRequest } from '../utils/api'
import { bill } from './getBillsInfo'

interface addBillArgs {
  billsId: string
  amount: number
  type: number
  category: string
  description: string
}

interface ResponseAddBillInfo {
  bill: bill
}

export const addBill = ({ billsId, amount, type, category, description }: addBillArgs) => {
  return postRequest<ResponseAddBillInfo>(`/api/v1/bills/${billsId}`, {
    amount,
    type,
    category,
    description,
  })
}
