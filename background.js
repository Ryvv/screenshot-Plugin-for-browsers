chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "capture") {
    chrome.tabs.captureVisibleTab((screenshotUrl) => {
      const screenshotBlob = fetch(screenshotUrl).then(response => response.blob());
      const filename = request.filename ? `${request.filename}.png` : 'screenshot.png';
      screenshotBlob.then(blob => {
        const fileReaderInstance = new FileReader();
        fileReaderInstance.onload = () => {
          chrome.downloads.download({url: fileReaderInstance.result, filename: filename});
        };
        fileReaderInstance.readAsDataURL(blob);
      });
    });
  }
});
