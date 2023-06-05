document.addEventListener('DOMContentLoaded', function () {
    var captureButton = document.getElementById('capture');
    var openFolderButton = document.getElementById('open-folder');
    var filenameInput = document.getElementById('filename');
  
    if (captureButton) {
      captureButton.onclick = function() {
        chrome.runtime.sendMessage({action: "capture", filename: filenameInput.value}, function(response) {});
      };
    }
  
    if (openFolderButton) {
      openFolderButton.onclick = function() {
        chrome.tabs.create({url: "chrome://downloads"});
      };
    }
  });
  