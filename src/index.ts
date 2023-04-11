import { scrape } from './scraper'

const from = 'FOR'
const to = 'CWB'
const adults = 2
// format: dd-mm-yyyy
const departDates = ['01-05-2023', '02-05-2023', '03-05-2023']
const returnDates = ['30-05-2023', '31-05-2023']

departDates.map(date => {
  scrape(from, to, date, adults)
})

returnDates.map(date => {
  scrape(to, from, date, adults)
})
