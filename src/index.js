const { app, BrowserWindow } = require("electron");
const { Worker } = require("node:worker_threads");
const path = require("node:path");
const cpus = require("os").cpus().length;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
};

app.whenReady().then(() => {
  createWindow();

  for (let i = 0; i < 12; i++) {
    new Worker(path.join(__dirname, "onnxWorker.js"));
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
