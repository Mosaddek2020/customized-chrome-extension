console.log('background on');

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
  console.log('buton clicked');
  var msg = {
    message: "user clicked!"
  }

  chrome.tabs.sendMessage(tab.id, msg);
}