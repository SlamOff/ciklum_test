"use strict";document.addEventListener("DOMContentLoaded",function(e){function t(e,t){for(var n=0;n<t.length;n++)t[n].classList.remove("active");e.target.parentNode.classList.add("active")}var n=document.getElementById("menu"),i=n.children,l=document.getElementById("lang"),s=l.querySelectorAll(".lang");l.addEventListener("click",function(e){t(e,s)}),n.addEventListener("click",function(e){t(e,i)});for(var o=document.querySelectorAll(".dropdown"),r=0;r<o.length;r++)o[r].addEventListener("mouseover",function(e){this.children[this.children.length-1].style.display="block"}),o[r].addEventListener("mouseout",function(e){this.children[this.children.length-1].style.display="none"});for(var d=document.querySelectorAll(".sidebar h6"),c=0;c<d.length;c++)d[c].addEventListener("click",function(){if("active"==this.nextElementSibling.classList[0])return this.nextElementSibling.classList.remove("active"),this.firstChild.textContent="Click to open",void this.lastChild.classList.remove("transformed");for(var e=document.querySelectorAll(".sidebar__widget__item p"),t=0;t<e.length;t++){e[t].classList.remove("active");var n=e[t].previousElementSibling,i=n.firstChild;n.lastChild.classList.remove("transformed"),i.textContent="Click to open"}this.nextElementSibling.classList.toggle("active"),this.firstChild.textContent="Click to close",this.lastChild.classList.add("transformed")});window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.querySelector(".header"),n=getComputedStyle(t);e>parseInt(n.height)?t.classList.add("header--scrolled"):t.classList.remove("header--scrolled")}});