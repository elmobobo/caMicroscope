// borrowed conversion helper?
function csv2Json(csv) {
  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(',');
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) {
      continue;
    }
    const obj = {};
    const currentline = lines[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
}

function getManifest(e) {
  console.log(e);
  var file = e.target.files[0];
  let reader = new FileReader();
  // callbacks
  reader.onload = handleManifest;
  reader.onerror = console.error;
  reader.readAsText(file);
}

function handleManifest(e) {
  let manifest = e.target.result;
  console.info('got manifest file');
  console.log(csv2Json(manifest));
}

function handleImport(e) {
  console.info('got ' + e.target.files.length + ' files');
  for (let x of e.target.files) {
    console.log(x.name);
    // find match in manifest
  }
}

document.getElementById('manifestSelect').addEventListener('change', getManifest, false);
document.getElementById('importSelect').addEventListener('change', handleImport, false);