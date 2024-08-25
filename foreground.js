console.log("Now");
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText("https://www.jamiebalfour.scot/tools/?extension=true");



    var elements = document.getElementsByClassName("section_inf");

    var myFunction = function(e) {
        e.preventDefault();
        var attribute = this.getAttribute("href");
        window.open(attribute, '_blank');
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
}

loadHome();
