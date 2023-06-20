"use strict";(self.webpackChunktutorial_website=self.webpackChunktutorial_website||[]).push([[746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Git Revert",l={unversionedId:"git-extras/revert",id:"git-extras/revert",title:"Git Revert",description:"Git Revert akan mengembalikan kondisi branch sebelumnya, dan akan digabungkan dengan commit yang ada saat ini. Git Revert lebih aman digunakan dibandingkan git reset, karena perintah ini tidak akan menghapus catatan log git sebelumnya.",source:"@site/docs/git-extras/revert.md",sourceDirName:"git-extras",slug:"/git-extras/revert",permalink:"/tutorial/docs/git-extras/revert",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Merge Request",permalink:"/tutorial/docs/git-extras/merge-request"},next:{title:"Git Stash",permalink:"/tutorial/docs/git-extras/stash"}},s={},c=[{value:"Perintah Git Revert",id:"perintah-git-revert",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-revert"},"Git Revert"),(0,a.kt)("p",null,"Git Revert akan mengembalikan kondisi branch sebelumnya, dan akan digabungkan dengan ",(0,a.kt)("em",{parentName:"p"},"commit")," yang ada saat ini. Git Revert lebih aman digunakan dibandingkan ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset"),", karena perintah ini tidak akan menghapus catatan log git sebelumnya."),(0,a.kt)("h2",{id:"perintah-git-revert"},"Perintah Git Revert"),(0,a.kt)("p",null,"Untuk menjalankan git revert, maka bisa menjalankan dengan perintah:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git revert commit_code\n")))}p.isMDXComponent=!0}}]);