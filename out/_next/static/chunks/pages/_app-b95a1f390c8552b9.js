(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(798)}])},1210:function(e,t){"use strict";function n(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),l=n(6273),f=n(2725),i=n(3462),c=n(1018),s=n(7190),d=n(1210),p=n(8684),v=void 0!==a.default.useTransition,$={};function y(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch(function(e){});var r=o&&void 0!==o.locale?o.locale:e&&e.locale;$[t+"%"+n+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef(function(e,t){var n,r,h=e.href,_=e.as,g=e.children,b=e.prefetch,m=e.passHref,x=e.replace,C=e.shallow,M=e.scroll,L=e.locale,P=e.onClick,R=e.onMouseEnter,E=e.onTouchStart,w=e.legacyBehavior,k=void 0===w?!0!==Boolean(!1):w,j=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var T=!1!==b,S=o(v?a.default.useTransition():[],2)[1],N=a.default.useContext(i.RouterContext),I=a.default.useContext(c.AppRouterContext);I&&(N=I);var O=a.default.useMemo(function(){var e=o(l.resolveHref(N,h,!0),2),t=e[0],n=e[1];return{href:t,as:_?l.resolveHref(N,_):n||t}},[N,h,_]),U=O.href,D=O.as,Z=a.default.useRef(U),A=a.default.useRef(D);k&&(r=a.default.Children.only(n));var B=k?r&&"object"==typeof r&&r.ref:t,H=o(s.useIntersection({rootMargin:"200px"}),3),K=H[0],G=H[1],X=H[2],q=a.default.useCallback(function(e){(A.current!==D||Z.current!==U)&&(X(),A.current=D,Z.current=U),K(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,U,X,K]);a.default.useEffect(function(){var e=G&&T&&l.isLocalURL(U),t=void 0!==L?L:N&&N.locale,n=$[U+"%"+D+(t?"%"+t:"")];e&&!n&&y(N,U,D,{locale:t})},[D,U,G,L,T,N]);var z={ref:q,onClick:function(e){k||"function"!=typeof P||P(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,a,f,i,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(s=e).currentTarget.target)||"_self"===d)&&!s.metaKey&&!s.ctrlKey&&!s.shiftKey&&!s.altKey&&(!s.nativeEvent||2!==s.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var s,d,p=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:f,scroll:a}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!c})};i?i(p):p()}}(e,N,U,D,x,C,M,L,I?S:void 0,T)},onMouseEnter:function(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!T&&I)&&l.isLocalURL(U)&&y(N,U,D,{priority:!0})},onTouchStart:function(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!T&&I)&&l.isLocalURL(U)&&y(N,U,D,{priority:!0})}};if(!k||m||"a"===r.type&&!("href"in r.props)){var F=void 0!==L?L:N&&N.locale,J=N&&N.isLocaleDomain&&d.getDomainLocale(D,F,N.locales,N.domainLocales);z.href=J||p.addBasePath(f.addLocale(D,F,N&&N.defaultLocale))}return k?a.default.cloneElement(r,z):a.default.createElement("a",Object.assign({},j,z),n)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!a,c=o(r.useState(!1),2),s=c[0],d=c[1],p=o(r.useState(null),2),v=p[0],$=p[1];return r.useEffect(function(){if(a){if(!i&&!s&&v&&v.tagName){var e,o,r,c,p,$,y;return e=v,o=function(e){return e&&d(e)},p=(c=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find(function(e){return e.root===n.root&&e.margin===n.margin});if(o&&(t=l.get(o)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},f.push(n),l.set(n,t),t}(r={root:null==t?void 0:t.current,rootMargin:n})).id,$=c.observer,(y=c.elements).set(e,o),$.observe(e),function(){if(y.delete(e),$.unobserve(e),0===y.size){$.disconnect(),l.delete(p);var t=f.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});t>-1&&f.splice(t,1)}}}}else if(!s){var h=u.requestIdleCallback(function(){return d(!0)});return function(){return u.cancelIdleCallback(h)}}},[v,i,n,t,s]),[$,s,r.useCallback(function(){d(!1)},[])]};var r=n(7294),u=n(9311),a="function"==typeof IntersectionObserver,l=new Map,f=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},798:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(4831);var u=n(1664),a=n.n(u),l=n(1311),f=n.n(l),i=function(){return(0,r.jsx)("div",{className:f().wrapper,children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsxs)("p",{id:f().p,children:["neariyeveryone",(0,r.jsx)("span",{children:"Blog"})]})})})},c=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},n))]})}},1311:function(e){e.exports={p:"navbar_p__yR5uP"}},4831:function(){},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);