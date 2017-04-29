function info()
{
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("info").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/info", true);
xmlhttp.send();
}
function peer()
{
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("peerinfo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/peerinfo", true);
xmlhttp.send();
}
function mining()
{
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("mininginfo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/mininginfo", true);
xmlhttp.send();
}
function blockchaininfo()
{
    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("blockchain").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();
}
