$(document).ready(function() {
    alert('Pagina en desarrollo!!!');
    $(".carousel").carousel({
        interval: 5000
    });
    $(".btn-tool").tooltip();
    $(".btn-pop").popover();

    var contador =0;    
    setInterval(function(){
        if(contador <100){
            contador = contador + 1;
        }    
        
        var barra= document.querySelector("#barra-progreso");
        barra.style.width = contador + '%';
        barra.innerHTML = contador +'%';
    },1000);
    
});

