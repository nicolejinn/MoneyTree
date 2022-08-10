loadFile("header", "htmls/header.html");
loadFile("navbar", "htmls/nav.html");
loadFile("daily-summary-section", "htmls/dailySummary.html");
loadFile("log-section", "htmls/log.html");
loadFile("footer", "htmls/about.html");

function loadFile(elmntID, file) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', file);

  // load the page asynchronously
    xhr.addEventListener('readystatechange', function() { 
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // if the file is correctly loaded

            document.getElementById(elmntID).innerHTML = xhr.responseText; 
        }
    });

    xhr.send(null); 
}
