"use strict";(self.webpackChunktutorial_website=self.webpackChunktutorial_website||[]).push([[633],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(a),b=r,k=m["".concat(p,".").concat(b)]||m[b]||c[b]||i;return a?n.createElement(k,u(u({ref:t},s),{},{components:a})):n.createElement(k,u({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,u=new Array(i);u[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var l=2;l<i;l++)u[l]=a[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},u="Git push",o={unversionedId:"git-basic/push",id:"git-basic/push",title:"Git push",description:"Git push digunakan untuk menambahkan perubahan di local remote ke remote server seperti gitlab, github, ataupun bitbucket.",source:"@site/docs/git-basic/push.md",sourceDirName:"git-basic",slug:"/git-basic/push",permalink:"/tutorial/docs/git-basic/push",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Git Remote",permalink:"/tutorial/docs/git-basic/remote"},next:{title:"Git Pull",permalink:"/tutorial/docs/git-basic/pull"}},p={},l=[{value:"Yang Perlu Diperhatikan sebelum melakukan push",id:"yang-perlu-diperhatikan-sebelum-melakukan-push",level:2}],s={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-push"},"Git push"),(0,r.kt)("p",null,"Git push digunakan untuk menambahkan perubahan di local remote ke remote server seperti gitlab, github, ataupun bitbucket."),(0,r.kt)("h2",{id:"yang-perlu-diperhatikan-sebelum-melakukan-push"},"Yang Perlu Diperhatikan sebelum melakukan push"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"lokasi branch yang sedang aktif"),(0,r.kt)("p",{parentName:"li"},"jika ingin melakukan push ke main branch (bisa main ataupun master) maka untuk menjalankan git push bisa menggunakan"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push\n")),(0,r.kt)("p",{parentName:"li"},"Apabila ingin melakukan push ke branch fitur atau personal branch, untuk menjalankan command git push bisa menggunakan"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push nama_remote nama_branch\n")))))}c.isMDXComponent=!0}}]);