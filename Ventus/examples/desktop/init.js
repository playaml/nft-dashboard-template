

function doSomethingLater() {

	if(window.location.href.indexOf("#") != -1)  {  
	  alert("Going to hide background");
	  const collection = document.getElementsByClassName("example");
	  for (let i = 0; i < collection.length; i++) {
	    collection[i].style.backgroundImage = "none";
	  }
	}        

	if (document.getElementById("marketplace"))
	{
	  var script = `
                market_frame = document.getElementById('marketplace').contentWindow.document
		dropcontainer = market_frame.getElementById("dropContainer");
		nav = market_frame.getElementById("navbar");
		nav.style.display = "none";
		drop = market_frame.getElementById("dropCanvas");
		drop.style.display = "none";
		dropcontainer.style.display = "block";
		//alert('hello world '); 
		console.dir(document.body);
		console.dir(dropcontainer);
		dropcontainer.innerText = "Drop A Game NFT Here";
		console.dir(dropcontainer);
		dropcontainer.ondragover = dropcontainer.ondragenter = function(evt) { 
			 console.log("!!!!!!!!! dropcontainer.ondragover");
 			 evt.preventDefault(); 
		}; 
		dropcontainer.ondrop = function(evt) { 
			console.log("!!!!!!!!! dropcontainer.ondrop");
			fileInput = market_frame.getElementById("file");
			fileInput.files = evt.dataTransfer.files; 
			const dT = new DataTransfer(); 
                        for (var i = 0; i < evt.dataTransfer.files.length; i++) {
                          console.log('... file[' + i + '].name = ' + evt.dataTransfer.files[i].name); 
			  dT.items.add(evt.dataTransfer.files[i]); 
                        }
			//dT.items.add(evt.dataTransfer.files[3]); 
			fileInput.files = dT.files; 
			evt.preventDefault(); 
		}; 
	    `;

	    $('#marketplace').contents().find('body').append($('<script>').html(script))
	}

	if (document.getElementById("buy"))
	{
            if (document.location.startsWith("https://your.cmptr.cloud:2017"))
	    {
		document.getElementById("buy").setAttribute("src","https://your.cmptr.cloud:2017/v86/app.html?&brad");
	    }
	    else
	    {
		console.log("DEBUG: "+ document.referrer + " " + document.location);
		newlocation = document.referrer.replace("firsttime","v86/app");
		document.getElementById("buy").setAttribute("src",newlocation);
	    }
	}
	else
	{
		console.log("!! No element yet "+ document.referrer + " " + document.location);
	}
}

setTimeout(doSomethingLater, 1000)


//var cachep2p = new CacheP2P()
//
//  $(document).ready(function(){
//        $('.log-btn').click(function(){
//            $('.log-status').addClass('wrong-entry');
//           $('.alert').fadeIn(500);
//           setTimeout( "$('.alert').fadeOut(1500);",3000 );
//        });
//        $('.form-text').keypress(function(){
//            $('.log-status').removeClass('wrong-entry');
//        });
//
//    });
//
//$('input').blur(function(event) {
//    console.log("checking "+document.getElementById("ethaddr").value);
//    document.getElementById("ethaddr").value = document.getElementById("ethaddr").value.replace("0x","");
//    if ( !validator.isHexadecimal(document.getElementById("ethaddr").value.trim())
//	|| (validator.isHexadecimal(document.getElementById("ethaddr").value.trim()) &&
//		document.getElementById("ethaddr").value.trim().length != 40)) 
//		    {
//			 //$(event.target).focus();
//			 $('.form-text').focus();
//			 $('.log-status').addClass('wrong-entry');
//			 $('.alert').fadeIn(500);
//			 setTimeout( "$('.alert').fadeOut(1500);",3000 );
//		    }
//    //event.target.checkValidity();	
//})/*.bind('invalid', function(event) {
//    setTimeout(function() {  	$(event.target).focus(); 
//				$('.log-status').addClass('wrong-entry');
//           			$('.alert').fadeIn(500);
//           			setTimeout( "$('.alert').fadeOut(1500);",3000 ); 
//    }, 50);
//});*/
