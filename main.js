$(document).ready(function (){   

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
			});
		});	
	});					
});		
