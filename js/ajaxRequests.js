$.ajaxSetup({timeout:1000});



function sendAjaxById(elem){
$.get(`/?${elem.id}=` + elem.value);
 {Connection: close};
}
