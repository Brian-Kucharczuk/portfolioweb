function changeSobreMi(){

    var x = document.getElementById('sobre-mi');
    var y = document.getElementById('proyectos');
    var z = document.getElementById('contacto');

    x.style.display = 'flex';
    y.style.display = 'none';
    z.style.display = 'none';

}

function changeProyectos(){
    var x = document.getElementById('sobre-mi');
    var y = document.getElementById('proyectos');
    var z = document.getElementById('contacto');

    x.style.display = 'none';
    y.style.display = 'flex';
    z.style.display = 'none';
}

function changeContacto(){

    var x = document.getElementById('sobre-mi');
    var y = document.getElementById('proyectos');
    var z = document.getElementById('contacto');

    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'flex';

}




