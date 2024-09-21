let students = ["စာဥ", "ထွေးညို", "သာလှ", "အောင်ကြီး", "ကိုရင်သာအေး"];

//students.(dot)lengthကိုသုံးပြု၍ array ရဲ့ရှည်ကိုရယူထားပါသည်။
console.log(students.length);

//for loop 
for (let i = 0; i < students.length; i++) {
    console.log('လှတောသားရွာရဲ့စံပြကျောင်းသားဖြစ်တဲ့, ' + students[i] + `ဖြစ်ပါတယ်`);
}