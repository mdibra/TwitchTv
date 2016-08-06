$(document).ready(function (){               //  MY WORK

    var streamers =["ESL_SC2", "cretetion", "OgamingSC2", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    streamers.forEach(function(element){

        var url = "https://api.twitch.tv/kraken/streams/" + element + "";

        $.getJSON(url, function(data) {
            var game, status, viewers;
            if (data.stream === null){
                game =' Right now: (Asleep)';
                status = 'offline';
        
            } else if (data.stream === null){
                game = "Account Closed";
            } else {  
                game = 'Streaming out ' + '('+ data.stream.game + ')'  ;
                status = 'online';
                viewers = data.stream.viewers;				
											 	
            }
					
            var url1 = "https://api.twitch.tv/kraken/channels/" + element + ""; 
					
            $.getJSON(url1, function(data1){
							
                var logo = data1.logo != null ? data1.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
										name = data1.display_name != null ? data1.display_name : channel;
							
$("#logoe").append('<div class="row"><img class="loogoo col-md-2" src="' + logo + '"><a class="col-md-5 haha" + href="'+data1.url+'">'+name+'</a><span class=" popo col-md-5">'+ game +'</span></div><hr>');
							
							
//							$("#logoe").append('<div class="row"><img class="col-md-3" style="width=20%;display=inline-block;border-radius:50%;margin-right:10%;max-width:150px;" + src="' + logo + '"><a style="width=20%;display=inline-block;border-radius:50%;margin-right:10%;" + href="'+data1.url+'">'+name+'</a><span>'+ game +'</span></div></br> ');
							

            });
					
        });	
			
			
			
			
    });					
});			


//
//
//<script>
//(function() {
//  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//  $.getJSON( flickerAPI, {
//    tags: "mount rainier",
//    tagmode: "any",
//    format: "json"
//  })
//    .done(function( data ) {
//      $.each( data.items, function( i, item ) {
//        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//        if ( i === 3 ) {
//          return false;
//        }
//      });
//    });
//})();
//</script>

//      $.getJSON(makeURL("channels", channel), function(data) {
//        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
//          name = data.display_name != null ? data.display_name : channel,
//          description = status === "online" ? ': ' + data.status : "";
//          html = 
//              '<div class="row ' +
//              
//          status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' + 
//              
//          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
//              
//          data.url + '" target="_blank">' + 
//              
//          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
//              
//          game + '<span class="hidden-xs">' + 
//              
//          description + '</span></div>
//          
//              </div>';
//        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
//      });


                        
//
//      
//
//var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];
//
//function getChannelInfo() {
//  channels.forEach(function(channel) {
//    function makeURL(type, name) { //streams , channel
//      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?callback=?';
//    };
//    $.getJSON(makeURL("streams", channel), function(data) { 
//      var game,
//          viewers,
//          status ;
//      if (data.stream === null) {
//        game = "not here";
//
//      } else if (data.stream === undefined) {
//        game = "Account Closed";
//
//      } else {
//        game    = data.stream.game; ///star craft II 
//        viewers = data.stream.viewers; console.log(viewers);
//      };
//      $.getJSON(makeURL("channels", channel), function(data) {
//        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
//          name = data.display_name != null ? data.display_name : channel,
//          description = status === "online" ? ': ' + data.status : "";
//          html = '<div class="row ' + 
//          status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' + 
//          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
//          data.url + '" target="_blank">' + 
//          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
//          game + '<span class="hidden-xs">' + 
//          description + '</span></div></div>';
//        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
//      });
//    });
//  });
//};
//
//$(document).ready(function() {
//  getChannelInfo();
  // $(".selector").click(function() {
  //   $(".selector").removeClass("active");
  //   $(this).addClass("active");
  //   var status = $(this).attr('id');
  //   if (status === "all") {
  //     $(".online, .offline").removeClass("hidden");
  //   } else if (status === "online") {
  //     $(".online").removeClass("hidden");
  //     $(".offline").addClass("hidden");
  //   } else {
  //     $(".offline").removeClass("hidden");
  //     $(".online").addClass("hidden");
  //   }
  // })
//});