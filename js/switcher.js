/**
* Stylesheet toggle variation on styleswitch stylesheet switcher.
* Built on jQuery.
* Under an CC Attribution, Share Alike License.
* By Kelvin Luck ( http://www.kelvinluck.com/ )
**/

/*

(function($)
	{
		// Local vars for toggle
		var availableStylesheets = [];
		var activeStylesheetIndex = 0;
		
		// To loop through available stylesheets
		$.stylesheetToggle = function()
		{
			activeStylesheetIndex ++;
			activeStylesheetIndex %= availableStylesheets.length;
			$.stylesheetSwitch(availableStylesheets[activeStylesheetIndex]);
		};
		
		// To switch to a specific named stylesheet
		$.stylesheetSwitch = function(styleName)
		{
			$('link[@rel*=style][title]').each(
				function(i) 
				{
					this.disabled = true;
					if (this.getAttribute('title') == styleName) {
						this.disabled = false;
						activeStylesheetIndex = i;
					}
				}
			);
			createCookie('style', styleName, 365);
		};
		
		// To initialise the stylesheet with it's 
		$.stylesheetInit = function()
		{
			$('link[rel*=style][title]').each(
				function(i) 
				{
					availableStylesheets.push(this.getAttribute('title'));
				}
			);
			var c = readCookie('style');
			if (c) {
				$.stylesheetSwitch(c);
			}
		};
	}
)(jQuery);

// cookie functions http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name)
{
	createCookie(name,"",-1);
}
// /cookie functions*/

	window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
	})();

		/*
		
		$(".styleswitch").on('click', function(styleName){
    		var rel = $(this).attr("rel");
    		var link = $(".link").attr("href");
    		$(".switcher").attr("href", link + rel + ".css");
    	
    	});*/


		$(document).ready(function(){ 

			var cookieName = 'green';

			function changeLayout(layout) {
				$.cookie(cookieName, layout);
				$('head link[name=skins]').attr('href', 'js/css/colors/' + layout + '.css');
			}

			if( $.cookie(cookieName)) {
				changeLayout($.cookie(cookieName));
			}

			$("#green").click( function(){ changeLayout('green'); });
			$("#default").click( function(){ changeLayout('default'); });
			$("#orange").click( function(){ changeLayout('orange'); });
			$("#green").click( function(){ changeLayout('green'); });
			$("#red").click( function(){ changeLayout('red'); });
			$("#purple").click( function(){ changeLayout('purple'); });
			$("#cherry").click( function(){ changeLayout('cherry'); });

		});


