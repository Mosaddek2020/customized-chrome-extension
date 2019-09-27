(function(){

    // Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
    console.log('buton clicked');
  if (request.message === "user clicked!") {
    // Do something!

    var all_para = document.getElementsByTagName('p');
    

    for (var i = 0; i < all_para.length; i++) {

        all_para[i].style['background-color'] = '#C0C';
        
    }
  }
}
    


})();
