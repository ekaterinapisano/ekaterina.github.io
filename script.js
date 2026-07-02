const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.card');
filters.forEach(button=>{button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;cards.forEach(card=>{card.style.display=filter==='all'||card.dataset.category===filter?'block':'none';});});});
const lightbox=document.querySelector('.lightbox');
const lightboxImg=document.querySelector('.lightbox img');
const closeBtn=document.querySelector('.close');
cards.forEach(card=>{card.addEventListener('click',()=>{const img=card.querySelector('img');lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add('active');lightbox.setAttribute('aria-hidden','false');});});
function closeLightbox(){lightbox.classList.remove('active');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';}
closeBtn.addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

