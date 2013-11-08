

function pushCamera (){
    navigator.camera.getPicture( success, fail);
}

function fail(){
    console.log("fail");
}

function success(){
    console.log("success");
}