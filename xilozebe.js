var prc = $(".pricing-details").clone();
prc.find(".offer-details").remove();
var img = $("#STP--Product-Image").clone();
var title = $("h1").clone();
var sku = $(".item-subtitle").clone();
sku.find("li:last-child").remove();
var details = $(".product-details-mini").clone();
details.find("a").remove();
var promo = $(".item-promo").clone();
promo.find(".collapsed").removeClass("collapsed").addClass("expanded");
promo.find("a").remove();

$("body").empty();
var sign = $("<div id='sign-container'></div>");
sign.appendTo("body");

title.appendTo(sign);
sku.appendTo(sign);
prc.appendTo(sign);
img.appendTo(sign);
details.appendTo(sign);
promo.appendTo(sign);