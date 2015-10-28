document
    .querySelector(".menu")
    .addEventListener("click", function() {
	this.querySelector(".menu__trigger").classList.toggle("active");
    }, false);


var NodeListToArray = function(NodeList) {
    var out = [];
    for(var i = 0; i < NodeList.length; i++) {
	out.push(NodeList.item(i));
    }
    return out;
};

NodeList.prototype = new Array();

/*
var animateDuration = 0.6;

NodeListToArray(document.querySelectorAll(".nav > ul > li > .nav__item"))
    .map(function(n, i, l) {
	n.addEventListener("click", function() {

	    var prev = l.slice(0, i);
	    var next = l.slice(i + 1, l.length);
	   
	    l.map(function(m) {
		m.style.transform = "translate(100%, 0)";
		return m;
	    });

	    var time = animateDuration / (Math.max(prev.length, next.length) + 1);

	    prev.reverse().map(function(pl, pli) {
		pl.style.transition = "transform .2s ease-in-out " + (pli + 1) * time + "s";
		return pl;
	    });

	    this.style.transition = "transform .2s ease-in-out " + 0 + "s";

	    next.map(function(nl, nli) {
		nl.style.transition = "transform .2s ease-in-out " + (nli + 1) * time + "s";
		return nl;
	    });

	    setTimeout(function() {

		NodeListToArray(document.querySelectorAll(".nav > ul > li"))
		    .map(function(ol) {
			ol.style.opacity = "0";
			ol.style.transition = "opacity .2s ease-in-out 0s";
			return ol;
		    });


		setTimeout(function() {
		    document.querySelector(".nav").innerHTML = "";
		}, 200);
	    }, animateDuration * 1000);
	    
	}, false);
	return n;
    });
*/
var dom = {};

dom.empty = function(dom) {
    return dom.innerHTML = "";
};

dom.text = function(dom) {
    return dom.textContent;
};

dom.html = function(dom) {
    return dom.innerHtml;
};

var qsa = (selector, container = document) => {
    return [].slice.call(container.querySelectorAll(selector));
};

qsa(".multi > .multi__list").map(function(n) {
    n.classList.add("state--open");
    return n;
});

qsa(".multi > .multi__list > .multi__list-item").map(function(n) {
    n.classList.add("state--open");
    return n;
});
