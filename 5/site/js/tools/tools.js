$("#upload").change(function(){
    var objUrl = getObjectURL(this.files[0]);
    $("#img").empty();

    if (objUrl) {
        $("#img").append('<img src='+objUrl+' width="50" height="50"/>');
        $("#coverImage").val(objUrl);
    }
}) ;
//建立一個可存取到該file的url
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}