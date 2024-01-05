const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");

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

  await page.click(
    "form[id='idPasswordInputForm'] div.columnBlock02.mod_column03.cf > div.columnBlock.mt46.ml15 > a"
  );
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

      //imgUpload
      const imageBuffer = fs.readFileSync("./img/voice01.png");
      console.log("imageBuffer: ", imageBuffer);
      const base64Image = imageBuffer.toString('base64');
      console.log("base64Image: ", base64Image);
      const dataUrl = `data:image/jpeg;base64,${base64Image}`;
      console.log("dataUrl: ", dataUrl);
      await page.evaluate((dataUrl) => {
        const imgElement = document.getElementById('FRONT_IMG_ID_IMG');
        imgElement.src = dataUrl;
        console.log("image uploadd success");
      }, dataUrl);

      await page.select(
        'select[name="frmStyleEditStylistCommentDto.stylistId"]',
        "T000848296"
      );
      console.log("select option ok");

      await page.click(
        'td.td_input_normal_color > table > tbody > tr > td > label > input[value="MC01"]'
      );
      console.log("input[value='MC01']: click");
      await page.click(
        'td.td_input_normal_color > table > tbody > tr > td > label > input[value="MC02"]'
      );
      console.log("input[value='MC02']: click");
      await page.click(
        'td.td_input_normal_color > table > tbody > tr > td > label > input[value="MC03"]'
      );
      console.log("input[value='MC03']: click");
      await page.click(
        'table.table_edit_store > tbody > tr > td.td_input_normal_color > table > tbody > tr > td > label > input[value="recommendHairAmountFlg01"]'
      );
      console.log("input[bottom-1]");

      await page.click(
        'table.table_edit_store > tbody > tr > td.td_input_normal_color > table > tbody > tr > td > label > input[value="recommendHairAmountFlg02"]'
      );
      console.log("input[bottom-2]");

      await page.click(
        'table.table_edit_store > tbody > tr > td.td_input_normal_color > table > tbody > tr > td > label > input[value="recommendHairAmountFlg03"]'
      );
      console.log("input[bottom-3]");
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
