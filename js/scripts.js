function carga_contenido(file) {
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cv_html = this.responseText;
            console.log(cv_html)
            const body = document.getElementsByTagName('body')[0]
            body.innerHTML = ''
            body.innerText = ''
            body.innerHTML = cv_html;
        }
    }
    x.open("GET", file, true);
    x.send();
}

window.addEventListener('load', function() {
    carga_contenido('secciones/home.html');
});