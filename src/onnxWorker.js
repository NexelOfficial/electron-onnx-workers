const onnxruntime = require("onnxruntime-node");

(async () => {
  await onnxruntime.InferenceSession.create("model/yolov8n-pose.onnx", {
    enableMemPattern: false,
    intraOpNumThreads: 1,
  });
})();
