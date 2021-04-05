chrome.browserAction.onClicked.addListener(function(Tab){
  var newURL = chrome.runtime.openOptionsPage();
  chrome.tabs.create({ url: options.html });
});