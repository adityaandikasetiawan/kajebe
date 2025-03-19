!function(t){const e={radio:document.querySelectorAll('[data-setting="radio"]'),checkbox:document.querySelectorAll('[data-setting="checkbox"]'),attribute:document.querySelectorAll('[data-setting="attribute"]'),style:document.querySelectorAll('[data-setting="style"]'),input:document.querySelectorAll('[data-setting="input"]'),select:document.querySelectorAll('[data-setting="select"]'),color:document.querySelectorAll('[data-setting="color"]')},n=o();function o(){return{saveLocal:"sessionStorage",storeKey:"qloud",setting:{app_name:{target:'[data-setting="app_name"]',type:"text",value:"qloud"},theme_scheme_direction:{target:"html",choices:["ltr","rtl"],value:"ltr"},theme_style_appearance:{target:"html",choices:["light","dark"],value:["light"]}},beforeInit:function(t){return t},afterInit:function(t){return t}}}this.IQSetting=function(t){this.options={},this.arg=t,this.extend(n),this.getStorageValue(this.options.storeKey),this.updateOptionFromStorage(),_.isFunction(this.options.beforeInit)&&this.options.beforeInit(this),this.init();let e=document.querySelector('meta[name="page_colors"]')?.getAttribute("content");return null!=e&&e.length>0&&(e=JSON.parse(e),void 0!==e&&e.length>0&&e?.forEach(((t,e,n)=>{document.querySelector("html").style.setProperty(t.var,t.value)}))),_.isFunction(this.options.afterInit)&&this.options.afterInit(this),this.addListeners(),this},IQSetting.prototype.extend=function(t){this.arg&&_.isObject(this.arg)?this.options=IQUtils.mergeDeep(t,this.arg):this.options=t},IQSetting.prototype.fnCall=function(t,e=this.getSettingKey(t).value){_.isString(t)&&this.__proto__.hasOwnProperty(t)&&_.isFunction(this.__proto__[t])&&this.__proto__[t].call(this,e)},IQSetting.prototype.init=function(){const t=_.keys(this.options.setting);_.forEach(t,(t=>{this.fnCall(t)})),this.saveOption()},IQSetting.prototype.reInit=function(){this.destroy(),this.extend({saveLocal:"sessionStorage",storeKey:"qloud",setting:{app_name:{target:'[data-setting="app_name"]',type:"text",value:"qloud"},theme_scheme_direction:{target:"html",choices:["ltr","rtl"],value:"ltr"},theme_style_appearance:{target:"html",choices:["light","dark"],value:["light"]}},beforeInit:function(t){return t},afterInit:function(t){return t}}),this.saveLocal(this.options.saveLocal),this.init(),this.afterUpdate("reinit",this.options)},IQSetting.prototype.afterUpdate=function(t,e,n=""){const o=new CustomEvent(t,{detail:{value:e,name:t,currentValue:n}});document.dispatchEvent(o),this.saveOption()},IQSetting.prototype.destroy=function(){this.removeListeners()},IQSetting.prototype.addListeners=function(t,e){this.addRadioListener(),this.addCheckboxListener(),this.addAttributeListener(),this.addStyleListener(),this.addInputListener(),this.addSelectListener()},IQSetting.prototype.removeListeners=function(t,e){this.removeRadioListeners(),this.removeCheckboxListeners(),this.removeAttributeListeners(),this.removeStyleListeners(),this.removeInputListeners()},IQSetting.prototype.setMainOption=function(t,e){this.options[t]=e},IQSetting.prototype.getSettingOptions=function(){return this.options.settings},IQSetting.prototype.getSettingKey=function(t){return this.options.setting[t]},IQSetting.prototype.setSettingOption=function(t,e,n){n&&(this.options.setting[t].value=e)},this.IQSetting.prototype.setSettingColorChoice=function(t,e){this.options.setting[t].colors[e.key]=e.value},IQSetting.prototype.getSettingJson=function(){const t=this,e={};return Object.keys(t.options).forEach((function(n){"afterInit"!==n&&"beforeInit"!==n&&(e[n]=t.options[n],"setting"===n&&Object.keys(e[n]).forEach((function(t){delete e[n][t].target,delete e[n][t].type,delete e[n][t].choices})))})),this.options=IQUtils.mergeDeep(n,e),JSON.stringify(e,null,4)},IQSetting.getInstance=function(){return IQSetting.instance||(IQSetting.instance=new IQSetting),IQSetting.instance},IQSetting.prototype.saveOption=function(){const t=this.options.storeKey,e=this.options;if(void 0!==e&&void 0!==t)switch(this.options.saveLocal){case"localStorage":return sessionStorage.removeItem(t),IQUtils.saveLocalStorage(t,JSON.stringify(e));case"sessionStorage":return localStorage.removeItem(t),IQUtils.saveSessionStorage(t,JSON.stringify(e));case"cookieStorage":return IQUtils.setCookie(t,JSON.stringify(e))}localStorage.setItem(t,"none"),sessionStorage.setItem(t,"none")},IQSetting.prototype.getOption=function(t){if("none"===localStorage.getItem(t)||"none"===sessionStorage.getItem(t))return"none";if(null!==localStorage.getItem(t)&&""!==localStorage.getItem(t)||null!==sessionStorage.getItem(t)&&""!==sessionStorage.getItem(t)){let e=localStorage.getItem(t);if(null===e&&(e=sessionStorage.getItem(t)),null!==e)try{return JSON.parse(e)}catch(t){return e}}},IQSetting.prototype.updateOptionFromStorage=function(){const t=this.getOption(this.options.storeKey);return"none"===t?this.options.saveLocal="none":(void 0!==t&&(this.options=t),this.options)},IQSetting.prototype.getStorageValue=function(t){const e=IQUtils.checkStorageArray(t,["localStorage","sessionStorage","cookieStorage","none"]);let n=this.options.saveLocal;e.result&&(n=e.storage),IQUtils.getElems('input[name="saveLocal"]').forEach((function(t){t.checked=!1,t.value===n&&(t.checked=!0)}))},IQSetting.prototype.__radioInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.checked=!1,t.value===e.value&&(t.checked=!0)}))},IQSetting.prototype.__checkboxInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.checked=!1,-1!==e.value.indexOf(t.value)&&(t.checked=!0)}))},IQSetting.prototype.__inputChange__=function(t,e){IQUtils.getElems(`input[name="${t}"]`).forEach((function(t){t.value=e}))},IQSetting.prototype.__selectInputChange__=function(t){const e=this.getSettingKey(t);IQUtils.getElems(`select[name="${t}"]`).forEach((function(t){t.value=e.value})),"undefined"!=typeof $&&$(`[data-select="font"][name="${t}"]`).val(e.value).trigger("change")},IQSetting.prototype.__radioUpdate__=function(t,e,n){const o=this.getSettingKey(t);null!==e&&(o.value=e,this.setSettingOption(t,e)),null!==o.target&&(o.choices.forEach((t=>{IQUtils.removeClass(o.target,...t.split(" "))})),IQUtils.addClass(o.target,...e.split(" "))),this.__radioInputChange__(t),_.isFunction(n)&&n(t,e,o),this.afterUpdate(t,e)},IQSetting.prototype.__styleUpdate__=function(t,e={prop:"",value:"value"},n){const o=this.getSettingKey(t);null!==e.value&&(o.value=e.value,this.setSettingOption(t,e.value)),null!==o.target&&IQUtils.setStyle(o.target,e),this.__radioInputChange__(t),_.isFunction(n)&&n(t,e.value),this.afterUpdate(t,e)},IQSetting.prototype.__attributeUpdate__=function(t,e={prop:"color",value:"value"},n){const o=this.getSettingKey(t);null!==e.value&&(o.value=e.value,this.setSettingOption(t,e.value)),null!==o.target&&IQUtils.setAttr(o.target,e),this.__radioInputChange__(t),_.isFunction(n)&&n(t,e.value),this.afterUpdate(t,e)},IQSetting.prototype.__checkboxUpdate__=function(t,e,n,o){const i=this.getSettingKey(t);null!==e&&(i.value=e,this.setSettingOption(t,e)),null!==i.target&&(i.choices.forEach((t=>{IQUtils.removeClass(i.target,t)})),i.value.length&&i.value.forEach((t=>{IQUtils.addClass(i.target,t)}))),this.__checkboxInputChange__(t),_.isFunction(o)&&o(t,e),this.afterUpdate(t,e,n)},IQSetting.prototype.__inputUpdate__=function(t,e,n){const o=this.getSettingKey(t);null!==e&&(o.value=e,this.setSettingOption(t,e)),null!==o.target&&IQUtils.setContent(o.target,e.substr(0,10)),this.__inputChange__(t,e),_.isFunction(n)&&n(t,e),this.afterUpdate(t,e)},IQSetting.prototype.__updateThemeColor__=function(t,e){const n=this.getSettingKey(t);if(null!==e&&(n.value=e,this.setSettingOption(t,e)),null!==n.target&&(n.choices.forEach((t=>{IQUtils.removeClass(n.target,t)})),"custom"!==n.value&&this.resetColor(t),!_.isObject(n.value))){_.forEach(n.colors,((e,n)=>{null!==IQUtils.getElem(`[data-extra="${n.replace("--{{prefix}}","")}"]`)&&(IQUtils.getElem(`[data-extra="${n.replace("--{{prefix}}","")}"]`).value=e),this.setSettingColorChoice(t,{key:n,value:e})}));let e=IQUtils.getRootVars("--prefix")||"bs-",o={},i=!1;if(_.forEach(n.colors,((t,n)=>{n=n.replace("{{prefix}}",e),o={...o,...IQUtils.getColorShadeTint(n,t,i)}})),IQUtils.setRootVariables(o),IQUtils.addClass("body",n.value),"default"===n.type)IQUtils.removeClass("body",n.value),IQUtils.removeRootVariables(o)}this.__radioInputChange__(t),this.afterUpdate(t,e)},IQSetting.prototype.__selectUpdate__=function(t,e){const n=this.getSettingKey(t);null!==e&&(n.value=e,this.setSettingOption(t,e)),null!==n.target&&IQUtils.setFontFamily(e,n.target),this.__selectInputChange__(t),this.afterUpdate(t,e)},IQSetting.prototype.__updateOption__=function(t,e){this.setMainOption(t,e),this.saveOption(),this.updateOptionFromStorage()},IQSetting.prototype.addRadioListener=function(t){const n=this;e.radio.forEach((function(e){e.addEventListener("change",(function(e){const o=e.target.value,i=e.target.getAttribute("name");n.__proto__[i].call(n,o),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addCheckboxListener=function(t){const n=this;e.checkbox.forEach((function(e){e.addEventListener("change",(e=>{const o=[],i=e.target.getAttribute("name");document.querySelectorAll(`[name="${i}"]`).forEach((function(t){t.checked&&o.push(t.value)})),n.__proto__[i].call(n,o,e.target.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addStyleListener=function(t){const n=this;e.style.forEach((function(e){e.addEventListener("change",(function(e){const o=e.target.value,i=e.target.getAttribute("name"),s={prop:e.target.getAttribute("data-prop"),value:o};n.__proto__[i].call(n,s.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addAttributeListener=function(t){const n=this;e.attribute.forEach((function(e){e.addEventListener("change",(function(e){const o=e.target.value,i=e.target.getAttribute("name"),s={prop:e.target.getAttribute("data-prop"),value:o};n.__proto__[i].call(n,s.value),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addInputListener=function(t){const n=this;e.input.forEach((function(e){e.addEventListener("input",(function(e){const o=e.target.value||"",i=e.target.getAttribute("name");n.__proto__[i].call(n,o),_.isFunction(t)&&t()}))}))},IQSetting.prototype.addSelectListener=function(t){const n=this;e.select.forEach((function(e){"undefined"!=typeof $&&$(e).on("select2:select",(e=>{const o=e.params.data.id,i=e.target.getAttribute("name");n.__proto__[i].call(n,o),_.isFunction(t)&&t()}))}))},IQSetting.prototype.removeRadioListeners=function(){e.radio.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeCheckboxListeners=function(){e.checkbox.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeStyleListeners=function(){e.style.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeAttributeListeners=function(){e.attribute.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeInputListeners=function(){e.input.forEach((function(t){t.removeEventListener("change",null)}))},IQSetting.prototype.removeSelectListeners=function(){e.select.forEach((function(t){"undefined"!=typeof $&&$(t).off("select2:select",null)}))},IQSetting.prototype.app_name=function(t){"object"!=typeof t&&this.__inputUpdate__("app_name",t)},IQSetting.prototype.card_color=function(t){"object"!=typeof t&&this.__radioUpdate__("card_color",t)},IQSetting.prototype.page_colors=function(t){"object"!=typeof t&&Object.values(this.options.setting.page_colors).forEach(((t,e,n)=>{document.querySelector("html").style.setProperty(t.var,t.value)}))},IQSetting.prototype.saveLocal=function(t=null){null!==t&&this.__updateOption__("saveLocal",t)},IQSetting.prototype.rtlChange=function(t){IQUtils.addClass(".offcanvas-start","on-rtl","start"),IQUtils.addClass(".offcanvas-end","on-rtl","end"),t?(IQUtils.addClass(".on-rtl.start","offcanvas-end"),IQUtils.removeClass(".on-rtl.start","offcanvas-start"),IQUtils.addClass(".on-rtl.end","offcanvas-start"),IQUtils.removeClass(".on-rtl.end","offcanvas-end")):(IQUtils.addClass(".on-rtl.start","offcanvas-start"),IQUtils.removeClass(".on-rtl.start","offcanvas-end"),IQUtils.addClass(".on-rtl.end","offcanvas-end"),IQUtils.removeClass(".on-rtl.end","offcanvas-start"))},IQSetting.prototype.theme_scheme_direction=function(t){if("object"!=typeof t){const e=this;this.__attributeUpdate__("theme_scheme_direction",{prop:"dir",value:t},(function(t,n){e.rtlChange("rtl"==n)}))}},IQSetting.prototype.theme_style_appearance=function(t,e){null!==t&&this.__attributeUpdate__("theme_style_appearance",{prop:"data-bs-theme",value:t})},IQSetting.prototype.saveLocal=function(t=null){null!==t&&this.__updateOption__("saveLocal",t)},t.IQSetting=this.IQSetting;const i=document.querySelector('[data-reset="body-heading-font"]');null!==i&&i.addEventListener("click",(t=>{t.preventDefault(),this.IQSetting.setSettingOption("body_font_family","Inter",!0),this.IQSetting.setSettingOption("heading_font_family","Inter",!0),this.IQSetting.resetFontFamily()})),t.IQSetting}(window);