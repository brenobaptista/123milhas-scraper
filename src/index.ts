import { dateTypes, getDeals } from './scraper'

const from = 'FOR'
const to = 'CWB'
const adults = 2
// format: dd-mm-yyyy
const departDates = [
  '01-05-2023',
  '02-05-2023',
  '03-05-2023',
  '04-05-2023',
  '05-05-2023'
]
const returnDates = [
  '27-05-2023',
  '28-05-2023',
  '29-05-2023',
  '30-05-2023',
  '31-05-2023'
]

getDeals(from, to, departDates, adults, dateTypes.DEPART)
getDeals(to, from, returnDates, adults, dateTypes.RETURN)
