

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon.png',
        title: 'Extension Installed',
        message: 'My Extension was successfully installed.'
    });
});
