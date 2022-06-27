const puppeteer = require("puppeteer");

const teamSearch = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto("https://www.basketball-reference.com/teams/DET/");

  const temp = await page.evaluate(
    (el) => el.textContent,
    "#meta > div:nth-child(2) > h1 > span:nth-child(1)"
  );

  console.log(temp);
};

teamSearch();
