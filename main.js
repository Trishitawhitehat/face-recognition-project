Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("webcam_view");

Webcam.attach('#webcam_view');

function take_picture() {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R-r9qKPNq/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}