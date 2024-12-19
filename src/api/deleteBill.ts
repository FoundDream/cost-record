import { deleteRequest } from '../utils/api'
import { bill } from './getBillsInfo'

interface deleteBillArgs {
  billsId: string
  billId: string
}

interface ResponseDeleteBillInfo {
  bill: bill
}

export const deleteBill = ({ billsId, billId }: deleteBillArgs) => {
  return deleteRequest<ResponseDeleteBillInfo>(`/api/v1/bills/${billsId}/${billId}`)
}
