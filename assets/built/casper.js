!function(l){"use strict";l.fn.fitVids=function(e){var t,r,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(r.childNodes[1])),e&&l.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var i=".fitvidsignore";o.ignore&&(i=i+", "+o.ignore);e=l(this).find(e.join(","));(e=(e=e.not("object object")).not(i)).each(function(){var e,t,r=l(this);0<r.parents(i).length||"embed"===this.tagName.toLowerCase()&&r.parent("object").length||r.parent(".fluid-width-video-wrapper").length||(r.css("height")||r.css("width")||!isNaN(r.attr("height"))&&!isNaN(r.attr("width"))||(r.attr("height",9),r.attr("width",16)),e=("object"===this.tagName.toLowerCase()||r.attr("height")&&!isNaN(parseInt(r.attr("height"),10))?parseInt(r.attr("height"),10):r.height())/(isNaN(parseInt(r.attr("width"),10))?r.width():parseInt(r.attr("width"),10)),r.attr("name")||(t="fitvid"+l.fn.fitVids._count,r.attr("name",t),l.fn.fitVids._count++),r.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),r.removeAttr("height").removeAttr("width"))})})},l.fn.fitVids._count=0}(window.jQuery||window.Zepto);import Calendar from"tui-calendar";function toggle(e){if(e.classList.contains("fa-moon-o")){e.classList.remove("fa-moon-o"),e.classList.add("fa-sun-o"),document.body.style.background="rgb(10, 10, 10)",document.querySelector("#userName").style.color="#fff";var i=document.querySelectorAll(".grid-card-title");for(let e=0;e<i.length;e++)i[e].style.color="#fff";let t=document.querySelectorAll(".link");t[0].style.filter="grayscale(100%)";for(let e=0;e<t.length;e++)t[e].style.filter="grayscale(100%)";let r=document.querySelectorAll(".circle");r[0].style.filter="grayscale(100%)";for(let e=0;e<r.length;e++)r[e].style.filter="grayscale(100%)"}else{e.classList.remove("fa-sun-o"),e.classList.add("fa-moon-o"),e.style.color="#585858",document.body.style.background="rgb(243, 242, 242)",document.querySelector("#userName").style.color="rgb(99, 99, 99)";i=document.querySelectorAll(".grid-card-title");for(let e=0;e<i.length;e++)i[e].style.color="rgb(99, 99, 99)";let t=document.querySelectorAll(".link");t[0].style.filter="grayscale(0%)";for(let e=0;e<t.length;e++)t[e].style.filter="grayscale(0%)";let r=document.querySelectorAll(".circle");r[0].style.filter="grayscale(0%)";for(let e=0;e<r.length;e++)r[e].style.filter="grayscale(0%)"}}window,document,new Calendar("#calendar",{defaultView:"month",taskView:!0,template:{monthDayname:function(e){return'<span class="calendar-week-dayname-name">'+e.label+"</span>"}}}),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),r=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=r/e+" 1 0%"})})}((window,document)),function(t,r){var i,o,l,n,a,s,c,d=r.querySelector("link[rel=next]");function u(){if(404===this.status)return t.removeEventListener("scroll",h),void t.removeEventListener("resize",m);this.response.querySelectorAll("article.post-card").forEach(function(e){i.appendChild(r.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?d.href=e.href:(t.removeEventListener("scroll",h),t.removeEventListener("resize",m)),c=r.documentElement.scrollHeight,n=l=!1}function e(){var e;n||(a+s<=c-o?l=!1:(n=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",d.href),e.send(null)))}function f(){l||t.requestAnimationFrame(e),l=!0}function h(){a=t.scrollY,f()}function m(){s=t.innerHeight,c=r.documentElement.scrollHeight,f()}!d||(i=r.querySelector(".post-feed"))&&(n=l=!(o=300),a=t.scrollY,s=t.innerHeight,c=r.documentElement.scrollHeight,t.addEventListener("scroll",h,{passive:!0}),t.addEventListener("resize",m),f())}(window,document);
//# sourceMappingURL=casper.js.map