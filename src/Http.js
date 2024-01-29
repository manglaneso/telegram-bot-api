function sendRequest(url) {
  try {
    let response = UrlFetchApp.fetch(url).getContentText();
    console.log(`Request sent to Telegram Bot API. Response was:\n${response}`);
    return JSON.parse(response);
  } catch (e) {
    console.error(`Error sending request. Error was:\n${e.stack}`);
    return null;
  }
}

function sendRequest(url, params) {
  try {
    let response = UrlFetchApp.fetch(url, params).getContentText();
    console.log(`Request sent to Telegram Bot API. Response was:\n${response}`);
    return JSON.parse(response);
  } catch (e) {
    console.error(`Error sending request. Error was:\n${e.stack}`);
    return null;
  }
}