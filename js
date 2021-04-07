var randomNumber = Math.floor(Math.random() * 10) + 1;
function MainFunction(){
    input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("questions").innerHTML = input + " was your question";
};


//#region  switch statments
function MagicResponse(){
    
    switch ('8Ball') {
        case 1:
        answer = "Yes"
        break;

        case 2:
        answer = "No"
        break;

        case 3:
        answer = "I dont know that one"
        break;

        case 4:
        answer = "not sure"
        break;

        case 5:
        answer = "absolutly"
        break;

        case 6:
        answer = "What kind of a question was that"
        break;

        case 7:
        answer = "that somthing you have to find out on your own"
        break;

        case 8:
        answer = "very likely"
        break;

        case 9:
        answer = "... ... ..."
        break;

        case 0:
        answer = "should i even answer that"
        break;
    }
    document.getElementById("8Ball").innerHTML = input + " was my response";
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(input);

    return answer;
    
}

//#endregion
