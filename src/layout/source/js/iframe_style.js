window.onload = function() {
    let frameElement = document.getElementsByName("lalaka");
    let doc = frameElement.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>.bar {width:650px; height:350px;}</style>';
}