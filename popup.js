var pubmedSearch = document.getElementById("pubmedSubmitButton");
var ncbiSearch = document.getElementById("NCBISubmitButton");
var npiSearch = document.getElementById("NPISubmitButton");
var nameOfPerson = document.getElementById("nameInputBox");
var npiNumber = document.getElementById("npiInputBox");
var pubmedDone = false;

pubmedSearch.addEventListener("click", doPubmedSearch);
ncbiSearch.addEventListener("click", doNCBISearch);
npiSearch.addEventListener("click", doNPISearch);
document.getElementById("nameInputBox").focus();
document.addEventListener("keyup", doSearchKeyHandler);

function getURLFromName() { 
    nameOfPerson.value.replace(/\s/g, '+');
    return nameOfPerson.value;
}


function doPubmedSearch() {
    if (nameOfPerson.value !== "") {
        var finalLink = "https://pubmed.ncbi.nlm.nih.gov/?term=" + getURLFromName() + "&format=abstract&sort=date&size=100";
        window.open(finalLink);
        pubmedDone = true;
    } else {getURLFromName()}
}

function doNCBISearch() {
    if (nameOfPerson.value !== "") {
        var finalLink = "https://www.ncbi.nlm.nih.gov/pmc/?term=" + getURLFromName();
        window.open(finalLink);
        pubmedDone = false;
    } else {getURLFromName()}
}

function doNPISearch() {
    var finalLink = "https://npiregistry.cms.hhs.gov/provider-view/" + npiNumber.value;
    window.open(finalLink);
}

function doSearch() {
    if (pubmedDone==false) {
        doPubmedSearch();
    } else {
        doNCBISearch();
    }
}

function doSearchKeyHandler(event) {
    if (event.keyCode == 13) {
        doSearch();
    }
}
