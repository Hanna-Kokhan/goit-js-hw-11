import{a as c,S as f,i as n}from"./assets/vendor-BqSmJx-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="48886188-3f23dcecdc45a7bc3ec26601c",p="https://pixabay.com/api/";function u(s){return c.get(p,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(r.data.hits.length===0&&iziToast.warning({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#ffffff",iconColor:"#fff",messageSize:"16px",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!"}),r.data.hits))}let g=new f(".gallery a");function m(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(o=>`
      <li class='gallery-item'>
  <a href="${o.largeImageURL}" class='gallery-link'>
    <img class='gallery-img' src="${o.webformatURL}" alt="${o.tags}" />
    <div class="image-info">
      <div class="info-block">
        <p>Likes</p>
        <span>${o.likes}</span>
      </div>
      <div class="info-block">
        <p>Views</p>
        <span>${o.views}</span>
      </div>
      <div class="info-block">
        <p>Comments</p>
        <span>${o.comments}</span>
      </div>
      <div class="info-block">
        <p>Downloads</p>
        <span>${o.downloads}</span>
      </div>
    </div>
  </a>
</li>
`).join(""),g.refresh()}const y=document.querySelector(".search-form"),l=document.querySelector(".loader"),h=document.querySelector(".gallery");y.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(!r){n.show({messageColor:"#fff",iconColor:"#fff",iconUrl:"./img/bi_x-octagon.svg",title:"",message:"Please enter a search query!",position:"topRight"});return}l.style.display="block",h.innerHTML="",u(r).then(o=>{m(o)}).catch(o=>{n.show({messageColor:"#fff",color:"#fff",iconColor:"#fff",iconUrl:"./img/bi_x-octagon.svg",backgroundColor:"#ef4040",title:"",message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",maxWidth:"432px",borderBottom:"2px solid #ffbebe",borderRadius:"4px",titlecolor:"#fff",top:"20px",right:"20px"})}).finally(()=>{l.style.display="none"}),s.target.reset()});
//# sourceMappingURL=index.js.map
