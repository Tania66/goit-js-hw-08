function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(j,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=m();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?v(n,i-(e-l)):n}(e))}function O(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:O(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector("textarea"),h=document.querySelector("input");y.addEventListener("submit",(function(e){if(e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),""===h.value||""===S.value)return alert("Please fill in all the fields!");localStorage.removeItem("feedback-form-state"),y.reset(),j={}})),y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,console.log(localStorage.setItem("feedback-form-state",JSON.stringify(j)))}),500));let j=JSON.parse(localStorage.getItem("feedback-form-state"))||{};!function(){if(j)S.value=j.message||"",h.value=j.email||""}();
//# sourceMappingURL=03-feedback.fc532fde.js.map
