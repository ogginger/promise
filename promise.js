//promise.js: Wrapper function for the rsvp framework.

define([
	"rsvp"
], function(
	rsvp
) {
	return function( Promise ) {
		return new rsvp.Promise( Promise );
	};
});
