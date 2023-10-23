window.addEventListener('scroll', function() {
    var navegacion = this.document.querySelector('.navegacion');
    var scrollPos = this.window.scrollY || this.window.scrollTop || this.document.getElementsByTagName("html")[0].scrollTop;

    if (scrollPos <= 0) {
        navegacion.style.backgroundColor = 'rgba(37, 82, 163, 1)'; 
    } else {
        navegacion.style.backgroundColor = 'rgba(37, 82, 163, 0.8)';
    }
})