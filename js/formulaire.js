function adressAPI()
{
  var isAddress = /^[0-9a-zA-Z]{34}$/.test(data);
   var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("adress").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/address/ bitcoin_address /", true);
xmlhttp.send();
}
function transactionAPI()
{
  var isAddress = /^[0-9a-zA-Z]{34}$/.test(data);
   var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("transaction").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/transaction/ bitcoin_trx /", true);
xmlhttp.send();
}
