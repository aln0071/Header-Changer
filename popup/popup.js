function changeHeader(newTitle) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, {type: 'change_header', value: newTitle})
    })
}

const title = document.getElementById('title');
title.addEventListener('keyup', (event)=>{
    changeHeader(title.value);
})

window.onload = (event) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        title.value = tabs[0].title;
        title.focus();
        title.select();
    })
}