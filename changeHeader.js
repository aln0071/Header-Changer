// Listen for messages
//chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
chrome.runtime.onMessage.addListener(function (msg, sender) {
    // If the received message has the expected format...
    if (msg.type === 'change_header') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        //sendResponse(document.all[0].outerHTML);
      document.title = msg.value || "react js";
    }
});