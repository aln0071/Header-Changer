chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.type === 'change_header') {
      document.title = msg.value || "";
    } else if(msg.type === 'get_header') {
      sendResponse("hello world");
    }
});