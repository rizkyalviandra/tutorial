"use strict";(self.webpackChunktutorial_website=self.webpackChunktutorial_website||[]).push([[426],{3905:(t,a,e)=>{e.d(a,{Zo:()=>l,kt:()=>d});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),u=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},l=function(t){var a=u(t.components);return n.createElement(p.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),h=u(e),d=r,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||i;return e?n.createElement(m,s(s({ref:a},l),{},{components:e})):n.createElement(m,s({ref:a},l))}));function d(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,s=new Array(i);s[0]=h;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var u=2;u<i;u++)s[u]=e[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},6707:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=e(7462),r=(e(7294),e(3905));const i={sidebar_position:3},s="Git Stash",o={unversionedId:"git-extras/stash",id:"git-extras/stash",title:"Git Stash",description:"Git stash adalah perintah untuk menyimpan sementara semua perubahan yang ada saat ini. Git stash biasa digunakan ketika perubahan saat ini ada di branch yang salah. perintah yang digunakan untuk mengembalikan perubahan yang disimpan tadi, dapat menjalankan perintah git stash pop",source:"@site/docs/git-extras/stash.md",sourceDirName:"git-extras",slug:"/git-extras/stash",permalink:"/tutorial/docs/git-extras/stash",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Git Revert",permalink:"/tutorial/docs/git-extras/revert"}},p={},u=[{value:"Perintah Git Stash",id:"perintah-git-stash",level:2}],l={toc:u};function c(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-stash"},"Git Stash"),(0,r.kt)("p",null,"Git stash adalah perintah untuk menyimpan sementara semua perubahan yang ada saat ini. Git stash biasa digunakan ketika perubahan saat ini ada di branch yang salah. perintah yang digunakan untuk mengembalikan perubahan yang disimpan tadi, dapat menjalankan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"git stash pop")),(0,r.kt)("h2",{id:"perintah-git-stash"},"Perintah Git Stash"),(0,r.kt)("p",null,"untuk menjalankan perintah git stash, dapat menjalankan seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash\ngit checkout feat/branch\ngit stash pop\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'case untuk menjalankan perintah diatas adalah perubahan yang dimaksud seharusnya ada di branch "feat/branch" sedangkan branch yang aktif saat perubahan ada di branch "main"')))}c.isMDXComponent=!0}}]);