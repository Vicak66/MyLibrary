// Assignment code
var generateBtn = document.querySelector("#generate");

// Add event Listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    let passwordLength;
    let includeUpperCase;
    let includeLowerCase;
    let includeNumber;
    let includeSpecialCharacter;

    passwordLength = parseInt(prompt("၈-လုံးမှ ၁၂၈-လုံးအတွင်းရွေးချယ်ခတ်နိုင်သည်"));
    includeUpperCase = confirm('စာလုံးကြီးထည့်မလား');
    includeLowerCase = confirm('စာလုံးသေးလဲထည့်ချင်ထည့်ပါ');
    includeNumber = confirm('နံပါတ်တော့ထည့်လိုက်ပါ');
    includeSpecialCharacter = confirm('အထူးစာလုံးတေရောထည့်မလား');

    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('စာလေးသေချာဖတ်ပီး ပြန်လည်ကြိုးစားပါဗျာ!!!');
        return "";
    }


    if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharacter) {
        alert('နံပါတ်လေးတော့၊ ရွေးပေးပါဆို')
        return "";
    }


    let availableCharacter = "";
    if (includeUpperCase) {
        availableCharacter += 'ABCDEFGHIJKLMN';
    }

    if (includeLowerCase) {
        availableCharacter += 'abcdefghijklmn';
    }

    if (includeNumber) {
        availableCharacter += '0123456789';
    }

    if (includeSpecialCharacter) {
        availableCharacter += '!@#$%^&*+-<>?';
    }

    let password = "";
    for(let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * availableCharacter.length);
        password += availableCharacter.charAt(randomIndex);
    }

    return password;
}