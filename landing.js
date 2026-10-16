(async function () {
  const status = document.getElementById('compatibility');
  if (!status) return;
  const show = message => {
    status.textContent = message;
    status.hidden = false;
  };
  if (!window.crossOriginIsolated || typeof SharedArrayBuffer === 'undefined' ||
      !navigator.gpu || typeof navigator.storage?.getDirectory !== 'function') {
    show('Use desktop Chrome or Edge.');
    return;
  }
  try {
    if (!await navigator.gpu.requestAdapter()) show('Enable hardware acceleration.');
  } catch (_) {
    show('Enable hardware acceleration.');
  }
})();
