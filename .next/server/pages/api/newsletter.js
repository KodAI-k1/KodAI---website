"use strict";(()=>{var e={};e.id=527,e.ids=[527],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,s){return s in n?n[s]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,s)):"function"==typeof n&&"default"===s?n:void 0}}})},4544:(e,n,s)=>{s.r(n),s.d(n,{config:()=>l,default:()=>c,routeModule:()=>m});var t={};s.r(t),s.d(t,{default:()=>u});var r=s(1802),o=s(7153),a=s(6249),i=s(4632);async function u(e,n){if("POST"!==e.method)return n.status(405).json({message:"Method not allowed"});let{email:s}=e.body;if(!s)return n.status(400).json({message:"Email is required"});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return n.status(400).json({message:"Invalid email address"});try{let e=await (0,i.xw)(s);if(e.success)return n.status(200).json({message:"Successfully subscribed to newsletter"});return n.status(500).json({message:"Failed to subscribe",error:e.error})}catch(e){return console.error("Newsletter subscription error:",e),n.status(500).json({message:"Internal server error"})}}let c=(0,a.l)(t,"default"),l=(0,a.l)(t,"config"),m=new r.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/newsletter",pathname:"/api/newsletter",bundlePath:"",filename:""},userland:t})},4632:(e,n,s)=>{async function t(e){return console.log("Email would be sent:",e),{success:!0}}async function r(e){return t({to:process.env.MAIL_TO||"contact@kodai.com",from:process.env.MAIL_FROM||"noreply@kodai.com",subject:`New Contact Form Submission from ${e.name}`,text:`
Name: ${e.name}
Email: ${e.email}
${e.phone?`Phone: ${e.phone}`:""}
${e.company?`Company: ${e.company}`:""}

Message:
${e.message}
    `,html:`
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${e.name}</p>
<p><strong>Email:</strong> ${e.email}</p>
${e.phone?`<p><strong>Phone:</strong> ${e.phone}</p>`:""}
${e.company?`<p><strong>Company:</strong> ${e.company}</p>`:""}
<p><strong>Message:</strong></p>
<p>${e.message.replace(/\n/g,"<br>")}</p>
    `})}async function o(e){return console.log("Newsletter subscription for:",e),{success:!0}}s.d(n,{Xb:()=>r,xw:()=>o})},7153:(e,n)=>{var s;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},1802:(e,n,s)=>{e.exports=s(145)}};var n=require("../../webpack-api-runtime.js");n.C(e);var s=n(n.s=4544);module.exports=s})();