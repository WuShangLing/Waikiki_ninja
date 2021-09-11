var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,c=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&n(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&n(e,t,a[t]);return e},i=(e,s)=>a(e,t(s));"undefined"!=typeof require&&require;import{p as l,a as d,o as p,c as u,r as m,b as k,d as y,F as f,k as g,u as v,e as h,f as w,g as b,t as C,h as j,w as x,i as P,_,j as S,l as A,m as K,n as L,q as I,s as W,v as O,x as Q}from"./vendor.e712cdd6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();l("data-v-4b23e37a"),d();const V={},R={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};V.render=function(e,a){return p(),u("img",R)};const N={components:{Logo:V}};l("data-v-1f23ce5f");const U={class:"header"},q={class:"header-wrapper"},D={class:"flex items-center"},z=k("p",{class:"pl-3 select-none"},"Ninja",-1);d(),N.render=function(e,a,t,s,o,r){const n=m("Logo");return p(),u("div",U,[k("div",q,[k("div",D,[y(n,{class:"h-10 w-10"}),z])])])},N.__scopeId="data-v-1f23ce5f";const E={class:"main"},J={setup:e=>(e,a)=>{const t=m("router-view");return p(),u(f,null,[y(N),k("div",E,[y(t)])],64)}};const T=g.create({prefixUrl:"/api",retry:{limit:0}});const $={setup(){const e=v();h();let a=w({remark:"",nickName:void 0,timestamp:void 0});const t=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void s();const t=await function(e){const a=new URLSearchParams;return a.set("eid",e),T.get("userinfo",{searchParams:a}).json()}(e);if(!t)return _.error("获取用户信息失败，请重重新登录"),void s();a.nickName=t.data.nickName,a.timestamp=new Date(t.data.timestamp).toLocaleString()}catch(e){console.error(e)}};b(t);const s=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(c({},C(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:t,logout:s,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return T.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?_.error(a.message):(_.success(a.message),setTimeout((()=>{s()}),1e3))}catch(e){console.error(e)}},changeremark:async()=>{try{const e=localStorage.getItem("eid"),t=a.remark,s=await function(e){return T.post("update/remark",{json:e}).json()}({eid:e,remark:t});200!==s.code?_.success(s.message):_.error(s.message)}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},Z={class:"content"},B={class:"card"},G=k("div",{class:"card-header"},[k("p",{class:"card-title"},"个人中心")],-1),H={class:"card-body"},F={class:"card-footer"},M=A("退出登录"),X=A("删除账号"),Y={class:"card"},ee=k("div",{class:"card-header"},[k("p",{class:"card-title"},"修改备注")],-1),ae={class:"card-body text-center"},te={class:"card-footer"},se=A("修改"),oe={class:"card"},re=k("div",{class:"card-header"},[k("p",{class:"card-title"},"常见活动位置"),k("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),ne={class:"card-body"},ce={class:"pr-2"},ie=["onClick"];$.render=function(e,a,t,s,o,r){const n=m("el-button"),c=m("el-input");return p(),u("div",Z,[k("div",B,[G,k("div",H,[k("p",null,"昵称："+j(e.nickName),1),k("p",null,"更新时间："+j(e.timestamp),1)]),k("div",F,[y(n,{size:"small",auto:"",onClick:s.logout},{default:x((()=>[M])),_:1},8,["onClick"]),y(n,{type:"danger",size:"small",auto:"",onClick:s.delAccount},{default:x((()=>[X])),_:1},8,["onClick"])])]),k("div",Y,[ee,k("div",ae,[y(c,{modelValue:e.remark,"onUpdate:modelValue":a[0]||(a[0]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),k("div",te,[y(n,{size:"small",auto:"",onClick:s.changeremark},{default:x((()=>[se])),_:1},8,["onClick"])])]),k("div",oe,[re,k("div",ne,[k("ul",null,[(p(!0),u(f,null,P(s.activity,((e,a)=>(p(),u("li",{key:a,class:"leading-normal"},[k("span",null,j(e.name)+"：",1),k("span",ce,j(e.address),1),e.href?(p(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>s.openUrlWithJD(e.href)},"直达链接",8,ie)):S("",!0)])))),128))])])])])};const le={setup(){const e=v();h();let a=w({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!1});const t=async()=>{try{const e=(await T.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},s=async()=>{if(this.showQR)try{const e=await T.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),_.error("生成二维码失败！请重试或放弃")}else _.warning("扫码已禁用请手动抓包")},o=async()=>{try{const t=await function(e){return T.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==t?void 0:t.data.errcode){case 0:localStorage.setItem("eid",t.data.eid),_.success(t.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:_.error(t.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(t){clearInterval(a.timer),a.waitLogin=!1}};return b((()=>{t(),s()})),i(c({},C(a)),{getInfo:t,getQrcode:s,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const t=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],s=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(t&&s){const a=await function(e){return T.post("cklogin",{json:e}).json()}({pt_key:t,pt_pin:s});a.data.eid?(localStorage.setItem("eid",a.data.eid),_.success(a.message),e.push("/")):_.error(a.message||"cookie 解析失败，请检查后重试！")}else _.error("cookie 解析失败，请检查后重试！")}catch(t){console.error(t)}},WSCKLogin:async()=>{try{const t=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(t&&s){const a=await function(e){return T.post("WSCKLogin",{json:e}).json()}({wskey:t,pin:s});a.data.eid?(localStorage.setItem("eid",a.data.eid),_.success(a.message),e.push("/")):_.error(a.message||"wskey 解析失败，请检查后重试！")}else _.error("wskey 解析失败，请检查后重试！")}catch(t){console.error(t)}}})}};l("data-v-1d5e3e69");const de={class:"content"},pe=K('<div class="card" data-v-1d5e3e69><div class="card-header" data-v-1d5e3e69><div class="flex items-center justify-between" data-v-1d5e3e69><p class="card-title" data-v-1d5e3e69>Waikiki提醒您</p></div></div><div class="card-body text-base leading-6" data-v-1d5e3e69><p data-v-1d5e3e69>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-1d5e3e69>建议京东账户绑定微信以保证提现能到账。</p><p data-v-1d5e3e69>由于京东异地登录限制，扫码获取cookie只有2小时有效期，因此暂时关闭扫码功能，现需手动抓取Cookie。</p><b data-v-1d5e3e69>且有效期不长，平均3-5天，因此需要及时更新。</b></div><div class="card-footet" data-v-1d5e3e69></div></div>',1),ue={key:0,class:"card"},me={class:"card-header"},ke={class:"flex items-center justify-between"},ye=k("p",{class:"card-title"},"扫码登录",-1),fe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ge=k("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),ve={class:"card-body text-center"},he={key:0,class:"flex flex-col w-48 m-auto mt-4"},we=A("扫描二维码登录"),be=A("跳转到京东 App 登录"),Ce=["src"],je=k("div",{class:"card-footer"},null,-1),xe={key:1,class:"card"},Pe={class:"card-header"},_e={class:"flex items-center justify-between"},Se=k("p",{class:"card-title"},"WSCK 录入",-1),Ae={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Ke=K('<div class="card-body text-base leading-6" data-v-1d5e3e69><b data-v-1d5e3e69>wskey有效期长达一年，请联系管理员确认使用</b><p data-v-1d5e3e69>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-1d5e3e69>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-1d5e3e69>点击跳转安装</a></p><p class="card-subtitle" data-v-1d5e3e69>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-1d5e3e69>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-1d5e3e69>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div><span class="card-subtitle" data-v-1d5e3e69> 请在下方输入您的 WSCK </span>',2),Le={class:"card-body text-center"},Ie=A("录入"),We=k("div",{class:"card-footet"},null,-1),Oe={key:2,class:"card"},Qe={class:"card-header"},Ve={class:"flex items-center justify-between"},Re=k("p",{class:"card-title"},"CK 登录",-1),Ne={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Ue=k("div",{class:"card-body text-base leading-6"},[k("p",null,[A("PC用户建议使用开源工具"),k("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),A("获取cookie并在下方填写。")]),k("p",null,[A("手机用户可以使用Alook浏览器登录"),k("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD官网"),A("，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。")]),k("p",null,"另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck，要注意pt_key和pt_pin字段是以app_open开头的。"),k("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1),qe=k("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),De={class:"card-body text-center"},ze=A("登录"),Ee=k("div",{class:"card-footet"},null,-1);d(),le.render=function(e,a,t,s,o,r){const n=m("el-button"),c=m("el-input");return p(),u("div",de,[pe,e.showQR?(p(),u("div",ue,[k("div",me,[k("div",ke,[ye,k("span",fe,"余量："+j(e.marginCount),1)]),ge]),k("div",ve,[e.qrCodeVisibility?(p(),u("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,Ce)):(p(),u("div",he,[y(n,{type:"primary",round:"",onClick:s.showQrcode},{default:x((()=>[we])),_:1},8,["onClick"]),y(n,{class:"mt-4 ml-0",type:"primary",round:"",onClick:s.jumpLogin},{default:x((()=>[be])),_:1},8,["onClick"])]))]),je])):S("",!0),e.showWSCK?(p(),u("div",xe,[k("div",Pe,[k("div",_e,[Se,k("span",Ae,"余量："+j(e.marginWSCKCount),1)]),Ke]),k("div",Le,[y(c,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),y(n,{type:"primary",size:"small",round:"",onClick:s.WSCKLogin},{default:x((()=>[Ie])),_:1},8,["onClick"])]),We])):S("",!0),e.showCK?(p(),u("div",Oe,[k("div",Qe,[k("div",Ve,[Re,k("span",Ne,"余量："+j(e.marginCount),1)]),Ue,qe]),k("div",De,[y(c,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),y(n,{type:"primary",size:"small",round:"",onClick:s.CKLogin},{default:x((()=>[ze])),_:1},8,["onClick"])]),Ee])):S("",!0)])},le.__scopeId="data-v-1d5e3e69";const Je=[{path:"/",component:$},{path:"/login",component:le}],Te=L({history:I(),routes:Je}),$e=[O,Q,_],Ze=[_],Be=W(J);$e.forEach((e=>{Be.component(e.name,e)})),Ze.forEach((e=>{Be.use(e)})),Be.use(Te),Be.mount("#app");
