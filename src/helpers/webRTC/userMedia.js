export async function getUserMedia(){
    return await navigator.mediaDevices.getUserMedia({video : true})
}

export async function setMedia(videoElement , stream){
    videoElement.srcObject = stream;
}
