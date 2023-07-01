// Execute the content script when the button is clicked
document.getElementById("removeButton").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    console.log(tab)
    chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        files: ['content.js'],
    });
});
