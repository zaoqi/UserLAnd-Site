(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(256),o=t(244),i=(t(32),t(242)),c=t(408),s=(t(232),t(263)),m=t(276);var u=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).submitedTimer=null,a.state={email:"",password:"",errors:{},submited:!1},a.handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault(),console.log("loging in..."),a.setState({submited:!0}),a.submitedTimer=setTimeout(function(){a.setState({submited:!1})},4400)},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.componentWillUnmount=function(){clearInterval(this.submitedTimer)},l.render=function(){var e=this,a=this.state.errors;return r.a.createElement(c.a,{onSubmit:function(a){e.handleSubmit(a)},className:"mx-auto login-module--form--35RHS"},r.a.createElement(m.a,{label:"Email",type:"email",field:"email",onChange:this.handleUpdate,id:"loginEmail",placeholder:"Enter Email",className:"login-module--form__input--2k0Rk",error:a.email}),r.a.createElement(m.a,{label:"Password",type:"password",field:"password",onChange:this.handleUpdate,id:"loginPassword",placeholder:"Password",className:"login-module--form__input--2k0Rk",error:a.password}),r.a.createElement(s.a,{className:"login-module--form__btn--22onj",disabled:!0,round:!0},"Coming Soon"),r.a.createElement("span",{className:"login-module--form__signup--38VcN"},"Don't have an account? ",r.a.createElement(i.a,{to:"/signup"},"Sign up")))},n}(n.Component);function d(){return r.a.createElement(l.a,{className:"page"},r.a.createElement(o.a,{title:"Userland Site"}),r.a.createElement("div",{className:"container page__header"},r.a.createElement("h2",{className:"page__title"},"Log In")),r.a.createElement("div",{className:"container text-center"},r.a.createElement(u,null)))}t.d(a,"default",function(){return d})},242:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var n=t(0),r=t.n(n),l=t(71),o=t.n(l);t.d(a,"a",function(){return o.a});t(243),t(10).default.enqueue;var i=r.a.createContext({});function c(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,o=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(c,{data:a,query:t,render:n||l,staticQueryData:e})})}},243:function(e,a,t){var n;e.exports=(n=t(249))&&n.default||n},244:function(e,a,t){"use strict";var n=t(255),r=t(0),l=t.n(r),o=t(259),i=t.n(o);function c(e){var a=e.description,t=e.lang,r=e.meta,o=e.title,c=e.children,s=n.data.site,m=a||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s - "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(r)},c)}c.defaultProps={lang:"en",meta:[],description:""},a.a=c},246:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),r=t.n(n),l=(t(218),t(253)),o=t.n(l);function i(){return r.a.createElement("a",{role:"button",className:"btn-google","aria-label":"google play download",title:"Download UserLAnd",href:"https://play.google.com/store/apps/details?id=tech.ula&hl=en"},r.a.createElement("img",{className:"img-fluid",src:o.a,alt:"Google Play"}))}},247:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),r=t.n(n),l=(t(218),t(254)),o=t.n(l);function i(){return r.a.createElement("span",{className:"btn-apple",role:"presentation","aria-label":"apple store coming soon"},r.a.createElement("img",{className:"img-fluid",src:o.a,alt:"App Store"}))}},248:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd"}}}}},249:function(e,a,t){"use strict";t.r(a);t(24);var n=t(0),r=t.n(n),l=t(99);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}},250:function(e,a,t){e.exports=t.p+"static/og-image-934c745c572b18fc31ed9ae07f48e441.jpg"},251:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMi4xNzUwMjk0LjAwMDQ2NjU1TDEuMzUwMDU4NzEgMTEuOTQzOTcwNnYyMy44ODcxMjc4TDIyLjE3NTAyOTQgNDcuNzc0NzIyMiA0MyAzNS44MzEwOTg0VjExLjk0Mzk3MDZ6Ii8+CiAgICA8cGF0aCBkPSJNMjIgNDcuOTA3ODhMMS44NDEwMTk2NCAzNi40NTM5NFM3LjYxODEwODk2LTEuNzk0OTgzMDIgMjIgMTYuMzIyOTc0MUMzNi4zODE4OTEtMS43OTQ5ODMwMiA0Mi4xNTg5ODA0IDM2LjQ1Mzk0IDQyLjE1ODk4MDQgMzYuNDUzOTRMMjIgNDcuOTA3ODh6TTIyIDBMMCAxMi40OTk5MzczdjI1TDIyIDUwbDIyLTEyLjUwMDA2Mjd2LTI1TDIyIDB6IiBmaWxsPSIjNDIzRDJEIi8+CiAgICA8cGF0aCBkPSJNMjguOTgyMzgxOCAyNi43MTc2OTMyQzI4LjQ5MzEyODQgMjUuMTgxMTY3MSAyNS41NTQwNTg3IDI0IDIyIDI0Yy0zLjU1NDE4NTUgMC02LjQ5MzEyODQgMS4xODExNjcxLTYuOTgyMzgxOCAyLjcxNzY5MzJIMTVsLjAxNDQ0OTUuMDEwODM2NEwyMiAzMmw2Ljk4NTU1MDUtNS4yNzE0NzA0TDI5IDI2LjcxNzY5MzJoLS4wMTc2MTgyIiBmaWxsPSIjRkZDQzA1Ii8+CiAgPC9nPgo8L3N2Zz4K"},252:function(e,a,t){e.exports=t.p+"static/LogoHeader-a5a83f1d8ed395a653f7266475ee2e1e.svg"},253:function(e,a){e.exports="data:image/png;base64,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"},254:function(e,a){e.exports="data:image/png;base64,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"},255:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd",description:"Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!",author:"@userlandtech"}}}}},256:function(e,a,t){"use strict";var n=t(248),r=t(0),l=t.n(r),o=t(242),i=(t(219),t(250)),c=t.n(i),s=(t(220),t(221),t(251)),m=t.n(s);function u(e){var a=e.siteTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"logo",src:m.a,alt:a}))}var d=t(245);var p=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg pt-3 position-absolute w-100"},l.a.createElement("div",{className:"container"},l.a.createElement(o.a,{className:"navbar-brand",to:"/","aria-label":"home",title:"Go to Home Page"},l.a.createElement(u,{siteTitle:this.props.siteTitle})),l.a.createElement("ul",{className:"flex-row navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(o.a,{className:"nav-link",to:"/features"},"Features")),l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(o.a,{className:"nav-link",to:"/download"},"Download")),l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(o.a,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(o.a,{className:"nav-link",to:"/signup"},"Sign up")))))},n}(r.Component),A=(t(222),t(252)),g=t.n(A),f=t(246),N=t(247);var E=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"footer__logo col-12"},l.a.createElement("img",{className:"img-fluid",src:g.a,alt:"UserLAnd Logo"})),l.a.createElement("div",{className:"footer__cta col-12"},l.a.createElement(f.a,null),l.a.createElement(N.a,null)),l.a.createElement("nav",{className:"footer__nav navbar col-12 offset-lg-2 col-lg-3 order-md-2"},l.a.createElement("ul",{className:"flex-row navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.a,{className:"nav-link",to:"/privacy"},"privacy policy")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.a,{className:"nav-link",to:"/eula"},"EULA")))),l.a.createElement("nav",{className:"footer__nav navbar col-12 col-lg-3 order-md-3"},l.a.createElement("ul",{className:"flex-row navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-label":"github",href:"https://github.com/CypherpunkArmory/UserLAnd"},l.a.createElement(d.a,{icon:["fab","github"],size:"lg"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-label":"twitter",href:"https://twitter.com/userlandtech"},l.a.createElement(d.a,{icon:["fab","twitter"],size:"lg"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-label":"slack",href:"https://communityinviter.com/apps/userlandtech/userland"},l.a.createElement(d.a,{icon:["fab","slack"],size:"lg"}))))),l.a.createElement("small",{className:"footer__copy col-12 col-lg-4 order-md-1"},"© UserLand, All rights reserved."))))},n}(r.Component),b=t(244);a.a=function(e){var a=e.children,t=e.className,r=void 0===t?"":t;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:"Use Linux Anywhere"},l.a.createElement("meta",{property:"og:image",content:c.a})),l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",{className:r},a),l.a.createElement(E,null))},data:n})}},263:function(e,a,t){"use strict";t(25),t(26),t(13),t(43),t(24);var n=t(262),r=t.n(n),l=t(0),o=t.n(l),i=t(258),c=t.n(i),s=(t(223),{"./button.module.scss":{btn:"button-module--btn--2_6ft",btn_danger:"button-module--btn_danger--gWCg7",btn_primary:"button-module--btn_primary--3tJwR",btn_round:"button-module--btn_round--25LEd",icon:"button-module--icon--1Fm1w"}});function m(e){var a=e.children,t=e.icon,n=e.tag,l=e.className,i=e.danger,m=e.round,u=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["children","icon","tag","className","danger","round"]);return u.href&&"button"===n&&(n="a"),o.a.createElement(n,Object.assign({type:"button"===n&&u.onClick?"button":void 0},u,{className:(l?l+" ":"")+r()(c()("btn",{btn_round:m,btn_primary:!i,btn_danger:i}),s)+" "+(u&&u.className||"")}),a,t&&o.a.createElement("span",{className:"button-module--icon--1Fm1w"}))}m.defaultProps={tag:"button",danger:!1,round:!1},a.a=m},276:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(53),o=t.n(l),i=t(404),c=t(405),s=t(406),m=t(407),u=t(245),d=t(107);t(226);function p(e){var a=e.field,t=e.type,n=e.label,l=e.placeholder,o=e.id,p=e.error,A=e.onChange,g=e.className;return r.a.createElement(i.a,{className:"TextFieldGroup-module--form--3ZTiz"},r.a.createElement(c.a,{for:o,hidden:!0},n),r.a.createElement(s.a,{type:t,name:a,onChange:A,id:o,placeholder:l,invalid:!!p,className:g}),p&&r.a.createElement(m.a,{tooltip:!0},r.a.createElement(u.a,{icon:d.b}),p))}p.prototype={field:o.a.string.isRequired,type:o.a.string.isRequired,label:o.a.string.isRequired,placeholder:o.a.string.isRequired,id:o.a.string,error:o.a.object,onChange:o.a.func.isRequired},a.a=p}}]);
//# sourceMappingURL=component---src-pages-login-js-99b1ea9c33cd6809a9cf.js.map