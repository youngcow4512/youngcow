
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const toast=(m)=>{let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};
let cart=Number(localStorage.getItem('youngcow-cart')||0); const sync=()=>$$('.count').forEach(x=>x.textContent=cart); sync();
$$('.add').forEach(b=>b.onclick=()=>{cart++;localStorage.setItem('youngcow-cart',cart);sync();toast('Added to demo cart')});
$$('.heart').forEach(b=>b.onclick=()=>{b.classList.toggle('on');b.textContent=b.classList.contains('on')?'♥':'♡';toast(b.classList.contains('on')?'Saved to favorites':'Removed from favorites')});
$('.menu')?.addEventListener('click',()=>$('.navlinks')?.classList.toggle('open'));
const input=$('[data-search]'); if(input) input.addEventListener('input',()=>{const q=input.value.toLowerCase();$$('.product').forEach(p=>p.style.display=p.dataset.search.toLowerCase().includes(q)?'':'none')});
$$('.chip').forEach(c=>c.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');const f=c.dataset.filter;$$('.product').forEach(p=>p.style.display=(f==='all'||p.dataset.category===f)?'':'none')});
$$('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast('Demo form — connect your email or backend to activate');f.reset()}));
