// chrome.runtime.onMessage.addListener(function (msg, sender) {
//     if (msg.text === 'change_header') {
//         console.log("hello");
//     }
// });

// console.log("world");

function changeHeader(newTitle) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, {type: 'change_header', value: newTitle})
    })
}

const change = document.getElementById('change');
const title = document.getElementById('title');
change.addEventListener('click', (event)=>{
    changeHeader(title.value);
})

window.onload = (event) => {
    changeHeader('react js');
}