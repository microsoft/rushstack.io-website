"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[9675],{5242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(3929);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var r=n(5464),o=n(134),s=(n(3929),n(5242)),a=["components"],i={title:"node-service.json"},c=void 0,l={unversionedId:"pages/heft_configs/node-service_json",id:"pages/heft_configs/node-service_json",title:"node-service.json",description:"|                                          |                                                                                                                    |",source:"@site/docs/pages/heft_configs/node-service_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/node-service_json",permalink:"/zh-cn/pages/heft_configs/node-service_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/node-service_json.md",tags:[],version:"current",frontMatter:{title:"node-service.json"},sidebar:"docsSidebar",previous:{title:"heft.json",permalink:"/zh-cn/pages/heft_configs/heft_json"},next:{title:"rig.json",permalink:"/zh-cn/pages/heft_configs/rig_json"}},p={},f=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],u={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"File path:")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"<","project folder",">","/config/node-service.json"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/pages/heft/rig_packages"},(0,s.kt)("strong",{parentName:"a"},"Riggable?"))),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin"))))),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures "heft start" to launch a shell command such as a Node.js service.\n * Heft will watch for changes and restart the service process whenever it gets rebuilt.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/node-service.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/serve-command.json",\n\n  /**\n   * Specifies the name of a "scripts" command from the project\'s package.json file.\n   * When "heft start" is invoked, it will use this shell command to launch the\n   * service process.\n   *\n   * Default value: "serve"\n   */\n  // "commandName": "serve",\n\n  /**\n   * If false, then an error is reported if the "scripts" command is not found in the\n   * project\'s package.json.  If true, then no action will be taken.\n   *\n   * Default value: false\n   */\n  // "ignoreMissingScript": false,\n\n  /**\n   * Customizes the number of milliseconds to wait before restarting the child process,\n   * as measured from when the previous process exited.  If this interval is too small, then\n   * the new process may start while the developer is still saving changes, or while\n   * other monitoring processes are still holding OS locks.\n   *\n   * Default value: 2000\n   */\n  // "waitBeforeRestartMs": 2000,\n\n  /**\n   * Customizes the number of milliseconds to wait for the child process to be terminated (SIGTERM)\n   * before forcibly killing it.\n   *\n   * Default value: 2000\n   */\n  // "waitForTerminateMs": 2000,\n\n  /**\n   * Customizes the number of milliseconds to wait for the child process to be killed (SIGKILL)\n   * before giving up and abandoning it.\n   *\n   * Default value: 2000\n   */\n  // "waitForKillMs": 2000\n}\n')),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft_tasks/node-service"},"node-service")," task")))}m.isMDXComponent=!0}}]);