/* Source: https://everythingmoe.com/static/index.min.js */
document.addEventListener("DOMContentLoaded",(function(){var e=isStorage("localStorage"),t=!0,n=!1;if(e){renderBookmark();var i=localStorage.getItem("announcementHide"),o=parseInt(localStorage.getItem("announcementShow"));isNaN(o)&&(o=Date.now(),localStorage.setItem("announcementShow",o)),null===i?localStorage.setItem("announcementHide","false"):"false"===i&&Date.now()-o>18e5&&(displayAnnouncement(),t=!1,n=!1);var a=localStorage.getItem("PWAHide");null!==a&&Date.now()-parseInt(a)<6048e5&&(t=!1)}-1!==window.location.search.indexOf("nsfw=true")&&history.replaceState("","",window.location.pathname+window.location.hash),blurON=-1!==eID("tBlurEl").innerHTML.indexOf("eye-off");var l=location.hash,s="&"+location.search.slice(1);-1!==s.indexOf("&section=")?standAlone("sec-"+s.split("&section=").pop().split("&")[0]):"#scroll"===l?scrolltop():0===l.indexOf("#section-")?standAlone(l.replace("#section-","sec-")):0===l.indexOf("#fullpage-")?fullpageView(l.substring(10)):0===l.indexOf("#scroll-")&&(scrollToEl(l.replace("#scroll-","sec-")),setTimeout((function(){history.replaceState("","",window.location.pathname)}),500)),t&&window.innerWidth<1e3&&handlePWA();var r=null,c=eID("search-btn"),d=eID("search-input"),p=eID("section-input"),m=eID("sec-topcontainer").firstElementChild;d.addEventListener("keyup",(function(e){clearTimeout(r);var t=d.value.replace(/[^a-zA-Z0-9 .\-:]+/g," ").trim().toLowerCase();if(t.length<2)eID("search-result").innerHTML="",c.innerHTML='<i class="mdil mdil-magnify"></i>',c.style.color="",querytemp="";else if(t!==querytemp)r=setTimeout((function(){var e=p.value;""===e&&(e="any"),search(t,e),c.innerHTML="x",c.style.color="#ff7a7a"}),300);else if("Enter"===e.key){var n=document.getElementById("jump-btn");n&&n.click()}})),p.addEventListener("change",(function(){var e=d.value.replace(/[^a-zA-Z0-9 .\-:]+/g," ").trim().toLowerCase();if(e.length>1){clearTimeout(r);var t=p.value;""===t&&(t="any"),search(e,t),c.innerHTML="x",c.style.color="#ff7a7a"}}));var u=eID("content-search");c.addEventListener("click",(function(){if("x"!==this.innerHTML)return infoCard("Query too short"),void d.focus();eID("search-result").innerHTML="",d.value="",this.innerHTML='<i class="mdil mdil-magnify"></i>',this.style.color="",querytemp="",u.style.display="",m.className="section topinfo"})),eID("opensearchbtn").addEventListener("click",(function(){if(""===u.style.display){var e=eID("expand-close");e||(e=eID("fullpage-close")),e&&e.click(),d.placeholder="Search",u.style.display="block",d.focus(),m.className="section topinfo-search"}else querytemp="",u.style.display="",m.className="section topinfo"}));var f,v=new XMLHttpRequest;if(v.open("GET","/data/cache/main.json"),v.timeout=15e3,v.onloadend=function(){if(200===v.status){var e=tryJSON(v.responseText);!1!==e&&(expandCache=e)}},v.send(),function(){if("function"==typeof performance.getEntriesByType&&"navigate"===performance.getEntriesByType("navigation")[0].type){if(e){var t=localStorage.getItem("statslimiter");if(null!==t&&Date.now()-parseInt(t)<36e5)return;localStorage.setItem("statslimiter",Date.now())}var n=document.referrer;""!==n&&-1===n.indexOf("//"+location.host)||(n="-");var i=window.screen.width+"x"+window.screen.height,o=new XMLHttpRequest,a="?mode=pwa"===location.search,l=eID("sec-bookmark").children[1].children.length;o.open("POST","/backend/info"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send("ref="+encodeURIComponent(n)+"&screen="+i+"&ispwa="+a+"&bookmark="+l+"&platform="+navigator.platform)}}(),window.addEventListener("popstate",(function(e){if(e.state)void 0!==e.state.section?standAlone(e.state.section,!1):void 0!==e.state.fullpage&&fullpageView(e.state.fullpage,!1);else{var t=eID("expand-close");t||(t=eID("fullpage-close")),t&&(isPop=!0,t.click(),isPop=!1)}})),window.innerWidth>1e3){var h=window.document.createElement("div");h.id="toTopBtn",h.addEventListener("click",scrolltop),h.innerHTML='<i class="mdil mdil-chevron-up"></i>',document.body.appendChild(h);var g=!0;document.addEventListener("scroll",(function(){g&&window.scrollY>200?(g=!1,h.style.display="block"):!g&&window.scrollY<200&&(g=!0,h.style.display="")}))}n&&document.getElementsByClassName("multi-container")[0].insertBefore(((f=window.document.createElement("div")).className="section-ad",f.innerHTML="<div class=\"xadbtn\" onclick=\"this.parentElement.remove()\">x</div><div style=\"margin:0 auto;width:300px;\"><iframe data-aa='2330593' src='//ad.a-ads.com/2330593?size=300x250' style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>",setTimeout((function(){f.scrollHeight<50&&f.remove()}),1e3),f),eID("sec-manga"))}));var initTime=Date.now();function openEditMenu(){var e=eID("editmenu");"block"===e.style.display?(e.style.display="none",eID("base-content").removeEventListener("click",openEditMenu)):(e.style.display="block",eID("base-content").addEventListener("click",openEditMenu))}function openMainMenu(){var e=eID("mainmenu");"block"===e.style.display?(e.style.display="none",eID("base-content").removeEventListener("click",openMainMenu)):(e.style.display="block",eID("base-content").addEventListener("click",openMainMenu))}function displayAnnouncement(){var e=document.getElementById("announcement-cont");null===e&&((e=document.createElement("div")).id="announcement-cont",e.innerHTML='<div id="announcement-bar">Check our anime streaming hub <a href="/kuroiru.html"> here</a></div>',document.body.appendChild(e)),e.style.display="block",eID("header-replace").style.height="70px"}function handlePWA(){var e,t=eID("pwaBanner");t.innerHTML='<img src="/static/android-icon-48x48.png" style="height:25px;margin-bottom:-7px;margin-right:5px;">EverythingMoe PWA available<div id="pwaClose">x</div><button id="pwaButton">Install PWA</button>',window.addEventListener("beforeinstallprompt",(n=>{n.preventDefault(),e=n,t.style.display="block",eID("foot-cont").style.marginBottom="45px"})),eID("pwaButton").addEventListener("click",(t=>{e.prompt(),e.userChoice.then((e=>{"accepted"===e.outcome&&setTimeout((function(){infoCard("Added to your homescreen",1e4)}),2e3)}))})),t.addEventListener("click",(()=>{t.style.display="none",isStorage("localStorage")&&localStorage.setItem("PWAHide",Date.now())}))}function scrolltoItem(e,t){if("dead"!==e){t=parseInt(t);var n=null,i=eID("sec-"+e);if(null!==i){var o=i.getElementsByClassName("section-item");o[o.length-2].dataset.rank<t&&0===i.getElementsByClassName("lowcont")[0].children.length&&i.getElementsByClassName("section-morebtn")[0].click();for(var a=0;a<o.length;a++)if(parseInt(o[a].dataset.rank)===t){n=o[a];break}}null===n||blurON&&null===n.offsetParent?infoCard(blurON?"Blocked by NSFW filter":"Not Found"):(scrolltop(n.getBoundingClientRect().top+window.scrollY-100),n.style.border="1px solid #b5b572",setTimeout((function(){n.style.border=""}),1300))}else infoCard("This site was removed from index")}document.addEventListener("visibilitychange",(function(){Date.now()-initTime>216e5&&location.reload()})),document.addEventListener("keyup",(function(e){"f"!==e.key&&"F"!==e.key||(eID("search-input").focus(),0!==window.scrollY&&setTimeout(scrolltop,100))})),document.addEventListener("mousedown",(function(e){e.detail>1&&e.preventDefault()}));var isPop=!1;function standAlone(e,t=!0){var n=eID(e);if(n){var i=n.nextSibling,o=n.parentNode,a=n.getElementsByClassName("pin-button")[0];if(a&&(a.style.display="none"),t){var l="?section="+n.id.replace("sec-","");-1!==n.className.indexOf("nsfwsection")&&(l="?nsfw=true#section-"+n.id.replace("sec-","")),history.pushState({section:n.id},"",l)}var s=document.title,r=n.getElementsByClassName("section-title")[0].innerText;blurON&&(r=r.replace("NSFW","")),document.title=r.trim()+" - EverythingMoe";var c=eID("expand-bg");c.innerHTML='<div id="expand-top"><div id="expand-close"><i class="mdil mdil-arrow-left"></i></div><div class="expand-share" onclick="execshare()"><img src="/icons/share.png" alt=""> Share</div></div><div id="expand"></div>',document.body.style.overflow="hidden",eID("expand").appendChild(n),c.style.display="block",eID("expand-close").addEventListener("click",(function(){o.insertBefore(n,i),c.innerHTML="",c.style.display="",document.body.style.overflow="",document.title=s,isPop||history.pushState("","",window.location.pathname),scrollToEl(n.id,!1,!1,!0,!1),a&&(a.style.display="")}))}}const pagesExternal={fmhy:{url:"https://fmhy.net/videopiracyguide"}};function fullpageView(e,t=!0){if(void 0!==pagesExternal[e]){t&&history.pushState({fullpage:e},"","#fullpage-"+e);var n=pagesExternal[e].url,i=eID("expand-bg");i.innerHTML=`<div id="fullpage-close"><i class="mdil mdil-arrow-left"></i></div><iframe id="fullpage-frame" src="${n}"></iframe>`,document.body.style.overflow="hidden",i.style.display="block",eID("fullpage-close").addEventListener("click",(function(){i.innerHTML="",i.style.display="",document.body.style.overflow="",isPop||history.pushState("","",window.location.pathname)}))}}function scrollToEl(e,t=!1,n=!1,i=!0,o=!0){if(!blurON||"sec-hentai"!==e&&"sec-hentairead"!==e){t&&window.innerWidth<1e3&&setTimeout((function(){scrollToEl(e,!1,n,i)}),100);var a=eID(e);if(null!==a){if(0===e.indexOf("sec-")&&o&&history.replaceState("sec","","#"+e.replace("sec-","section-")),scrolltop(a.getBoundingClientRect().top+window.scrollY-70,n),i){var l=a.style.border;a.style.border="1px solid #b5b572",setTimeout((function(){a.style.border=l}),800)}}else infoCard("Item Not Found")}else infoCard("Blocked by NSFW filter")}function scrolltop(e=0,t=!0){e<0&&(e=0),"scrollBehavior"in document.documentElement.style&&t?window.scrollTo({top:e,behavior:"smooth"}):window.scroll(0,e)}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("sw.js")}));var querytemp="",lastSearch=0;function search(e,t="any"){if(!(e.length>200||e.length<2)){e=e.trim();var n="q="+encodeURIComponent(e);"any"!==t&&(n+="&section="+t),0===e.indexOf("tag:")&&(n="tag="+encodeURIComponent(e.split(":")[1]));var i=Date.now();lastSearch=i,querytemp=e;var o='<div id="search-result-info">Searching anime? go <a href="https://kuroiru.co/app">here</a></div>',a=new XMLHttpRequest;a.open("POST","/backend/search"),a.timeout=2e4,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onloadend=function(){if(!(i<lastSearch)){var e="",t=eID("search-result");if(200===a.status){var n=tryJSON(a.responseText);if(!1!==n&&n.length>0){t.innerHTML=function(e){for(var t,n,i,o,a="",l=0;l<e.length;l++)if("string"!=typeof e[l].jumpid){t="",n="",i="";var s="dead"===e[l].type;if(s&&(t=" section-dead"),void 0!==e[l].tags){o=e[l].tags.split(" ");for(var r=0;r<o.length;r++)"licensed"===o[r]?(t+=" section-licensed",e[l].link+='" rel="noreferrer'):"nsfw"===o[r]?(n+=' <span class="nsfwtag">NSFW</span>',t+=" nsfwsection",blurON||(i=' style="display:block"')):"torrent"===o[r]?n+=' <img style="height:13px;" src="/icons/utorrent.png">':n+=' <span class="addtag">'+o[r].toUpperCase()+"</span>"}n+=` <div class="addtag" style="cursor:pointer" onclick="scrolltoItem('${e[l].type}', '${e[l].rank.split(" ")[0]}')">#${e[l].rank}</div>`,link="#";var c=void 0!==e[l].id;s?c?link="/s/"+e[l].id:void 0!==e[l].tempid&&(link="/s/"+e[l].tempid):c?(link="/s/"+e[l].id,n+='<div class="morebtn clickable" onclick="expandinfo(this, \'search-'+e[l].id+'\')"><i class="mdil mdil-chevron-down"></i></div>'):void 0!==e[l].tempid?(link="/s/"+e[l].tempid,i+=' onclick="showAltB(this)"'):(link=e[l].link+'" target="_blank',i+=' onclick="showAltB(this)"'),a+=`<div ${i} class="section-item${t}"><a href="${link}" data-link="${e[l].link}" rel="noopener"><img src="${e[l].icon}"> ${e[l].title}</a> ${n}</div>`}else a+='<div id="jump-btn" onclick="scrollToEl(\'sec-'+e[l].jumpid+"', true, true)\">Jump to : "+e[l].text+' <i class="mdil mdil-arrow-down"></i></div>';return a}(n)+"<br>"+o+"<br>";var l=t.getElementsByClassName("morebtn");l.length>0&&l[0].click()}else e=!1!==n?"no result"+o:"failed"}else e=a.status>=500?"Search maintenance":"network error";""!==e&&(t.innerHTML='<div style="text-align:center" class="inegative">'+e+"</div><br>")}},a.ontimeout=function(){infoCard("Request timeout")},a.send(n)}}var blurON=!0;function toggleBlur(e=!1){var t=eID("tBlurEl");t.innerHTML="Loading...",t.setAttribute("onclick",""),!1!==e?history.replaceState("sec","","#scroll-"+e):""!==location.hash&&history.replaceState("sec","",location.pathname),blurON?(document.cookie="nsfw=true;max-age=7884000",navigator.cookieEnabled||-1!==document.cookie.indexOf("nsfw=true")?location.reload():(infoCard("Setting not saved because<br>your browser reject cookie"),t.innerHTML="Fail")):(document.cookie="nsfw=true;expires=Thu, 01 Jan 1970 00:00:01 GMT",location.reload())}var isJumpExpand=!1;function expandJumpMenu(){var e=eID("jump-expand"),t=eID("jump-menu");isJumpExpand?(e.style="",t.style.maxHeight="",e.innerHTML='<i class="mdil mdil-blank"></i>'):(t.style.maxHeight="none",e.style="padding:0;margin-top:20px;font-size:20px;background:none",e.innerHTML='<i class="mdil mdil-chevron-up"></i>'),isJumpExpand=!isJumpExpand}var expandCache={};function expandinfo(e,t){var n=e.parentElement;-1!==t.indexOf(" ")&&(t=t.replace(" ",""));var i="expand"+t,o=t.replace("bookmark-","").replace("search-","");n.id=i,e.removeAttribute("onclick"),e.innerHTML='<i class="mdil mdil-chevron-up"></i>';var a=document.createElement("div");if(a.innerHTML="<br>",a.className="section-expand",n.appendChild(a),"object"==typeof expandCache[o])s(expandCache[o]);else{var l=new XMLHttpRequest;l.open("GET","/data/expand/"+o+".json"),l.onloadend=function(){if(200===l.status){var e=tryJSON(l.responseText);!1!==e?(expandCache[o]=e,s(e)):a.innerHTML='<div style="text-align:center" class="inegative">failed</div><br>'}else a.innerHTML='<div style="text-align:center" class="inegative">network error</div><br>'},l.send()}function s(e){var t=' target="_blank"';-1!==a.parentElement.className.indexOf("licensed")&&(t+=' rel="noreferrer"');var n=a.parentElement.children[0].innerText,l='<div class="section-tag-cont"><a href="'+a.parentElement.children[0].dataset.link+'"'+t+'><div class="section-tags">'+n+' <i class="mdil mdil-link-variant"></i></div></a>';if(void 0!==e.altlink)for(var s=e.altlink.split("#"),r=0;r<s.length;r++){var c;l+='<a href="'+(c=-1!==s[r].indexOf("<<")?s[r].split("<<",2):["",s[r]])[1]+'"'+t+'><div class="section-tags">'+c[0]+' <i class="mdil mdil-link-variant"></i></div></a>'}var d='<div style="clear:both;"></div>';-1===i.indexOf("expandbookmark-")&&(d+='<span class="bookmark-btn" onclick="bookmark(this)"><i class="mdil mdil-pin mdil-rotate-45"></i></span>'),l+=d+='<a href="/s/'+o+'"><span class="bookmark-btn"><i class="mdil mdil-comment"></i></span></a>',l+="</div>",l+='<div class="expand-base" onclick="closeinfo(\''+i+"')\">";var p=!1;if(void 0!==e.positive){l+="<span class='ipositive'>";var m=e.positive.split("#");for(r=0;r<m.length;r++)l+='<div class="indent">+ '+m[r]+"</div>";l+="</span>",p=!0}if(void 0!==e.negative){l+="<span class='inegative'>";for(m=e.negative.split("#"),r=0;r<m.length;r++)l+='<div class="indent">- '+m[r]+"</div>";l+="</span>",p=!0}void 0!==e.info&&(p&&(l+="<br>"),l+='<div class="footnote">'+e.info+"</div>"),l+='</div><div style="clear:both"></div>',a.innerHTML=l,a.style.height=a.scrollHeight+"px";var u=a.getElementsByClassName("section-tags");for(let e=0;e<u.length;e++)u[e].addEventListener("click",f);function f(){var e=new XMLHttpRequest;e.open("POST","/backend/info"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("out="+encodeURIComponent(o)+"&pageType=idx")}}setTimeout((function(){e.setAttribute("onclick","closeinfo('"+i+"')")}),100)}function closeinfo(e){var t=eID(e),n=t.children.length-2;t.children[n].innerHTML='<i class="mdil mdil-chevron-down"></i>',t.children[n].setAttribute("onclick",""),t.children[n+1].style.height="0px",setTimeout((function(){t.children[n].setAttribute("onclick","expandinfo(this, '"+e.replace("expand","")+"');"),t.children[n+1].remove()}),160)}function filterSection(e,t,n=!1){var i=eID("sec-"+e),o=i.getElementsByClassName("filter-menu")[0],a=[],l=i.dataset.activefilter;if(l&&(a=l.split(", ")),"any"===t)a=[],i.dataset.activefilter="";else if(n){var s=a.indexOf(t);if(s<0)return;a.splice(s,1),i.dataset.activefilter=a.join(", ")}else{if(-1!==a.indexOf(t))return;a.push(t),i.dataset.activefilter=a.join(", ")}if(a.length>0){var r='<div class="filter-tags-cont">';for(let t=0;t<a.length;t++)r+=`<div class="filter-tags" onclick="filterSection('${e}', '${a[t]}', true)">${a[t]}</div>`;o.innerHTML=r+"</div>"}else o.innerHTML="";var c=i.getElementsByClassName("section-morebtn")[0],d=eID("lowcont-"+e);d&&void 0!==c&&(d.dataset.activefilter=i.dataset.activefilter,-1!==c.getAttribute("onclick").indexOf("expand")&&(d.style.transition="none",c.click(),setTimeout((function(){d.style.transition=""}),600)));for(var p=0,m=i.getElementsByClassName("section-item"),u=0;u<m.length-1;u++)a.length<1||m[u].dataset.filter&&a.every((function(e){return-1!==m[u].dataset.filter.indexOf(e)}))?(m[u].style.display="",p++):"Uncategorized"!==t||m[u].dataset.filter?m[u].style.display="none":(m[u].style.display="",p++);var f=i.getElementsByClassName("sec-count")[0];(f&&(f.innerHTML=`(${p})`,f.style.display="inline-block"),a.length<1&&"any"!==t)&&(i.getElementsByClassName("filter-input")[0].selectedIndex=0);p<1&&(o.innerHTML+='<div style="text-align:center;margin:20px 0 5px 0;">no result</div>')}function expandsection(e,t,n){var i=eID("lowcont-"+t),o="section"+t;if("object"==typeof expandCache[o])e.innerHTML='<i class="mdil mdil-chevron-up"></i> hide',l(expandCache[o],n);else{e.innerHTML="loading...";var a=new XMLHttpRequest;a.open("GET","/data/lowsec/"+t+".json"),a.timeout=7e3,a.onloadend=function(){if(200===a.status){var t=tryJSON(a.responseText);!1!==t?(expandCache[o]=t,e.innerHTML='<i class="mdil mdil-chevron-up"></i> hide',l(t,n)):e.innerHTML='<span class="inegative">failed</span>'}else e.innerHTML='<span class="inegative">network error</span>'},a.ontimeout=function(){e.innerHTML='<br><span class="inegative">network timeout</span>'},a.send()}function l(e,t){var n,o,a,l,s,r,c="",d=[],p=i.dataset.activefilter;p&&(d=p.split(", "));for(var m=0;m<e.length;m++){if(n=" section-lowq",o="",a="",s=t+m,void 0!==e[m].tags){l=e[m].tags.split(" ");for(var u=0;u<l.length;u++)"licensed"===l[u]?(n+=" section-licensed",e[m].link+='" rel="noreferrer'):"nsfw"===l[u]?(o+=' <span class="nsfwtag">NSFW</span>',n+=" nsfwsection",blurON||(a=' style="display:block"')):"down"===l[u]?o+=' <span class="addtag tag-down">DOWN</span>':"torrent"===l[u]?o+=' <span class="img-tag"><img src="/icons/utorrent.png"></span>':o+=' <span class="addtag">'+l[u].toUpperCase()+"</span>"}void 0!==e[m].filter&&(a+=' data-filter="'+e[m].filter+'"'),d.length>0&&(e[m].filter&&d.every((function(t){return-1!==e[m].filter.indexOf(t)}))||(a='style="display:none" '+a)),r=e[m].link,void 0!==e[m].id?(r="/s/"+e[m].id,o+='<div class="morebtn clickable" onclick="expandinfo(this, \''+e[m].id+'\')"><i class="mdil mdil-chevron-down"></i></div>'):void 0!==e[m].tempid?(r="/s/"+e[m].tempid,a+=' onclick="showAltB(this)"'):a+=' onclick="showAltB(this)"',c+=`<div data-rank="${s}" ${a} class="section-item${n}">${s}. <a href="${r}" data-link="${e[m].link}" rel="noopener"><img src="${e[m].icon}"> ${e[m].title}</a> ${o}</div>`}i.innerHTML=c,i.style.height=i.scrollHeight-2+"px",setTimeout((function(){i.style.height="unset"}),500)}e.setAttribute("onclick","closesection(this, '"+t+"', "+n+")")}function closesection(e,t,n){var i=eID("lowcont-"+t);i.style.height=i.scrollHeight-2+"px",e.innerHTML='<i class="mdil mdil-chevron-down"></i> low ranks',e.removeAttribute("onclick"),setTimeout((function(){i.style.height="0px"}),10),setTimeout((function(){i.innerHTML="",e.setAttribute("onclick","expandsection(this, '"+t+"', "+n+");")}),400),scrolltop(window.scrollY-i.scrollHeight)}var editModeON=!1;function editModeB(){editModeON=!editModeON,renderBookmark()}function showAltB(e){var t=!1;0!==e.getElementsByClassName("esdhgboj").length&&(t=!0);for(var n,i=document.getElementsByClassName("esdhgboj");i.length>0;)i[0].remove();t||((n=document.createElement("div")).className="bookmark-btn-alt esdhgboj",n.setAttribute("onclick","bookmark(this, true)"),n.innerHTML='<i class="mdil mdil-pin mdil-rotate-45"></i>',e.appendChild(n),(n=document.createElement("a")).className="bookmark-btn-alt esdhgboj",n.href=e.children[0].dataset.link,n.setAttribute("target","_blank"),n.innerHTML='Link <i class="mdil mdil-link-variant"></i>',e.appendChild(n))}function bookmarkMove(e){var t=tryJSON(localStorage.getItem("bookmarksdata"));if("object"==typeof t){if(e>t.length-1||e<1)return void infoCard("Item already at the top");var n=t[e];t[e]=t[e-1],t[e-1]=n,localStorage.setItem("bookmarksdata",JSON.stringify(t)),renderBookmark()}else infoCard("Localstorage fail")}function unbookmark(e){var t=e.parentNode.id;0===t.indexOf("expand")&&(t=t.substring(6));var n=tryJSON(localStorage.getItem("bookmarksdata")),i=[];if("object"==typeof n){for(var o=0;o<n.length;o++)n[o].id!==t&&i.push(n[o]);if(infoCard("Bookmark removed"),i.length<1)return eID("sec-bookmark").style.display="none",void localStorage.removeItem("bookmarksdata");localStorage.setItem("bookmarksdata",JSON.stringify(i)),renderBookmark()}else infoCard("Localstorage fail")}function bookmark(e,t=!1){if(!1!==isStorage("localStorage")){var n,i,o="";if(t){o=e.parentElement.children[0].dataset.link;var a=document.createElement("a");a.href=o,i="alt-"+a.hostname,n=e.parentNode}else i="bookmark-"+(n=e.parentNode.parentNode.parentNode).id.substring(6);var l=-1!==n.id.indexOf("search-");l&&(i=i.replace("search-",""));var s=localStorage.getItem("bookmarksdata"),r=[];if(null!==s){if(-1!==s.indexOf('"'+i+'"')){infoCard("Already bookmarked"),t||l||closeinfo(n.id);for(var c=eID("sec-bookmark").children[1].children,d=0;d<c.length;d++)if(-1!==c[d].id.indexOf(i)){c[d].style="background-color:#282825;outline:1px solid #939354;position:relative;z-index:2;",setTimeout((function(){c[d].style=""}),1500),f(c[d]);break}return}!1===(r=tryJSON(s))&&(r=[])}var p=n.innerHTML,m="<a href="+p.substring(p.indexOf("href=")+5,p.indexOf('<div class="'));t&&o&&(m=m.replace(/href=".*?"/,'href="'+o+'"')),r.push({id:i,body:m}),localStorage.setItem("bookmarksdata",JSON.stringify(r)),renderBookmark(),t||l||closeinfo(n.id);var u=(c=eID("sec-bookmark").children[1].children)[c.length-1];u.style.backgroundColor="#282825",u.style.outline="1px solid #939354",setTimeout((function(){u.style.backgroundColor="",u.style.outline=""}),1500),f(u)}else infoCard("Your browser reject localstorage");function f(t){var n=t.getBoundingClientRect().top+window.scrollY-e.getBoundingClientRect().top;l?setTimeout((function(){scrolltop(n)}),100):scrolltop(n)}}function renderBookmark(e=!1){if(!e||!1!==isStorage("localStorage")){var t=localStorage.getItem("bookmarksdata");if(null!==t)if("object"==typeof(t=tryJSON(t))&&t.length>0){for(var n,i,o="",a=0;a<t.length;a++)n="",-1!==t[a].body.indexOf('"nsfwtag"')&&(n=blurON?"nsfwsection":'nsfwsection" style="display:block'),o+='<div class="section-item '+n+'" id="'+t[a].id+'">',i="",editModeON&&(i='<div onclick="bookmarkMove('+a+')" class="bookmark-btn-alt"><i class="mdil mdil-chevron-up"></i></div> <div onclick="unbookmark(this)" class="bookmark-btn-alt"><i style="color:#f09393" class="mdil mdil-delete"></i></div>'),-1===t[a].id.indexOf("alt-")&&(i+=`<div class="morebtn clickable" onclick="expandinfo(this, '${t[a].id}')"><i class="mdil mdil-chevron-down"></i></div>`),o+=1+a+". "+t[a].body+i+" </div>";var l=eID("sec-bookmark");l.children[1].innerHTML=o,l.style.display="block"}else localStorage.removeItem("bookmarksdata")}}function execshare(){var e=location.href;navigator.share?navigator.share({title:document.title,url:e}):(!function(e){if("function"==typeof navigator.clipboard.writeText)navigator.clipboard.writeText(e).catch((e=>{console.log(e)}));else{const t=function(t){t.preventDefault(),t.clipboardData.setData("text/plain",e)};document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t)}}(e),infoCard("Link copied to clipboard"))}var iCardVisible=!1;function infoCard(e,t=1500){var n=document.getElementById("floating-info");null===n&&((n=document.createElement("div")).id="floating-info",document.body.appendChild(n));var i=setInterval((function(){iCardVisible||(iCardVisible=!0,n.innerHTML=e,n.style.display="block",setTimeout((function(){n.style.top="47px"}),50),setTimeout((function(){n.style.top=""}),t+500),setTimeout((function(){n.style.display="none",iCardVisible=!1}),t+1e3),clearInterval(i))}),50)}function eID(e){return document.getElementById(e)}function isStorage(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return!1}}function tryJSON(e){try{return JSON.parse(e)}catch(e){return!1}}

