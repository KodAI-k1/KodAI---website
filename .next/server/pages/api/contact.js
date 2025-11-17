"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,s){return s in n?n[s]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,s)):"function"==typeof n&&"default"===s?n:void 0}}})},6928:(e,n,s)=>{s.r(n),s.d(n,{config:()=>m,default:()=>c,routeModule:()=>l});var t={};s.r(t),s.d(t,{default:()=>u});var o=s(1802),r=s(7153),a=s(6249),i=s(4632);async function u(e,n){if("POST"!==e.method)return n.status(405).json({message:"Method not allowed"});let{name:s,email:t,phone:o,company:r,message:a}=e.body;if(!s||!t||!a)return n.status(400).json({message:"Missing required fields"});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return n.status(400).json({message:"Invalid email address"});try{let e=await (0,i.Xb)({name:s,email:t,phone:o,company:r,message:a});if(e.success)return n.status(200).json({message:"Message sent successfully"});return n.status(500).json({message:"Failed to send message",error:e.error})}catch(e){return console.error("Contact form error:",e),n.status(500).json({message:"Internal server error"})}}let c=(0,a.l)(t,"default"),m=(0,a.l)(t,"config"),l=new o.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:t})},4632:(e,n,s)=>{async function t(e){return console.log("Email would be sent:",e),{success:!0}}async function o(e){return t({to:process.env.MAIL_TO||"contact@kodai.com",from:process.env.MAIL_FROM||"noreply@kodai.com",subject:`New Contact Form Submission from ${e.name}`,text:`
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
    `})}async function r(e){return console.log("Newsletter subscription for:",e),{success:!0}}s.d(n,{Xb:()=>o,xw:()=>r})},7153:(e,n)=>{var s;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},1802:(e,n,s)=>{e.exports=s(145)}};var n=require("../../webpack-api-runtime.js");n.C(e);var s=n(n.s=6928);module.exports=s})();