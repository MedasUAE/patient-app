
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

const baseUrl = "http://188.117.92.20:3000/";

export const urls = {
	aboutus: baseUrl + "aboutus",
	locations: baseUrl + "locations",
	login: baseUrl + "login",
	consults: baseUrl + "consults",
	vitals: baseUrl + "vitalsigns",
	prescription: baseUrl + "prescription",
	laborder: baseUrl + "laborder" ,
	reportfiles: baseUrl + "reportfiles" ,
	download: baseUrl + "downloadreport" ,
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