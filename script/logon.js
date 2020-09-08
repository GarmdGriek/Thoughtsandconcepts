var alloweduser = [],allowedpassword = [],filenames=["panteflasker.txt","brukere.txt"];

function readpass(){
                    //read allowedpassword from file.
                    var password = new XMLHttpRequest();
                    password.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        allowedpassword = JSON.parse(this.responseText);
                    }
                };
                password.open("GET", "panteflasker.txt", true);
                password.send();
};
function readuser(){
    //read allowedusername from file.
    var userName = new XMLHttpRequest();
    userName.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alloweduser = JSON.parse(this.responseText);
    }
};
userName.open("GET", "brukere.txt", true);
userName.send();
};


function logon(){
    var users = document.getElementById("username").value;
    var password = document.getElementById("userpassword").value;
    //change username to fit alloweduser Array if wrong case is used
    users = users.toLowerCase();
    users = users.charAt(0).toUpperCase() + users.slice(1);

    for (index = 0; index < alloweduser.length; index++) {
        if (users == alloweduser[index]){
            if (password == allowedpassword[index]){
                window.location.replace("allowance.html");
                break;
            } else{
                   document.getElementById("wrongpassword").innerHTML = "Wrong username or Password";
                }
        } 
    }
};
