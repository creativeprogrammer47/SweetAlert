function alert1(){
    swal("SWIPE","swipe for source code")
}
function warning(){
    swal("Ewww","This is Warning","warning")
}
function poll(){
    swal("Do you need more like this ?,comment down",{
        buttons : ["No","Yes"],
    });
}
function comment(){
    swal("comment down your ideas",{
        content : "input"
    }).then((value) => {
        swal("you commented",value , {
            icon: "success",
        });
    });
}