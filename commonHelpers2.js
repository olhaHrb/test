import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),e="feedback-form-state",o={},r=t.elements.email,l=t.elements.message;JSON.parse(localStorage.getItem(e)).email!==void 0&&(r.value=JSON.parse(localStorage.getItem(e)).email);JSON.parse(localStorage.getItem(e)).message!==void 0&&(l.value=JSON.parse(localStorage.getItem(e)).message);t.addEventListener("input",a=>{o[a.target.name]=a.target.value,localStorage.setItem(e,JSON.stringify(o))});t.addEventListener("submit",a=>{a.preventDefault(),console.log(o),localStorage.removeItem(e),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
