
// A function to use as callback
//function doStuffWithDom(domContent) {
//    console.log('I received the following DOM content:\n' + domContent);
//}

chrome.browserAction.onClicked.addListener(function(tab) {
    //let title = document.getElementsByTagName("title")[0].innerText;
	//alert(title);
	//chrome.tabs.sendMessage(tab.id, {text: 'change_header'}, doStuffWithDom);
	chrome.tabs.sendMessage(tab.id, {type: 'change_header'});
});
