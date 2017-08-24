function init() {
    console.log('DOMContentLoaded')
    console.log(bondFilms)
}

document.addEventListener('DOMContentLoaded', init);

let tabla = "<table border='1|1'>";
for (let i = 0; i < bondFilms.length; i++) {
    let rowColor = "";
    let a = bondFilms[i].actor;
    if (a == "Sean Connery") {
        rowColor = "red";

    } else if (a == "Daniel Craig") {
        rowColor = "blue";
    } else if (a == "George Lazenby") {
        rowColor = "green";
    } else if (a == "Roger Moore") {
        rowColor = "orange";
    } else if (a == "Timothy Dalton") {
        rowColor = "yellow";
    } else if (a == "Pierce Brosnan") {
        rowColor = "purple";
    } else {
        rowColor = "else";
    }
    tabla += "<tr class=" + rowColor + ">";
    tabla += "<td>" + bondFilms[i].title + "</td>";
    tabla += "<td>" + bondFilms[i].year + "</td>";
    tabla += "<td>" + bondFilms[i].actor + "</td>";
    tabla += "<td>" + antiquity(bondFilms[i].year) + "</td>";


    tabla += "</tr>";
}

tabla += "</table>";
document.getElementById("mitabla").innerHTML = tabla;



function antiquity(year) {
    let now = 2017;
    let e = now - year;
    return e;
}
