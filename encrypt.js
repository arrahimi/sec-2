var lastencrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
//U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

var lastdecrypted = "";
//4d657373616765

var funcEncrypt = function(){
    var password = document.getElementById("id_password");
    var passval = password.value;
    var username = document.getElementById("id_name");
    var userval = username.value;
    var salted = passval+userval;
    var msg = document.getElementById("id_msg")
    var msgval = msg.value;
    lastencrypted = CryptoJS.AES.encrypt(msgval, salted);
    password.value = "";
    username.value = "";
    msg.value = "";
};

var funcDecrypt = function(){
    var password = document.getElementById("id_password").value;
    var username = document.getElementById("id_name").value;
    var salted = password+username;
    var msg = document.getElementById("id_msg");
    lastdecrypted = CryptoJS.AES.decrypt(lastencrypted, salted);
    msg.value = lastdecrypted.toString(CryptoJS.enc.Utf8);
};