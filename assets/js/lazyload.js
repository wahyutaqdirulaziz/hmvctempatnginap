document.addEventListener("DOMContentLoaded", function() {
    yall({
      	observeChanges: true,
        events: {
            load: function (event) {
              	if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                	event.target.classList.add("yall-loaded");
              	}
            },
            play: function (event) {
              	if (event.target.nodeName == "VIDEO") {
                	event.target.nextElementSibling.classList.add("visible");
              	}
            },
            error: {
              listener: function (event) {
                if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                  	event.target.classList.add("yall-error");
                  	event.target.nextElementSibling.classList.add("visible");
            	}
          	},
              	options: {
                	once: true
              	}
            }
        }
    });
});