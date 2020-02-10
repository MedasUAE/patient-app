
export const availableLanguages = [{
	code: 'en',
	name: 'English'
}, {
    code: 'ar',
    name: 'عربى'
}];


export const defaultLanguage = (localStorage.getItem('lang')) ?  localStorage.getItem('lang') : 'ar';

export const sysOptions = {
	systemLanguage: defaultLanguage
};

export const appId = "test3client";

const baseUrl = "http://46.151.211.36:3005/";

export const urls = {
	login: baseUrl + "login",
	consults: baseUrl + "consults",
	vitals: baseUrl + "vitalsigns",
	labresult: baseUrl + "labresult",
	doctors: baseUrl + "doctors" ,
	slots: baseUrl + "doctorslot" ,
	profile: baseUrl + "myprofile" ,
	requestapt: baseUrl + "requestapt" ,
	services: baseUrl + "services" ,
	insurars: baseUrl + "insurars" ,
	offices: baseUrl + "offices" ,
	consultsummary: baseUrl + "consultsummary" ,
}

export const getCurrentDate = function(){
	const date = new Date();
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}