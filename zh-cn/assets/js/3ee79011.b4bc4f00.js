"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2435],{227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>g});var s=a(9122),n=a(6393),r=a(158),o=a(4618),l=a.n(o),i=a(3746),c=a.n(i);const m={feed:"feed_myUw",feedHeader:"feedHeader_PlNg",statusPrepend:"statusPrepend_LAmj",status:"status_Vu9Q",status_info:"status_info_Glg2",status_relativeTime:"status_relativeTime_i9dd",status_displayName:"status_displayName_kFQD",displayName_html:"displayName_html_RZ__",displayName_account:"displayName_account_uBal",status_avatar:"status_avatar_in70",status_content:"status_content_ZQIV",media_gallery:"media_gallery_r_eK",mastodonIcon_boost:"mastodonIcon_boost_D_XV",feedFooter:"feedFooter_Qpap",feedFooterLink:"feedFooterLink_nsqJ"};function u(e){let t=e.post,a=t;t.reblog&&(a=t.reblog);const s=`${e.userUrl}/${t.id}`,r=l()(),o=l()(new Date(t.created_at)),i=r.diff(o,"hour");let u;u=i<24?`${i}h`:r.isSame(o,"year")?o.format("MMM D"):o.format("MMM D, YYYY");const p=a.media_attachments.filter((e=>"image"===e.type)),d=c().sanitize(a.content),h=t.reblog?n.createElement("div",{className:m.statusPrepend},n.createElement("div",{className:m.mastodonIcon_boost}),n.createElement("div",null,n.createElement("a",{className:[m.displayName_account,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:t.account.url},t.account.display_name)," ","boosted")):void 0;return n.createElement("div",{className:m.status,onClick:function(e){e.target.closest("a")||window.open(s,"_blank")}},h,n.createElement("div",{className:m.status_info},n.createElement("a",{className:[m.status_displayName,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:a.account.url},n.createElement("img",{className:m.status_avatar,width:46,height:46,src:a.account.avatar}),n.createElement("div",null,n.createElement("div",{className:m.displayName_html},a.account.display_name),n.createElement("div",{className:m.displayName_account},"@",a.account.username))),n.createElement("a",{className:[m.status_relativeTime,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:s},n.createElement("time",{dateTime:t.created_at},u))),n.createElement("div",{className:m.status_content,dangerouslySetInnerHTML:{__html:d}}),p.map((e=>n.createElement("a",{className:"no-external-link-icon",href:e.url,target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{className:m.media_gallery,src:e.preview_url,alt:e.description})))))}function p(e){const[t,a]=(0,n.useState)(void 0),s=e.mastodonUserFullName.split("@"),r=s[1]??"",o=s[2]??"";if(!r||!o)throw Error("Invalid mastodonUserFullName");const l=`https://${o}/@${r}`;(0,n.useEffect)((()=>{(async()=>{try{const t=await async function(e){const t=new URL(e.userUrl),a=e.mastodonUserId??await(async()=>{const e=/@(\w+)$/.exec(t.pathname);if(!e)throw Error("not a Mastodon user URL");const a=e[1],s=Object.assign(new URL(t),{pathname:"/api/v1/accounts/lookup",search:`?acct=${a}`});return(await(await fetch(s)).json()).id})(),s=e.maxFeedItems??5,n=e.includeReplies??!1,r=Object.assign(new URL(t),{pathname:`/api/v1/accounts/${a}/statuses`,search:`?limit=${s}&exclude_replies=${!n}`});return await(await fetch(r)).json()}({userUrl:l,includeReplies:e.includeReplies,mastodonUserId:e.mastodonUserId,maxFeedItems:e.maxFeedItems});a({state:"loaded",posts:t})}catch(t){a({state:"error",error:t})}})()}),[e.mastodonUserFullName,e.includeReplies,e.maxFeedItems,e.mastodonUserId]);const i=[];let c;return void 0===t?c=". . .":"error"===t.state?c=`Error: ${t.error.message}`:(i.push(...t.posts),0===i.length&&(c="(The feed is empty.)")),n.createElement("div",{className:[m.feed,"no-external-link-icon"].join(" ")},n.createElement("div",{className:m.feedHeader},"Mastodon feed for"," ",n.createElement("a",{className:"no-external-link-icon",target:"_blank",rel:"noopener noreferrer",href:l},e.mastodonUserFullName)),c?n.createElement("div",{className:m.status},c):void 0,i.map(((e,t)=>n.createElement(u,{key:t,post:e,userUrl:l}))),n.createElement("a",{className:[m.feedFooterLink,"no-external-link-icon"].join(" "),target:"_blank",rel:"noopener noreferrer",href:l},n.createElement("div",{className:m.feedFooter}," \u2022 \xa0 \u2022 \xa0 \u2022 ")))}const d={title:"What's new"},h=void 0,f={unversionedId:"pages/news",id:"pages/news",title:"What's new",description:"The Rush Hour monthly video call is the easiest way to find out what's happening with Rush Stack:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/news.md",sourceDirName:"pages",slug:"/pages/news",permalink:"/zh-cn/pages/news",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/news.md",tags:[],version:"current",frontMatter:{title:"What's new"}},k={},g=[{value:"Changelogs",id:"changelogs",level:2},{value:"Announcements",id:"announcements",level:2}],N={toc:g},_="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(_,(0,s.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Rush Hour")," monthly video call is the easiest way to find out what's happening with Rush Stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign up using the ",(0,r.kt)("a",{parentName:"li",href:"https://rushstack.io/community/events/"},"Events")," page."),(0,r.kt)("li",{parentName:"ul"},"If you missed an event, the ",(0,r.kt)("a",{parentName:"li",href:"https://rushstack.io/community/past-events/"},"Past Events")," archive often\nincludes a green ",(0,r.kt)("strong",{parentName:"li"},"Meeting Notes")," button with a summary of important points.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/overview/roadmap"},"Project roadmap")," page outlines general initiatives, but it's updated less often."),(0,r.kt)("h2",{id:"changelogs"},"Changelogs"),(0,r.kt)("p",null,"To learn what's new for a specific project, check out its CHANGELOG.md file. The most popular ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-documenter/CHANGELOG.md"},"API Documenter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/api-extractor/CHANGELOG.md"},"API Extractor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/eslint/eslint-config/CHANGELOG.md"},"@rushstack/eslint-config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/lockfile-explorer/CHANGELOG.md"},"Lockfile Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/CHANGELOG.md"},"Heft")," - upgrade notes are here: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/UPGRADING.md"},"UPGRADING.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/rush/CHANGELOG.md"},"Rush")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/tsdoc/blob/main/tsdoc/CHANGELOG.md"},"TSDoc"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack#published-packages"},"rushstack/README.md")," has the full inventory\nof changelogs for all projects."),(0,r.kt)("h2",{id:"announcements"},"Announcements"),(0,r.kt)("p",null,"Follow us on ",(0,r.kt)("a",{parentName:"p",href:"https://fosstodon.org/@rushstack"},"Mastodon (@rushstack@fosstodon.org)")," or ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/rushstack"},"Twitter (@rushstack)"),"."),(0,r.kt)(p,{mastodonUserFullName:"@rushstack@fosstodon.org",mastodonUserId:"109525862248474026",maxFeedItems:"6",mdxType:"MastodonFeed"}))}b.isMDXComponent=!0}}]);