console.log("page loaded...");

function playVideo() {
    var myVideo= document.getElementById("video1");
        if (myVideo.paused) 
          myVideo.play(); 
        else 
          myVideo.pause(); 
    
}