"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[66482],{50158:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(46393);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(a),g=r,h=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89073:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(61731),r=a(70396),l=(a(46393),a(50158)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/rush-lib.rushconfiguration",id:"pages/api/rush-lib.rushconfiguration",title:"rush-lib.rushconfiguration",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration",source:"@site/docs/pages/api/rush-lib.rushconfiguration.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration",permalink:"/pages/api/rush-lib.rushconfiguration",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"RushConfiguration class",id:"rushconfiguration-class",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")),(0,l.kt)("h2",{id:"rushconfiguration-class"},"RushConfiguration class"),(0,l.kt)("p",null,'This represents the Rush configuration for a repository, based on the "rush.json" configuration file.'),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class RushConfiguration\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames"},"allowMostlyStandardPackageNames")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'Today the npmjs.com registry enforces fairly strict naming rules for packages, but in the early days there was no standard and hardly any enforcement. A few large legacy projects are still using nonstandard package names, and private registries sometimes allow it. Set "allowMostlyStandardPackageNames" to true to relax Rush\'s enforcement of package names. This allows upper case letters and in the future may relax other rules, however we want to minimize these exceptions. Many popular tools use certain punctuation characters as delimiters, based on the assumption that they will never appear in a package name; thus if we relax the rules too much it is likely to cause very confusing malfunctions. The default value is false.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.approvedpackagespolicy"},"approvedPackagesPolicy")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},'The "approvedPackagesPolicy" settings.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.changesfolder"},"changesFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder that contains all change files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.committedshrinkwrapfilename"},"committedShrinkwrapFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The full path of the shrinkwrap file that is tracked by Git. (The "rush install" command uses a temporary copy, whose path is tempShrinkwrapFilename.)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commonautoinstallersfolder"},"commonAutoinstallersFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The fully resolved path for the "autoinstallers" folder. Example: ',(0,l.kt)("code",null,"C:\\MyRepo\\common\\autoinstallers"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commonfolder"},"commonFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The fully resolved path for the "common" folder where Rush will store settings that affect all Rush projects. This is always a subfolder of the folder containing "rush.json". Example: ',(0,l.kt)("code",null,"C:\\MyRepo\\common"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commonrushconfigfolder"},"commonRushConfigFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder where Rush's additional config files are stored. This folder is always a subfolder called ",(0,l.kt)("code",null,"config\\rush")," inside the common folder. (The ",(0,l.kt)("code",null,"common\\config")," folder is reserved for configuration files used by other tools.) To avoid confusion or mistakes, Rush will report an error if this this folder contains any unrecognized files. Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\config\\rush"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commonscriptsfolder"},"commonScriptsFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The folder where automation scripts are stored. This is always a subfolder called "scripts" under the common folder. Example: ',(0,l.kt)("code",null,"C:\\MyRepo\\common\\scripts"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commontempfolder"},"commonTempFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The folder where temporary files will be stored. This is always a subfolder called "temp" under the common folder. Example: ',(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.commonversions"},"commonVersions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"Settings from the common-versions.json config file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.currentinstalledvariant"},"currentInstalledVariant")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},'Gets the currently-installed variant, if an installation has occurred. For Rush operations which do not take a --variant parameter, this method determines which variant, if any, was last specified when performing "rush install" or "rush update".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.currentvariantjsonfilename"},"currentVariantJsonFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The filename of the variant dependency data file. By default this is called 'current-variant.json' resides in the Rush common folder. Its data structure is defined by ICurrentVariantJson. Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\current-variant.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.ensureconsistentversions"},"ensureConsistentVersions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'If true, then consistent version specifiers for dependencies will be enforced. I.e. "rush check" is run before some commands.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.eventhooks"},"eventHooks")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.eventhooks"},"EventHooks")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The rush hooks. It allows customized scripts to run at the specified point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.experimentsconfiguration"},"experimentsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.experimentsconfiguration"},"ExperimentsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," This configuration object contains settings repo maintainers have specified to enable and disable experimental Rush features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.gitallowedemailregexps"},"gitAllowedEmailRegExps")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "gitPolicy" feature.',"]"," A list of regular expressions describing allowable email patterns for Git commits. They are case-insensitive anchored JavaScript RegExps. Example: ",(0,l.kt)("code",null,'"',".*@example",".","com",'"')," This array will never be undefined.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.gitchangelogupdatecommitmessage"},"gitChangeLogUpdateCommitMessage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "gitPolicy" feature.',"]"," The commit message to use when committing change log files 'rush version'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.gitsampleemail"},"gitSampleEmail")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "gitPolicy" feature.',"]"," An example valid email address that conforms to one of the allowedEmailRegExps. Example: ",(0,l.kt)("code",null,'"',"foxtrot@example",".","com",'"')," This will never be undefined, and will always be nonempty if gitAllowedEmailRegExps is used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.gittagseparator"},"gitTagSeparator")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "gitPolicy" feature.',"]"," The separator between package name and version in git tag.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.gitversionbumpcommitmessage"},"gitVersionBumpCommitMessage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "gitPolicy" feature.',"]"," The commit message to use when committing changes during 'rush publish'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.hotfixchangeenabled"},"hotfixChangeEnabled")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",'Part of the "hotfixChange" feature.',"]"," Enables creating hotfix changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.npmcachefolder"},"npmCacheFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The local folder that will store the NPM package cache. Rush does not rely on the npm's default global cache folder, because npm's caching implementation does not reliably handle multiple processes. (For example, if a build box is running \"rush install\" simultaneously for two different working folders, it may fail randomly.) Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\npm-cache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.npmoptions"},"npmOptions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.npmoptionsconfiguration"},"NpmOptionsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"Options that are only used when the NPM package manager is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.npmtmpfolder"},"npmTmpFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The local folder where npm's temporary files will be written during installation. Rush does not rely on the global default folder, because it may be on a different hard disk. Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\npm-tmp"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagemanager"},"packageManager")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanagername"},"PackageManagerName")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the package manager being used to install dependencies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagemanageroptions"},"packageManagerOptions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanageroptionsconfigurationbase"},"PackageManagerOptionsConfigurationBase")),(0,l.kt)("td",{parentName:"tr",align:null},"The configuration options used by the current package manager.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagemanagertoolfilename"},"packageManagerToolFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The absolute path to the locally installed NPM tool. If "rush install" has not been run, then this file may not exist yet. Example: ',(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\npm-local\\node_modules",".","bin\\npm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagemanagertoolversion"},"packageManagerToolVersion")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The version of the locally installed NPM tool. (Example: "1.2.3")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagemanagerwrapper"},"packageManagerWrapper")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanager"},"PackageManager")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," An abstraction for controlling the supported package managers: PNPM, NPM, and Yarn.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.packagenameparser"},"packageNameParser")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.packagenameparser"},"PackageNameParser")),(0,l.kt)("td",{parentName:"tr",align:null},"The rush hooks. It allows customized scripts to run at the specified point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.pnpmoptions"},"pnpmOptions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"Options that are only used when the PNPM package manager is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth"},"projectFolderMaxDepth")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum allowable folder depth for the projectFolder field in the rush.json file. This setting provides a way for repository maintainers to discourage nesting of project folders that makes the directory tree more difficult to navigate. The default value is 2, which implements on a standard convention of ",(0,l.kt)("inlineCode",{parentName:"td"},"<categoryFolder>/<projectFolder>/package.json"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.projectfoldermindepth"},"projectFolderMinDepth")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum allowable folder depth for the projectFolder field in the rush.json file. This setting provides a way for repository maintainers to discourage nesting of project folders that makes the directory tree more difficult to navigate. The default value is 2, which implements a standard 2-level hierarchy of ",(0,l.kt)("inlineCode",{parentName:"td"},"<categoryFolder>/<projectFolder>/package.json"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.projects"},"projects")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ","[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.projectsbyname"},"projectsByName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","string, ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.repositorydefaultbranch"},"repositoryDefaultBranch")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The default branch name. This tells "rush change" which remote branch to compare against.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.repositorydefaultfullyqualifiedremotebranch"},"repositoryDefaultFullyQualifiedRemoteBranch")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The default fully-qualified git remote branch of the repository. This helps "rush change" find the right branch to compare against.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.repositorydefaultremote"},"repositoryDefaultRemote")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The default remote. This tells "rush change" which remote to compare against if the remote URL is not set or if a remote matching the provided remote URL is not found.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.repositoryurl"},"repositoryUrl")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},'The remote url of the repository. This helps "rush change" find the right remote to compare against.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.rushjsonfile"},"rushJsonFile")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The absolute path to the "rush.json" configuration file that was loaded to construct this object.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.rushjsonfolder"},"rushJsonFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The absolute path of the folder that contains rush.json for this project.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.rushlinkjsonfilename"},"rushLinkJsonFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The filename of the build dependency data file. By default this is called 'rush-link.json' resides in the Rush common folder. Its data structure is defined by IRushLinkJson. Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\rush-link.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.shrinkwrapfilename"},"shrinkwrapFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The filename (without any path) of the shrinkwrap file that is used by the package manager.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.shrinkwrapfilephrase"},"shrinkwrapFilePhrase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Returns an English phrase such as "shrinkwrap file" that can be used in logging messages to refer to the shrinkwrap file using appropriate terminology for the currently selected package manager.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.suppressnodeltswarning"},"suppressNodeLtsWarning")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Odd-numbered major versions of Node.js are experimental. Even-numbered releases spend six months in a stabilization period before the first Long Term Support (LTS) version. For example, 8.9.0 was the first LTS version of Node.js 8. Pre-LTS versions are not recommended for production usage because they frequently have bugs. They may cause Rush itself to malfunction. Rush normally prints a warning if it detects a pre-LTS Node.js version. If you are testing pre-LTS versions in preparation for supporting the first LTS version, you can use this setting to disable Rush's warning.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.telemetryenabled"},"telemetryEnabled")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Indicates whether telemetry collection is enabled for Rush runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.tempshrinkwrapfilename"},"tempShrinkwrapFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The full path of the temporary shrinkwrap file that is used during "rush install". This file may get rewritten by the package manager during installation.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.tempshrinkwrappreinstallfilename"},"tempShrinkwrapPreinstallFilename")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The full path of a backup copy of tempShrinkwrapFilename. This backup copy is made before installation begins, and can be compared to determine how the package manager modified tempShrinkwrapFilename.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.versionpolicyconfiguration"},"versionPolicyConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicyconfiguration"},"VersionPolicyConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.versionpolicyconfigurationfilepath"},"versionPolicyConfigurationFilePath")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.yarncachefolder"},"yarnCacheFolder")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The local folder that will store the Yarn package cache. Example: ",(0,l.kt)("code",null,"C:\\MyRepo\\common\\temp\\yarn-cache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.yarnoptions"},"yarnOptions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.yarnoptionsconfiguration"},"YarnOptionsConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"Options that are only used when the yarn package manager is selected.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.findprojectbyshorthandname"},"findProjectByShorthandName(shorthandProjectName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'This is used e.g. by command-line interfaces such as "rush build --to example". If "example" is not a project name, then it also looks for a scoped name like ',(0,l.kt)("code",null,"@something/example"),". If exactly one project matches this heuristic, it is returned. Otherwise, undefined is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.findprojectbytempname"},"findProjectByTempName(tempProjectName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Looks up a project by its RushConfigurationProject.tempProjectName field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.findprojectforposixrelativepath"},"findProjectForPosixRelativePath(posixRelativePath)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Finds the project that owns the specified POSIX relative path (e.g. apps/rush-lib). The path is case-sensitive, so will only return a project if its projectRelativePath matches the casing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getcommittedshrinkwrapfilename"},"getCommittedShrinkwrapFilename(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the committed shrinkwrap file name for a specific variant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getcommonversions"},"getCommonVersions(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the settings from the common-versions.json config file for a specific variant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getcommonversionsfilepath"},"getCommonVersionsFilePath(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the path to the common-versions.json config file for a specific variant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions"},"getImplicitlyPreferredVersions(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a map of all direct dependencies that only have a single semantic version specifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getpnpmfilepath"},"getPnpmfilePath(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Gets the absolute path for "pnpmfile.js" for a specific variant.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getprojectbyname"},"getProjectByName(projectName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Looks up a project in the projectsByName map. If the project is not found, then undefined is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getrepostate"},"getRepoState(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the contents from the repo-state.json file for a specific variant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.getrepostatefilepath"},"getRepoStateFilePath(variant)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the path to the repo-state.json file for a specific variant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile"},"loadFromConfigurationFile(rushJsonFilename)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads the configuration data from an Rush.json configuration file and returns an RushConfiguration object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.loadfromdefaultlocation"},"loadFromDefaultLocation(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.tryfindrushjsonlocation"},"tryFindRushJsonLocation(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Find the rush.json location and return the path, or undefined if a rush.json can't be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration.trygetprojectforpath"},"tryGetProjectForPath(currentFolderPath)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the project for which the specified path is underneath that project's folder. If the path is not under any project's folder, returns undefined.")))))}d.isMDXComponent=!0}}]);