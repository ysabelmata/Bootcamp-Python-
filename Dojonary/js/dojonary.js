function alert_ninja(element) {
    window.alert("Ninja was liked");
    //console.log( element.querySelector( ".numlikes" ).innerText );
    let spanlikes = element.querySelector(".numlikes");
    numlikes = Number(spanlikes.textContent);
    numlikes += 1;
    console.log(numlikes);
    spanlikes.innerText = numlikes;
}

function logout(element) {
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}
