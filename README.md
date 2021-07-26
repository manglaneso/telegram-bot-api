# telegram-bot-api
Telegram Bot API client library for Google Apps Script.

It implements basic functionality (send message/animation/gif/video/audio...) 
but lacks a lot of Telegram Bot API methods since I only
ever needed some methods. PRs are welcome :)

The codebase of this project has a long history. It has been working on some of
 my personal projects for years, but never got time/courage to create a Library.

## Use

Go to Resources -> Libraries in the Script menus, 
paste in `1doJWr3Q1v2WZamAvcT2_xr6p12wNvheF403cXdYhTbTxu6GMvWkqwarn`,
and add in TelegramBotApi.

## TODO
- Implement Github CI
- Reformat code to use all options of currently existing methods
- Implement more Telegram Bot API methods

### Implemented methods

|     Method    | Implemented   |
| ------------- | ------------- |
|  getUpdates  |  ❌  |
|  setWebhook  |  ✅  |
|  deleteWebhook  |  ✅  |
|  getMe  |  ❌  |
|  logOut  |  ❌  |
|  close  |  ❌  |
|  sendMessage  |  ✅  |
|  forwardMessage  |  ❌  |
|  copyMessage  |  ❌  |
|  sendPhoto  |  ✅  |
|  sendAudio  |  ✅  |
|  sendDocument  |  ✅  |
|  sendVideo  |  ✅  |
|  sendAnimation  |  ✅  |
|  sendVoice  |  ✅  |
|  sendVideoNote  |  ❌  |
|  sendMediaGroup  |  ❌  |
|  sendLocation  |  ✅  |
|  editMessageLiveLocation  |  ❌  |
|  stopMessageLiveLocation  |  ❌  |
|  sendVenue  |  ❌  |
|  sendContact  |  ❌  |
|  sendPoll  |  ❌  |
|  sendDice  |  ❌  |
|  sendChatAction  |  ❌  |
|  getUserProfilePhotos  |  ❌  |
|  getFile  |  ✅  |
|  banChatMember  |  ❌  |
|  unbanChatMember  |  ❌  |
|  restrictChatMember  |  ❌  |
|  promoteChatMember  |  ❌  |
|  setChatAdministratorCustomTitle  |  ❌  |
|  setChatPermissions  |  ❌  |
|  exportChatInviteLink  |  ❌  |
|  createChatInviteLink  |  ❌  |
|  editChatInviteLink  |  ❌  |
|  revokeChatInviteLink  |  ❌  |
|  setChatPhoto  |  ❌  |
|  deleteChatPhoto  |  ❌  |
|  setChatTitle  |  ❌  |
|  setChatDescription  |  ❌  |
|  pinChatMessage  |  ❌  |
|  unpinChatMessage  |  ❌  |
|  unpinAllChatMessages  |  ❌  |
|  leaveChat  |  ❌  |
|  getChat  |  ✅  |
|  getChatAdministrators  |  ❌  |
|  getChatMemberCount  |  ❌  |
|  getChatMember  |  ❌  |
|  setChatStickerSet  |  ❌  |
|  deleteChatStickerSet  |  ❌  |
|  answerCallbackQuery  |  ❌  |
|  setMyCommands  |  ❌  |
|  deleteMyCommands  |  ❌  |
|  getMyCommands  |  ❌  |
|  setMyCommands  |  ❌  |
|  editMessageText  |  ❌  |
|  editMessageCaption  |  ❌  |
|  editMessageMedia  |  ❌  |
|  editMessageReplyMarkup  |  ❌  |
|  stopPoll  |  ❌  |
|  deleteMessage  |  ❌  |
|  sendSticker  |  ❌  |
|  getStickerSet  |  ❌  |
|  uploadStickerFile  |  ❌  |
|  createNewStickerSet  |  ❌  |
|  addStickerToSet  |  ❌  |
|  setStickerPositionInSet  |  ❌  |
|  setStickerSetThumb  |  ❌  |
|  answerInlineQuery  |  ✅  |
|  sendInvoice  |  ❌  |
|  answerShippingQuery  |  ❌  |
|  answerPreCheckoutQuery  |  ❌  |
|  setPassportDataErrors  |  ❌  |
|  sendGame  |  ❌  |
|  setGameScore  |  ❌  |
|  getGameHighScores  |  ❌  |


All methods can be checked on (this link)[https://core.telegram.org/bots/api].