//build.js: Configuration file for optimizing wrapper function for declaring rsvp promises. 
/*
	1. promise has one dependency: rsvp.
*/ 
({
    baseUrl: ".",
    paths: {
	"rsvp": "lib/rsvp.min"
    },
    exclude: [ "rsvp" ],
    name: "promise",
    out: "promise.min.js"
})
