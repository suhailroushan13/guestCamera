import NodeWebcam from "node-webcam";

const opts = {
  width: 1280,
  height: 720,
  quality: 100,
  frames: 60,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: false,
  callbackReturn: "location",
  verbose: false,
};

function capture() {
  // Creates webcam instance
  const Webcam = NodeWebcam.create(opts);

  // Function to get formatted date for filename
  const getFormattedDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}_${String(
      date.getHours()
    ).padStart(2, "0")}-${String(date.getMinutes()).padStart(2, "0")}-${String(
      date.getSeconds()
    ).padStart(2, "0")}`;
  };

  // Will automatically append location output type
  Webcam.capture(getFormattedDate(), (err, data) => {});

  // Also available for quick use
  NodeWebcam.capture(getFormattedDate(), opts, (err, data) => {});

  // Get list of cameras
  Webcam.list((list) => {
    // Use another device
    const anotherCam = NodeWebcam.create({ device: list[0] });
  });

  // Return type with base64 image
  const optsBase64 = {
    callbackReturn: "base64",
  };

  NodeWebcam.capture(getFormattedDate(), optsBase64, (err, data) => {
    const image = `<img src='${data}'>`;
  });

  // process.exit(0);
  return;
}

setTimeout(capture, 5000);
