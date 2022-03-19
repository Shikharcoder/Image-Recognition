Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
});
camera = document.getElementById("cam");
Webcam.attach("#cam");

function takeSnap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML =
            "<img id='captured_img' src='" + data_uri + "'>";
    });
}
console.log("ml5 version -", ml5.version);

classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/-w9DVm-Ib/model.json",
    modelLoaded
);

function modelLoaded() {
    console.log("Model is loaded");
}