document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#21a1e1',
        lineColor: '#21a1e1'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);