/* LEGACY Pro Wrestling 1.0 — deterministic Career Begin routing */
(function(){
  'use strict';

  function isThrowdownToday(){
    try{
      var c=typeof window.liveLoad==='function'?window.liveLoad():null;
      if(c&&Number(c.day)===3)return true;
    }catch(e){}
    var title=document.querySelector('.live-today h2');
    return !!(title&&/THROWDOWN/i.test(title.textContent||''));
  }

  function beginToday(event){
    if(event){
      event.preventDefault();
      event.stopPropagation();
      if(typeof event.stopImmediatePropagation==='function')event.stopImmediatePropagation();
    }
    if(isThrowdownToday()&&typeof window.gauntletLiveShowIntro==='function'){
      window.gauntletLiveShowIntro();
      return false;
    }
    if(typeof window.gauntletLiveBeginDay==='function'){
      window.gauntletLiveBeginDay();
      return false;
    }
    return false;
  }

  function wireBeginButton(){
    var button=document.querySelector('.live-today .live-primary');
    if(!button)return;
    button.type='button';
    button.removeAttribute('onclick');
    button.onclick=beginToday;
    button.dataset.lpwBeginWired='1';
  }

  document.addEventListener('click',function(event){
    var button=event.target&&event.target.closest?event.target.closest('.live-today .live-primary'):null;
    if(!button)return;
    beginToday(event);
  },true);

  var observer=new MutationObserver(function(){wireBeginButton();});
  observer.observe(document.documentElement,{subtree:true,childList:true});
  document.addEventListener('DOMContentLoaded',wireBeginButton);
  window.addEventListener('load',wireBeginButton);

  window.LPW10BeginToday=beginToday;
  window.LPW10WireBeginButton=wireBeginButton;
})();
