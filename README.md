ajaxwrapper
===========

AjaxWrapper is a jquery module for simple standardized usage of ajax in a website. It is using a iframe fallback for file uploads.


Demo
-------------
http://www.marvinkerkhoff.de/ajaxwrapper/examples/index.html



Usage
-------------
1. Include the AjaxWrapper source file
2. Add the event handler for submit and click methods. It is not necessary which class you use for the event handling. But you should use the on method to get everything work fine.s

`
$(document).ready(function() {
	$('body').on("click", "a.ajax", function() {
		return $(this).ajaxwrapper();
	});
	
	$('body').on("submit", "form.ajax", function() {
		return $(this).ajaxwrapper();
	});
});
`
3. Add class="ajax" to the <a>-tags or <form>
4. Use jquery selectors in the target attributes for <a>-tags or <form>. The target should be an existing div with the id or class. 
5. That's it.
