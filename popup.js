var search = document.getElementById("submitbutton");
search.addEventListener("click", doSearch);

document.getElementById("inputbox").focus();

document.addEventListener("keyup", doSearchKey);


function doSearch() {
    var nameOfPerson = document.getElementById("inputbox").value;
    nameOfPerson = nameOfPerson.replace(/\s/g, '+');
    var finalLink = "https://pubmed.ncbi.nlm.nih.gov/?term=" + nameOfPerson + "&format=abstract&sort=date&size=100";
    window.open(finalLink);

}

function doSearchKey(event) {

    if (event.keyCode == 13) {
        var nameOfPerson = document.getElementById("inputbox").value;
        nameOfPerson = nameOfPerson.replace(/\s/g, '+');
        var finalLink = "https://pubmed.ncbi.nlm.nih.gov/?term=" + nameOfPerson + "&format=abstract&sort=date&size=100";
        window.open(finalLink);
    }
    else {
    }
}