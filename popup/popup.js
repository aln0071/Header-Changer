// chrome.runtime.onMessage.addListener(function (msg, sender) {
//     if (msg.text === 'change_header') {
//         console.log("hello");
//     }
// });

// console.log("world");

const change = document.getElementById('change');
const title = document.getElementById('title');
change.addEventListener('click', (event)=>{
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, {type: 'change_header', value: title.value})
    })
})