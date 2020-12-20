(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(298)),c={title:"Stat / Large"},o={unversionedId:"examples/stat-large",id:"examples/stat-large",isDocsHomePage:!1,title:"Stat / Large",description:"Create a stat card displaying a primary value, an auxiliary value and a caption.",source:"@site/docs/examples/stat-large.md",slug:"/examples/stat-large",permalink:"/wave/docs/examples/stat-large",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-large.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Small",permalink:"/wave/docs/examples/stat-small"},next:{title:"Stat / Gauge / Wide",permalink:"/wave/docs/examples/stat-wide-gauge"}},l=[],u={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create a stat card displaying a primary value, an auxiliary value and a caption."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(429).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakePercent\nfrom h2o_wave import site, ui\n\npage = site['/demo']\n\nfake = Faker()\nf = FakePercent()\nval, pc = f.next()\nc = page.add(f'example', ui.large_stat_card(\n    box='1 1 2 2',\n    title=fake.cryptocurrency_name(),\n    value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n    aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n    data=dict(qux=val, quux=pc),\n    caption=' '.join(fake.sentences()),\n))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    val, pc = f.next()\n    c.data.qux = val\n    c.data.quux = pc\n    page.save()\n")))}p.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return n?r.a.createElement(d,o(o({ref:t},u),{},{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},429:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stat-large-4434acbc0c05f2c331071c827076d7b0.png"}}]);