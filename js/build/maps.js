

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=716\u0026hl=en-GB\u0026","https://khms1.googleapis.com/kh?v=716\u0026hl=en-GB\u0026"],null,null,null,1,"716",["https://khms0.google.com/kh?v=716\u0026hl=en-GB\u0026","https://khms1.google.com/kh?v=716\u0026hl=en-GB\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=102\u0026hl=en-GB\u0026","https://khms1.googleapis.com/kh?v=102\u0026hl=en-GB\u0026"],null,null,null,null,"102",["https://khms0.google.com/kh?v=102\u0026hl=en-GB\u0026","https://khms1.google.com/kh?v=102\u0026hl=en-GB\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-GB\u0026","https://mts1.googleapis.com/mapslt?hl=en-GB\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=en-GB\u0026","https://mts1.googleapis.com/mapslt?hl=en-GB\u0026"]]],["en-GB","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/28/1/intl/en_gb","3.28.1"],[624342002],1,null,null,null,null,null,"",["geometry"],null,1,"https://khms.googleapis.com/mz?v=716\u0026","AIzaSyCcQOmynFmVAUA-OWS7ImsCkl9825ozutQ","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",374000000,374],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u28!2s1!2sen-GB!3sUS!4s28/1/intl/en_gb","https://www.google.com/maps/api/js/widget?pb=!1m2!1u28!2s1!2sen-GB"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["28.1"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){var Fa,Ga,La,Oa,jb,pb,qb,rb,sb,wb,xb,zb,Cb,yb,Db,Jb,Nb,Pb,Qb,Rb,Ub,Wb,Yb,Tb,Vb,$b,cc,fc,qc,wc,Gc,Lc,Kc,Mc,Pc,Vc,Yc,ad,cd,bd,gd,od,qd,rd,td,zd,Cd,Gd,Id,Od,be,de,oe,pe,qe,te,ue,xe,ze,ye,Be,Ce,De,Ie,Je,Ke,Ne,Oe,Qe,Re,Se,Te,We,af,bf,jf,kf,lf,mf,nf,pf,qf,rf,vf,wf,Ef,Gf,Pf,Vf,Xf,eg,gg,hg,ig,jg,kg,mg,ng,og,pg,tg,rg,ug,vg,wg,zg,Ag,Cg,Bg,Kg,Ng,Og,Sg,Tg,Wg,Xg,Yg,Zg,$g,ah,bh,ch,dh,Ca,Da;_.aa="ERROR";_.ba="INVALID_REQUEST";_.ca="MAX_DIMENSIONS_EXCEEDED";_.da="MAX_ELEMENTS_EXCEEDED";_.ea="MAX_WAYPOINTS_EXCEEDED";
_.fa="NOT_FOUND";_.ga="OK";_.ha="OVER_QUERY_LIMIT";_.ia="REQUEST_DENIED";_.ka="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.na=function(){return function(){}};_.pa=function(a){return function(b){this[a]=b}};_.qa=function(a){return function(){return this[a]}};_.ra=function(a){return function(){return a}};_.ta=function(a){return function(){return _.sa[a].apply(this,arguments)}};_.m=function(a){return void 0!==a};_.ua=_.na();
_.va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.wa=function(a){return"array"==_.va(a)};_.xa=function(a){var b=_.va(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.ya=function(a){return"string"==typeof a};_.za=function(a){return"number"==typeof a};_.Aa=function(a){return"function"==_.va(a)};_.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Ea=function(a){return a[Ca]||(a[Ca]=++Da)};
Fa=function(a,b,c){return a.call.apply(a.bind,arguments)};Ga=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.p=function(a,b,c){_.p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fa:Ga;return _.p.apply(null,arguments)};_.Ha=function(){return+new Date};
_.t=function(a,b){function c(){}c.prototype=b.prototype;a.Gb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ce=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};_.Ia=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Ka=function(){return-1!=_.Ja.toLowerCase().indexOf("webkit")};
_.Ma=function(a,b){var c=0;a=_.Ia(String(a)).split(".");b=_.Ia(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=La(0==f[1].length?0:(0,window.parseInt)(f[1],10),0==g[1].length?0:(0,window.parseInt)(g[1],10))||La(0==f[2].length,0==g[2].length)||La(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};
La=function(a,b){return a<b?-1:a>b?1:0};_.Na=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.ya(a))return _.ya(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.v=function(a,b,c){for(var d=a.length,e=_.ya(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Oa=function(a,b){for(var c=a.length,d=_.ya(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};
_.Qa=function(a,b){b=_.Na(a,b);var c;(c=0<=b)&&_.Pa(a,b);return c};_.Pa=function(a,b){Array.prototype.splice.call(a,b,1)};_.Ra=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.Sa=function(a){return""+(_.Ba(a)?_.Ea(a):a)};_.w=function(a){return a?a.length:0};_.Va=function(a,b){_.Ua(b,function(c){a[c]=b[c]})};_.Wa=function(a){for(var b in a)return!1;return!0};_.Ya=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};
_.Za=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.$a=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.ab=function(a,b){for(var c=[],d=_.w(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.cb=function(a,b){for(var c=_.bb(void 0,_.w(b)),d=_.bb(void 0,0);d<c;++d)a.push(b[d])};_.db=function(a){return"number"==typeof a};_.eb=function(a){return"object"==typeof a};_.bb=function(a,b){return null==a?b:a};_.fb=function(a){return"string"==typeof a};_.gb=function(a){return a===!!a};
_.Ua=function(a,b){for(var c in a)b(c,a[c])};_.ib=function(a){return function(){var b=this,c=arguments;_.hb(function(){a.apply(b,c)})}};_.hb=function(a){return window.setTimeout(a,0)};jb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.kb=function(a){window.console&&window.console.error&&window.console.error(a)};_.nb=function(a){a=a||window.event;_.lb(a);_.mb(a)};_.lb=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};
_.mb=function(a){a.preventDefault&&_.m(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.ob=function(a){a.handled=!0;_.m(a.bubbles)||(a.returnValue="handled")};pb=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};qb=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.Va(a,c[b]);return a};rb=function(a,b){return function(c){return b.call(a,c,this)}};
sb=function(a,b,c){return function(d){var e=[b,a];_.cb(e,arguments);_.x.trigger.apply(this,e);c&&_.ob.apply(null,arguments)}};wb=function(a,b,c,d){this.f=a;this.j=b;this.b=c;this.l=null;this.m=d;this.id=++tb;pb(a,b)[this.id]=this;ub&&"tagName"in a&&(vb[this.id]=this)};xb=function(a){return a.l=function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c;c=a.b.apply(a.f,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};
_.z=_.na();zb=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);var c=yb(a,b),d;for(d in c){var e=c[d];zb(e.zc,e.Ya)}_.x.trigger(a,b.toLowerCase()+"_changed")};_.Bb=function(a){return Ab[a]||(Ab[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Cb=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};yb=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};
Db=function(a,b,c){this.l=c;this.j=a;this.m=b;this.f=0;this.b=null};_.Eb=_.ma();_.Fb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};_.Gb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.Hb=function(a){_.Hb[" "](a);return a};Jb=function(a,b){var c=Ib;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};_.Kb=function(a,b){this.f=a||0;this.j=b||0};_.Lb=function(a,b){if(a)return function(){--a||b()};b();return _.ua};
_.Mb=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};Nb=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};_.Ob=function(a){return-1!=_.Ja.indexOf(a)};Pb=function(a){this.j=window.document;this.b={};this.f=a};Qb=function(){this.f=this.b=null};
Rb=function(){this.next=this.b=this.wc=null};_.Sb=function(){return _.Ob("iPhone")&&!_.Ob("iPod")&&!_.Ob("iPad")};Ub=function(){this.l={};this.f={};this.m={};this.b={};this.j=new Tb};Wb=function(a,b){a.l[b]||(a.l[b]=!0,Vb(a.j,function(c){for(var d=c.ah[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||Wb(a,g)}c=c.Rl;c.b[b]||_.Mb(c.j,Nb(c.f,b)+".js")}))};
Yb=function(a,b){var c=Xb;this.Rl=a;this.ah=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.an=a;this.jk=b};Tb=function(){this.b=[]};Vb=function(a,b){a.f?b(a.f):a.b.push(b)};$b=function(a){var b=a;if(a instanceof Array)b=Array(a.length),_.Zb(b,a);else if(a instanceof Object){var c=b={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=$b(a[d]))}return b};_.Zb=function(a,b){for(var c=0;c<b.length;++c)b.hasOwnProperty(c)&&(a[c]=$b(b[c]))};
_.ac=function(a,b){a[b]||(a[b]=[]);return a[b]};_.dc=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&cc(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
cc=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.dc(a,b))return!1}else return!1;return!0};_.ec=function(a,b,c,d){this.type=a;this.label=b;this.rk=c;this.uc=d};fc=function(a){switch(a){case "d":case "f":case "i":case "j":case "u":case "v":case "x":case "y":case "g":case "h":case "n":case "o":case "e":return 0;case "s":case "z":case "B":return"";case "b":return!1;default:return null}};
_.gc=function(a,b,c){return new _.ec(a,1,_.m(b)?b:fc(a),c)};_.hc=function(a,b,c){return new _.ec(a,2,_.m(b)?b:fc(a),c)};_.ic=function(a){return _.gc("i",a)};_.jc=function(a){return _.gc("v",a)};_.kc=function(a){return _.gc("b",a)};_.lc=function(a){return _.gc("e",a)};_.B=function(a,b){return _.gc("m",a,b)};_.mc=function(){return _.Ob("Trident")||_.Ob("MSIE")};_.rc=function(){return _.Ob("Safari")&&!(qc()||_.Ob("Coast")||_.Ob("Opera")||_.Ob("Edge")||_.Ob("Silk")||_.Ob("Android"))};
qc=function(){return(_.Ob("Chrome")||_.Ob("CriOS"))&&!_.Ob("Edge")};_.sc=function(a){return a*Math.PI/180};_.tc=function(a){return 180*a/Math.PI};_.uc=_.pa("b");_.F=function(a,b,c){var d=Ub.b();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||Wb(d,a))};_.vc=function(a,b){Ub.b().b[""+a]=b};wc=function(a,b,c){var d=[],e=_.Lb(a.length,function(){b.apply(null,d)});_.v(a,function(a,b){_.F(a,function(a){d[b]=a;e()},c)})};_.G=function(a){this.data=a||[]};
_.xc=function(a,b,c){a=a.data[b];return null!=a?a:c};_.I=function(a,b,c){return _.xc(a,b,c||0)};_.K=function(a,b,c){return _.xc(a,b,c||"")};_.L=function(a,b){var c=a.data[b];c||(c=a.data[b]=[]);return c};_.yc=function(a,b){return _.ac(a.data,b)};_.zc=function(a,b,c){return _.yc(a,b)[c]};_.Ac=function(a,b){return a.data[b]?a.data[b].length:0};Gc=function(a){_.Bc.setTimeout(function(){throw a;},0)};
Lc=function(){var a=_.Hc.f,a=Ic(a);!_.Aa(_.Bc.setImmediate)||_.Bc.Window&&_.Bc.Window.prototype&&!_.Ob("Edge")&&_.Bc.Window.prototype.setImmediate==_.Bc.setImmediate?(Jc||(Jc=Kc()),Jc(a)):_.Bc.setImmediate(a)};
Kc=function(){var a=_.Bc.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.Ob("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.p)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.mc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.m(c.next)){c=c.next;var a=c.lg;c.lg=null;a()}};return function(a){d.next={lg:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.Bc.setTimeout(a,0)}};Mc=function(){var a=_.Bc.document;return a?a.documentMode:void 0};_.Oc=function(a){return Jb(a,function(){return 0<=_.Ma(_.Nc,a)})};Pc=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.Qc=function(a){return a.b>a.f};
_.Sc=function(a,b){return 1E-9>=Math.abs(b.b-a.b)%360+Math.abs(_.Rc(b)-_.Rc(a))};_.Tc=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.Rc=function(a){return a.isEmpty()?0:_.Qc(a)?360-(a.b-a.f):a.f-a.b};_.Uc=function(a){var b=(a.b+a.f)/2;_.Qc(a)&&(b=_.Za(b+180,-180,180));return b};Vc=function(a,b){this.f=a;this.b=b};_.Wc=function(a){return a.isEmpty()?0:a.b-a.f};_.Xc=function(a){return(a.b+a.f)/2};Yc=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};
_.Zc=function(a,b){var c="";if(null!=b){if(!(b instanceof Yc))return b;c=": "+b.message}return new Yc(a+c)};_.$c=function(a){if(!(a instanceof Yc))throw a;_.kb(a.name+": "+a.message)};ad=_.na();cd=function(a,b,c){for(var d=1;d<b.A.length;++d){var e=b.A[d],f=a[d+b.b];if(e&&null!=f)if(3==e.label)for(var g=0;g<f.length;++g)bd(f[g],d,e,c);else bd(f,d,e,c)}};
bd=function(a,b,c,d){if("m"==c.type){var e=d.length;cd(a,c.uc,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),d.push([b,c.type,(0,window.encodeURIComponent)(a)].join(""))};_.Hc=function(a,b){_.Hc.b||_.Hc.m();_.Hc.j||(_.Hc.b(),_.Hc.j=!0);_.Hc.l.add(a,b)};
_.fd=function(a,b){var c;c=c?c+": ":"";return function(d){if(!d||!_.eb(d))throw _.Zc(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.Zc(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.m(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=a[f](e[f])}catch(h){throw _.Zc(c+"in property "+f,h);}return e}};gd=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.hd=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.Zc("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.Zc("not an instance of "+b);}};_.id=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Zc(b);}};_.jd=function(a){return function(b){if(!_.wa(b))throw _.Zc("not an Array");return _.ab(b,function(b,d){try{return a(b)}catch(e){throw _.Zc("at index "+d,e);}})}};
_.kd=function(a,b){return function(c){if(a(c))return c;throw _.Zc(b||""+c);}};_.ld=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.Gf||f)(b)}catch(g){if(!(g instanceof Yc))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Zc(c.join("; and "));}};_.md=function(a,b){return function(c){return b(a(c))}};_.nd=function(a){return function(b){return null==b?b:a(b)}};
od=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Zc("no "+a+" property");}};_.M=function(a,b){this.x=a;this.y=b};qd=function(a){if(a instanceof _.M)return a;try{_.fd({x:_.pd,y:_.pd},!0)(a)}catch(b){throw _.Zc("not a Point",b);}return new _.M(a.x,a.y)};_.O=function(a,b,c,d){this.width=a;this.height=b;this.j=c||"px";this.f=d||"px"};rd=function(a){if(a instanceof _.O)return a;try{_.fd({height:_.pd,width:_.pd},!0)(a)}catch(b){throw _.Zc("not a Size",b);}return new _.O(a.width,a.height)};
td=function(a){var b=sd,c=Ub.b().j;a=c.f=new Yb(new Pb(a),b);for(var b=0,d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};_.ud=function(a){this.j=a||_.Sa;this.f={}};_.xd=function(a,b){var c=a.f,d=a.j(b);c[d]||(c[d]=b,_.x.trigger(a,"insert",b),a.b&&a.b(b))};_.yd=function(a,b,c){this.heading=a;this.pitch=_.Ya(b,-90,90);this.zoom=Math.max(0,c)};zd=function(a){this.P=[];this.b=a&&a.Yc||_.ua;this.f=a&&a.Zc||_.ua};
_.Bd=function(a,b,c,d){function e(){_.v(f,function(a){b.call(c||null,function(b){if(a.once){if(a.once.jg)return;a.once.jg=!0;_.Qa(g.P,a);g.P.length||g.b()}a.wc.call(a.context,b)})})}var f=a.P.slice(0),g=a;d&&d.xn?e():Ad(e)};Cd=function(a,b){return function(c){return c.wc==a&&c.context==(b||null)}};
_.P=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{Dd(a),b=a.lng,a=a.lat,c=!1}catch(d){_.$c(d)}a-=0;b-=0;c||(a=_.Ya(a,-90,90),180!=b&&(b=_.Za(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.Ed=function(a){return _.sc(a.lat())};_.Fd=function(a){return _.sc(a.lng())};Gd=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};_.Hd=function(){this.P=new zd({Yc:(0,_.p)(this.Yc,this),Zc:(0,_.p)(this.Zc,this)})};Id=_.na();
_.Jd=function(a){try{if(a instanceof _.P)return a;a=Dd(a);return new _.P(a.lat,a.lng)}catch(b){throw _.Zc("not a LatLng or LatLngLiteral",b);}};_.Kd=function(a){return function(){return this.get(a)}};_.Ld=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.$c(_.Zc("set"+_.Bb(a),d))}}:function(b){this.set(a,b)}};_.Md=function(a,b){_.Ua(b,function(b,d){var c=_.Kd(b);a["get"+_.Bb(b)]=c;d&&(d=_.Ld(b,d),a["set"+_.Bb(b)]=d)})};_.Nd=function(){_.Hd.call(this)};_.Pd=function(a){return new Od(a)};
Od=function(a){_.Hd.call(this);this.b=a};_.Ud=function(a){this.b=(0,_.Td)(a)};_.Vd=function(a){this.b=(0,_.Td)(a)};_.Wd=function(a){this.b=(0,_.Td)(a)};_.Xd=function(a){this.b=_.Jd(a)};_.Yd=function(a,b){a=a&&_.Jd(a);b=b&&_.Jd(b);if(a){b=b||a;var c=_.Ya(a.lat(),-90,90),d=_.Ya(b.lat(),-90,90);this.f=new Vc(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new Pc(-180,180):(a=_.Za(a,-180,180),b=_.Za(b,-180,180),this.b=new Pc(a,b))}else this.f=new Vc(1,-1),this.b=new Pc(180,-180)};
_.Zd=function(a,b,c,d){return new _.Yd(new _.P(a,b,!0),new _.P(c,d,!0))};_.ae=function(a){if(a instanceof _.Yd)return a;try{return a=$d(a),_.Zd(a.south,a.west,a.north,a.east)}catch(b){throw _.Zc("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.ce=function(a){this.b=a||[];be(this)};be=function(a){a.set("length",a.b.length)};de=function(a){if(a instanceof Id)return a;try{return new _.Xd(_.Jd(a))}catch(b){}throw _.Zc("not a Geometry or LatLng or LatLngLiteral object");};_.fe=function(a){this.b=ee(a)};
_.he=function(a){this.b=ge(a)};_.ie=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?de(a.geometry):null}catch(b){_.$c(b)}this.f=a.properties||{}};_.ke=function(a){this.b=[];try{this.b=je(a)}catch(b){_.$c(b)}};_.me=function(a){this.b=le(a)};_.ne=function(){this.__gm=new _.z;this.l=null};oe=function(){this.b={}};pe=_.na();qe=function(){this.b={};this.j={};this.f={}};
_.se=function(a,b,c){function d(a){if(!a)throw _.Zc("not a Feature");if("Feature"!=a.type)throw _.Zc('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(H){throw _.Zc('in property "geometry"',H);}var d=a.properties||{};if(!_.eb(d))throw _.Zc("properties is not an Object");var f=c.idPropertyName;a=f?d[f]:a.id;if(null!=a&&!_.db(a)&&!_.fb(a))throw _.Zc((f||"id")+" is not a string or number");return{id:a,geometry:b,properties:d}}function e(a){if(null==a)throw _.Zc("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Xd(h(c));case "multipoint":return new _.Wd(n(c));case "linestring":return g(c);case "multilinestring":return new _.fe(q(c));case "polygon":return f(c);case "multipolygon":return new _.me(u(c))}}catch(E){throw _.Zc('in property "coordinates"',E);}if("geometrycollection"==b)try{return new _.ke(y(a.geometries))}catch(E){throw _.Zc('in property "geometries"',E);}throw _.Zc("invalid type");}function f(a){return new _.he(r(a))}function g(a){return new _.Ud(n(a))}
function h(a){a=l(a);return _.Jd({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.jd(_.pd),n=_.jd(h),q=_.jd(g),r=_.jd(function(a){a=n(a);if(!a.length)throw _.Zc("contains no elements");if(!a[0].b(a[a.length-1]))throw _.Zc("first and last positions are not equal");return new _.Vd(a.slice(0,-1))}),u=_.jd(f),y=_.jd(e),A=_.jd(d);if("FeatureCollection"==b.type){b=b.features;try{return _.ab(A(b),function(b){return a.add(b)})}catch(D){throw _.Zc('in property "features"',D);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.Zc("not a Feature or FeatureCollection");};te=_.na();ue=function(a){a=a||{};a.visible=_.bb(a.visible,!0);return a};_.ve=function(a){return a&&a.radius||6378137};xe=function(a){return a instanceof _.ce?we(a):new _.ce((0,_.Td)(a))};ze=function(a){var b;_.wa(a)||a instanceof _.ce?0==_.w(a)?b=!0:(b=a instanceof _.ce?a.getAt(0):a[0],b=_.wa(b)||b instanceof _.ce):b=!1;return b?a instanceof _.ce?ye(we)(a):new _.ce(_.jd(xe)(a)):new _.ce([xe(a)])};
ye=function(a){return function(b){if(!(b instanceof _.ce))throw _.Zc("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.Zc("at index "+d,e);}});return b}};_.Ae=_.pa("__gm");Be=function(a){this.b=new oe;var b=this;_.x.addListenerOnce(a,"addfeature",function(){_.F("data",function(c){c.b(b,a,b.b)})})};Ce=function(a){a=a||{};a.clickable=_.bb(a.clickable,!0);a.visible=_.bb(a.visible,!0);this.setValues(a);_.F("marker",_.ua)};
De=function(a){this.set("latLngs",new _.ce([new _.ce]));this.setValues(ue(a));_.F("poly",_.ua)};_.Ee=function(a){this.__gm={set:null,Ed:null,Db:{map:null,Ud:null}};Ce.call(this,a)};_.Fe=function(a){De.call(this,a)};_.Ge=function(a){De.call(this,a)};
Ie=function(a){var b=this;a=a||{};this.setValues(a);this.b=new qe;_.x.forward(this.b,"addfeature",this);_.x.forward(this.b,"removefeature",this);_.x.forward(this.b,"setgeometry",this);_.x.forward(this.b,"setproperty",this);_.x.forward(this.b,"removeproperty",this);this.f=new Be(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.v(_.He,function(a){_.x.forward(b.f,a,b)});this.j=!1};Je=function(a){a.j||(a.j=!0,_.F("drawing_impl",function(b){b.kl(a)}))};
Ke=function(a){if(!a)return null;var b;_.ya(a)?(b=window.document.createElement("div"),b.style.overflow="auto",b.innerHTML=a):a.nodeType==window.Node.TEXT_NODE?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};_.Me=function(a){_.Le&&a&&_.Le.push(a)};
Ne=function(a,b){this.b=a;this.f=b;a.addListener("map_changed",(0,_.p)(this.jm,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Oe=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.Pe=function(a){function b(){e||(e=!0,_.F("infowindow",function(a){a.Qj(d)}))}window.setTimeout(function(){_.F("infowindow",_.ua)},100);a=a||{};var c=!!a.b;delete a.b;var d=new Ne(this,c),e=!1;_.x.addListenerOnce(this,"anchor_changed",b);_.x.addListenerOnce(this,"map_changed",b);this.setValues(a)};Qe=function(a){this.setValues(a)};Re=_.na();Se=_.na();Te=_.na();_.Ue=function(){_.F("geocoder",_.ua)};_.Ve=function(a,b,c){this.H=null;this.set("url",a);this.set("bounds",_.nd(_.ae)(b));this.setValues(c)};
We=function(a,b){_.fb(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.$e=function(){var a=this;_.F("layers",function(b){b.b(a)})};af=function(a){this.setValues(a);var b=this;_.F("layers",function(a){a.f(b)})};bf=function(){var a=this;_.F("layers",function(b){b.j(a)})};_.cf=function(){this.b=""};_.df=function(a){var b=new _.cf;b.b=a;return b};_.ef=_.na();_.gf=function(){this.Se="";this.fj=_.ff;this.b=null};_.hf=function(a,b){var c=new _.gf;c.Se=a;c.b=b;return c};
jf=function(a){this.data=a||[]};kf=function(a){this.data=a||[]};lf=function(a){this.data=a||[]};mf=function(a){this.data=a||[]};nf=function(a){this.data=a||[]};_.of=function(a){this.data=a||[]};pf=function(a){this.data=a||[]};qf=function(a){this.data=a||[]};rf=function(a){this.data=a||[]};_.sf=function(a){return _.K(a,0)};_.tf=function(a){return _.K(a,1)};_.uf=function(a){return new nf(a.data[2])};vf=function(a){this.data=a||[]};wf=function(a){this.data=a||[]};
_.xf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.yf=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};_.zf=function(a){this.J=this.I=window.Infinity;this.M=this.L=-window.Infinity;_.v(a||[],this.extend,this)};_.Af=function(a,b,c,d){var e=new _.zf;e.I=a;e.J=b;e.L=c;e.M=d;return e};_.Bf=function(a,b){a=a.style;a.width=b.width+b.j;a.height=b.height+b.f};_.Cf=function(a){return new _.O(a.offsetWidth,a.offsetHeight)};_.Df=function(){this.P=new zd};
Ef=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};_.Ff=function(a){this.fi=a||0;_.x.bind(this,"forceredraw",this,this.C)};Gf=function(a,b,c,d){Ef.call(this,a,b,c,null,d)};
Pf=function(a,b,c,d,e){var f=_.K(_.uf(_.Q),7);this.b=a;this.f=d;this.j=_.m(e)?e:_.Ha();var g=f+"/csi?v=2&s=mapsapi3&v3v="+_.K(new rf(_.Q.data[36]),0)+"&action="+a;_.Gb(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.l=g};_.Rf=function(a,b){var c={};c[b]=void 0;_.Qf(a,c)};
_.Qf=function(a,b){var c="";_.Gb(b,function(a,b){var d=(null!=a?a:_.Ha())-this.j;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.b+":"+b)},a);b=a.l+"&rt="+c;a.f.createElement("img").src=b;(a=_.Bc.__gm_captureCSI)&&a(b)};
_.Sf=function(a,b){b=b||{};var c=b.Em||{},d=_.yc(_.Q,12).join(",");d&&(c.libraries=d);var d=_.K(_.Q,6),e=new jf(_.Q.data[33]),f=[];d&&f.push(d);_.v(e.data,function(a,b){a&&_.v(a,function(a,c){null!=a&&f.push(b+1+"_"+(c+1)+"_"+a)})});b.Fk&&(f=f.concat(b.Fk));return new Pf(a,f.join(","),c,b.document||window.document,b.startTime)};_.Tf=function(){this.b=new _.M(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};
Vf=function(){this.f=_.Sf("apiboot2",{startTime:_.Uf});_.Rf(this.f,"main");this.b=!1};Xf=function(){var a=Wf;a.b||(a.b=!0,_.Rf(a.f,"firstmap"))};_.Yf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};_.$f=function(a){for(var b;b=a.firstChild;)_.Zf(b),a.removeChild(b)};_.Zf=function(a){a=new Gf(a);try{for(;;)_.x.clearInstanceListeners(a.next())}catch(b){if(b!==_.ag)throw b;}};
_.bg=function(a,b){var c=a.lat()+_.tc(b);90<c&&(c=90);var d=a.lat()-_.tc(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.sc(a.lat()));if(90==c||-90==d||1E-6>e)return new _.Yd(new _.P(d,-180),new _.P(c,180));b=_.tc(Math.asin(b/e));return new _.Yd(new _.P(d,a.lng()-b),new _.P(c,a.lng()+b))};
eg=function(a,b){_.ne.call(this);_.Me(a);this.__gm=new _.z;this.f=null;b&&b.client&&(this.f=_.cg[b.client]||null);var c=this.controls=[];_.Ua(_.dg,function(a,b){c[b]=new _.ce});this.j=!0;this.b=a;this.m=!1;this.__gm.ca=b&&b.ca||new _.ud;this.set("standAlone",!0);this.setPov(new _.yd(0,0,1));b&&b.bd&&!_.db(b.bd.zoom)&&(b.bd.zoom=_.db(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);_.x.addListenerOnce(this,"pano_changed",_.ib(function(){_.F("marker",(0,_.p)(function(a){a.b(this.__gm.ca,
this)},this))}))};_.fg=function(){this.l=[];this.j=this.b=this.f=null};gg=function(a,b,c){this.R=b;this.b=_.Pd(new _.uc([]));this.B=new _.ud;new _.ce;this.D=new _.ud;this.F=new _.ud;this.l=new _.ud;var d=this.ca=new _.ud;d.b=function(){delete d.b;_.F("marker",_.ib(function(b){b.b(d,a)}))};this.j=new eg(c,{visible:!1,enableCloseButton:!0,ca:d});this.j.bindTo("reportErrorControl",a);this.j.j=!1;this.f=new _.fg};hg=function(a){this.data=a||[]};ig=function(a){this.data=a||[]};
jg=function(a){this.data=a||[]};kg=function(a,b,c,d){_.Ff.call(this);this.m=b;this.l=new _.Tf;this.B=c+"/maps/api/js/StaticMapService.GetMapImage";this.f=this.b=null;this.j=d;this.set("div",a);this.set("loading",!0)};mg=function(a){var b=a.get("tilt")||_.w(a.get("styles"));a=a.get("mapTypeId");return b?null:lg[a]};ng=function(a){a.parentNode&&a.parentNode.removeChild(a)};
og=function(a,b){var c=a.f;c.onload=null;c.onerror=null;a.get("size")&&(b&&(c.parentNode||a.b.appendChild(c),_.Bf(c,a.get("size")),_.x.trigger(a,"staticmaploaded"),a.j.set(_.Ha())),a.set("loading",!1))};pg=function(a,b){var c=a.f;b!=c.src?(ng(c),c.onload=function(){og(a,!0)},c.onerror=function(){og(a,!1)},c.src=b):!c.parentNode&&b&&a.b.appendChild(c)};
tg=function(a,b){var c=_.Ha();Wf&&Xf();var d=new _.Df,e=b||{};e.noClear||_.$f(a);var f="undefined"==typeof window.document?null:window.document.createElement("div");f&&a.appendChild&&(a.appendChild(f),f.style.width=f.style.height="100%");_.Ae.call(this,new gg(this,a,f));_.m(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.U=_.qg[15]&&e.noControlsOrLogging;this.mapTypes=new te;this.features=new _.z;_.Me(f);this.notify("streetView");a=_.Cf(f);var g=null;_.Q&&rg(e.useStaticMap,a)&&(g=new kg(f,
_.sg,_.K(_.uf(_.Q),9),new Od(null)),_.x.forward(g,"staticmaploaded",this),g.set("size",a),g.bindTo("center",this),g.bindTo("zoom",this),g.bindTo("mapTypeId",this),g.bindTo("styles",this));this.overlayMapTypes=new _.ce;var h=this.controls=[];_.Ua(_.dg,function(a,b){h[b]=new _.ce});var l=this,n=!0;_.F("map",function(a){l.getDiv()&&f&&a.f(l,e,f,g,n,c,d)});n=!1;this.data=new Ie({map:this})};rg=function(a,b){if(_.m(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};
ug=function(){_.F("maxzoom",_.ua)};vg=function(a,b){!a||_.fb(a)||_.db(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};wg=function(a,b){this.b=a;this.f=b||0};
zg=function(){var a=window.navigator.userAgent;this.l=a;this.b=this.type=0;this.version=new wg(0);this.m=new wg(0);for(var a=a.toLowerCase(),b=1;8>b;++b){var c=xg[b];if(-1!=a.indexOf(c)){this.type=b;var d=(new RegExp(c+"[ /]?([0-9]+).?([0-9]+)?")).exec(a);d&&(this.version=new wg((0,window.parseInt)(d[1],10),(0,window.parseInt)(d[2]||"0",10)));break}}7==this.type&&(b=/^Mozilla\/.*Gecko\/.*[Minefield|Shiretoko][ /]?([0-9]+).?([0-9]+)?/,d=b.exec(this.l))&&(this.type=5,this.version=new wg((0,window.parseInt)(d[1],
10),(0,window.parseInt)(d[2]||"0",10)));6==this.type&&(b=/rv:([0-9]{2,}.?[0-9]+)/,b=b.exec(this.l))&&(this.type=1,this.version=new wg((0,window.parseInt)(b[1],10)));for(b=1;7>b;++b)if(c=yg[b],-1!=a.indexOf(c)){this.b=b;break}if(5==this.b||6==this.b||2==this.b)if(b=/OS (?:X )?(\d+)[_.]?(\d+)/.exec(this.l))this.m=new wg((0,window.parseInt)(b[1],10),(0,window.parseInt)(b[2]||"0",10));4==this.b&&(b=/Android (\d+)\.?(\d+)?/.exec(this.l))&&(this.m=new wg((0,window.parseInt)(b[1],10),(0,window.parseInt)(b[2]||
"0",10)));this.j=5==this.type||7==this.type;this.f=4==this.type||3==this.type;this.D=0;this.j&&(d=/\brv:\s*(\d+\.\d+)/.exec(a))&&(this.D=(0,window.parseFloat)(d[1]));this.B=window.document.compatMode||"";this.C=1==this.b||2==this.b||3==this.b&&-1==a.toLowerCase().indexOf("mobile")};Ag=_.pa("b");
Cg=function(){var a=window.document;this.f=_.R;this.b=Bg(a,["transform","WebkitTransform","MozTransform","msTransform"]);this.C=Bg(a,["WebkitUserSelect","MozUserSelect","msUserSelect"]);this.m=Bg(a,["transition","WebkitTransition","MozTransition","OTransition","msTransition"]);var b;a:{for(var c=["-webkit-linear-gradient","-moz-linear-gradient","-o-linear-gradient","-ms-linear-gradient"],d=a.createElement("div"),e=0,f;f=c[e];++e)try{if(d.style.background=f+"(left, #000, #fff)",-1!=d.style.background.indexOf(f)){b=
f;break a}}catch(g){}b=null}this.B=b;this.l="string"==typeof a.documentElement.style.opacity;a=window.document.getElementsByTagName("script")[0];b=a.style.color;a.style.color="";try{a.style.color="rgba(0, 0, 0, 0.5)"}catch(g){}c=a.style.color!=b;a.style.color=b;this.j=c};Bg=function(a,b){for(var c=0,d;d=b[c];++c)if("string"==typeof a.documentElement.style[d])return d;return null};_.Dg=_.na();_.Eg=function(a){this.setValues(ue(a));_.F("poly",_.ua)};
_.Jg=function(a){this.setValues(ue(a));_.F("poly",_.ua)};Kg=function(){this.b=null};_.Lg=function(){this.b=null};
_.Mg=function(a){this.tileSize=a.tileSize||new _.O(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.p)(a.getTileUrl,a);this.b=new _.ud;this.f=null;this.set("opacity",a.opacity);var b=this;_.F("map",function(a){var c=b.f=a.b,e=b.tileSize||new _.O(256,256);b.b.forEach(function(a){var d=a.__gmimt,f=d.Y,l=d.zoom,n=b.j(f,l);d.Hb=c(f,l,e,a,n,function(){_.x.trigger(a,"load")})})})};
Ng=function(a,b){null!=a.style.opacity?a.style.opacity=b:a.style.filter=b&&"alpha(opacity="+Math.round(100*b)+")"};Og=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.Pg=function(){_.Pg.Ce(this,"constructor")};_.Qg=function(a,b){_.Qg.Ce(this,"constructor");this.set("styles",a);a=b||{};this.f=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.O(256,256)};
_.Rg=function(a,b){_.kd(gd,"container is not a Node")(a);this.setValues(b);_.F("controls",(0,_.p)(function(b){b.Al(this,a)},this))};Sg=_.pa("b");Tg=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
Wg=function(){var a=_.I(new pf(_.Q.data[4]),0),b=new Sg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(Ug,"%27");var e=d+c;Vg||(Vg=/(?:https?:\/\/[^/]+)?(.*)/);d=Vg.exec(d);return e+Tg(b,d&&d[1],a)}};Xg=function(){var a=new Sg(2147483647);return function(b){return Tg(a,b,0)}};Yg=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Zc(a+" is not a function");return function(){c.apply(d)}};
Zg=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};$g=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.sa=[];
ah="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};bh="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ch=["Array","prototype","fill"];dh=0;for(;dh<ch.length-1;dh++){var eh=ch[dh];eh in bh||(bh[eh]={});bh=bh[eh]}
var fh=ch[ch.length-1],gh=bh[fh],hh=gh?gh:function(a,b,c){var d=this.length||0;0>b&&(b=Math.max(0,d+b));if(null==c||c>d)c=d;c=Number(c);0>c&&(c=Math.max(0,d+c));for(b=Number(b||0);b<c;b++)this[b]=a;return this};hh!=gh&&null!=hh&&ah(bh,fh,{configurable:!0,writable:!0,value:hh});_.Bc=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);Da=0;var ub,vb;_.x={};ub="undefined"!=typeof window.navigator&&-1!=window.navigator.userAgent.toLowerCase().indexOf("msie");vb={};_.x.addListener=function(a,b,c){return new wb(a,b,c,0)};_.x.hasListeners=function(a,b){b=(a=a.__e3_)&&a[b];return!!b&&!_.Wa(b)};_.x.removeListener=function(a){a&&a.remove()};_.x.clearListeners=function(a,b){_.Ua(qb(a,b),function(a,b){b&&b.remove()})};_.x.clearInstanceListeners=function(a){_.Ua(qb(a),function(a,c){c&&c.remove()})};
_.x.trigger=function(a,b,c){if(_.x.hasListeners(a,b)){var d=_.Ra(arguments,2),e=qb(a,b),f;for(f in e){var g=e[f];g&&g.b.apply(g.f,d)}}};_.x.addDomListener=function(a,b,c,d){if(a.addEventListener){var e=d?4:1;a.addEventListener(b,c,d);c=new wb(a,b,c,e)}else a.attachEvent?(c=new wb(a,b,c,2),a.attachEvent("on"+b,xb(c))):(a["on"+b]=c,c=new wb(a,b,c,3));return c};_.x.addDomListenerOnce=function(a,b,c,d){var e=_.x.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};
_.x.T=function(a,b,c,d){return _.x.addDomListener(a,b,rb(c,d))};_.x.bind=function(a,b,c,d){return _.x.addListener(a,b,(0,_.p)(d,c))};_.x.addListenerOnce=function(a,b,c){var d=_.x.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.x.forward=function(a,b,c){return _.x.addListener(a,b,sb(b,c))};_.x.Ga=function(a,b,c,d){return _.x.addDomListener(a,b,sb(b,c,!d))};_.x.Sh=function(){var a=vb,b;for(b in a)a[b].remove();vb={};(a=_.Bc.CollectGarbage)&&a()};
_.x.Sm=function(){ub&&_.x.addDomListener(window,"unload",_.x.Sh)};var tb=0;wb.prototype.remove=function(){if(this.f){switch(this.m){case 1:this.f.removeEventListener(this.j,this.b,!1);break;case 4:this.f.removeEventListener(this.j,this.b,!0);break;case 2:this.f.detachEvent("on"+this.j,this.l);break;case 3:this.f["on"+this.j]=null}delete pb(this.f,this.j)[this.id];this.l=this.b=this.f=null;delete vb[this.id]}};_.k=_.z.prototype;_.k.get=function(a){var b=Cb(this);a+="";b=jb(b,a);if(_.m(b)){if(b){a=b.Ya;var b=b.zc,c="get"+_.Bb(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.k.set=function(a,b){var c=Cb(this);a+="";var d=jb(c,a);if(d)if(a=d.Ya,d=d.zc,c="set"+_.Bb(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,zb(this,a)};_.k.notify=function(a){var b=Cb(this);a+="";(b=jb(b,a))?b.zc.notify(b.Ya):zb(this,a)};
_.k.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.Bb(b);if(this[d])this[d](c);else this.set(b,c)}};_.k.setOptions=_.z.prototype.setValues;_.k.changed=_.na();var Ab={};_.z.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={zc:this,Ya:a},f={zc:b,Ya:c,hg:e};Cb(this)[a]=f;yb(b,c)[_.Sa(e)]=e;d||zb(this,a)};_.z.prototype.unbind=function(a){var b=Cb(this),c=b[a];c&&(c.hg&&delete yb(c.zc,c.Ya)[_.Sa(c.hg)],this[a]=this.get(a),b[a]=null)};
_.z.prototype.unbindAll=function(){var a=(0,_.p)(this.unbind,this),b=Cb(this),c;for(c in b)a(c)};_.z.prototype.addListener=function(a,b){return _.x.addListener(this,a,b)};_.ih={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.dg={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};Db.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.j();return a};var jh=function(a){return function(){return a}}(null);_.Hb[" "]=_.ua;var kh={mo:"Point",ko:"LineString",POLYGON:"Polygon"};_.Kb.prototype.heading=_.qa("f");_.Kb.prototype.b=_.ta(0);_.Kb.prototype.toString=function(){return this.f+","+this.j};_.lh=new _.Kb;var mh={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};a:{var nh=_.Bc.navigator;if(nh){var oh=nh.userAgent;if(oh){_.Ja=oh;break a}}_.Ja=""};var ph=new Db(function(){return new Rb},function(a){a.reset()},100);Qb.prototype.add=function(a,b){var c=ph.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};Qb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};Rb.prototype.set=function(a,b){this.wc=a;this.b=b;this.next=null};Rb.prototype.reset=function(){this.next=this.b=this.wc=null};Ub.f=void 0;Ub.b=function(){return Ub.f?Ub.f:Ub.f=new Ub};Ub.prototype.cb=function(a,b){var c=this,d=c.m;Vb(c.j,function(e){for(var f=e.ah[a]||[],g=e.an[a]||[],h=d[a]=_.Lb(f.length,function(){delete d[a];b(e.jk);for(var f=c.f[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.b[a]);delete c.f[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.b[f[l]]&&h()})};_.qh=_.gc("d",void 0);_.rh=_.gc("f",void 0);_.T=_.ic();_.sh=_.hc("i",void 0);_.th=new _.ec("i",3,void 0,void 0);_.uh=new _.ec("j",3,"",void 0);_.vh=_.gc("u",void 0);_.wh=_.hc("u",void 0);_.xh=new _.ec("u",3,void 0,void 0);_.yh=_.jc();_.U=_.kc();_.V=_.lc();_.zh=new _.ec("e",3,void 0,void 0);_.W=_.gc("s",void 0);_.Ah=_.hc("s",void 0);_.Bh=new _.ec("s",3,void 0,void 0);_.Ch=_.gc("x",void 0);_.Dh=_.hc("x",void 0);_.Eh=new _.ec("x",3,void 0,void 0);_.Fh=new _.ec("y",3,void 0,void 0);_.uc.prototype.Pa=_.ta(1);_.uc.prototype.forEach=function(a,b){_.v(this.b,function(c,d){a.call(b,c,d)})};_.G.prototype.Ph=_.ta(2);var Jc,Ic=_.Eb;var Sh,Ib;_.Gh=_.Ob("Opera");_.Hh=_.mc();_.Ih=_.Ob("Edge");_.Jh=_.Ob("Gecko")&&!(_.Ka()&&!_.Ob("Edge"))&&!(_.Ob("Trident")||_.Ob("MSIE"))&&!_.Ob("Edge");_.Kh=_.Ka()&&!_.Ob("Edge");_.Lh=_.Ob("Macintosh");_.Mh=_.Ob("Windows");_.Nh=_.Ob("Linux")||_.Ob("CrOS");_.Oh=_.Ob("Android");_.Ph=_.Sb();_.Qh=_.Ob("iPad");_.Rh=_.Ob("iPod");
a:{var Th="",Uh=function(){var a=_.Ja;if(_.Jh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.Ih)return/Edge\/([\d\.]+)/.exec(a);if(_.Hh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Kh)return/WebKit\/(\S+)/.exec(a);if(_.Gh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Uh&&(Th=Uh?Uh[1]:"");if(_.Hh){var Vh=Mc();if(null!=Vh&&Vh>(0,window.parseFloat)(Th)){Sh=String(Vh);break a}}Sh=Th}_.Nc=Sh;Ib={};var Xh=_.Bc.document;_.Wh=Xh&&_.Hh?Mc()||("CSS1Compat"==Xh.compatMode?(0,window.parseInt)(_.Nc,10):5):void 0;Pc.prototype.isEmpty=function(){return 360==this.b-this.f};Pc.prototype.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.Qc(this)?_.Qc(a)||a.b<=this.f||a.f>=b:_.Qc(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};Pc.prototype.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.Qc(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};Pc.prototype.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.Tc(a,this.b)<_.Tc(this.f,a)?this.b=a:this.f=a)};
Vc.prototype.isEmpty=function(){return this.f>this.b};Vc.prototype.intersects=function(a){var b=this.f,c=this.b;return b<=a.f?a.f<=c&&a.f<=a.b:b<=a.b&&b<=c};Vc.prototype.contains=function(a){return a>=this.f&&a<=this.b};Vc.prototype.extend=function(a){this.isEmpty()?this.b=this.f=a:a<this.f?this.f=a:a>this.b&&(this.b=a)};_.t(Yc,Error);var Zh;_.Yh=new ad;Zh=/'/g;ad.prototype.b=function(a,b){var c=[];cd(a,b,c);return c.join("&").replace(Zh,"%27")};_.Hc.m=function(){if(-1!=String(_.Bc.Promise).indexOf("[native code]")){var a=_.Bc.Promise.resolve(void 0);_.Hc.b=function(){a.then(_.Hc.f)}}else _.Hc.b=function(){Lc()}};_.Hc.B=function(a){_.Hc.b=function(){Lc();a&&a(_.Hc.f)}};_.Hc.j=!1;_.Hc.l=new Qb;_.Hc.f=function(){for(var a;a=_.Hc.l.remove();){try{a.wc.call(a.b)}catch(c){Gc(c)}var b=ph;b.m(a);b.f<b.l&&(b.f++,a.next=b.b,b.b=a)}_.Hc.j=!1};_.$h=_.Ob("Firefox");_.ai=_.Sb()||_.Ob("iPod");_.bi=_.Ob("iPad");_.ci=_.Ob("Android")&&!(qc()||_.Ob("Firefox")||_.Ob("Opera")||_.Ob("Silk"));_.di=qc();_.ei=_.rc()&&!(_.Sb()||_.Ob("iPad")||_.Ob("iPod"));var Xb={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var fi,hi;_.pd=_.kd(_.db,"not a number");fi=_.md(_.pd,function(a){if((0,window.isNaN)(a))throw _.Zc("NaN is not an accepted value");return a});_.gi=_.kd(_.fb,"not a string");hi=_.kd(_.gb,"not a boolean");_.ii=_.nd(_.pd);_.ji=_.nd(_.gi);_.ki=_.nd(hi);var Dd=_.fd({lat:_.pd,lng:_.pd},!0);_.li=new _.M(0,0);_.M.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.M.prototype.b=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.M.prototype.equals=_.M.prototype.b;_.M.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.M.prototype.Hd=_.ta(3);_.mi=new _.O(0,0);_.O.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.O.prototype.b=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.O.prototype.equals=_.O.prototype.b;var ni=_.Bc.google.maps,oi=Ub.b(),pi=(0,_.p)(oi.cb,oi);ni.__gjsload__=pi;_.Ua(ni.modules,pi);delete ni.modules;_.ud.prototype.remove=function(a){var b=this.f,c=this.j(a);b[c]&&(delete b[c],_.x.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.ud.prototype.contains=function(a){return!!this.f[this.j(a)]};_.ud.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};var qi=_.fd({zoom:_.nd(fi),heading:fi,pitch:fi});var ri=_.fd({source:_.gi,webUrl:_.ji,iosDeepLinkId:_.ji});zd.prototype.addListener=function(a,b,c){c=c?{jg:!1}:null;var d=!this.P.length,e;e=this.P;var f=Oa(e,Cd(a,b));(e=0>f?null:_.ya(e)?e.charAt(f):e[f])?e.once=e.once&&c:this.P.push({wc:a,context:b||null,once:c});d&&this.f();return a};zd.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};zd.prototype.removeListener=function(a,b){if(this.P.length){var c=this.P;a=Oa(c,Cd(a,b));0<=a&&_.Pa(c,a);this.P.length||this.b()}};var Ad=_.Hc;_.P.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.P.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.P.prototype.b=function(a){return a?_.$a(this.lat(),a.lat())&&_.$a(this.lng(),a.lng()):!1};_.P.prototype.equals=_.P.prototype.b;_.P.prototype.toUrlValue=function(a){a=_.m(a)?a:6;return Gd(this.lat(),a)+","+Gd(this.lng(),a)};_.k=_.Hd.prototype;_.k.Zc=_.na();_.k.Yc=_.na();_.k.addListener=function(a,b){return this.P.addListener(a,b)};_.k.addListenerOnce=function(a,b){return this.P.addListenerOnce(a,b)};_.k.removeListener=function(a,b){return this.P.removeListener(a,b)};_.k.notify=function(a){_.Bd(this.P,function(a){a(this.get())},this,a)};_.Td=_.jd(_.Jd);_.t(_.Nd,_.Hd);_.Nd.prototype.set=function(a){this.Eh(a);this.notify()};_.t(Od,_.Nd);Od.prototype.get=_.qa("b");Od.prototype.Eh=_.pa("b");_.t(_.Ud,Id);_.k=_.Ud.prototype;_.k.getType=_.ra("LineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var ee=_.jd(_.hd(_.Ud,"google.maps.Data.LineString",!0));_.t(_.Vd,Id);_.k=_.Vd.prototype;_.k.getType=_.ra("LinearRing");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var ge=_.jd(_.hd(_.Vd,"google.maps.Data.LinearRing",!0));_.t(_.Wd,Id);_.k=_.Wd.prototype;_.k.getType=_.ra("MultiPoint");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};_.t(_.Xd,Id);_.Xd.prototype.getType=_.ra("Point");_.Xd.prototype.forEachLatLng=function(a){a(this.b)};_.Xd.prototype.get=_.qa("b");_.k=_.Yd.prototype;_.k.getCenter=function(){return new _.P(_.Xc(this.f),_.Uc(this.b))};_.k.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.k.toJSON=function(){return{south:this.f.f,west:this.b.b,north:this.f.b,east:this.b.f}};_.k.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};
_.k.zi=function(a){if(!a)return!1;a=_.ae(a);var b=this.f,c=a.f;return(b.isEmpty()?c.isEmpty():1E-9>=Math.abs(c.f-b.f)+Math.abs(b.b-c.b))&&_.Sc(this.b,a.b)};_.Yd.prototype.equals=_.Yd.prototype.zi;_.k=_.Yd.prototype;_.k.contains=function(a){a=_.Jd(a);return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.k.intersects=function(a){a=_.ae(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.k.extend=function(a){a=_.Jd(a);this.f.extend(a.lat());this.b.extend(a.lng());return this};
_.k.union=function(a){a=_.ae(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.k.getSouthWest=function(){return new _.P(this.f.f,this.b.b,!0)};_.k.getNorthEast=function(){return new _.P(this.f.b,this.b.f,!0)};_.k.toSpan=function(){return new _.P(_.Wc(this.f),_.Rc(this.b),!0)};_.k.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var $d=_.fd({south:_.pd,west:_.pd,north:_.pd,east:_.pd},!1);_.t(_.ce,_.z);_.k=_.ce.prototype;_.k.getAt=function(a){return this.b[a]};_.k.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.k.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.k.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.x.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.k.insertAt=function(a,b){this.b.splice(a,0,b);be(this);_.x.trigger(this,"insert_at",a);this.f&&this.f(a)};_.k.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);be(this);_.x.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.k.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.k.pop=function(){return this.removeAt(this.b.length-1)};_.k.getArray=_.qa("b");_.k.clear=function(){for(;this.get("length");)this.pop()};_.Md(_.ce.prototype,{length:null});var si=_.md(_.fd({placeId:_.ji,query:_.ji,location:_.Jd}),function(a){if(a.placeId&&a.query)throw _.Zc("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Zc("must set one of placeId or query");return a});var je=_.jd(de);_.t(_.fe,Id);_.k=_.fe.prototype;_.k.getType=_.ra("MultiLineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.he,Id);_.k=_.he.prototype;_.k.getType=_.ra("Polygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var le=_.jd(_.hd(_.he,"google.maps.Data.Polygon",!0));_.k=_.ie.prototype;_.k.getId=_.qa("j");_.k.getGeometry=_.qa("b");_.k.setGeometry=function(a){var b=this.b;try{this.b=a?de(a):null}catch(c){_.$c(c);return}_.x.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.k.getProperty=function(a){return jb(this.f,a)};_.k.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.x.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.k.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.x.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.k.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.k.toGeoJson=function(a){var b=this;_.F("data",function(c){c.f(b,a)})};_.t(_.ke,Id);_.k=_.ke.prototype;_.k.getType=_.ra("GeometryCollection");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.me,Id);_.k=_.me.prototype;_.k.getType=_.ra("MultiPolygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.ne,_.z);oe.prototype.get=function(a){return this.b[a]};oe.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.Va(c[a],b);_.x.trigger(this,"changed",a)};oe.prototype.reset=function(a){delete this.b[a];_.x.trigger(this,"changed",a)};oe.prototype.forEach=function(a){_.Ua(this.b,a)};_.t(pe,_.z);var ti=_.nd(_.hd(_.ne,"StreetViewPanorama"));_.k=qe.prototype;_.k.contains=function(a){return this.b.hasOwnProperty(_.Sa(a))};_.k.getFeatureById=function(a){return jb(this.f,a)};
_.k.add=function(a){a=a||{};a=a instanceof _.ie?a:new _.ie(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Sa(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.x.forward(a,"setgeometry",this),e=_.x.forward(a,"setproperty",this),f=_.x.forward(a,"removeproperty",this);this.j[c]=function(){_.x.removeListener(d);_.x.removeListener(e);_.x.removeListener(f)};_.x.trigger(this,"addfeature",{feature:a})}return a};
_.k.remove=function(a){var b=_.Sa(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.x.trigger(this,"removefeature",{feature:a})}};_.k.forEach=function(a){for(var b in this.b)a(this.b[b])};_.t(te,_.z);te.prototype.set=function(a,b){if(null!=b&&!(b&&_.db(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.z.prototype.set.apply(this,arguments)};var we=ye(_.hd(_.P,"LatLng"));_.t(_.Ae,_.z);_.t(Be,_.z);Be.prototype.overrideStyle=function(a,b){this.b.set(_.Sa(a),b)};Be.prototype.revertStyle=function(a){a?this.b.reset(_.Sa(a)):this.b.forEach((0,_.p)(this.b.reset,this.b))};_.Ei=_.nd(_.hd(_.Ae,"Map"));_.t(Ce,_.z);
_.Md(Ce.prototype,{position:_.nd(_.Jd),title:_.ji,icon:_.nd(_.ld([_.gi,{Gf:od("url"),then:_.fd({url:_.gi,scaledSize:_.nd(rd),size:_.nd(rd),origin:_.nd(qd),anchor:_.nd(qd),labelOrigin:_.nd(qd),path:_.kd(function(a){return null==a})},!0)},{Gf:od("path"),then:_.fd({path:_.ld([_.gi,_.id(mh)]),anchor:_.nd(qd),labelOrigin:_.nd(qd),fillColor:_.ji,fillOpacity:_.ii,rotation:_.ii,scale:_.ii,strokeColor:_.ji,strokeOpacity:_.ii,strokeWeight:_.ii,url:_.kd(function(a){return null==a})},!0)}])),label:_.nd(_.ld([_.gi,{Gf:od("text"),
then:_.fd({text:_.gi,fontSize:_.ji,fontWeight:_.ji,fontFamily:_.ji},!0)}])),shadow:_.Eb,shape:_.Eb,cursor:_.ji,clickable:_.ki,animation:_.Eb,draggable:_.ki,visible:_.ki,flat:_.Eb,zIndex:_.ii,opacity:_.ii,place:_.nd(si),attribution:_.nd(ri)});_.t(De,_.z);De.prototype.map_changed=De.prototype.visible_changed=function(){var a=this;_.F("poly",function(b){b.f(a)})};De.prototype.getPath=function(){return this.get("latLngs").getAt(0)};De.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,xe(a))}catch(b){_.$c(b)}};_.Md(De.prototype,{draggable:_.ki,editable:_.ki,map:_.Ei,visible:_.ki});_.t(_.Ee,Ce);_.Ee.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.ca;this.__gm.set&&_.xd(this.__gm.set,this)};_.Ee.MAX_ZINDEX=1E6;_.Md(_.Ee.prototype,{map:_.ld([_.Ei,ti])});_.t(_.Fe,De);_.Fe.prototype.Aa=!0;_.Fe.prototype.getPaths=function(){return this.get("latLngs")};_.Fe.prototype.setPaths=function(a){this.set("latLngs",ze(a))};_.t(_.Ge,De);_.Ge.prototype.Aa=!1;_.He="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");_.t(Ie,_.z);_.k=Ie.prototype;_.k.contains=function(a){return this.b.contains(a)};_.k.getFeatureById=function(a){return this.b.getFeatureById(a)};_.k.add=function(a){return this.b.add(a)};_.k.remove=function(a){this.b.remove(a)};_.k.forEach=function(a){this.b.forEach(a)};_.k.addGeoJson=function(a,b){return _.se(this.b,a,b)};_.k.loadGeoJson=function(a,b,c){var d=this.b;_.F("data",function(e){e.Hk(d,a,b,c)})};_.k.toGeoJson=function(a){var b=this.b;_.F("data",function(c){c.Ek(b,a)})};
_.k.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.k.revertStyle=function(a){this.f.revertStyle(a)};_.k.controls_changed=function(){this.get("controls")&&Je(this)};_.k.drawingMode_changed=function(){this.get("drawingMode")&&Je(this)};_.Md(Ie.prototype,{map:_.Ei,style:_.Eb,controls:_.nd(_.jd(_.id(kh))),controlPosition:_.nd(_.id(_.dg)),drawingMode:_.nd(_.id(kh))});_.Fi={METRIC:0,IMPERIAL:1};_.Gi={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Hi={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Ii={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Ji={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Ki=_.fd({routes:_.jd(_.kd(_.eb))},!0);_.Le=[];_.t(Ne,_.z);_.k=Ne.prototype;_.k.internalAnchor_changed=function(){var a=this.get("internalAnchor");Oe(this,"attribution",a);Oe(this,"place",a);Oe(this,"internalAnchorMap",a,"map");Oe(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.Ee?Oe(this,"internalAnchorPosition",a,"internalPosition"):Oe(this,"internalAnchorPosition",a,"position")};
_.k.internalAnchorPoint_changed=Ne.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.li,b=this.get("internalPixelOffset")||_.mi;this.set("pixelOffset",new _.O(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.k.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.k.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};
_.k.jm=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.k.internalContent_changed=function(){this.set("content",Ke(this.get("internalContent")))};_.k.trigger=function(a){_.x.trigger(this.b,a)};_.k.close=function(){this.b.set("map",null)};_.t(_.Pe,_.z);_.Md(_.Pe.prototype,{content:_.ld([_.ji,_.kd(gd)]),position:_.nd(_.Jd),size:_.nd(rd),map:_.ld([_.Ei,ti]),anchor:_.nd(_.hd(_.z,"MVCObject")),zIndex:_.ii});_.Pe.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Pe.prototype.close=function(){this.set("map",null)};_.t(Qe,_.z);Qe.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.F("directions",function(c){c.ml(b,a)})}"panel"==a&&_.Me(this.getPanel())};_.Md(Qe.prototype,{directions:Ki,map:_.Ei,panel:_.nd(_.kd(gd)),routeIndex:_.ii});Re.prototype.route=function(a,b){_.F("directions",function(c){c.Ch(a,b,!0)})};Se.prototype.getDistanceMatrix=function(a,b){_.F("distance_matrix",function(c){c.b(a,b)})};Te.prototype.getElevationAlongPath=function(a,b){_.F("elevation",function(c){c.getElevationAlongPath(a,b)})};Te.prototype.getElevationForLocations=function(a,b){_.F("elevation",function(c){c.getElevationForLocations(a,b)})};_.Mi=_.hd(_.Yd,"LatLngBounds");_.Ue.prototype.geocode=function(a,b){_.F("geocoder",function(c){c.geocode(a,b)})};_.t(_.Ve,_.z);_.Ve.prototype.map_changed=function(){var a=this;_.F("kml",function(b){b.b(a)})};_.Md(_.Ve.prototype,{map:_.Ei,url:null,bounds:null,opacity:_.ii});_.Ni={UNKNOWN:"UNKNOWN",OK:_.ga,INVALID_REQUEST:_.ba,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.t(We,_.z);_.k=We.prototype;_.k.od=function(){var a=this;_.F("kml",function(b){b.f(a)})};_.k.url_changed=We.prototype.od;_.k.driveFileId_changed=We.prototype.od;_.k.map_changed=We.prototype.od;_.k.zIndex_changed=We.prototype.od;_.Md(We.prototype,{map:_.Ei,defaultViewport:null,metadata:null,status:null,url:_.ji,screenOverlays:_.ki,zIndex:_.ii});_.t(_.$e,_.z);_.Md(_.$e.prototype,{map:_.Ei});_.t(af,_.z);_.Md(af.prototype,{map:_.Ei});_.t(bf,_.z);_.Md(bf.prototype,{map:_.Ei});_.Oi={NEAREST:"nearest",BEST:"best"};_.Pi={DEFAULT:"default",OUTDOOR:"outdoor"};_.cg={japan_prequake:20,japan_postquake2010:24};_.cf.prototype.We=!0;_.cf.prototype.vb=_.ta(5);_.cf.prototype.Sg=!0;_.cf.prototype.Bd=_.ta(7);_.df("about:blank");_.ag="StopIteration"in _.Bc?_.Bc.StopIteration:{message:"StopIteration",stack:""};_.ef.prototype.next=function(){throw _.ag;};_.ef.prototype.ye=function(){return this};!_.Jh&&!_.Hh||_.Hh&&9<=Number(_.Wh)||_.Jh&&_.Oc("1.9.1");_.Hh&&_.Oc("9");_.gf.prototype.Sg=!0;_.gf.prototype.Bd=_.ta(6);_.gf.prototype.We=!0;_.gf.prototype.vb=_.ta(4);_.ff={};_.hf("<!DOCTYPE html>",0);_.hf("",0);_.hf("<br>",0);var Qi;_.t(jf,_.G);var Ri;_.t(kf,_.G);var Si;_.t(lf,_.G);var Ti;_.t(mf,_.G);_.t(nf,_.G);_.t(_.of,_.G);_.t(pf,_.G);_.t(qf,_.G);_.t(rf,_.G);var Ui;_.t(vf,_.G);var Vi;_.t(wf,_.G);_.qg={};_.zf.prototype.isEmpty=function(){return!(this.I<this.L&&this.J<this.M)};_.zf.prototype.extend=function(a){a&&(this.I=Math.min(this.I,a.x),this.L=Math.max(this.L,a.x),this.J=Math.min(this.J,a.y),this.M=Math.max(this.M,a.y))};_.zf.prototype.getCenter=function(){return new _.M((this.I+this.L)/2,(this.J+this.M)/2)};_.Wi=_.Af(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.Xi=_.Af(0,0,0,0);_.Df.prototype.addListener=function(a,b){this.P.addListener(a,b)};_.Df.prototype.addListenerOnce=function(a,b){this.P.addListenerOnce(a,b)};_.Df.prototype.removeListener=function(a,b){this.P.removeListener(a,b)};_.Df.prototype.b=_.ta(8);_.t(Ef,_.ef);Ef.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.za(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.za(c)&&(this.depth=c)};
Ef.prototype.next=function(){var a;if(this.j){if(!this.node||this.l&&0==this.depth)throw _.ag;a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw _.ag;return a};
Ef.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;Ef.prototype.next.call(this);this.b=!this.b;for(var c=_.xa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)_.xf(c[d],b);_.yf(b)};_.t(_.Ff,_.z);_.Ff.prototype.K=function(){var a=this;a.D||(a.D=window.setTimeout(function(){a.D=void 0;a.$()},a.fi))};_.Ff.prototype.C=function(){this.D&&window.clearTimeout(this.D);this.D=void 0;this.$()};_.t(Gf,Ef);Gf.prototype.next=function(){do Gf.Gb.next.call(this);while(-1==this.f);return this.node};_.Tf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.M(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.Ya(Math.sin(_.sc(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.Tf.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.P(_.tc(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};var Wf;_.t(eg,_.ne);eg.prototype.visible_changed=function(){var a=this;!a.m&&a.getVisible()&&(a.m=!0,_.F("streetview",function(b){var c;a.f&&(c=a.f);b.Cm(a,c)}))};_.Md(eg.prototype,{visible:_.ki,pano:_.ji,position:_.nd(_.Jd),pov:_.nd(qi),motionTracking:hi,photographerPov:null,location:null,links:_.jd(_.kd(_.eb)),status:null,zoom:_.ii,enableCloseButton:_.ki});eg.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{uh:a,options:b||{}})};_.k=_.fg.prototype;_.k.rg=_.ta(9);_.k.Kb=_.ta(10);_.k.Lf=_.ta(11);_.k.Kf=_.ta(12);_.k.Jf=_.ta(13);_.t(gg,pe);var Zi;_.t(hg,_.G);var $i;_.t(ig,_.G);var aj;_.t(jg,_.G);jg.prototype.getZoom=function(){return _.I(this,2)};jg.prototype.setZoom=function(a){this.data[2]=a};_.t(kg,_.Ff);var lg={roadmap:0,satellite:2,hybrid:3,terrain:4},bj={0:1,2:2,3:2,4:2};_.k=kg.prototype;_.k.Fg=_.Kd("center");_.k.Xf=_.Kd("zoom");_.k.changed=function(){var a=this.Fg(),b=this.Xf(),c=mg(this);if(a&&!a.b(this.G)||this.F!=b||this.O!=c)ng(this.f),this.K(),this.F=b,this.O=c;this.G=a};
_.k.$=function(){var a="",b=this.Fg(),c=this.Xf(),d=mg(this),e=this.get("size");if(e){if(b&&(0,window.isFinite)(b.lat())&&(0,window.isFinite)(b.lng())&&1<c&&null!=d&&e&&e.width&&e.height&&this.b){_.Bf(this.b,e);var f;(b=_.Yf(this.l,b,c))?(f=new _.zf,f.I=Math.round(b.x-e.width/2),f.L=f.I+e.width,f.J=Math.round(b.y-e.height/2),f.M=f.J+e.height):f=null;b=bj[d];if(f){var a=new jg,g=new hg(_.L(a,0));g.data[0]=f.I;g.data[1]=f.J;a.data[1]=b;a.setZoom(c);c=new ig(_.L(a,3));c.data[0]=f.L-f.I;c.data[1]=f.M-
f.J;c=new wf(_.L(a,4));c.data[0]=d;c.data[4]=_.sf(_.uf(_.Q));c.data[5]=_.tf(_.uf(_.Q)).toLowerCase();c.data[9]=!0;c.data[11]=!0;d=this.B+(0,window.unescape)("%3F");if(!aj){c=aj={b:-1,A:[]};b=new hg([]);Zi||(Zi={b:-1,A:[,_.T,_.T]});b=_.B(b,Zi);f=new ig([]);$i||($i={b:-1,A:[]},$i.A=[,_.vh,_.vh,_.lc(1)]);f=_.B(f,$i);g=new wf([]);if(!Vi){var h=[];Vi={b:-1,A:h};h[1]=_.V;h[2]=_.U;h[3]=_.U;h[5]=_.W;h[6]=_.W;var l=new vf([]);Ui||(Ui={b:-1,A:[,_.zh,_.U]});h[9]=_.B(l,Ui);h[10]=_.U;h[11]=_.U;h[12]=_.U;h[13]=
_.zh;h[100]=_.U}g=_.B(g,Vi);h=new jf([]);if(!Qi){var l=Qi={b:-1,A:[]},n=new kf([]);Ri||(Ri={b:-1,A:[,_.U]});var n=_.B(n,Ri),q=new mf([]);Ti||(Ti={b:-1,A:[,_.U,_.U]});var q=_.B(q,Ti),r=new lf([]);Si||(Si={b:-1,A:[,_.U]});l.A=[,n,,,,,,,,,q,,_.B(r,Si)]}c.A=[,b,_.V,_.vh,f,g,_.B(h,Qi)]}a=_.Yh.b(a.data,aj);a=this.m(d+a)}}this.f&&(_.Bf(this.f,e),pg(this,a))}};
_.k.div_changed=function(){var a=this.get("div"),b=this.b;if(a)if(b)a.appendChild(b);else{b=this.b=window.document.createElement("div");b.style.overflow="hidden";var c=this.f=window.document.createElement("img");_.x.addDomListener(b,"contextmenu",function(a){_.mb(a);_.ob(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.nb(a);_.ob(a)};_.Bf(c,_.mi);a.appendChild(b);this.$()}else b&&(ng(b),this.b=null)};_.t(tg,_.Ae);_.k=tg.prototype;_.k.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.j)};_.k.getDiv=function(){return this.__gm.R};_.k.panBy=function(a,b){var c=this.__gm;_.F("map",function(){_.x.trigger(c,"panby",a,b)})};_.k.panTo=function(a){var b=this.__gm;a=_.Jd(a);_.F("map",function(){_.x.trigger(b,"panto",a)})};_.k.panToBounds=function(a){var b=this.__gm,c=_.ae(a);_.F("map",function(){_.x.trigger(b,"pantolatlngbounds",c)})};
_.k.fitBounds=function(a){var b=this;a=_.ae(a);_.F("map",function(c){c.fitBounds(b,a)})};_.Md(tg.prototype,{bounds:null,streetView:ti,center:_.nd(_.Jd),zoom:_.ii,mapTypeId:_.ji,projection:null,heading:_.ii,tilt:_.ii,clickableIcons:hi});ug.prototype.getMaxZoomAtLatLng=function(a,b){_.F("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.t(vg,_.z);vg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.F("onion",function(a){a.b(b)})}};_.Md(vg.prototype,{map:_.Ei,tableId:_.ii,query:_.nd(_.ld([_.gi,_.kd(_.eb,"not an Object")]))});var xg,yg;xg={0:"",1:"msie",3:"chrome",4:"applewebkit",5:"firefox",6:"trident",7:"mozilla",2:"edge"};yg={0:"",1:"x11",2:"macintosh",3:"windows",4:"android",5:"iphone",6:"ipad"};_.R=null;"undefined"!=typeof window.navigator&&(_.R=new zg);Ag.prototype.j=_.Fb(function(){var a=new window.Image;return _.m(a.crossOrigin)});Ag.prototype.l=_.Fb(function(){return _.m(window.document.createElement("span").draggable)});Ag.prototype.f=_.Fb(function(){try{var a=window.document.createElement("canvas").getContext("2d"),b=a.getImageData(0,0,1,1);b.data[0]=b.data[1]=b.data[2]=100;b.data[3]=64;a.putImageData(b,0,0);b=a.getImageData(0,0,1,1);return 95>b.data[0]||105<b.data[0]}catch(c){return!1}});_.cj=_.R?new Ag(_.R):null;_.dj=_.R?new Cg:null;_.t(_.Dg,_.z);_.Dg.prototype.map_changed=function(){var a=this;_.F("overlay",function(b){b.Sj(a)})};_.Md(_.Dg.prototype,{panes:null,projection:null,map:_.ld([_.Ei,ti])});_.t(_.Eg,_.z);_.Eg.prototype.map_changed=_.Eg.prototype.visible_changed=function(){var a=this;_.F("poly",function(b){b.b(a)})};_.Eg.prototype.center_changed=function(){_.x.trigger(this,"bounds_changed")};_.Eg.prototype.radius_changed=_.Eg.prototype.center_changed;_.Eg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.db(a)){var c=this.get("map"),c=c&&c.__gm.get("baseMapType");return _.bg(b,a/_.ve(c))}return null};
_.Md(_.Eg.prototype,{center:_.nd(_.Jd),draggable:_.ki,editable:_.ki,map:_.Ei,radius:_.ii,visible:_.ki});_.t(_.Jg,_.z);_.Jg.prototype.map_changed=_.Jg.prototype.visible_changed=function(){var a=this;_.F("poly",function(b){b.j(a)})};_.Md(_.Jg.prototype,{draggable:_.ki,editable:_.ki,bounds:_.nd(_.ae),map:_.Ei,visible:_.ki});_.t(Kg,_.z);Kg.prototype.map_changed=function(){var a=this;_.F("streetview",function(b){b.Rj(a)})};_.Md(Kg.prototype,{map:_.Ei});_.Lg.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.F("streetview",function(d){_.F("geometry",function(e){d.Nk(a,b,e.computeHeading,e.computeOffset,c)})})};_.Lg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.Lg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.t(_.Mg,_.z);_.k=_.Mg.prototype;_.k.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={Y:a,zoom:b,Hb:null};d.__gmimt=c;_.xd(this.b,d);var e=Og(this);1!=e&&Ng(d,e);if(this.f){var e=this.tileSize||new _.O(256,256),f=this.j(a,b);c.Hb=this.f(a,b,e,d,f,function(){_.x.trigger(d,"load")})}return d};_.k.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.Hb)&&a.release())};_.k.Ne=_.ta(14);
_.k.opacity_changed=function(){var a=Og(this);this.b.forEach(function(b){Ng(b,a)})};_.k.gd=!0;_.Md(_.Mg.prototype,{opacity:_.ii});_.t(_.Pg,_.z);_.Pg.prototype.getTile=jh;_.Pg.prototype.tileSize=new _.O(256,256);_.Pg.prototype.gd=!0;_.t(_.Qg,_.Pg);_.t(_.Rg,_.z);_.Md(_.Rg.prototype,{attribution:_.nd(ri),place:_.nd(si)});var ej={Animation:{BOUNCE:1,DROP:2,no:3,lo:4},Circle:_.Eg,ControlPosition:_.dg,Data:Ie,GroundOverlay:_.Ve,ImageMapType:_.Mg,InfoWindow:_.Pe,LatLng:_.P,LatLngBounds:_.Yd,MVCArray:_.ce,MVCObject:_.z,Map:tg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.ih,MapTypeRegistry:te,Marker:_.Ee,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,oo:4,Bj:5},OverlayView:_.Dg,Point:_.M,Polygon:_.Fe,Polyline:_.Ge,Rectangle:_.Jg,ScaleControlStyle:{DEFAULT:0},Size:_.O,StreetViewPreference:_.Oi,StreetViewSource:_.Pi,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:mh,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,Bj:3},event:_.x};
_.Va(ej,{BicyclingLayer:_.$e,DirectionsRenderer:Qe,DirectionsService:Re,DirectionsStatus:{OK:_.ga,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.ea,NOT_FOUND:_.fa},DirectionsTravelMode:_.Gi,DirectionsUnitSystem:_.Fi,DistanceMatrixService:Se,DistanceMatrixStatus:{OK:_.ga,INVALID_REQUEST:_.ba,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,UNKNOWN_ERROR:_.ka,MAX_ELEMENTS_EXCEEDED:_.da,MAX_DIMENSIONS_EXCEEDED:_.ca},DistanceMatrixElementStatus:{OK:_.ga,
NOT_FOUND:_.fa,ZERO_RESULTS:_.la},ElevationService:Te,ElevationStatus:{OK:_.ga,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,ho:"DATA_NOT_AVAILABLE"},FusionTablesLayer:vg,Geocoder:_.Ue,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ga,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,ERROR:_.aa},KmlLayer:We,
KmlLayerStatus:_.Ni,MaxZoomService:ug,MaxZoomStatus:{OK:_.ga,ERROR:_.aa},SaveWidget:_.Rg,StreetViewCoverageLayer:Kg,StreetViewPanorama:eg,StreetViewService:_.Lg,StreetViewStatus:{OK:_.ga,UNKNOWN_ERROR:_.ka,ZERO_RESULTS:_.la},StyledMapType:_.Qg,TrafficLayer:af,TrafficModel:_.Hi,TransitLayer:bf,TransitMode:_.Ii,TransitRoutePreference:_.Ji,TravelMode:_.Gi,UnitSystem:_.Fi});_.Va(Ie,{Feature:_.ie,Geometry:Id,GeometryCollection:_.ke,LineString:_.Ud,LinearRing:_.Vd,MultiLineString:_.fe,MultiPoint:_.Wd,MultiPolygon:_.me,Point:_.Xd,Polygon:_.he});_.vc("main",{});var Ug=/'/g,Vg;var sd=arguments[0];
window.google.maps.Load(function(a,b){var c=window.google.maps;Zg();var d=$g(c);_.Q=new qf(a);_.fj=Math.random()<_.I(_.Q,0,1);_.gj=Math.round(1E15*Math.random()).toString(36);_.sg=Wg();_.Li=Xg();_.Yi=new _.ce;_.Uf=b;for(a=0;a<_.Ac(_.Q,8);++a)_.qg[_.zc(_.Q,8,a)]=!0;a=new _.of(_.Q.data[3]);td(_.K(a,0));_.Ua(ej,function(a,b){c[a]=b});c.version=_.K(a,1);window.setTimeout(function(){wc(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.K(_.Q,6),key:_.K(_.Q,16)})})},
5E3);_.x.Sm();Wf=new Vf;(a=_.K(_.Q,11))&&wc(_.yc(_.Q,12),Yg(a),!0)});}).call(this,{});

// inlined
google.maps.__gjsload__('geometry', function(_){var xw=function(a,b){return Math.abs(_.Za(b-a,-180,180))},yw=function(a,b,c,d,e){if(!d){c=xw(a.lng(),c)/xw(a.lng(),b.lng());if(!e)return e=Math.sin(_.sc(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.sc(b.lat())),_.tc(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.M(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.sc(a.lat());a=_.sc(a.lng());d=_.sc(b.lat());b=_.sc(b.lng());c=_.sc(c);return _.Za(_.tc(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},zw=_.na(),Aw={computeHeading:function(a,b){var c=_.Ed(a),d=_.Fd(a);a=_.Ed(b);b=_.Fd(b)-d;return _.Za(_.tc(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)},computeOffset:function(a,b,c,d){b/=d||6378137;c=_.sc(c);var e=_.Ed(a);a=_.Fd(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e),e=Math.cos(e),g=d*f+b*e*Math.cos(c);return new _.P(_.tc(Math.asin(g)),
_.tc(a+Math.atan2(b*e*Math.sin(c),d-f*g)))},computeOffsetOrigin:function(a,b,c,d){c=_.sc(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.Ed(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f),g=g/(d*d+e*e),h=(c-e*g)/d,g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.Fd(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.P(_.tc(g),
_.tc(a))},interpolate:function(a,b,c){var d=_.Ed(a),e=_.Fd(a),f=_.Ed(b),g=_.Fd(b),h=Math.cos(d),l=Math.cos(f);b=Aw.Fe(a,b);var n=Math.sin(b);if(1E-6>n)return new _.P(a.lat(),a.lng());a=Math.sin((1-c)*b)/n;c=Math.sin(c*b)/n;b=a*h*Math.cos(e)+c*l*Math.cos(g);e=a*h*Math.sin(e)+c*l*Math.sin(g);return new _.P(_.tc(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.tc(Math.atan2(e,b)))},Fe:function(a,b){var c=_.Ed(a);a=_.Fd(a);var d=_.Ed(b);b=_.Fd(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-
d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))},computeDistanceBetween:function(a,b,c){c=c||6378137;return Aw.Fe(a,b)*c},computeLength:function(a,b){b=b||6378137;var c=0;a instanceof _.ce&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=Aw.computeDistanceBetween(a[d],a[d+1],b);return c},computeArea:function(a,b){return Math.abs(Aw.computeSignedArea(a,b))},computeSignedArea:function(a,b){b=b||6378137;a instanceof _.ce&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=
Aw.lk(c,a[e],a[e+1]);return d*b*b},lk:function(a,b,c){return Aw.mk(a,b,c)*Aw.pl(a,b,c)},mk:function(a,b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=Aw.Fe(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))},pl:function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.Ed(d),d=_.Fd(d),f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+
b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?1:-1}};var Bw={decodePath:function(a){for(var b=_.w(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,l=0,n;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(31<=n);e+=h&1?~(h>>1):h>>1;h=1;l=0;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(31<=n);f+=h&1?~(h>>1):h>>1;c[g]=new _.P(1E-5*e,1E-5*f,!0)}c.length=g;return c},encodePath:function(a){a instanceof _.ce&&(a=a.getArray());return Bw.Jm(a,function(a){return[Math.round(1E5*a.lat()),Math.round(1E5*a.lng())]})},Jm:function(a,b){for(var c=[],
d=[0,0],e,f=0,g=_.w(a);f<g;++f)e=b?b(a[f]):a[f],Bw.rh(e[0]-d[0],c),Bw.rh(e[1]-d[1],c),d=e;return c.join("")},rh:function(a,b){return Bw.Km(0>a?~(a<<1):a<<1,b)},Km:function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63));return b}};var Cw={containsLocation:function(a,b){for(var c=_.Za(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map"),f=!d&&f?f.getProjection():null,g=!1,h=0,l=e.getLength();h<l;++h)for(var n=e.getAt(h),q=0,r=n.getLength();q<r;++q){var u=n.getAt(q),y=n.getAt((q+1)%r),A=_.Za(u.lng(),-180,180),D=_.Za(y.lng(),-180,180),C=Math.max(A,D),A=Math.min(A,D);(180<C-A?c>=C||c<A:c<C&&c>=A)&&yw(u,y,c,d,f)<a.lat()&&(g=!g)}return g||Cw.isLocationOnEdge(a,b)},isLocationOnEdge:function(a,b,c){c=c||1E-9;var d=
_.Za(a.lng(),-180,180),e=b instanceof _.Fe,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,l=g.getLength();h<l;++h)for(var n=g.getAt(h),q=n.getLength(),r=e?q:q-1,u=0;u<r;++u){var y=n.getAt(u),A=n.getAt((u+1)%q),D=_.Za(y.lng(),-180,180),C=_.Za(A.lng(),-180,180),J=Math.max(D,C),E=Math.min(D,C);if(D=1E-9>=Math.abs(_.Za(D-C,-180,180))&&(Math.abs(_.Za(D-d,-180,180))<=c||Math.abs(_.Za(C-d,-180,180))<=c))var D=a.lat(),C=Math.min(y.lat(),A.lat())-c,H=Math.max(y.lat(),
A.lat())+c,D=D>=C&&D<=H;if(D)return!0;if(180<J-E?d+c>=J||d-c<=E:d+c>=E&&d-c<=J)if(y=yw(y,A,d,f,b),Math.abs(y-a.lat())<c)return!0}return!1}};_.Bc.google.maps.geometry={encoding:Bw,spherical:Aw,poly:Cw};_.k=zw.prototype;_.k.decodePath=Bw.decodePath;_.k.encodePath=Bw.encodePath;_.k.computeDistanceBetween=Aw.computeDistanceBetween;_.k.interpolate=Aw.interpolate;_.k.computeHeading=Aw.computeHeading;_.k.computeOffset=Aw.computeOffset;_.k.computeOffsetOrigin=Aw.computeOffsetOrigin;_.vc("geometry",new zw);});


"use strict";
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  }
  else {
    root.GMaps = factory();
  }


}(this, function() {

/*!
 * GMaps.js v0.4.24
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2016, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      var callback_params = original_callback_params.slice(0);
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementsByClassName = function (class_name, context) {
    var element,
        _class = class_name.replace('.', '');

    if ('jQuery' in this && context) {
        element = $("." + _class, context)[0];
    } else {
        element = document.getElementsByClassName(_class)[0];
    }
    return element;

};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in window && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {

    if (!(typeof window.google === 'object' && window.google.maps)) {
      if (typeof window.console === 'object' && window.console.error) {
        console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
      }

      return function() {};
    }

    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var valueOrDefault = function(value, defaultValue) {
      return value === undefined ? defaultValue : value;
    };

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

      if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
            /**
             * Container element
             *
             * @type {HTMLElement}
             */
            this.el = getElementById(identifier, options.context);
        } else {
            this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
          this.el = identifier;
      }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    /**
     * Google Maps map instance
     *
     * @type {google.maps.Map}
     */
    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');

      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      // context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);

        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();

          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      setTimeout(function() {
        context_menu_element.style.display = 'block';
      }, 0);
    };

    /**
     * Add a context menu for a map or a marker.
     *
     * @param {object} options - The `options` object should contain:
     * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
     * * `options` (array): A collection of context menu items:
     *   * `title` (string): Item's title shown in the context menu.
     *   * `name` (string): Item's identifier.
     *   * `action` (function): Function triggered after selecting the context menu item.
     */
    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      if (!getElementById('gmaps_context_menu')) {
        doc.body.appendChild(ul);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    /**
     * Hide the current context menu
     */
    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */
    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    /**
     * Adjust the map zoom to include all the markers added in the map.
     */
    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */
    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    /**
     * Center the map using the `lat` and `lng` coordinates.
     *
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    /**
     * Return the HTML element container of the map.
     *
     * @returns {HTMLElement} the element container.
     */
    this.getElement = function() {
      return this.el;
    };

    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */
    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */
    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.title) {
    control.title = options.title;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }

          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      GMaps.fire('marker_removed', marker, this);
    }

    if(this.markerClusterer && this.markerClusterer.clearMarkers) {
      this.markerClusterer.clearMarkers();
    }

    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      routes = [],
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(routes, result, status);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {
  var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;

  renderOptions.panel = panel;
  renderOptions = extend_object({
    map: this.map
  }, renderOptions);
  display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
  });
};

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes) {
      if (routes.length > 0) {
        var polyline_options = {
          path: routes[routes.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);

        if (options.callback) {
          options.callback(routes[routes.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;

  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.prototype.once = function(event_name, handler) {
  return GMaps.once(event_name, this, handler);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.once = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map;
    return google.maps.event.addListenerOnce(object, event_name, handler);
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      }

      // Raycast point in polygon method
      var inPoly = false;

      var numPaths = this.getPaths().getLength();
      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      }
      else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function() {
    return this['__gm_id'];
  };
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}

return GMaps;
}));
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 1G(b,a){6 1u(){}1u.v=a.v;b.2B=a.v;b.v=1b 1u();b.v.3h=b}6 u(c,b,a){2.3=c;2.1L=c.2y;2.7=K.1A("2k");2.7.4.S="11: 1p; 15: 1P;";2.q=K.1A("2k");2.q.4.S=2.7.4.S;2.q.1M("2A","1d A;");2.q.1M("2w","1d A;");2.U=u.P(b)}1G(u,8.5.3g);u.P=6(b){t a;9(C u.P.1j==="B"){a=K.1A("30");a.4.S="11: 1p; z-2Y: 2W; M: 13;";a.4.1l="-2P";a.4.1x="-2M";a.2I=b;u.P.1j=a}1d u.P.1j};u.v.2D=6(){t g=2;t m=A;t c=A;t f;t j,1e;t p;t d;t h;t o;t n=20;t i="3p("+2.1L+")";t k=6(e){9(e.2q){e.2q()}e.3l=F;9(e.2n){e.2n()}};t l=6(){g.3.2m(3c)};2.1E().1J.Y(2.7);2.1E().36.Y(2.q);9(C u.P.2e==="B"){2.1E().1J.Y(2.U);u.P.2e=F}2.1t=[8.5.r.O(2.q,"2c",6(e){9(g.3.R()||g.3.X()){2.4.19="25";8.5.r.D(g.3,"2c",e)}}),8.5.r.O(2.q,"21",6(e){9((g.3.R()||g.3.X())&&!c){2.4.19=g.3.2V();8.5.r.D(g.3,"21",e)}}),8.5.r.O(2.q,"1X",6(e){c=A;9(g.3.R()){m=F;2.4.19=i}9(g.3.R()||g.3.X()){8.5.r.D(g.3,"1X",e);k(e)}}),8.5.r.O(K,"1s",6(a){t b;9(m){m=A;g.q.4.19="25";8.5.r.D(g.3,"1s",a)}9(c){9(d){b=g.Z().1v(g.3.Q());b.y+=n;g.3.J(g.Z().1S(b));2O{g.3.2m(8.5.2N.2L);2J(l,2H)}2E(e){}}g.U.4.M="13";g.3.12(f);p=F;c=A;a.L=g.3.Q();8.5.r.D(g.3,"1N",a)}}),8.5.r.w(g.3.1g(),"2C",6(a){t b;9(m){9(c){a.L=1b 8.5.2z(a.L.1f()-j,a.L.1i()-1e);b=g.Z().1v(a.L);9(d){g.U.4.14=b.x+"G";g.U.4.T=b.y+"G";g.U.4.M="";b.y-=n}g.3.J(g.Z().1S(b));9(d){g.q.4.T=(b.y+n)+"G"}8.5.r.D(g.3,"1K",a)}V{j=a.L.1f()-g.3.Q().1f();1e=a.L.1i()-g.3.Q().1i();f=g.3.1c();h=g.3.Q();o=g.3.1g().2x();d=g.3.E("16");c=F;g.3.12(1I);a.L=g.3.Q();8.5.r.D(g.3,"1H",a)}}}),8.5.r.O(K,"2v",6(e){9(c){9(e.3r===27){d=A;g.3.J(h);g.3.1g().3q(o);8.5.r.D(K,"1s",e)}}}),8.5.r.O(2.q,"2u",6(e){9(g.3.R()||g.3.X()){9(p){p=A}V{8.5.r.D(g.3,"2u",e);k(e)}}}),8.5.r.O(2.q,"2s",6(e){9(g.3.R()||g.3.X()){8.5.r.D(g.3,"2s",e);k(e)}}),8.5.r.w(2.3,"1H",6(a){9(!c){d=2.E("16")}}),8.5.r.w(2.3,"1K",6(a){9(!c){9(d){g.J(n);g.7.4.N=1I+(2.E("17")?-1:+1)}}}),8.5.r.w(2.3,"1N",6(a){9(!c){9(d){g.J(0)}}}),8.5.r.w(2.3,"3o",6(){g.J()}),8.5.r.w(2.3,"3n",6(){g.12()}),8.5.r.w(2.3,"3m",6(){g.18()}),8.5.r.w(2.3,"3j",6(){g.18()}),8.5.r.w(2.3,"3i",6(){g.1C()}),8.5.r.w(2.3,"3f",6(){g.1y()}),8.5.r.w(2.3,"3e",6(){g.1z()}),8.5.r.w(2.3,"3d",6(){g.1a()}),8.5.r.w(2.3,"3b",6(){g.1a()})]};u.v.3a=6(){t i;2.7.2j.2i(2.7);2.q.2j.2i(2.q);2h(i=0;i<2.1t.39;i++){8.5.r.38(2.1t[i])}};u.v.37=6(){2.1y();2.1C();2.1a()};u.v.1y=6(){t a=2.3.E("1w");9(C a.35==="B"){2.7.W=a;2.q.W=2.7.W}V{2.7.W="";2.7.Y(a);a=a.34(F);2.q.W="";2.q.Y(a)}};u.v.1C=6(){2.q.33=2.3.32()||""};u.v.1a=6(){t i,I;2.7.1r=2.3.E("1q");2.q.1r=2.7.1r;2.7.4.S="";2.q.4.S="";I=2.3.E("I");2h(i 31 I){9(I.2Z(i)){2.7.4[i]=I[i];2.q.4[i]=I[i]}}2.2b()};u.v.2b=6(){2.7.4.11="1p";2.7.4.15="1P";9(C 2.7.4.H!=="B"&&2.7.4.H!==""){2.7.4.2a="\\"29:28.26.2f(H="+(2.7.4.H*24)+")\\"";2.7.4.23="22(H="+(2.7.4.H*24)+")"}2.q.4.11=2.7.4.11;2.q.4.15=2.7.4.15;2.q.4.H=0.2X;2.q.4.2a="\\"29:28.26.2f(H=1)\\"";2.q.4.23="22(H=1)";2.1z();2.J();2.18()};u.v.1z=6(){t a=2.3.E("1o");2.7.4.1l=-a.x+"G";2.7.4.1x=-a.y+"G";2.q.4.1l=-a.x+"G";2.q.4.1x=-a.y+"G"};u.v.J=6(a){t b=2.Z().1v(2.3.Q());9(C a==="B"){a=0}2.7.4.14=1Z.1Y(b.x)+"G";2.7.4.T=1Z.1Y(b.y-a)+"G";2.q.4.14=2.7.4.14;2.q.4.T=2.7.4.T;2.12()};u.v.12=6(){t a=(2.3.E("17")?-1:+1);9(C 2.3.1c()==="B"){2.7.4.N=2U(2.7.4.T,10)+a;2.q.4.N=2.7.4.N}V{2.7.4.N=2.3.1c()+a;2.q.4.N=2.7.4.N}};u.v.18=6(){9(2.3.E("1n")){2.7.4.M=2.3.2T()?"2S":"13"}V{2.7.4.M="13"}2.q.4.M=2.7.4.M};6 1m(a){a=a||{};a.1w=a.1w||"";a.1o=a.1o||1b 8.5.2R(0,0);a.1q=a.1q||"2Q";a.I=a.I||{};a.17=a.17||A;9(C a.1n==="B"){a.1n=F}9(C a.16==="B"){a.16=F}9(C a.2d==="B"){a.2d=F}9(C a.1W==="B"){a.1W=A}9(C a.1B==="B"){a.1B=A}a.1k=a.1k||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2K.3k";a.1F=a.1F||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2G.2F";a.1B=A;2.2p=1b u(2,a.1k,a.1F);8.5.1D.1O(2,2r)}1G(1m,8.5.1D);1m.v.1h=6(a){8.5.1D.v.1h.1O(2,2r);2.2p.1h(a)};',62,214,'||this|marker_|style|maps|function|labelDiv_|google|if|||||||||||||||||eventDiv_|event||var|MarkerLabel_|prototype|addListener||||false|undefined|typeof|trigger|get|true|px|opacity|labelStyle|setPosition|document|latLng|display|zIndex|addDomListener|getSharedCross|getPosition|getDraggable|cssText|top|crossDiv_|else|innerHTML|getClickable|appendChild|getProjection||position|setZIndex|none|left|overflow|raiseOnDrag|labelInBackground|setVisible|cursor|setStyles|new|getZIndex|return|cLngOffset|lat|getMap|setMap|lng|crossDiv|crossImage|marginLeft|MarkerWithLabel|labelVisible|labelAnchor|absolute|labelClass|className|mouseup|listeners_|tempCtor|fromLatLngToDivPixel|labelContent|marginTop|setContent|setAnchor|createElement|optimized|setTitle|Marker|getPanes|handCursor|inherits|dragstart|1000000|overlayImage|drag|handCursorURL_|setAttribute|dragend|apply|hidden|com|gstatic|fromDivPixelToLatLng|protocol|location|http|draggable|mousedown|round|Math||mouseout|alpha|filter|100|pointer|Microsoft||DXImageTransform|progid|MsFilter|setMandatoryStyles|mouseover|clickable|processed|Alpha|https|for|removeChild|parentNode|div|en_us|setAnimation|stopPropagation|mapfiles|label|preventDefault|arguments|dblclick|intl|click|keydown|ondragstart|getCenter|handCursorURL|LatLng|onselectstart|superClass_|mousemove|onAdd|catch|cur|closedhand_8_8|1406|src|setTimeout|drag_cross_67_16|BOUNCE|9px|Animation|try|8px|markerLabels|Point|block|getVisible|parseInt|getCursor|1000002|01|index|hasOwnProperty|img|in|getTitle|title|cloneNode|nodeType|overlayMouseTarget|draw|removeListener|length|onRemove|labelstyle_changed|null|labelclass_changed|labelanchor_changed|labelcontent_changed|OverlayView|constructor|title_changed|labelvisible_changed|png|cancelBubble|visible_changed|zindex_changed|position_changed|url|setCenter|keyCode'.split('|'),0,{}))
