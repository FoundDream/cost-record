// 引入 dayjs
import dayjs from 'dayjs'
// 如果需要格式化星期和月份名称，确保引入了相应的插件
import 'dayjs/locale/en' // 引入英文语言包，以便正确显示星期和月份名称

// 格式化日期
export const formattedDate = (date: string | undefined) => {
  return dayjs(date).locale('en').format('dddd D MMMM YYYY HH:mm')
}
