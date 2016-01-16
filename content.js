chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      while(true){
   var x = prompt("GOD! stop using facebook you idiot! it's your "+ request.count +" time using it! Type the following: I'll stop now and close the computer and get to work.");
      if(x=="I'll stop now and close the computer and get to work."){
          alert('Great!');
      window.location.replace('https://www.google.com');
          break;
      }
      else{
          alert('Very bad! You entered it wrong!');
      }
      };
    
});