var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// create ordered list element 
var listEl = document.createElement("ol");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Cat";
favoriteEl.textContent = "My favorite foods are:";

// Add text for list items
li1.textContent = "Chakkin 🍗 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Milk 🥛 ";
li4.textContent = "Frut 🍒 ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

// Append ordered list
favoriteEl.appendChild(listEl);
// Append list items to ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50% text-align:center;");
imgEl.setAttribute("src", "../M04_Web_APIs/assets/images/cat-123.png");
imgEl.setAttribute("style", "height:250px; width:250px; margin-left:400px;");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

listEl.setAttribute("style", " color:white; background: #333333; padding: 20px; ");
li1.setAttribute("style", "color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", "color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", "color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", "color:white; background: #999999; padding: 5px; margin-left: 35px;");