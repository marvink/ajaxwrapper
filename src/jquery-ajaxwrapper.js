(function( $ ){

    var methods = {
       init : function( options ) {
        
		if (this.is('form')) {
			return $(this).ajaxwrapper("form");
		} else {
			return $(this).ajaxwrapper("link");
		}
                    
       },
	   
	   link : function () {		   
		   	var that = $(this),
            	container = $(this).attr('target'),
            	action = $(this).attr('href');
				
			if ($(this).data('href') != "" && $(this).data('href') != undefined) {
            	action = $(this).data('href');
          	}
			
			var request = $.ajax({
				url : action,
				dataType: "html",
				success : function(response) {					
					$(container).html(response);              
				},
				fail : function(jqXHR, textStatus) {
					$(container).html(textStatus);							
				}
       		});  
			return false;
	   },
	   
	   form : function () {
		   
		   if ($(this).has('input[type="file"]').length) {
			   
			   form = $(this),
			   container = $(this).attr('target'),
			   timetamp = new Date().getTime();
			   
			   form.after("<iframe style='display:none' name='" + timetamp + "'></iframe>");
			   form.attr('target', timetamp);
			   
			   $('iframe[name='+timetamp+']').load(function() {
					form.attr('target',container);
				 	$(container).html($('iframe[name='+timetamp+']').contents().find('body').html());
					$('iframe[name='+timetamp+']').remove();
			   });
			   
			   return true;
			   
		   } else {	   			   
			   button = $(this).find('[clicked=true]:input');		   
			   container = $(this).attr('target'),
			   action = $(this).attr('action'),
			   method = $(this).attr('method'),	   		   
			   values = $(this).serialize();
			   
			   values = values.concat("&" + button.attr("name") + "=" + button.val());
			   button.removeAttr('clicked')
			   
				var request = $.ajax( {
				  url : action,
				  data : values,
				  type : method,
				  dataType: "html",
				  success : function(response) {
					$(container).html(response);          
				  },
				  fail : function(jqXHR, textStatus) {
					console.error("Request failed: " + textStatus);
					$(container).html(textStatus);
				  }
				});  
				
				return false;
		   }
	   }
    };

    $.fn.ajaxwrapper = function( method ) {
      if ( methods[method] ) {
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.ajaxwrapper' );
      }    
    
    };

})( jQuery );

$(document).ready(function() {
	$('body').on('click',"input[type=submit], button[type=submit]", function() {
		$(this).attr("clicked", "true");
	});
	
	$('input[type=submit], button[type=submit]').each(function() {
		if ($(this).attr('onclick') == "return false" || $(this).attr('onclick') == "return false;") {
			$(this).removeAttr('onclick');	
		}
	});
});


