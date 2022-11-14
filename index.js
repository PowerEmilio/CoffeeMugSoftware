function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('chad');

        if (scroll > 400) {
            botonArriba.style.display = "block";
        } else{
            botonArriba.style.display = "none";
        }
    })
}

irArriba();