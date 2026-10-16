const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{const box=document.querySelector('.lightbox');const img=box?.querySelector('img');if(box&&img){img.src=btn.dataset.full||btn.querySelector('img').src;box.classList.add('open');box.setAttribute('aria-hidden','false');}}));
const lightbox=document.querySelector('.lightbox');
if(lightbox){const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')};lightbox.querySelector('button')?.addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
// Native swipe carousel: works on touch screens and without external libraries.
document.querySelectorAll('[data-slider-prev]').forEach(button=>button.addEventListener('click',()=>{const track=document.getElementById(button.dataset.sliderPrev);if(track){track.scrollBy({left:-Math.max(260,track.clientWidth*.78),behavior:'smooth'});}}));
document.querySelectorAll('[data-slider-next]').forEach(button=>button.addEventListener('click',()=>{const track=document.getElementById(button.dataset.sliderNext);if(track){track.scrollBy({left:Math.max(260,track.clientWidth*.78),behavior:'smooth'});}}));
