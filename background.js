

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

// Example notification (you can trigger this based on specific events)
chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon.png', // Path to the icon
        title: 'Extension Installed',
        message: 'My Extension was successfully installed.'
    });
});
