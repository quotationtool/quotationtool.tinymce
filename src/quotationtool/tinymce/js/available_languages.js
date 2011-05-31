var ulang;
if (navigator.userLanguage) // IE
    ulang = navigator.userLanguage;
else if (navigator.language) // FF 
    ulang = navigator.language;
else
    ulang = 'en';
var alang;
alang = 'en';
if (ulang.substring(0,2) == 'de')
   alang = 'de';
