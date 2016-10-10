function verify_user(user, password){
    if(password = null){
         MySql.Execute(
            "sql8.freemysqlhosting.net",
            "sql8110237", 
            "Gn1uMM2Adr", 
            "sql8110237", 
            "select * from Users", 
            function (data) {
                document.getElementById("output").innerHTML = JSON.stringify(data,null,2);
            });
        }
    else{
        MySql.Execute(
            "sql8.freemysqlhosting.net",
            "sql8110237", 
            "Gn1uMM2Adr", 
            "sql8110237", 
            "select * from Users", 
            function (data) {
                document.getElementById("output").innerHTML = JSON.stringify(data,null,2);
                }
            }