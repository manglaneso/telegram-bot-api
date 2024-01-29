const apiTelegramBotBaseUrl = 'https://api.telegram.org/bot';

function client(telegramApiToken) {
  return new TelegramBotApi_(telegramApiToken)
}

class TelegramBotApi_ {
  constructor(telegramApiToken) {
    this.telegramApiToken_ = telegramApiToken;
  }

  /**
   * Gets info about current Telegram API Webhook
   *
   * @return {object} JSON search result resource returned by Telegram API
   */
  getWebhookInfo() {
    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/getWebhookInfo`;
    return sendRequest(url);
  }

  /**
   * Sets a new Webkhook to receive updates from Telegram API
   *
   * @return {object} JSON search result resource returned by Telegram API
   */
  setWebhook(webhookUrl, telegramApiAuthToken, maxConnections, allowedUpdates) {
    
    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/setWebhook?url=${webhookUrl}${telegramApiAuthToken !== null ? `?token=${telegramApiAuthToken}` : ``}`;

    let payload = {
      'method': 'setWebhook',
      'maxConnections': maxConnections,
      'allowed_updates': allowedUpdates
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  /**
   * Deletes current Webkhook to stop receiving updates from Telegram API
   *
   * @return {object} JSON search result resource returned by Telegram API
   */
  deleteWebhook(dropPendingUpdates) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/deleteWebhook`;
    
    let payload = {
      'method': 'deleteWebhook',
      'drop_pending_updates': dropPendingUpdates
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  /**
   * Sends text message to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {string} message Message to send to chat
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendMessage(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;
    
    let payload = {
      'method': 'sendMessage',
      'chat_id': params.chatId,
      'text': params.text,
      'message_thread_id': params.messageThreadId,
      'parse_mode': params.parseMode,
      'entities': JSON.stringify(params.entities),
      'link_preview_options': JSON.stringify(params.linkPreviewOptions),
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }
    
    let data = {
      'method': 'POST',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  forwardMessage(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;
    
    let payload = {
      'method': 'forwardMessage',
      'chat_id': params.chatId,
      'from_chat_id': params.fromChatId,
      'message_id': params.messageId,
      'message_thread_id': params.messageThreadId,
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  /**
   * Sends photo to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {File} photo Google Drive File object of the photo to send
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   * @param {string} caption Text to send as caption of the photo
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendPhoto(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'sendPhoto',
      'chat_id': params.chatId,
      'photo': params.photo,
      'message_thread_id': params.messageThreadId,
      'caption': params.caption,
      'parse_mode': params.parseMode,
      'caption_entities': JSON.stringify(params.captionEntitites),
      'has_spoiler': params.hasSpoiler,
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }
    
    let data = {
      'method': 'POST',
      'payload': payload
    }

    return sendRequest(url, data);  
  }

  /**
   * Sends document to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {Blob} document Google Drive File object of the document to send
   * @param {string} name Name of the document to send
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendDocument(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'sendDocument',
      'chat_id': params.chatId,
      'document': params.document,
      'message_thread_id': params.messageThreadId,
      'thumbnail': params.thumbnail,
      'caption': params.caption,
      'parse_mode': params.parseMode,
      'caption_entities': JSON.stringify(params.captionEntitites),
      'disable_content_type_detection': params.disableContentTypeDetection,
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }

    return sendRequest(url, data);
  }

  /**
   * Sends animation (GIF) to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {Blob} animation Google Drive File object of the animation to send
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendAnimation(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'sendAnimation',
      'chat_id': params.chatId,
      'animation': params.animation,
      'message_thread_id': params.messageThreadId,
      'duration': params.duration,
      'width': params.width,
      'height': params.height,
      'thumbnail': params.thumbnail,
      'caption': params.caption,
      'parse_mode': params.parseMode,
      'caption_entities': JSON.stringify(params.captionEntitites),
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }

    return sendRequest(url, data);
  }

  /**
   * Sends voice file to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {Blob} voice Google Drive File object of the voice to send
   * @param {caption} Text to send as caption of the photo
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendVoice(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;
  
    let payload = {
      'method': 'sendVoice',
      'chat_id': params.chatId,
      'voice': params.voice,
      'message_thread_id': params.messageThreadId,
      'caption': params.caption,
      'parse_mode': params.parseMode,
      'caption_entities': JSON.stringify(params.captionEntitites),
      'duration': params.duration,
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }

    return sendRequest(url, data);
  }

  /**
   * Sends location to a Telegram chat represented in msg object
   *
   * @param {object} msg Telegram API message resource
   * @param {float} latitude Latitude of the location to be sent
   * @param {float} longitude Longitude of the location to be sent
   * @param {boolean} replyTo True if the message to send is a reply to the provided message
   *
   * @return {object} JSON response returned by Telegram API
   */
  sendLocation(params) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'sendLocation',
      'chat_id': params.chatId,
      'latitude': params.latitude,
      'longitude': params.longitude,
      'message_thread_id': params.messageThreadId,
      'horizontal_accuracy': params.horizontalAccuracy,
      'live_period': params.livePeriod,
      'heading': params.heading,
      'proximity_alert_radius': params.proximityAlertRadius,
      'disable_notification': params.disableNotification,
      'protect_content': params.protectContent,
      'reply_parameters': JSON.stringify(params.replyParameters),
      'reply_markup': JSON.stringify(params.replyMarkup)
    }

    let data = {
      'method': 'POST',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  /**
   * Gets a file from Telegram server
   *
   * @param {string} fileID ID of the file to get
   *
   * @return {object} JSON response returned by Telegram API
   */
  getFile(fileID) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'getFile',
      'file_id': fileID
    }
    
    let data = {
      'method': 'GET',
      'payload': payload
    }
    
    return sendRequest(url, data);
  }

  /**
   * Downloads a file from Telegram server
   *
   * @param {string} fileID ID of the file to download
   *
   * @return {blob} Blob of the downloaded file
   */
  downloadFile(fileResource) {
    let result = UrlFetchApp.fetch('https://api.telegram.org/file/bot' + this.telegramApiToken_ + '/' + fileResource['result']['file_path']);
    
    return result.getBlob();
  }

  /**
   * Gets chat information
   *
   * @param {string} chatId ID of the chat to get information of
   *
   * @return {object} JSON response returned by Telegram API
   */
  getChat(chatId) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;

    let payload = {
      'method': 'getChat',
      'chat_id': chatId
    }

    let data = {
      'method': 'GET',
      'payload': payload
    }

    return sendRequest(url, data);
  }

  /**
   * Answer to an Telegram's inline query 
   *
   * @param {object} inlineQuery Telegram API inline query resource
   * @param {array} results Array of answer results to the inline query
   * @param {number} chacheTime The maximum amount of time in seconds that the result of the inline query may be cached on the server
   *
   * @return {object} JSON response returned by Telegram API
   */
  answerInlineQuery(inlineQuery, results, cacheTime=1) {

    let url = `${apiTelegramBotBaseUrl}${this.telegramApiToken_}/`;
      
    var payload = {
      'method': 'answerInlineQuery',
      'inline_query_id': inlineQuery['id'],
      'results': JSON.stringify(results),
      'cache_time': cacheTime
    }

    var data = {
      'method': 'POST',
      'payload': payload
    }

    return sendRequest(url, data);
  }
}
