function validate(){
    var day = Number(document.getElementById("day-to-earth").value);
    var month = Number(document.getElementById("month-to-earth").value);
    var year = Number(document.getElementById("year").value);
    var century = Number(document.getElementById("century").value);
    var genderSelected = document.getElementsByName("gender");
    function genderPicked() {
        for (var gender of genderSelected) {
            if (gender.checked){
                return gender.value;
            }
        }
    }
    var genderValue = genderPicked();
    function dayValid () {
        if (day < 0 || day > 31) {
            alert("Invalid day")
            return false;
        } else {
            return true;
        }
    }
    function monthValid () {
        if (month < 0 || month > 12) {
            alert ("Invalid month");
            return false;
        } else {
            return true;
        }
    }
  
    var isDayValid = dayValid();
    var isMonthValid = monthValid();

    var dayIndex = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7);
 var akanName;
    if (genderValue === "male") {
        switch(dayIndex) {
                case 0:
            akanName = "Kwasi";
            alert("Hey, Your Akan name is Kwasi since you were born on Sunday.");
            break;
            case 1:
            akanName = "Kwadwo";
            alert("Hey, Your Akan name is Kwadwo since you were born on Monday.");
            break;
            case 2:
            akanName = "Kwabena";
            alert("Hey, Your Akan name is Kwabena since you were born on Tuesday.");
            break;
            case 3:
            akanName = "Kwaku";
            alert("Hey, Your Akan name is Kwaku since you were born on Wednesday.");
            break;
            case 4:
            akanName = "Yaw";
            alert("Hey, Your Akan name is Yaw since you were born on Thursday.");
            break;
            case 5:
            akanName = "Kofi";
            alert("Hey, Your Akan name is Kofi since you were born on Friday.");
            break;
            case 6:
            akanName = "Kwame";
            alert("Hey, Your Akan name is Kwame since you were born on Saturday.");
            break;
            default:
            akanName = "Please input the correct details!"
            alert("Please input the correct details!");
        }
    } else if (genderValue = "female") {
        switch(dayIndex) {
                case 0:
                akanName = "Akosua";
                alert("Hey, Your Akan name is Akosua since you were born on Sunday.");
                break;
                case 1:
                akanName = "Adwoa";
                alert("Hey, Your Akan name is Adwoa since you were born on Monday.");
                break;
                case 2:
                akanName = "Abenaa";
                alert("Hey, Your Akan name is Abenaa since you were born on Tuesday.");
                break;
                case 3:
                akanName = "Akua";
                alert("Hey, Your Akan name is Akua since you were born on Wednesday.");
                break;
                case 4:
                akanName = "Yaa";
                alert("Hey, Your Akan name is Yaa since you were born on Thursday.");
                break;
                case 5:
                akanName = "Afua";
                alert("Hey, Your Akan name is Afua since you were born on Friday.");
                break;
                case 6:
                akanName = "Ama";
                alert("Hey, Your Akan name is Ama since you were born on Saturday.");
                break;
                default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
            }
    } else {
                alert("Please try again with the correct data.");
    }
}