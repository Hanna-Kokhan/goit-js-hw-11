import{a as c,S as f,i as n}from"./assets/vendor-BqSmJx-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="48886188-3f23dcecdc45a7bc3ec26601c",d="https://pixabay.com/api/";function u(s){return c.get(d,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(t.data.hits.length===0&&iziToast.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#ffffff",messageSize:"16px",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!"}),t.data.hits))}let g=new f(".gallery a");function m(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(r=>`
      <li class='gallery-item'>
  <a href="${r.largeImageURL}" class='gallery-link'>
    <img class='gallery-img' src="${r.webformatURL}" alt="${r.tags}" />
    <div class="image-info">
      <div class="info-block">
        <p>Likes</p>
        <span>${r.likes}</span>
      </div>
      <div class="info-block">
        <p>Views</p>
        <span>${r.views}</span>
      </div>
      <div class="info-block">
        <p>Comments</p>
        <span>${r.comments}</span>
      </div>
      <div class="info-block">
        <p>Downloads</p>
        <span>${r.downloads}</span>
      </div>
    </div>
  </a>
</li>
`).join(""),g.refresh()}const y=document.querySelector(".search-form"),l=document.querySelector(".loader"),h=document.querySelector(".gallery");y.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){n.warning({messageColor:"#fff",iconColor:"#fff",title:"",message:"Please enter a search query!",position:"topRight"});return}l.style.display="block",h.innerHTML="",u(t).then(r=>{m(r)}).catch(r=>{n.error({messageColor:"#fff",color:"#fff",title:"",message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",marginRight:"36px",width:"432px",height:"88px",borderBottom:"2px solid #ffbebe",borderRadius:"4px",titlecolor:"#fff",top:"20px",right:"20px"})}).finally(()=>{l.style.display="none"}),s.target.reset()});
//# sourceMappingURL=index.js.map
