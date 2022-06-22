







/**
 * Ventus example
 * Copyright © 2012 Ramón Lamana
 */
(function($, Ventus) {
	$(document).ready(function() {
                //var iframe = parent.document.createElement('iframe');
                //iframe.style.top = "130px";
                //iframe.style.left = "0px";
                //iframe.style.position = "absolute";
                //iframe.style.display = "none";
                //iframe.style.width = "100%";
                //iframe.style.height = "100%";
                //iframe.frameborder = "0";
                //iframe.id = "jork";
                //iframe.src = "X/"
                //parent.document.body.appendChild(iframe);
		var wm = new Ventus.WindowManager();

		window.browserver = "";

		window.wm = wm; // For debugging reasons

                                $('.create-button').click(function(){
                                        wm.createWindow({
                                                title: 'Window ' + (num++),
                                                x: (pos += 60),
                                                y: pos,
                                                width: 400,
                                                height: 250,

                                                events: {
                                                        closed: function() {
                                                                this.destroy();
                                                        }
                                                }
                                        })
                                        .open();
                                });

		var terminalWin = wm.createWindow.fromQuery('.coinbase-app', {
			title: 'Sell Services',
			width: 737,
			height: 526,
			x: 617,
			y: 317
		});

/*
		var coinbaseWin = wm.createWindow.fromQuery('.coinbase-app', {
			title: 'coinbase',
			width: 737,
			height: 526,
			x: 434,
			y: 17
		});
*/
		// Terminal
		var terminalWinOrig = wm.createWindow.fromQuery('.terminal-app', {
			title: 'Terminal',
			classname: 'terminal-window',
			width: 600,
			height: 300,
			x: 50,
			y: 60
		});
		terminalWinOrig.signals.on('click', function(win){
			terminal.display.focus();
		});

		var terminal = new Terminus('.terminal-app', {
			welcome: '<div class="identity"><img src="terminal/img/logo.png" /><h1>Terminus.js</h1> ' +
				Terminus.version +
				'</div>Copyright 2012-2013 Ramón Lamana.<br/>' +
				'Press <span style="color:green">&lt; tab &gt;</span> to see a list of available commands.'
		});
		terminal.shell.include([TestCommands, ShapeCommands]);

		terminal.display.events.on('prompt', function() {
			terminalWinOrig.$content.animate({
				scrollTop:terminalWinOrig.el.find('.terminusjs').height()
			}, 300);
		});


		var todoWin = wm.createWindow.fromQuery('.todo-app', {
			title: 'Container Orchestration Shell Tool',
			width: 680,
			height: 480,
			x: 67,
			y: 100
		});

		var todoWin = wm.createWindow.fromQuery('.v86-app', {
			title: 'co$t',
			width: 6800,
			height: 300,
			x: -15,
			y: -165,
			opacity: .70
		});

                var todoWin2 = wm.createWindow.fromQuery('.v86-app-pc', {
                       title: 'Create A Game NFT',
                       width: 680,
                       height: 510,
                       x: 15 /* 140,  (window.innerWidth - 650) / 2 */,
                       y: 165,
                       opacity: .90
                });

		/*
		var playerWin = wm.createWindow.fromQuery('.player-app', {
			title: 'Video Player',
			classname: 'player-window',
			width: 635,
			height: 300,
			x: 490 
			y: 320,
			resizable: false,
			opacity: 1 // To fix problems with chrome video on Linux
		});
		*/

		/*playerWin.titlebar = false;
		playerWin.widget = true;*/

		var aboutWin = wm.createWindow.fromQuery('.about-app', {
			title: 'Game Console',
			width: 680,
			height: 510,
			x: (window.innerWidth - 690) / 2 + 75,
			y: 220,
			opacity: .90
		});

		// Hide loader when loaded
		var loader = $("#loading-screen");

		// For look & feel reasons
		function openWithDelay(win, delay) {
			setTimeout(function(){win.open();}, delay);
		}

		function init() {
			loader.addClass('hide');
			loader.on(Ventus.browser.animationEventName(), function() {
				loader.hide();

				// Open windows
				openWithDelay(todoWin, 0);
				//openWithDelay(aboutWin, 400);
				//openWithDelay(todoWin2, 600 );

				//openWithDelay(coinbaseWin, 600);
				//openWithDelay(playerWin, 600);
				//aboutWin.minimize();
				//terminalWin.minimize();
				// April 21 2017 todoWin2.minimize();
				//coinbaseWin.minimize();
			});
		}

	        function defaultWM() {
			wm.mode = "default";
		}
	
                window.addEventListener("message", function(event) {
		    // desktop.js: Hello from onEnd tourEnded

                    console.log("desktop.js: Hello from " + event.data);
                    console.dir("type of data "+ typeof event.data);
		    if (event.data instanceof ImageData) {
                        console.dir(event.data);
			var iFrame = document.getElementById('sidebar');
			iFrame.contentWindow.postMessage(event.data, "*");
		    }
		   
                    if (typeof event.data === 'string' && event.data.startsWith('{ "document": '))
                        openWithDelay(todoWin2, 600 );

                    if (typeof event.data === 'string' && event.data.startsWith("expose"))
                        wm.mode = 'expose';

                    if (typeof event.data === 'string' && event.data.startsWith("default"))
                        setTimeout(defaultWM,2000); //wm.mode = 'default';

                    if (typeof event.data === 'string' && event.data.startsWith("new")) {
				console.log("event: " + event.data);
				openWithDelay(aboutWin, 400);
		    }

		    if (typeof event.data === 'string' && event.data.startsWith("Hey yall"))
                    {
                        var targetFrame = $('#jork')[0];
			var port  = event.data.split(" ")[2];
                        targetFrame.contentWindow.postMessage(port, '*');
                    }
		    if (typeof event.data === 'string' && event.data.startsWith("onEnd tourEnded"))
                    {
			//alert(window.location.href);
			//window.top.href="https://crypto.cmptr.cloud/base-crypto/index.html";
		    }
		});

                function checkCakeshop() {
                        $.ajax({
                         url : "http://localhost:47080/cakeshop",
			 crossDomain: true,
                         success : function(result){
                                openWithDelay(terminalWin, 200);
                         	},
                         always: function(request, status, error) {
                                console.log("request "+JSON.stringify(request));     
                                console.log("status "+status);      
                                console.log("error "+error);      
                         	}
                 	});

                	if(terminalWin.closed) 
				setTimeout(checkCakeshop, 30000);
                }
 
                function checkBrowserver() {
                        $.ajax({
                         url : "http://localhost:2016/hello",
			 crossDomain: true,
                         success : function(result) {
				connectBrowserver();
				window.browserver = "connected";
				console.log("set browserver to "+window.browserver);
                         	},
                         always: function(request, status, error) {
                                console.log("request "+JSON.stringify(request));     
                                console.log("status "+status);      
                                console.log("error "+error);      
                         	}
                 	});

                	if(window.browserver == "") 
				setTimeout(checkBrowserver, 3000);
                }

		setTimeout(function() {
			var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
			var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
			var $browserAlert = $('.browser-overlay');

			if(!isChrome && !isSafari) {
				$browserAlert.find('.close-button').click(function() {
					$browserAlert.hide();

					init();
					// April 21 2017 setTimeout(checkCakeshop,30000);
					// April 21 2017 setTimeout(checkBrowserver,3000);
				});

				$browserAlert.show();
			} else {
				init();
				// April 21 2017 setTimeout(checkCakeshop,30000);
				// April 21 2017 setTimeout(checkBrowserver,3000);
			}
		},  3000 );


		// Exposé test button
		$(".expose-button").click(_.throttle(function(){
			wm.mode = 'expose';
			return false;
		}, 1000));

		function connectBrowserver() {
			var server = http.createServer(function(req, res) {
			  console.log("Got request "+req.url)
			  if (req.method != "GET") {
			    res.writeHead(405, {"Content-Type": "text/plain"})
			    return res.end("Method not allowed")
			  }

		          if (req.url == "/expose") {
				wm.mode = 'expose';
			  	res.writeHead(200, {"Content-Type": "text/plain"})
			  	res.end("Hello, world!")
			  }

			  var pathname = req.url.split("?")[0]

			  if (pathname != "/hello") {
			    res.writeHead(404, {"Content-Type": "text/plain"})
			    return res.end("Not found.")
			  }

			  res.writeHead(200, {"Content-Type": "text/plain"})
			  res.end("Hello, world!")
			})

			// establish a WebSocket (or compatible) connection,
			// in this case using engine.io
			var ws = new eio.Socket({port: 2016, host: "127.0.0.1.xip.io"})

			// bind the browserver HTTP server to the WebSocket
			// and wait for connections from the browserver proxy!
			server.listen(ws)

			// to make outgoing HTTP requests w/o cross-domain issues,
			// use http.get or http.request
			http.get("http://www.google.com/index.html", function(res) {
			  console.log("Google answered back!")
			})
		}
	});
})($, Ventus);
