require("baguetteBox");

let exports = module.exports = {};


exports.initGallery = () => {
    baguetteBox.run('.home-page-gallery', {
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});

	return true;
}

