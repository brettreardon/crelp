var cname = "bender";

function createCookie(uname,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+days);
        var expires = ";expires="+date.toUTCString();
    }
    else var expires = "";
    document.cookie = cname+"="+uname+expires+"; path=/";
}

function readCookie() {
    var readcname = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(readcname) == 0) return c.substring(readcname.length,c.length);
    }
    return null;
}

function eraseCookie() {
    createCookie("",-1);
}