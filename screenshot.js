chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.getElementById('screenshot').src = request.url;

  document.getElementById('download').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = request.url;
    link.download = 'screenshot.png';
    link.click();
  });
});
