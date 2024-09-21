var x = document.querySelector(".container");

x.addEventListener("click", function (y) {
    var z = y.target;
    if (z.matches(".box")) {
        var a = z.getAttribute("data-change");

        if (a === "hidden") {
            z.textContent = z.dataset.num;
            z.dataset.change = "visible";
        } else {
            z.textContent = "";
            z.setAttribute("data-change", "hidden");
        }
    }
});