//global vars are set in the templates to tell our JS 
//what functionality we need to init
//this acts as a rudementary controller file 
//that launches functionality based on what is needed 
//instead of everything on every page


//import Navigation from "./modules/Navigation";
import Gallery from "./modules/gallery";



if(typeof gallery !== 'undefined'){
	Gallery.initGallery();
}
