!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");e(r).Notify.init({fontSize:"18px"});var u=document.querySelector(".form"),a=document.querySelector("button"),c={amount:0,delay:0,step:0},f=0;u.addEventListener("input",(function(e){c[e.target.name]=e.target.value})),a.addEventListener("click",(function(n){var t=function(n){var t=Number(c.delay)+Number(c.step)*n;setTimeout((function(){(function(e,n){return new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))})(f+=1,t).then((function(n){e(r).Notify.success("✅ Fulfilled promise ".concat(f," in ").concat(t,"ms"))}),(function(n){e(r).Notify.warning("❌ Rejected promise ".concat(f," in ").concat(t,"ms"))}))}),t)};n.preventDefault();for(var o=0;o<c.amount;o+=1)t(o)}))}();
//# sourceMappingURL=03-promises.205ae51b.js.map
