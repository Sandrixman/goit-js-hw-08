!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function S(e){return l=e,f=setTimeout(h,t),s?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?b(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),w="feedback-form-state",T={};S.addEventListener("input",n((function(e){T[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(T))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log("Email: ".concat(O.value," / Message: ").concat(h.value)),localStorage.removeItem(w),S.reset()})),function(){var e=JSON.parse(localStorage.getItem(w))||T;e.email&&(T.email=e.email,O.value=T.email);e.message&&(T.message=e.message,h.value=T.message)}()}();
//# sourceMappingURL=03-feedback.0c159181.js.map