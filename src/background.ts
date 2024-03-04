chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.runtime.getURL('localGPT.html')}, function(tab) {
    });
  });