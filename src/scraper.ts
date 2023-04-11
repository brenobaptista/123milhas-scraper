import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer.use(StealthPlugin())
import { executablePath } from 'puppeteer'
import fs from 'fs/promises'

const buildUrl = (from: string, to: string, date: string, adults: number) => {
  const children = 0
  const babies = 0
  const classType = 3
  const isLoyalty = 0

  const url =
    `https://123milhas.com/v2/busca?` +
    `de=${from}&` +
    `para=${to}&` +
    `adultos=${adults}&` +
    `criancas=${children}&` +
    `bebes=${babies}&` +
    `ida=${date}&` +
    `classe=${classType}&` +
    `is_loyalty=${isLoyalty}`

  return url
}

export const scrape = async (
  from: string,
  to: string,
  date: string,
  adults: number
) => {
  try {
    const url = buildUrl(from, to, date, adults)

    const browser = await puppeteer.launch({
      headless: false,
      executablePath: executablePath()
    })
    const page = await browser.newPage()
    await page.goto(url)

    const titleNode = await page.waitForSelector('text/Menor preço', {
      timeout: 0
    })
    if (titleNode) {
      const price = await titleNode.evaluate(el =>
        el.nextElementSibling.textContent.trim()
      )
      const time = await titleNode.evaluate(el =>
        el.nextElementSibling.nextElementSibling.textContent.trim()
      )

      console.log('Flight for date', date)
      console.log(price)
      console.log(time, '\n')

      await fs.appendFile(
        './output.txt',
        date + '\n' + price + '\n' + time + '\n\n'
      )
    }

    await browser.close()
  } catch (error) {
    console.error(error)
  }
}
