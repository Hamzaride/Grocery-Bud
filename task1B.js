var x = 0;
var array = new Array()

function addItem() {
    array[x] = "<tr>" + "<td id='in1'>" + document.getElementById("text1").value + "</td>" + "<td id='in2'>" + "<input type='image' src='updateicon.png' name='" + x + "' onclick='updateitem(this)' width='20px' height='20px' /> <input type='image' src='deletelog.png' name='" + x + "' onclick='deleteitem(this)' width='20px' height='20px' />" + "</td>" + "</tr>";
    x++;
    document.getElementById("text1").value = "";
    var e = "";

    for (var y = 0; y < x; y++) {
        e += array[y] + "   " + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function deleteitem(n) {
    var i = parseInt(n.name);
    array[i] = ''
    var e = "";
    for (var y = 0; y < x; y++) {
        e += array[y] + "   " + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function updateitem(n) {
    var item = prompt("New Item:");
    var i = parseInt(n.name);
    array[i] = "<tr>" + "<td id='in1'>" + item + "</td>" + "<td id='in2'>" + "<input type='image' src='updateicon.png' name='" + i + "' onclick='updateitem(this)' width='20px' height='20px' /> <input type='image' src='deletelog.png' name='" + i + "' onclick='deleteitem(this)' width='20px' height='20px' />" + "</td>" + "</tr>";

    var e = "";
    for (var y = 0; y < x; y++) {
        e += array[y] + "   " + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function clearitems() {
    x = 0;
    if (x == 0) {
        document.getElementById("Result").innerHTML = "No Item Exist";
    }
}
