if(typeof dw=="undefined"){var dw={};}(function(){function M(o){var s=document.cookie.split(";");for(var r=0;r<s.length;r++){var q=s[r].indexOf("=");if(q!=-1){var p=A(s[r].substring(0,q));if(o(p)){return A(unescape(s[r].substring(q+1)));}}}return null;}function A(o){return o.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
}function D(p,r,o){var q=p+"="+escape(r)+";path=/";if(o!=-1){q+=";expires="+expires.toGMTString();}document.cookie=q;}function G(q){var o=function(t){return"%"+new Number(t).toString(16).toUpperCase();};var r="";for(var p=0;p<q.length;p++){var s=q.charCodeAt(p);if(((s>=97)&&(s<=122))||((s>=65)&&(s<=90))||((s>=48)&&(s<=57))||(s==46)||(s==45)||(s==42)||(s==95)){r+=q.charAt(p);
}else{if(s==32){r+="+";}else{if(s<128){r+=o(s);}else{if((s>=128)&&(s<2048)){r+=o((s>>6)|192);r+=o((s&63)|128);}else{if((s>=2048)&&(s<65536)){r+=o((s>>12)|224);r+=o(((s>>6)&63)|128);r+=o((s&63)|128);}else{if(s>=65536){r+=o((s>>18)|240);r+=o(((s>>12)&63)|128);r+=o(((s>>6)&63)|128);r+=o((s&63)|128);}}}}}}}return r;
}function E(){var o=function(p){return(p.length>5)&&(p.substring(0,5)==="dwac_");};return M(o);}var f=(function(){var p=E();if(p==null){return{enabled:false,dwEnabled:false};}var o=p.split("|");return{visitorID:o[0],repository:o[1],customer:o[2],sourceCode:o[3],siteCurrency:o[4],enabled:o[5]=="true",timeZone:o[6],dwEnabled:o[7]=="true",encoding:"ISO-8859-1"};
}());var S=function(o){if(typeof o!="boolean"){return ;}D("dwacdebug",""+o,-1);};function O(){var o=function(p){return p==="dwacdebug";};return M(o)==="true";}var W=null;function J(){var o=[];this.getEntries=function(){return o;};this.put=function(q,r){for(var p=0;p<o.length;p++){if(o[p].key==q){o[p].value=r;
return ;}}o.push({key:q,value:r});};this.putAll=function(r){var p=r.getEntries();for(var q=0;q<p.length;q++){this.put(p[q].key,p[q].value);}};this.get=function(q){for(var p=0;p<o.length;p++){if(o[p].key==q){return o[p].value;}}return null;};this.clear=function(){o.length=0;};this.isEmpty=function(){return o.length==0;
};}var b=500;var K="PRODUCT_SEARCHHIT";var d="PRODUCT_DETAIL";var Z="PRODUCT_RECOMMENDATION";var P="PRODUCT_SETPRODUCT";var I=false;var g=null;var N={category:""};var T=new J();var m=new J();var i=new J();function c(o,p){for(e in p){if(typeof o[e]!="undefined"){p[e]=o[e];}}return p;}var L=function(q){if(typeof q!="object"){return false;
}var p=c(q,{id:null});if(typeof p.id!="string"){return false;}var o=T.get(p.id);if(o!=null){return false;}T.put(p.id,p);return true;};var C=function(o){if(typeof o!="object"){return false;}var q=c(o,{id:null});if(typeof q.id!="string"){return false;}var p=i.get(q.id);if(p!=null){return false;}i.put(q.id,q);
return true;};var a=function(q){if(typeof q!="object"){return false;}var o=c(q,{id:null});if(typeof o.id!="string"){return false;}var p=m.get(o.id);if(p!=null){return false;}m.put(o.id,o);return true;};var k=function(p){if(typeof p!="object"){return ;}var o={};if(typeof p.category=="string"){o.category=p.category;
}c(o,N);};function H(o){var p=new J();p.putAll(o);o.clear();return p;}function F(){return !T.isEmpty()||!i.isEmpty()||!m.isEmpty();}var U=function(){var p={pageInfo:N,productImpressions:T,productViews:m,productRecommendations:i,debugEnabled:O()};var o=false;if(W!=null){W.trackPageViewWithProducts(f,p,null);
o=true;}if(o){T.clear();m.clear();i.clear();}};function R(){if(!I){return ;}if(g){clearTimeout(g);}g=setTimeout("dw.__ac.tx()",b);}var h=function(o){L(o);R();};var l=function(o){a(o);R();};var X=function(o){C(o);R();};function Q(s,q){if(typeof s=="undefined"){return ;}var u={};for(e in s){var r=false;
for(var p=0;(p<q.length)&&!r;p++){var t=q[p];if((e===t)&&(typeof s[t]=="string")){r=true;}}u[e]=r?G(s[e]):s[e];}return u;}var B=function(o){if(typeof o!="object"){return ;}W=o;};var j=function(o){if(typeof o!="object"){return ;}k(Q(o,["category"]));};function n(o){if(typeof o!="object"){return false;
}if((o.type===K)||(o.type===P)){return L(Q(o,["id"]));}if(o.type===d){return a(Q(o,["id"]));}if(o.type===Z){return C(Q(o,["id"]));}return false;}var V=function(p){if(typeof p=="undefined"){return ;}if(typeof p==="object"){if(p instanceof Array){for(var o=0;o<p.length;o++){n(p[o]);}}else{n(p);}}if(I){R();
}};function Y(o){if(document.readyState==="complete"){setTimeout(o,1);}if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);o();};document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",o,false);
}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);o();}};document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",o);}}}Y(function(){if(!I){I=true;R();}});dw.__ac={page:k,pi:h,pv:l,pr:X,tx:U};
dw.ac={EV_PRD_SEARCHHIT:K,EV_PRD_DETAIL:d,EV_PRD_RECOMMENDATION:Z,EV_PRD_SETPRODUCT:P,setDWAnalytics:B,applyContext:j,capture:V,setDebugEnabled:S};}());