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
  "https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log("Model is loaded");
}

function check() {
  img = document.getElementById("captured_img");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log("I am alive");
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_obj_name").innerHTML = results[0].label;
    document.getElementById("result_obj_accu").innerHTML =
      results[0].confidence.toFixed(3);
  }
}
