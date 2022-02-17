$(document).ready (function() {
    $("#tabs").tabs({ collapsible: true});
    $("#accordion-1").accordion({ collapsible: true});
    $("#accordion-2").accordion({ collapsible: true});
    $("#accordion-3").accordion({ collapsible: true});
    $("#accordion-4").accordion({ collapsible: true});
    $("#accordion-5").accordion({ collapsible: true});
    $(".accordion").accordion();
    $( "#tabs" ).on( "tabsactivate", function(event, ui) {
        const newTab = ui.newPanel.attr("id");
        const oldTab = ui.oldPanel.attr("id");
        switch (newTab) {
            case "tabs-1":
                onYouTubeIframeAPIReady("player-1", "B3vqcbJwgCI");
                break;
            case "tabs-2":
                onYouTubeIframeAPIReady("player-2", "finn0lmwpUE");
                break;
            case "tabs-3":
                onYouTubeIframeAPIReady("player-3", "a61MyC6lGL0");
                break;
            case "tabs-4":
                onYouTubeIframeAPIReady("player-4", "jYwX-BSUmaI");
                break;   
            case "tabs-5":
                onYouTubeIframeAPIReady("player-5", "83OjtHMx_40");
                break; 
        }
    }); 
});

    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;
    function onYouTubeIframeAPIReady(idTag, idPlayer) {
      player = new YT.Player(idTag, {
        height: '360',
        width: '640',
        videoId: idPlayer,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

function onPlayerReady(event) {
    console.log(event)
    event.target.playVideo();
    let title = player.getVideoData().title;
    let author = player.getVideoData().author;
    let duration = player.getDuration();
    let tag = event.target.h;
    fillAccordion (title, author, duration);
}

    let done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }

    function fillAccordion (title, author, duration) {
        $("#title").html(title);
        $("#author").html(author);
        $("#duration").html(duration);
    }   