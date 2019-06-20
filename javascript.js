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
    window.alert(SearchTerm);
    window.open("https://api.github.com/users/" + SearchTerm);

    $.getJSON('https://api.github.com/users/' + SearchTerm, function (data) {
        console.log("JSON Data: " + data.url);

    });
    
}

function button() {
    var a = SearchTerm;
    window.alert("well that worked")
    //window.open("https://api.github.com/users/" + a)

    $.getJSON('https://api.github.com/users/' + a, function (data) {
        window.alert("funka")
    });

}
