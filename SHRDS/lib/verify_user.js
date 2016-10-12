var user = {
    verify_user: function () {
        //If password is null, it is a IR user. ADD IN USERTYPE VARIABLE 
        //if(password = null){
            MySql.Execute(
                "sql8.freemysqlhosting.net",
                "sql8110237", 
                "Gn1uMM2Adr", 
                "sql8110237", 
                "select "+document.getElementById("username")+" from Users Where password ="+document.getElementById("password"), 
                function (data) {
                    //If we have an empty object, it means the user does not exist
                    if ( Object.keys(data).length<1){
                        document.getElementById("passwordCheck").innerHTML = "Error: That username and password combination is incorrect";
                        }
                    //Otherwise there is a match for the user number in the DB
                    else{
                            location.href = 'index.html?#WHR';  
                        }
                    });
    } 
};
//                }
//            else{
//                MySql.Execute(
//                "sql8.freemysqlhosting.net",
//                "sql8110237", 
//                "Gn1uMM2Adr", 
//                "sql8110237", 
//                "select "+user+" from Users Where password ="+password, 
//                function (data) {
//                    //If we have an empty object, it means the user does not exist
//                    if(data == null){
//                        $(".passwordCheck").text("Error: Incorrect username and password");
//                    }
//                    //Otherwise there is a match for the user number and password in the DB
//                    else{
//                        location.href = 'index.html?#WHR';  
//                        }
//                    }
//            );
//        }
//}
//};