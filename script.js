const passwordOptions = {
    num: "1234567890",
    specialChar: "!@#$%^'()*+,^-./:;<=>?[]_`{~}|",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

let generatePassword = function(){
    let passInfo = "";
    const passChars = [];

    let characterAmount = window.prompt("Enter the amount of characters you want for you password. NOTE: Must be at least 8 characters long");
    if(characterAmount >= 8 && characterAmount < 129){
        const getInteger = window.confirm("Would you like to include numbers?");
        if(getInteger){
            passInfo += passwordOptions.num;
            passChars.push(getRandomChar(passwordOptions.num));
        };

        const getSpecialCharacters = window.confirm("Would you like to include Special characters?");
        if(getSpecialCharacters){
            passInfo += passwordOptions.specialChar;
            passChars.push(getRandomChar(passwordOptions.specialChar));
        };
        const getLowerCase = window.confirm("Would you like to include Lowercase characters?");
        if(getLowerCase){
            passInfo += passwordOptions.lowerCase;
            passChars.push(getRandomChar(passwordOptions.lowerCase));
        };

        const getUpperCase = window.confirm("Would you like to include Uppercase characters?");

        if(getUpperCase){
            passInfo += passwordOptions.upperCase;
            passChars.push(getRandomChar(passwordOptions.upperCase));
        };
        if(!passInfo){
            window.alert("You need to select at least one option, please try again!");

            return generatePassword();
        };

        while(passChars.length < characterAmount){
            passChars.push(getRandomChar(passInfo));
        };

        for(let i = passChars.length - 1; i >0; i--){
            const swapIndex = Math.floor(Math.random() * (i+1));
            const temp = passChars[i];
            passChars[i] = passChars[swapIndex];
            passChars[swapIndex] = temp;
        };

        return passChars.join("");
    }
    else{
        window.alert("You need to provide a valid length!");
        return initialState;
    }
};

let getRandomChar = function(fromString){
    return fromString[Math.floor(Math.random() * fromString.length)];
}

let generateBtn = document.querySelector("#generate");


function writePassword(){
    
}