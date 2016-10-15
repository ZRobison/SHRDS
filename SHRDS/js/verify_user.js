function verify_user(){
        //If password is null, it is a IR user. ADD IN USERTYPE VARIABLE 
        //if(password = null){
			//dummy test db
            MySql.Execute(
                "sql6.freemysqlhosting.net",
                "sql6138853", 
                "sHUtJmyDh3", 
                "sql6138853", 
                "select USER_ID, TSO_QUALIFIED from SHRDS_USER where USER_ID ='"+document.getElementById("username").value+"' and PASSWORD ='"+document.getElementById("password").value+"'",			
                function (data) {	
                    console.log(JSON.stringify(data));
                    
                    //First Ensure the query succeded
                    if (data.Success === true){
                    //If we have a match that means the user has the correct credentials
                        if (data.Result!=null && data.Result!= ""){
                            //Also ensure that they are TSO certified
                            if(data.Result[0].TSO_QUALIFIED == true){
							 location.href = 'index.html?#prevailing1';  
                            }
                            else{
                                $(".error").text("You are not certified to log in as a TSO");
                            }
                        }
                        //Otherwise there is a match for the user number in the DB
                        else{   
                            $(".error").text("Error: That username and password combination is incorrect");
                        }
                    }
                });
    } 

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