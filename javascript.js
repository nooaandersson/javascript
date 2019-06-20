function main() {

}


function hello() {
    var e = document.getElementById("text").innerHTML;
    if (e == "hej") {
        window.alert("bla");
    }
}  


function StringSearch() {
    var SearchTerm = document.getElementById("text_box_1").value;
    var TextSearch = document.getElementById("text_area_3").value;
    if (SearchTerm.length > 0 && TextSearch.indexOf(SearchTerm) > -1) {
        alert("String Found. Search Complete");
    };
    window.alert(SearchTerm);
    window.open("https://api.github.com/users/" + SearchTerm);

}

function button() {
    var a = SearchTerm;
    window.alert("well that worked")
    window.open("https://api.github.com/users/" + a)

}