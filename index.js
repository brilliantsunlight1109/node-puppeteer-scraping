const puppeteer = require("puppeteer");
const axios = require("axios");
// let style = [];
// let values = [];
// let count = 0;

const express = require("express");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto("https://salonboard.com/login/");

  await page.type("input.w240", "CD66356");

  await page.type("input.loginPwInput", "bridge123!!");

  await page.click("div.columnBlock.mt46.ml15 > a");

  console.log("button click");

  const handleUrlChange = async (newUrl) => {
    if (newUrl === "https://salonboard.com/CLP/bt/top/") {
      console.log("URL search:");
      await page.goto("https://salonboard.com/CNB/draft/styleEdit/");
      //   async () => {
      // https://os3-318-48579.vs.sakura.ne.jp/api/style
      // const response = await axios.get("https://os3-318-48579.vs.sakura.ne.jp/api/style");
      // const radioInput = await page.$('#styleRegistFormat0');
      console.log("found");
      await page.click("#styleRegistFormat1");
      console.log("radio button ok");
      // await page.click("input.translate1");
      // console.log("checkbox button ok");
      // await page.click("#agrFlgStyleImgId", (checkbox) => {
      //   checkbox.checked = true;
      //   console.log("checked true");
      // });

      await page.select(
        'select[name="frmStyleEditStylistCommentDto.stylistId"]',
        "T000848296"
      );
      console.log("select option ok");

      // await page.click('input[id="agrFlgStyleImgId"]');
      // console.log("input[1]: click");

      await page.click('input[value="MC01"]');
      console.log("input[value]: click");
      //   }
    }
  };

  // Attach the event listener to 'framenavigated' event
  page.on("framenavigated", async (frame) => {
    const newUrl = await frame.url();
    console.log("newUrl: ", newUrl);
    await handleUrlChange(newUrl);
  });
})();

// function fetchData() {
//     axios.get('https://os3-318-48579.vs.sakura.ne.jp/api/style')
//   .then(response => {
//     // Handle the response data
//     // console.log("response.data: ", response.data);
//     style = response.data;
//     values = style.map((item, index) => {
//         // console.log(`Item at index ${index}:`, item);
//         console.log("item[index]: ", item);
//         return item

//     });
//     // console.log("values[0]: ", values[0]);
//     // console.log("values[1]: ", values[1]);
//     // console.log("values[2]: ", values[2]);
//     setTimeout(fetchData, 86400000);
//     count++;
//     console.log("count: ", count);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });
// }

// fetchData();
