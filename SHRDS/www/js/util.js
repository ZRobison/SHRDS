//Time uility to convert time to a format compatible with mySQL data type
function getFormTime() {
    var date = new Date()
    if (app.SHRFlag == 2) {
        app.esSHRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
    } else if (app.SHRFlag == 1) {
        app.prevalingSHRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

    } else {
        app.esIRData.time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
    }
}

//Date function to convert date format to a type compatible with the mySQL database
function getFormDate() {
    var d = new Date();
    if (app.SHRFlag == 2) {
        app.esSHRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    } else if (app.SHRFlag == 1) {
        app.prevalingSHRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    } else {

        app.esIRData.date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        console.log("setting date = " + app.esIRData.date);
    }

}
//Second Date function to return system date. Offest allows for values + or minus current date
//0 offset is today, 1 is yesterday
function getDateTodayOrYesterday(offset) {
    var d = new Date();
    d.setDate(d.getDate() - offset);
    return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
}

//Utility to ensure leading zeros are not ignored when getting system date
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Password utility to hash passwords with MD5 algorithm.
//Password used legally with free license, including the following disclaimer:
/*(c) 2009-2013 by Jeff Mott. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    Redistributions of source code must retain the above copyright notice, this list of conditions, and the following disclaimer.
    Redistributions in binary form must reproduce the above copyright notice, this list of conditions, and the following disclaimer in the documentation or other materials provided with the distribution.
    Neither the name CryptoJS nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS," AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//While this password algorithm is not collision resistant, it is used in order to ensure plain text passwords are not stored in the database

function passwordHash(password, salt) {
    var saltedPassword = password + salt;
    var hash = CryptoJS.MD5(saltedPassword);
    var hashedPassword = "";
    for (var i = 0; i < hash.words.length; i++) {
        hashedPassword += hash.words[i];
    }
    return hashedPassword;

}

//Utility to wash any escape characters and prevent against sql injection
function wash_SQL_string(str) {
    var toString = "" + str;
    return toString.replace(/[\|&;\$%"<>\(\)\+,']/g, "");
}

//Utility to automatically add a colon when filling the time on prevailing page
function addColon(nameString) {
    document.getElementsByName(nameString)[0].onkeydown = function (e) {
        if (this.value.length == 2) {
            this.value += ":";
        }
    }
}
//Utility ensures an input contains only numerical digits
function verifyNonNumericCharacters(input) {
    if (/\D/.test(input)) {
        return false;
    } else {
        return true;
    }
}
//This utility checks to see if any mandatory radio buttons are unchecked
function checkRadioButtons(radioGroup) {
    if (!$("input[name='" + radioGroup + "']").is(":checked")) {
        return false;
    } else {
        return true;
    }

}

//Utility ensuring that a maximum value exists for a value
function HeatNum(obj) {
    var value = obj.value.replace(/\D/g, '');
    if (value > 30) {
        obj.value = 30;
    } else {
        obj.value = value;
    }
}

/**

Utility to load in beach data sets upon first press of a key. This is asists in autofilling beaches in beachData.js file
*/
function autoFillBeach(nameString) {
    document.getElementsByName(nameString)[0].onkeydown = function (e) {
        if (this.value.length == 1) {
            loadBeachData(this.value);
        }
    }
}
