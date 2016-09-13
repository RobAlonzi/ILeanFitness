require("baguetteBox");

let exports = module.exports = {};


exports.initGallery = () => {
	console.log('shsh');
    baguetteBox.run('.home-page-gallery');

	return true;
}

