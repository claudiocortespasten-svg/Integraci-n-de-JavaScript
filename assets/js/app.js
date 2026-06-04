const btnArriba = document.getElementById("btn-arriba");

btnArriba.addEventListener("click", () => 
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);
window.addEventListener("scroll", () =>
    {
        if (window.scrollY > 100) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    }
);
