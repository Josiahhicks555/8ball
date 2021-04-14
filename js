var text;
var randomNumber = Math.floor(Math.random() * 10) + 1;
function MainFunction(){
    input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("questions").innerHTML = input + " was your question";
};


//#region switch statments

function MagicResponse(){


    switch (randomNumber) {
        
        case 1:
        text = "Yes";
        break;

        case 2:
        text = "No";
        break;

        case 3:
        text = "I dont know that one";
        break;

        case 4:
        text = "not sure";
        break;

        case 5:
        text = "absolutly";
        break;

        case 6:
        text = "What kind of a question was that";
        break;

        case 7:
        text = "that somthing you have to find out on your own";
        break;

        case 8:
        text = "very likely";
        break;

        case 9:
        text = "... ... ...";
        break;

        default:
        text = "should i even answer that";
        break;
    }

    console.log(input);
    document.getElementById("ball").innerHTML = input + " was my response";

    
}

//#endregion
