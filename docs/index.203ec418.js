var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequire94c2;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire94c2=n);var o=n("km541");setTimeout((()=>{const e=["primary","success","danger","warn","dark"],t=["top-left","top-right","bottom-right","bottom-left"];let i=0,n=0;document.getElementById("notify").addEventListener("click",(()=>{new o.default({title:"Notification",message:"This is a notification",type:e[i],align:t[n]}),i++,i>4&&(i=0),n++,n>3&&(n=0)}))}),1e3);
//# sourceMappingURL=index.203ec418.js.map