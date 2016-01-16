chrome.runtime.getBackgroundPage(function (backgroundPage) {
    document.addEventListener("DOMContentLoaded", function(event) {
        var one = document.getElementById('one');
        one.addEventListener('click', function(){
            backgroundPage.clear();
        
        }
    });
 
});