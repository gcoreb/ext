var count = 0;
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'loading') {

chrome.tabs.query({active: true,'lastFocusedWindow': true}, function(tabs) {
 var url = tabs[0].url;
    if (url == "https://www.facebook.com/"||url=="https://www.facebook.com/?_rdr"){
        count++;
    chrome.tabs.sendMessage(tabs[0].id, {count: count}, function(response) {
      
});
        
  };
});
  };
});
var clear = function(){
count = 0;
   
};
