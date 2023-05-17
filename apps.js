//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if (menu_visible == false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display= "none";
        menu_visible= false;
    }
}

//ESTO OCULTA EL MENU UNA VEZ SELECCIONAS UNA OPCION
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//CREA BARRITAS TIPO UN LOADING
function crearBarra(id_barra){
    for(i=0;i <= 16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}