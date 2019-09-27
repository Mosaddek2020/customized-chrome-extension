(function(){

    // Listen for messages
    chrome.runtime.onMessage.addListener(receiver);

    // Callback for when a message is received
    function receiver(request, sender, sendResponse) {
        console.log('buton clicked');

       

        if (request.message === "user clicked!") {
            // Do something!

            let filenames = [
                "cow1.jpg",
                "cow2.jpg",
                "cow3.jpg",
                "cow4.jpg",
                "cow5.jpg"
              ];

            let all_imgs = document.getElementsByTagName('img');
            

            for (var i = 0; i < all_imgs.length; i++) {

                let r = Math.floor(Math.random() * filenames.length);
                let file = 'cows/' + filenames[r];
                let url = chrome.extension.getURL(file);
                
                all_imgs[i].src = url;
                
            }
        }
    }
    


})();