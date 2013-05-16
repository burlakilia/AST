define(function (require, exports) {
	"use strict";

	exports.create = function (container) {
		container.find("table td")
			.mouseover(function() {
				var tds = $( this ).parent().find("td"),
					index = $.inArray( this, tds );
				container.find("table td:nth-child("+( index + 2 )+")").css("background-color", "#eee");
				container.find("table thead td:nth-child("+( index + 2 )+")").css("background-color", "#bde1ee");
				container.find("table .first-tf td:nth-child("+( index + 2 )+")").css("color", "#00b5ff");
				container.find("table tfoot td:nth-child("+( index + 2 )+") .buy-link").css("background-color", "#00b8fb");
			})
			.mouseout(function() {
				var tds = $( this ).parent().find("td"),
					index = $.inArray( this, tds );
				container.find("table td:nth-child("+( index + 2 )+")").css("background-color", "transparent");
				container.find("table thead td:nth-child("+( index + 2 )+")").css("background-color", "#cbf1ff");
				container.find("table .first-tf td:nth-child("+( index + 2 )+")").css("color", "#333");
				container.find("table tfoot td:nth-child("+( index + 2 )+") .buy-link").css("background-color", "#7bd9ff");
			});
	};

});