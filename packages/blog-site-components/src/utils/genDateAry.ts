import dayjs from 'dayjs/esm'
import isoWeek from 'dayjs/esm/plugin/isoWeek'
import weekOfYear from 'dayjs/esm/plugin/weekOfYear'

dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

export type WeekVal = string | undefined;

export type WeekAry = WeekVal[]

export type DepWeekAry = WeekAry[]

export function genDateAry(start: string, end: string) {
  const startTime = dayjs(start).startOf('isoWeek')
  const endTime = dayjs(end).endOf('isoWeek')
  const result: DepWeekAry = []
  if (startTime.unix() <= endTime.unix()) {
    let currentTime = startTime
    if (currentTime.isoWeekday() - 1 !== 0) {
      result.push(Array.from({ length: 7 }) as WeekAry)
    }
    while (currentTime.unix() <= endTime.unix()) {
      const weekNum = currentTime.isoWeekday() - 1
      if (weekNum === 0) {
        result.push(Array.from({ length: 7 }) as WeekAry)
      }
      const curWeek = result[result.length - 1]
      curWeek[weekNum] = currentTime.format('YYYY-MM-DD')
      currentTime = currentTime.add(1, 'day')
    }
  }
  return result
}
