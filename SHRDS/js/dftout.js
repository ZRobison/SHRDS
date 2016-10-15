var login = function () {
    //This function is not currently used
    //All login logic is handled in verify_user, Ill switch it up it I can figure out some JS stuff later (tim)


    //remember to make 0
    var check = 1;
    check = verify_user();
    if (check) {
        location.href = 'index.html?#prevailing1';
    } else {
        // error message
    }



}
