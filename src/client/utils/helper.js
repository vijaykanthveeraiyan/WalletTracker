const getCookie = (cookiename) => {
	let cookiestring = RegExp('[; ]' + cookiename + '[^;]+').exec('; ' + document.cookie);
    console.log(unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, '') : ''));
    return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, '') : '');
};

export default getCookie;