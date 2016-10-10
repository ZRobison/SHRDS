function verify_user(user, password){
    //If password is null, it is a IR user. ADD IN USERTYPE VARIABLE 
    if(password = null){
         MySql.Execute(
            "sql8.freemysqlhosting.net",
            "sql8110237", 
            "Gn1uMM2Adr", 
            "sql8110237", 
            "select "+user+"from Users", 
            function (data) {
                //If we have an empty object, it means the user does not exist
                if(data == null){
                    window.alert("Error: That user number does not exist");
                }
                //Otherwise there is a match for the user number in the DB
                else{
                    location.href = 'index.html?#WHR';  
                }
            });
        }
    else{
        MySql.Execute(
            "sql8.freemysqlhosting.net",
            "sql8110237", 
            "Gn1uMM2Adr", 
            "sql8110237", 
            "select"+user+"from Users"
            "where password ="+password+", 
            function (data) {
                //If we have an empty object, it means the user does not exist
                if(data == null){
                    window.alert("Error: That user number does not exist");
                }
                //Otherwise there is a match for the user number in the DB
                else{
                    location.href = 'index.html?#WHR';  
                }
                }
            }