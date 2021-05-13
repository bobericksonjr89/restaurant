(()=>{"use strict";const e=function(e){e.className="",e.classList.add("grid-container","home-background","background");const t=function(){const e=document.createElement("div");e.classList.add("card","splash","span-6","swoop-in");const t=document.createElement("p");return t.classList.add("card-text","splash__text"),t.innerText="We invite you to join us for an Italian feast, a light snack, or even just a few drinks with friends.",e.appendChild(t),e}(),n=function(){const e=document.createElement("div");e.classList.add("card","mission","span-4","swoop-in");const t=document.createElement("p");return t.classList.add("card-text","mission__text"),t.innerText="Inspired by her adolescence in Italy, Chef Gianna Cafaro creates seasonal-focused menus featuring the finest ingredients, sourced locally and abroad, either cultivated on small farms, or foraged from the Earth.",e.appendChild(t),e}(),a=function(){const e=document.createElement("div");e.classList.add("card","contact-info","span-2","swoop-in");const t=document.createElement("p");t.classList.add("contact__hours"),t.innerText="5 – 9pm";const n=document.createElement("p");n.classList.add("contact__address"),n.innerText="2770 N. Adams St.";const a=document.createElement("p");return a.classList.add("contact__phone"),a.innerText="313-854-7626",e.append(t,n,a),e}();function c(){n.classList.add("show")}function s(){a.classList.add("show")}e.appendChild(t),e.appendChild(n),e.appendChild(a),setTimeout((function(){t.classList.add("show"),setTimeout(c,500),setTimeout(s,1e3)}),500)};!function(){const t=document.querySelector("#content");(function(e){const t=function(){const e=document.createElement("header");e.classList.add("menu","span-12");const t=document.createElement("h1");t.classList.add("menu__header");const n=document.createElement("a");n.classList.add("link","header__link"),n.innerText="Dandelion Greens",t.appendChild(n),e.appendChild(t);const a=function(){const e=document.createElement("nav");e.classList.add("nav");const t=document.createElement("ul");return t.classList.add("nav__list"),["About","Reservations","Contact"].forEach((e=>function(e,t){const n=document.createElement("li");n.classList.add("nav__item");const a=document.createElement("a");a.classList.add("link","nav__link",e.toLowerCase()),a.innerText=e,n.appendChild(a),t.appendChild(n)}(e,t))),e.appendChild(t),e}();return e.appendChild(a),e}();e.appendChild(t)})(t),e(t);const n=document.querySelector(".header__link"),a=document.querySelector(".about"),c=document.querySelector(".reservations"),s=document.querySelector(".contact");function d(){const e=t.childNodes;for(let n=e.length-1;n>1;n--)t.removeChild(e[n])}n.addEventListener("click",(function(){d(),e(t)})),a.addEventListener("click",(function(){d(),function(e){e.className="",e.classList.add("grid-container","about-background","background");const t=function(){const e=document.createElement("div");e.classList.add("span-6","card","about-card");const t=document.createElement("h2");t.classList.add("card__header"),t.innerText="About";const n=document.createElement("p");return n.classList.add("card-text"),n.innerText="Founded in 2018, Dandelion Greens is the brain child of Chef Gianna Cafaro and local restaurateur Liu Yuan. Here, we reminisce on the production and market styles of the Old World: individual, small-batch producers, artisan craftsmanship, and an eye towards quality of product and experience.",e.append(t,n),e}(),n=function(){const e=document.createElement("div");e.classList.add("span-6","card","menu-card");const t=document.createElement("h2");t.classList.add("card__header"),t.innerText="Menu";const n=document.createElement("p");return n.classList.add("card-text"),n.innerText="Our handwritten menus are seasonally driven and sourced, and therefore are updated daily.  Check out our pages on Instagram and Facebook to find today's selections.  Each night we additionally feature a tasting menu of 8-9 dishes with an optional add-on wine pairing.",e.append(t,n),e}();e.appendChild(t),e.appendChild(n)}(t)})),c.addEventListener("click",(function(){d(),function(e){e.className="",e.classList.add("grid-container","reservations-background","background");const t=function(){const e=document.createElement("div");e.classList.add("span-middle","card","reservations-card");const t=document.createElement("h2");t.classList.add("card__header"),t.innerText="Reservations";const n=document.createElement("form");n.classList.add("card__reservations-form");const a=document.createElement("label");a.setAttribute("for","name"),a.classList.add("card__form-label"),a.innerText="Name:";const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","name"),c.setAttribute("maxlength","40"),c.classList.add("card__form-input");const s=document.createElement("label");s.setAttribute("for","date"),s.classList.add("card__form-label"),s.innerText="Date:";const d=document.createElement("input");d.setAttribute("type","date"),d.setAttribute("name","date"),d.classList.add("card__form-input");const r=document.createElement("label");r.setAttribute("for","size"),r.classList.add("card__form-label"),r.innerText="Party size:";const o=document.createElement("input");o.setAttribute("type","number"),o.setAttribute("name","size"),o.setAttribute("max","12"),o.setAttribute("min","1"),o.classList.add("card__form-input");const i=document.createElement("input");return i.setAttribute("type","submit"),i.classList.add("card__submit"),n.append(a,c,s,d,r,o,i),e.append(t,n),e}();e.appendChild(t)}(t)})),s.addEventListener("click",(function(){d(),function(e){e.className="",e.classList.add("grid-container","contact-background","background");const t=function(){const e=document.createElement("div");e.classList.add("span-middle","card","contact-card");const t=document.createElement("h2");t.classList.add("card__header"),t.innerText="Contact Us";const n=document.createElement("div");n.classList.add("card__contact-container");const a=document.createElement("h3");a.classList.add("card__sub-header"),a.innerText="Address";const c=document.createElement("p");c.classList.add("card__contact-para"),c.innerText="2770 N. Adams St.";const s=document.createElement("h3");s.classList.add("card__sub-header"),s.innerText="Phone";const d=document.createElement("p");d.classList.add("card__contact-para"),d.innerText="313-854-7626";const r=document.createElement("h3");r.classList.add("card__sub-header"),r.innerText="Email";const o=document.createElement("p");return o.classList.add("card__contact-para"),o.innerText="ContactUs@DandelionGreens.com",n.append(a,c,s,d,r,o),e.append(t,n),e}();e.appendChild(t)}(t)}))}()})();