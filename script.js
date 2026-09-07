const video = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const capturedImage = document.getElementById("capturedImage");

const startCameraButton =
    document.getElementById("startCamera");

const captureButton =
    document.getElementById("capture");

const liveScanButton =
    document.getElementById("liveScan");

const inspectButton =
    document.getElementById("inspect");

let cameraStream = null;


// -----------------------------
// START CAMERA
// -----------------------------

startCameraButton.addEventListener("click", async () => {

    try {

        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            },
            audio: false
        });

        video.srcObject = cameraStream;

        alert("Camera started successfully!");

    } catch (error) {

        console.error(error);

        alert(
            "Unable to access camera. Please allow camera permission."
        );

    }

});


// -----------------------------
// CAPTURE IMAGE
// -----------------------------

captureButton.addEventListener("click", () => {

    if (!cameraStream) {

        alert("Please start the camera first.");

        return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    const imageData =
        canvas.toDataURL("image/jpeg");

    capturedImage.src = imageData;

    alert("Image captured!");

});


// -----------------------------
// LIVE SCAN
// -----------------------------

liveScanButton.addEventListener("click", () => {

    alert(
        "Live AI inspection will be connected here."
    );

});


// -----------------------------
// INSPECTION
// -----------------------------

inspectButton.addEventListener("click", () => {

    if (!capturedImage.src) {

        alert("Please capture an image first.");

        return;
    }

    /*
       TEMPORARY DEMO VALUES

       Later these values will come
       from Python + OpenCV + AI.
    */

    document.getElementById("component")
        .textContent = "Hex Bolt";

    document.getElementById("length")
        .textContent = "50.2 mm";

    document.getElementById("width")
        .textContent = "16.1 mm";

    document.getElementById("diameter")
        .textContent = "10 mm";

    document.getElementById("calibration")
        .textContent = "10 mm reference ruler";

    document.getElementById("confidence")
        .textContent = "92%";

    document.getElementById("status")
        .textContent = "PASS";

});
