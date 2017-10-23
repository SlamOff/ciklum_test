document.addEventListener('DOMContentLoaded', function(event) { 

    function eventFunc(e, elem){
        for (var i = 0; i < elem.length; i++){
            elem[i].classList.remove('active');
        }
        e.target.parentNode.classList.add('active');
    }
    var menu = document.getElementById('menu');
    var menuItem = menu.children;
    var langWrapper = document.getElementById('lang');
    var lang = langWrapper.querySelectorAll('.lang');

    langWrapper.addEventListener('click', function(e){
        eventFunc(e, lang);
    });
    menu.addEventListener('click', function(e){
        eventFunc(e, menuItem);
    });
    var dropdown = document.querySelectorAll('.dropdown');
    for (var j = 0; j < dropdown.length; j++){
        dropdown[j].addEventListener('mouseover', function(e){
            this.children[this.children.length - 1].style.display = "block";
        });
        dropdown[j].addEventListener('mouseout', function(e){
            this.children[this.children.length - 1].style.display = "none";
        });
    }
    var accordionTitle = document.querySelectorAll('.sidebar h6');
    for (var k = 0; k < accordionTitle.length; k++){
        accordionTitle[k].addEventListener('click', function(){
            if(this.nextElementSibling.classList[0] == 'active'){
                this.nextElementSibling.classList.remove('active');
                this.firstChild.textContent = 'Click to open';
                this.lastChild.classList.remove('transformed');
                return;
            }
            var p = document.querySelectorAll('.sidebar__widget__item p');
            for (var l = 0; l < p.length; l++){
                p[l].classList.remove('active');
                var h6 = p[l].previousElementSibling;
                var span = h6.firstChild;
                h6.lastChild.classList.remove('transformed');
                span.textContent = 'Click to open';
            }
            this.nextElementSibling.classList.toggle('active');
            this.firstChild.textContent = 'Click to close';
            this.lastChild.classList.add('transformed');
        });
    }
    window.onscroll = function(){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        header = document.querySelector('.header'),
        style = getComputedStyle(header),
        headerHeight = parseInt(style.height);
        if(scrolled > headerHeight){
            header.classList.add('header--scrolled');
        }
        else {
            header.classList.remove('header--scrolled');
        }
    }
});