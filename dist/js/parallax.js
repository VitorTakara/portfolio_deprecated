document.addEventListener("DOMContentLoaded",function(e){if(!isMobile()){let e=0,t=0,n=0,a=0,r=1/30;window.addEventListener("mousemove",function(n){var a=Math.max(-100,Math.min(100,window.innerWidth/2-n.clientX)),r=Math.max(-100,Math.min(100,window.innerHeight/2-n.clientY));e=20*a/100,t=10*r/100}),function i(){n+=(e-n)*r,a+=(t-a)*r,translate="translate("+n+"px, "+a+"px) scale(1.1)";let o=document.querySelector(".site-bg")?document.querySelector(".site-bg"):document.querySelector(".index-bg");o.style.webkitTransform=translate,o.style.MozTransform=translate,o.style.msTransform=translate,o.style.OTransform=translate,o.style.transform=translate,window.requestAnimationFrame(i)}()}});