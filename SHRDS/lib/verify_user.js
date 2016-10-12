var user = {
    verify_user: function () {
        //If password is null, it is a IR user. ADD IN USERTYPE VARIABLE 
		//This is cirrently testing to a different database, will have to replace all db connection stuff later
        //if(password = null){
			//dummy test db
            MySql.Execute(
                "sql6.freemysqlhosting.net",
                "sql6138853", 
                "sHUtJmyDh3", 
                "sql6138853", 
                "select USER_ID from SHRDS_USER where USER_ID ="+document.getElementById("username").value, 					//+" and password ="+document.getElementById("password")  document.getElementById("username")
                function (data) {		
                    //If we have a match that means the user has the correct credentials
                    if (parseInt(data.Result[0].USER_ID)===parseInt(document.getElementById("username").value)){
							location.href = 'index.html?#WHR';  
                        }
                    //Otherwise there is a match for the user number in the DB
                    else{           
							document.getElementById("passwordCheck").innerHTML = "Error: That username and password combination is incorrect  "+document.getElementById("username").value+" "+ data.Result[0].USER_ID;
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