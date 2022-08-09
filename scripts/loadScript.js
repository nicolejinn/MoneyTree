loadScript("mainScript");
loadScript("navScript");

function loadScript(fileName){
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "scripts/" + fileName + ".js";
  document.body.appendChild(script);
}