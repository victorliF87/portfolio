(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{6071:function(n,e,t){"use strict";var r=t(3038),i=t(862);e.default=void 0;var o=i(t(7294)),a=t(1689),u=t(2441),c=t(5749),f={};function p(n,e,t,r){if(n&&(0,a.isLocalURL)(e)){n.prefetch(e,t,r).catch((function(n){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;f[e+"%"+t+(i?"%"+i:"")]=!0}}var s=function(n){var e=!1!==n.prefetch,t=(0,u.useRouter)(),i=t&&t.asPath||"/",s=o.default.useMemo((function(){var e=(0,a.resolveHref)(i,n.href,!0),t=r(e,2),o=t[0],u=t[1];return{href:o,as:n.as?(0,a.resolveHref)(i,n.as):u||o}}),[i,n.href,n.as]),d=s.href,l=s.as,x=n.children,m=n.replace,h=n.shallow,g=n.scroll,b=n.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var v=o.Children.only(x),w=v&&"object"===typeof v&&v.ref,k=(0,c.useIntersection)({rootMargin:"200px"}),y=r(k,2),z=y[0],j=y[1],Z=o.default.useCallback((function(n){z(n),w&&("function"===typeof w?w(n):"object"===typeof w&&(w.current=n))}),[w,z]);(0,o.useEffect)((function(){var n=j&&e&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,i=f[d+"%"+l+(r?"%"+r:"")];n&&!i&&p(t,d,l,{locale:r})}),[l,d,j,b,e,t]);var D={ref:Z,onClick:function(n){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(n),n.defaultPrevented||function(n,e,t,r,i,o,u,c){("A"!==n.currentTarget.nodeName||!function(n){var e=n.currentTarget.target;return e&&"_self"!==e||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,a.isLocalURL)(t))&&(n.preventDefault(),null==u&&(u=r.indexOf("#")<0),e[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:u}))}(n,t,d,l,m,h,g,b)},onMouseEnter:function(n){(0,a.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(n),p(t,d,l,{priority:!0}))}};if(n.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:t&&t.locale,O=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(l,E,t&&t.locales,t&&t.domainLocales);D.href=O||(0,a.addBasePath)((0,a.addLocale)(l,E,t&&t.defaultLocale))}return o.default.cloneElement(v,D)};e.default=s},5749:function(n,e,t){"use strict";var r=t(3038);e.__esModule=!0,e.useIntersection=function(n){var e=n.rootMargin,t=n.disabled||!a,c=(0,i.useRef)(),f=(0,i.useState)(!1),p=r(f,2),s=p[0],d=p[1],l=(0,i.useCallback)((function(n){c.current&&(c.current(),c.current=void 0),t||s||n&&n.tagName&&(c.current=function(n,e,t){var r=function(n){var e=n.rootMargin||"",t=u.get(e);if(t)return t;var r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var e=r.get(n.target),t=n.isIntersecting||n.intersectionRatio>0;e&&t&&e(t)}))}),n);return u.set(e,t={id:e,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(n,e),o.observe(n),function(){a.delete(n),o.unobserve(n),0===a.size&&(o.disconnect(),u.delete(i))}}(n,(function(n){return n&&d(n)}),{rootMargin:e}))}),[t,e,s]);return(0,i.useEffect)((function(){if(!a&&!s){var n=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(n)}}}),[s]),[l,s]};var i=t(7294),o=t(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},3689:function(n,e,t){"use strict";var r=t(5893),i=t(1664),o=(t(7294),t(2821)),a=t(859),u=t(6226);e.Z=function(){return(0,r.jsxs)(u.W2,{children:[(0,r.jsx)(u.iZ,{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20;"},children:[(0,r.jsx)(a.JAz,{size:"3rem"})," ",(0,r.jsx)(u.Dr,{children:"Portfolio"})]})})}),(0,r.jsxs)(u.sA,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/projects",children:(0,r.jsx)(u.OL,{children:"Projects"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/aboutme",children:(0,r.jsx)(u.OL,{children:"About"})})})]}),(0,r.jsx)(u.hQ,{children:(0,r.jsx)(u.HE,{href:"https://www.linkedin.com/in/victor-li-01b736117/",children:(0,r.jsx)(o._iD,{size:"3rem"})})})]})}},6226:function(n,e,t){"use strict";t.d(e,{W2:function(){return m},Dr:function(){return h},iZ:function(){return g},sA:function(){return b},hQ:function(){return v},OL:function(){return w},HE:function(){return k}});var r=t(2465),i=t(1649),o=t(9163);function a(){var n=(0,r.Z)(["\ntransition: 0.3s ease;\ncolor: white;\nborder-radius: 50px;\n  padding: 8px;\n&:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n    \n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  margin-left: 8px;\n  display: flex;\n  align-self: center;\n  transition: 0.3s ease;\n  opacity: ",";\n  transform: ",";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media "," {\n    margin: 2px 0 0 2px;\n    width: 15px;\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  border: none;\n  display: flex;\n  position: relative;\n  background: none;\n  font-size: 1.7rem;\n\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: #fff;\n  }\n\n  @media "," {\n    padding: 0.4rem 0;\n  }\n  @media "," {\n    padding: 0;\n  }\n"]);return c=function(){return n},n}function f(){var n=(0,r.Z)(["\n  font-size: 2rem;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  transition: 0.4s ease;\n  &:hover {\n    color: #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n  @media "," {\n    padding: 0.5rem;\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["\n  grid-area: 1 / 5 / 2 / 6;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media "," {\n    align-items: center;\n    grid-area: 1 / 4 / 2 / 6;\n  }\n"]);return p=function(){return n},n}function s(){var n=(0,r.Z)(["\n  grid-area: 1 / 2 / 2 / 4;\n  display: flex;\n  justify-content: space-around;\n  @media "," {\n    grid-area: 2 / 2 / 3 / 5;\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,r.Z)(["\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  @media "," {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,r.Z)(["\n font-size: 2rem;\n"]);return l=function(){return n},n}function x(){var n=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 2rem;\n  padding: 1rem;\n  padding-top: 2rem;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 60px);\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n"]);return x=function(){return n},n}var m=o.default.div(x(),(function(n){return n.theme.breakpoints.sm})),h=o.default.span(l()),g=o.default.div(d(),(function(n){return n.theme.breakpoints.sm})),b=o.default.div(s(),(function(n){return n.theme.breakpoints.sm})),v=o.default.div(p(),(function(n){return n.theme.breakpoints.sm})),w=o.default.a(f(),(function(n){return n.theme.breakpoints.sm})),k=(o.default.button(c(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),(0,o.default)(i.U0j)(u(),(function(n){return n.isOpen?"1":".75"}),(function(n){return n.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(n){return n.theme.breakpoints.sm})),o.default.a(a()))},6805:function(n,e,t){"use strict";t.d(e,{$0:function(){return h},NZ:function(){return g},r4:function(){return b},DX:function(){return v},dv:function(){return w},jp:function(){return k},Bn:function(){return y}});var r=t(2465),i=t(9163);function o(){var n=(0,r.Z)(["\n  display: flex;  \n  height: ",";\n\n  @media "," {\n    height: ",";\n  }\n\n  @media "," {\n    height: ",";\n  }\n"]);return o=function(){return n},n}function a(){var n=(0,r.Z)(["\n  margin-left: ",";\n  transition: 0.3s ease;\n  justify-content: center;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n\n  @media "," {\n    margin-left: ",";\n\n  }\n  @media "," {\n    margin-left: ",";\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",";\n  opacity: ",";\n  transition: .4s ease;\n  font-size: ",";\n  font-weight: 600;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: ",";\n\n  &:hover {\n    opacity: 0;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    opacity: 1;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  &:disabled{\n    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);\n    opacity: 0.5;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  font-size: ",";\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: ",";\n  color: #fff;\n  background: ",";\n  cursor: pointer;\n  transition: 0.5s ease;\n  position: relative;\n  overflow: hidden;\n  opacity: ",";\n\n  @media "," {\n    width: ",";\n    height: ",";\n    font-size: ",";\n    margin-bottom: ",";\n  }\n\n  @media "," {\n    width: 100%;\n    height: 32px;\n    font-size: 14px;\n    margin-bottom: ",";\n  }\n"]);return c=function(){return n},n}function f(){var n=(0,r.Z)(["\n  color: #FFF;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.33);\n  box-sizing: border-box;\n  border-radius: 999px;\n  padding: 16px 24px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 16px;\n  width: fit-content;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  cursor: pointer;\n  transition: 0.4s ease;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #0f1624;\n    background: #fff;\n    border: 1px solid #fff;\n  }\n\n  &:active {\n    background: #e0e4eb;\n    border: 1px solid #304169;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ","{\n    margin-top: 24px; \n    margin-bottom: 64px;\n    padding: 16px 24px;\n    width: fit-content;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media "," {\n    margin-top: 16px;\n    margin-bottom: 40px;\n    padding: 8px 16px;\n    width: 100%;\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["\n  max-width: 800px;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n\n@media "," {\n    max-width: 672px;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  @media "," {\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return p=function(){return n},n}function s(){var n=(0,r.Z)(["\n\n  width: 64px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: #fff;\n  background: ",";\n\n    margin: ",";\n\n  @media "," {\n    width: 48px;\n    height: 4px;\n  }\n\n  @media "," {\n    width: 32px;\n    height: 2px;\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,r.Z)(["\n  max-width: 800px;\n  font-size: 20px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: white;\n\n  @media "," {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,r.Z)(["\n  max-width: 800px;\n  font-size: 20px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: rgba(255, 255, 255, 0.5);\n\n  @media "," {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n"]);return l=function(){return n},n}function x(){var n=(0,r.Z)(["\n  font-weight: 800;\n  font-size: ",";\n  line-height: ",";\n  width: max-content;\n  max-width: 100%;\n  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(116, 196, 214, 0.9) 60.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n  padding: ",";\n\n  @media ","{\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 12px;\n    padding: ",";\n  }\n\n  @media ","{\n    font-size: 32px;\n    line-height: 40px;\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 8px;\n    padding: ",";\n    max-width: 100%;\n  }\n"]);return x=function(){return n},n}function m(){var n=(0,r.Z)(["\n  display: ",";\n  flex-direction: ",";\n  padding: "," ;\n  margin: 0 auto;\n  max-width: 1040px;\n  box-sizing: content-box;\n  position: relative;\n  overflow: hidden;\n  grid-template-columns: 1fr 1fr;\n\n  @media "," {\n    padding: 24px 48px 0;\n    flex-direction: column;\n  }\n\n  @media "," {\n    padding: "," ;\n\n    width: calc(100vw - 32px);\n    flex-direction: column;\n  }\n"]);return m=function(){return n},n}var h=i.default.section(m(),(function(n){return n.grid?"grid":"flex"}),(function(n){return n.row?"row":"column"}),(function(n){return n.nopadding?"0":"32px 48px 0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.nopadding?"0":"16px 16px 0"})),g=i.default.h2(x(),(function(n){return n.main?"65px":"56px"}),(function(n){return n.main?"72px":"56px"}),(function(n){return n.main?"58px 0 16px":"0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"40px 0 12px":"0"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.main?"28px":"32px"}),(function(n){return n.main?"32px":"40px"}),(function(n){return n.main?"16px 0 8px":"0"})),b=i.default.p(l(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),v=i.default.p(d(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),w=i.default.div(s(),(function(n){return n.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.divider?"4rem 0":""}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),k=(i.default.p(p(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),i.default.button(f(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),i.default.div(c(),(function(n){return n.alt?"150px":"262px"}),(function(n){return n.alt?"52px":"64px"}),(function(n){return n.alt?"20px":"24px"}),(function(n){var e=n.alt,t=n.form;return e||t?"0":"0 0 80px"}),(function(n){return n.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"150px":"184px"}),(function(n){return n.alt?"52px":"48px"}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.alt?"0":"64px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.alt?"0":"32px"}))),y=i.default.button(u(),(function(n){return n.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.alt?"20px":"24px"}),(function(n){return n.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.theme.breakpoints.sm}));i.default.div(a(),(function(n){return n.large?"24px":"16px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.large?"16px":"8px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"0":"8px"})),i.default.div(o(),(function(n){return n.large?"32px":"24px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.nav?"16px":"24px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"32px":"16px"}))},1664:function(n,e,t){n.exports=t(6071)},4405:function(n,e,t){"use strict";t.d(e,{w_:function(){return f}});var r=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),c(n.child))}))}function f(n){return function(e){return r.createElement(p,a({attr:a({},n.attr)},e),c(n.child))}}function p(n){var e=function(e){var t,i=n.attr,o=n.size,c=n.title,f=u(n,["attr","size","title"]),p=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,f,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}}}]);