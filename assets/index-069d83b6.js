(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const c of h.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerpolicy&&(h.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?h.credentials="include":r.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(r){if(r.ep)return;r.ep=!0;const h=e(r);fetch(r.href,h)}})();var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Je={exports:{}};(function(f,t){(function(e,s){f.exports=s()})(Ze,function(){function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let s={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,h=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,g=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=L=>u[L];function N(L,i){if(i){if(r.test(L))return L.replace(h,D)}else if(c.test(L))return L.replace(g,D);return L}const E=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function C(L){return L.replace(E,(i,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const M=/(^|[^\[])\^/g;function d(L,i){L=L.source||L,i=i||"";const n={replace:(a,o)=>(o=(o=o.source||o).replace(M,"$1"),L=L.replace(a,o),n),getRegex:()=>new RegExp(L,i)};return n}const U=/[^\w:]/g,Y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function pt(L,i,n){if(L){let a;try{a=decodeURIComponent(C(n)).replace(U,"").toLowerCase()}catch{return null}if(a.indexOf("javascript:")===0||a.indexOf("vbscript:")===0||a.indexOf("data:")===0)return null}i&&!Y.test(n)&&(n=function(a,o){lt[" "+a]||(st.test(a)?lt[" "+a]=a+"/":lt[" "+a]=$(a,"/",!0));const m=(a=lt[" "+a]).indexOf(":")===-1;return o.substring(0,2)==="//"?m?o:a.replace(W,"$1")+o:o.charAt(0)==="/"?m?o:a.replace(j,"$1")+o:a+o}(i,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const lt={},st=/^[^:]+:\/*[^/]*$/,W=/^([^:]+:)[\s\S]*$/,j=/^([^:]+:\/*[^/]*)[\s\S]*$/,V={exec:function(){}};function B(L){let i,n,a=1;for(;a<arguments.length;a++)for(n in i=arguments[a],i)Object.prototype.hasOwnProperty.call(i,n)&&(L[n]=i[n]);return L}function O(L,i){const n=L.replace(/\|/g,(o,m,v)=>{let x=!1,w=m;for(;--w>=0&&v[w]==="\\";)x=!x;return x?"|":" |"}).split(/ \|/);let a=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>i)n.splice(i);else for(;n.length<i;)n.push("");for(;a<n.length;a++)n[a]=n[a].trim().replace(/\\\|/g,"|");return n}function $(L,i,n){const a=L.length;if(a===0)return"";let o=0;for(;o<a;){const m=L.charAt(a-o-1);if(m!==i||n){if(m===i||!n)break;o++}else o++}return L.substr(0,a-o)}function Z(L){L&&L.sanitize&&!L.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function J(L,i){if(i<1)return"";let n="";for(;i>1;)1&i&&(n+=L),i>>=1,L+=L;return n+L}function nt(L,i,n,a){const o=i.href,m=i.title?N(i.title):null,v=L[1].replace(/\\([\[\]])/g,"$1");if(L[0].charAt(0)!=="!"){a.state.inLink=!0;const x={type:"link",raw:n,href:o,title:m,text:v,tokens:a.inlineTokens(v,[])};return a.state.inLink=!1,x}return{type:"image",raw:n,href:o,title:m,text:N(v)}}class b{constructor(i){this.options=i||s}space(i){const n=this.rules.block.newline.exec(i);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(i){const n=this.rules.block.code.exec(i);if(n){const a=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?a:$(a,`
`)}}}fences(i){const n=this.rules.block.fences.exec(i);if(n){const a=n[0],o=function(m,v){const x=m.match(/^(\s+)(?:```)/);if(x===null)return v;const w=x[1];return v.split(`
`).map(R=>{const P=R.match(/^\s+/);if(P===null)return R;const[_]=P;return _.length>=w.length?R.slice(w.length):R}).join(`
`)}(a,n[3]||"");return{type:"code",raw:a,lang:n[2]?n[2].trim():n[2],text:o}}}heading(i){const n=this.rules.block.heading.exec(i);if(n){let a=n[2].trim();if(/#$/.test(a)){const m=$(a,"#");this.options.pedantic?a=m.trim():m&&!/ $/.test(m)||(a=m.trim())}const o={type:"heading",raw:n[0],depth:n[1].length,text:a,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(i){const n=this.rules.block.hr.exec(i);if(n)return{type:"hr",raw:n[0]}}blockquote(i){const n=this.rules.block.blockquote.exec(i);if(n){const a=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(a,[]),text:a}}}list(i){let n=this.rules.block.list.exec(i);if(n){let a,o,m,v,x,w,R,P,_,T,Q,et,rt=n[1].trim();const gt=rt.length>1,H={type:"list",raw:"",ordered:gt,start:gt?+rt.slice(0,-1):"",loose:!1,items:[]};rt=gt?`\\d{1,9}\\${rt.slice(-1)}`:`\\${rt}`,this.options.pedantic&&(rt=gt?rt:"[*+-]");const kt=new RegExp(`^( {0,3}${rt})((?: [^\\n]*)?(?:\\n|$))`);for(;i&&(et=!1,n=kt.exec(i))&&!this.rules.block.hr.test(i);){if(a=n[0],i=i.substring(a.length),P=n[2].split(`
`,1)[0],_=i.split(`
`,1)[0],this.options.pedantic?(v=2,Q=P.trimLeft()):(v=n[2].search(/[^ ]/),v=v>4?1:v,Q=P.slice(v),v+=n[1].length),w=!1,!P&&/^ *$/.test(_)&&(a+=_+`
`,i=i.substring(_.length+1),et=!0),!et){const ut=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;i&&(T=i.split(`
`,1)[0],P=T,this.options.pedantic&&(P=P.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!ut.test(P));){if(P.search(/[^ ]/)>=v||!P.trim())Q+=`
`+P.slice(v);else{if(w)break;Q+=`
`+P}w||P.trim()||(w=!0),a+=T+`
`,i=i.substring(T.length+1)}}H.loose||(R?H.loose=!0:/\n *\n *$/.test(a)&&(R=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(Q),o&&(m=o[0]!=="[ ] ",Q=Q.replace(/^\[[ xX]\] +/,""))),H.items.push({type:"list_item",raw:a,task:!!o,checked:m,loose:!1,text:Q}),H.raw+=a}H.items[H.items.length-1].raw=a.trimRight(),H.items[H.items.length-1].text=Q.trimRight(),H.raw=H.raw.trimRight();const Ct=H.items.length;for(x=0;x<Ct;x++){this.lexer.state.top=!1,H.items[x].tokens=this.lexer.blockTokens(H.items[x].text,[]);const ut=H.items[x].tokens.filter(X=>X.type==="space"),ot=ut.every(X=>{const Rt=X.raw.split("");let xt=0;for(const qt of Rt)if(qt===`
`&&(xt+=1),xt>1)return!0;return!1});!H.loose&&ut.length&&ot&&(H.loose=!0,H.items[x].loose=!0)}return H}}html(i){const n=this.rules.block.html.exec(i);if(n){const a={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(a.type="paragraph",a.text=this.options.sanitizer?this.options.sanitizer(n[0]):N(n[0]),a.tokens=[],this.lexer.inline(a.text,a.tokens)),a}}def(i){const n=this.rules.block.def.exec(i);if(n)return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{type:"def",tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}table(i){const n=this.rules.block.table.exec(i);if(n){const a={type:"table",header:O(n[1]).map(o=>({text:o})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(a.header.length===a.align.length){a.raw=n[0];let o,m,v,x,w=a.align.length;for(o=0;o<w;o++)/^ *-+: *$/.test(a.align[o])?a.align[o]="right":/^ *:-+: *$/.test(a.align[o])?a.align[o]="center":/^ *:-+ *$/.test(a.align[o])?a.align[o]="left":a.align[o]=null;for(w=a.rows.length,o=0;o<w;o++)a.rows[o]=O(a.rows[o],a.header.length).map(R=>({text:R}));for(w=a.header.length,m=0;m<w;m++)a.header[m].tokens=[],this.lexer.inlineTokens(a.header[m].text,a.header[m].tokens);for(w=a.rows.length,m=0;m<w;m++)for(x=a.rows[m],v=0;v<x.length;v++)x[v].tokens=[],this.lexer.inlineTokens(x[v].text,x[v].tokens);return a}}}lheading(i){const n=this.rules.block.lheading.exec(i);if(n){const a={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}paragraph(i){const n=this.rules.block.paragraph.exec(i);if(n){const a={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}text(i){const n=this.rules.block.text.exec(i);if(n){const a={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}escape(i){const n=this.rules.inline.escape.exec(i);if(n)return{type:"escape",raw:n[0],text:N(n[1])}}tag(i){const n=this.rules.inline.tag.exec(i);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):N(n[0]):n[0]}}link(i){const n=this.rules.inline.link.exec(i);if(n){const a=n[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const v=$(a.slice(0,-1),"\\");if((a.length-v.length)%2==0)return}else{const v=function(x,w){if(x.indexOf(w[1])===-1)return-1;const R=x.length;let P=0,_=0;for(;_<R;_++)if(x[_]==="\\")_++;else if(x[_]===w[0])P++;else if(x[_]===w[1]&&(P--,P<0))return _;return-1}(n[2],"()");if(v>-1){const x=(n[0].indexOf("!")===0?5:4)+n[1].length+v;n[2]=n[2].substring(0,v),n[0]=n[0].substring(0,x).trim(),n[3]=""}}let o=n[2],m="";if(this.options.pedantic){const v=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);v&&(o=v[1],m=v[3])}else m=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(a)?o.slice(1):o.slice(1,-1)),nt(n,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:m&&m.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(i,n){let a;if((a=this.rules.inline.reflink.exec(i))||(a=this.rules.inline.nolink.exec(i))){let o=(a[2]||a[1]).replace(/\s+/g," ");if(o=n[o.toLowerCase()],!o||!o.href){const m=a[0].charAt(0);return{type:"text",raw:m,text:m}}return nt(a,o,a[0],this.lexer)}}emStrong(i,n,a=""){let o=this.rules.inline.emStrong.lDelim.exec(i);if(!o||o[3]&&a.match(/[\p{L}\p{N}]/u))return;const m=o[1]||o[2]||"";if(!m||m&&(a===""||this.rules.inline.punctuation.exec(a))){const v=o[0].length-1;let x,w,R=v,P=0;const _=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(_.lastIndex=0,n=n.slice(-1*i.length+v);(o=_.exec(n))!=null;){if(x=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!x)continue;if(w=x.length,o[3]||o[4]){R+=w;continue}if((o[5]||o[6])&&v%3&&!((v+w)%3)){P+=w;continue}if(R-=w,R>0)continue;if(w=Math.min(w,w+R+P),Math.min(v,w)%2){const Q=i.slice(1,v+o.index+w);return{type:"em",raw:i.slice(0,v+o.index+w+1),text:Q,tokens:this.lexer.inlineTokens(Q,[])}}const T=i.slice(2,v+o.index+w-1);return{type:"strong",raw:i.slice(0,v+o.index+w+1),text:T,tokens:this.lexer.inlineTokens(T,[])}}}}codespan(i){const n=this.rules.inline.code.exec(i);if(n){let a=n[2].replace(/\n/g," ");const o=/[^ ]/.test(a),m=/^ /.test(a)&&/ $/.test(a);return o&&m&&(a=a.substring(1,a.length-1)),a=N(a,!0),{type:"codespan",raw:n[0],text:a}}}br(i){const n=this.rules.inline.br.exec(i);if(n)return{type:"br",raw:n[0]}}del(i){const n=this.rules.inline.del.exec(i);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(i,n){const a=this.rules.inline.autolink.exec(i);if(a){let o,m;return a[2]==="@"?(o=N(this.options.mangle?n(a[1]):a[1]),m="mailto:"+o):(o=N(a[1]),m=o),{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}url(i,n){let a;if(a=this.rules.inline.url.exec(i)){let o,m;if(a[2]==="@")o=N(this.options.mangle?n(a[0]):a[0]),m="mailto:"+o;else{let v;do v=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(v!==a[0]);o=N(a[0]),m=a[1]==="www."?"http://"+o:o}return{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(i,n){const a=this.rules.inline.text.exec(i);if(a){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):N(a[0]):a[0]:N(this.options.smartypants?n(a[0]):a[0]),{type:"text",raw:a[0],text:o}}}}const A={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:V,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};A.def=d(A.def).replace("label",A._label).replace("title",A._title).getRegex(),A.bullet=/(?:[*+-]|\d{1,9}[.)])/,A.listItemStart=d(/^( *)(bull) */).replace("bull",A.bullet).getRegex(),A.list=d(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex(),A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",A._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,A.html=d(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),A.paragraph=d(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.blockquote=d(A.blockquote).replace("paragraph",A.paragraph).getRegex(),A.normal=B({},A),A.gfm=B({},A.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),A.gfm.table=d(A.gfm.table).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.gfm.paragraph=d(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",A.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.pedantic=B({},A.normal,{html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:V,paragraph:d(A.normal._paragraph).replace("hr",A.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const k={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:V,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:V,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function dt(L){return L.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ct(L){let i,n,a="";const o=L.length;for(i=0;i<o;i++)n=L.charCodeAt(i),Math.random()>.5&&(n="x"+n.toString(16)),a+="&#"+n+";";return a}k._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",k.punctuation=d(k.punctuation).replace(/punctuation/g,k._punctuation).getRegex(),k.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,k.escapedEmSt=/\\\*|\\_/g,k._comment=d(A._comment).replace("(?:-->|$)","-->").getRegex(),k.emStrong.lDelim=d(k.emStrong.lDelim).replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimAst=d(k.emStrong.rDelimAst,"g").replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimUnd=d(k.emStrong.rDelimUnd,"g").replace(/punct/g,k._punctuation).getRegex(),k._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,k._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,k._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,k.autolink=d(k.autolink).replace("scheme",k._scheme).replace("email",k._email).getRegex(),k._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,k.tag=d(k.tag).replace("comment",k._comment).replace("attribute",k._attribute).getRegex(),k._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,k._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,k._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,k.link=d(k.link).replace("label",k._label).replace("href",k._href).replace("title",k._title).getRegex(),k.reflink=d(k.reflink).replace("label",k._label).replace("ref",A._label).getRegex(),k.nolink=d(k.nolink).replace("ref",A._label).getRegex(),k.reflinkSearch=d(k.reflinkSearch,"g").replace("reflink",k.reflink).replace("nolink",k.nolink).getRegex(),k.normal=B({},k),k.pedantic=B({},k.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",k._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",k._label).getRegex()}),k.gfm=B({},k.normal,{escape:d(k.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),k.gfm.url=d(k.gfm.url,"i").replace("email",k.gfm._extended_email).getRegex(),k.breaks=B({},k.gfm,{br:d(k.br).replace("{2,}","*").getRegex(),text:d(k.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class it{constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||s,this.options.tokenizer=this.options.tokenizer||new b,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:A.normal,inline:k.normal};this.options.pedantic?(n.block=A.pedantic,n.inline=k.pedantic):this.options.gfm&&(n.block=A.gfm,this.options.breaks?n.inline=k.breaks:n.inline=k.gfm),this.tokenizer.rules=n}static get rules(){return{block:A,inline:k}}static lex(i,n){return new it(n).lex(i)}static lexInline(i,n){return new it(n).inlineTokens(i)}lex(i){let n;for(i=i.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(i,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(i,n=[]){let a,o,m,v;for(this.options.pedantic&&(i=i.replace(/^ +$/gm,""));i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(x=>!!(a=x.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.space(i))i=i.substring(a.raw.length),a.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(a);else if(a=this.tokenizer.code(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?n.push(a):(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.fences(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.heading(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.hr(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.blockquote(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.list(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.html(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.def(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title}):(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.table(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.lheading(i))i=i.substring(a.raw.length),n.push(a);else{if(m=i,this.options.extensions&&this.options.extensions.startBlock){let x=1/0;const w=i.slice(1);let R;this.options.extensions.startBlock.forEach(function(P){R=P.call({lexer:this},w),typeof R=="number"&&R>=0&&(x=Math.min(x,R))}),x<1/0&&x>=0&&(m=i.substring(0,x+1))}if(this.state.top&&(a=this.tokenizer.paragraph(m)))o=n[n.length-1],v&&o.type==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a),v=m.length!==i.length,i=i.substring(a.raw.length);else if(a=this.tokenizer.text(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a);else if(i){const x="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(x);break}throw new Error(x)}}return this.state.top=!0,n}inline(i,n){this.inlineQueue.push({src:i,tokens:n})}inlineTokens(i,n=[]){let a,o,m,v,x,w,R=i;if(this.tokens.links){const P=Object.keys(this.tokens.links);if(P.length>0)for(;(v=this.tokenizer.rules.inline.reflinkSearch.exec(R))!=null;)P.includes(v[0].slice(v[0].lastIndexOf("[")+1,-1))&&(R=R.slice(0,v.index)+"["+J("a",v[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(v=this.tokenizer.rules.inline.blockSkip.exec(R))!=null;)R=R.slice(0,v.index)+"["+J("a",v[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(v=this.tokenizer.rules.inline.escapedEmSt.exec(R))!=null;)R=R.slice(0,v.index)+"++"+R.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;i;)if(x||(w=""),x=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(P=>!!(a=P.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.escape(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.tag(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.link(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.reflink(i,this.tokens.links))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.emStrong(i,R,w))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.codespan(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.br(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.del(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.autolink(i,ct))i=i.substring(a.raw.length),n.push(a);else if(this.state.inLink||!(a=this.tokenizer.url(i,ct))){if(m=i,this.options.extensions&&this.options.extensions.startInline){let P=1/0;const _=i.slice(1);let T;this.options.extensions.startInline.forEach(function(Q){T=Q.call({lexer:this},_),typeof T=="number"&&T>=0&&(P=Math.min(P,T))}),P<1/0&&P>=0&&(m=i.substring(0,P+1))}if(a=this.tokenizer.inlineText(m,dt))i=i.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(w=a.raw.slice(-1)),x=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(i){const P="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(P);break}throw new Error(P)}}else i=i.substring(a.raw.length),n.push(a);return n}}class K{constructor(i){this.options=i||s}code(i,n,a){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const m=this.options.highlight(i,o);m!=null&&m!==i&&(a=!0,i=m)}return i=i.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+N(o,!0)+'">'+(a?i:N(i,!0))+`</code></pre>
`:"<pre><code>"+(a?i:N(i,!0))+`</code></pre>
`}blockquote(i){return`<blockquote>
`+i+`</blockquote>
`}html(i){return i}heading(i,n,a,o){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+o.slug(a)+'">'+i+"</h"+n+`>
`:"<h"+n+">"+i+"</h"+n+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(i,n,a){const o=n?"ol":"ul";return"<"+o+(n&&a!==1?' start="'+a+'"':"")+`>
`+i+"</"+o+`>
`}listitem(i){return"<li>"+i+`</li>
`}checkbox(i){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(i){return"<p>"+i+`</p>
`}table(i,n){return n&&(n="<tbody>"+n+"</tbody>"),`<table>
<thead>
`+i+`</thead>
`+n+`</table>
`}tablerow(i){return`<tr>
`+i+`</tr>
`}tablecell(i,n){const a=n.header?"th":"td";return(n.align?"<"+a+' align="'+n.align+'">':"<"+a+">")+i+"</"+a+`>
`}strong(i){return"<strong>"+i+"</strong>"}em(i){return"<em>"+i+"</em>"}codespan(i){return"<code>"+i+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(i){return"<del>"+i+"</del>"}link(i,n,a){if((i=pt(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<a href="'+N(i)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+a+"</a>",o}image(i,n,a){if((i=pt(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<img src="'+i+'" alt="'+a+'"';return n&&(o+=' title="'+n+'"'),o+=this.options.xhtml?"/>":">",o}text(i){return i}}class _t{strong(i){return i}em(i){return i}codespan(i){return i}del(i){return i}html(i){return i}text(i){return i}link(i,n,a){return""+a}image(i,n,a){return""+a}br(){return""}}class $t{constructor(){this.seen={}}serialize(i){return i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(i,n){let a=i,o=0;if(this.seen.hasOwnProperty(a)){o=this.seen[i];do o++,a=i+"-"+o;while(this.seen.hasOwnProperty(a))}return n||(this.seen[i]=o,this.seen[a]=0),a}slug(i,n={}){const a=this.serialize(i);return this.getNextSafeSlug(a,n.dryrun)}}class ft{constructor(i){this.options=i||s,this.options.renderer=this.options.renderer||new K,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new _t,this.slugger=new $t}static parse(i,n){return new ft(n).parse(i)}static parseInline(i,n){return new ft(n).parseInline(i)}parse(i,n=!0){let a,o,m,v,x,w,R,P,_,T,Q,et,rt,gt,H,kt,Ct,ut,ot,X="";const Rt=i.length;for(a=0;a<Rt;a++)if(T=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[T.type]&&(ot=this.options.extensions.renderers[T.type].call({parser:this},T),ot!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(T.type)))X+=ot||"";else switch(T.type){case"space":continue;case"hr":X+=this.renderer.hr();continue;case"heading":X+=this.renderer.heading(this.parseInline(T.tokens),T.depth,C(this.parseInline(T.tokens,this.textRenderer)),this.slugger);continue;case"code":X+=this.renderer.code(T.text,T.lang,T.escaped);continue;case"table":for(P="",R="",v=T.header.length,o=0;o<v;o++)R+=this.renderer.tablecell(this.parseInline(T.header[o].tokens),{header:!0,align:T.align[o]});for(P+=this.renderer.tablerow(R),_="",v=T.rows.length,o=0;o<v;o++){for(w=T.rows[o],R="",x=w.length,m=0;m<x;m++)R+=this.renderer.tablecell(this.parseInline(w[m].tokens),{header:!1,align:T.align[m]});_+=this.renderer.tablerow(R)}X+=this.renderer.table(P,_);continue;case"blockquote":_=this.parse(T.tokens),X+=this.renderer.blockquote(_);continue;case"list":for(Q=T.ordered,et=T.start,rt=T.loose,v=T.items.length,_="",o=0;o<v;o++)H=T.items[o],kt=H.checked,Ct=H.task,gt="",H.task&&(ut=this.renderer.checkbox(kt),rt?H.tokens.length>0&&H.tokens[0].type==="paragraph"?(H.tokens[0].text=ut+" "+H.tokens[0].text,H.tokens[0].tokens&&H.tokens[0].tokens.length>0&&H.tokens[0].tokens[0].type==="text"&&(H.tokens[0].tokens[0].text=ut+" "+H.tokens[0].tokens[0].text)):H.tokens.unshift({type:"text",text:ut}):gt+=ut),gt+=this.parse(H.tokens,rt),_+=this.renderer.listitem(gt,Ct,kt);X+=this.renderer.list(_,Q,et);continue;case"html":X+=this.renderer.html(T.text);continue;case"paragraph":X+=this.renderer.paragraph(this.parseInline(T.tokens));continue;case"text":for(_=T.tokens?this.parseInline(T.tokens):T.text;a+1<Rt&&i[a+1].type==="text";)T=i[++a],_+=`
`+(T.tokens?this.parseInline(T.tokens):T.text);X+=n?this.renderer.paragraph(_):_;continue;default:{const xt='Token with "'+T.type+'" type was not found.';if(this.options.silent)return void console.error(xt);throw new Error(xt)}}return X}parseInline(i,n){n=n||this.renderer;let a,o,m,v="";const x=i.length;for(a=0;a<x;a++)if(o=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(m=this.options.extensions.renderers[o.type].call({parser:this},o),m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))v+=m||"";else switch(o.type){case"escape":v+=n.text(o.text);break;case"html":v+=n.html(o.text);break;case"link":v+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break;case"image":v+=n.image(o.href,o.title,o.text);break;case"strong":v+=n.strong(this.parseInline(o.tokens,n));break;case"em":v+=n.em(this.parseInline(o.tokens,n));break;case"codespan":v+=n.codespan(o.text);break;case"br":v+=n.br();break;case"del":v+=n.del(this.parseInline(o.tokens,n));break;case"text":v+=n.text(o.text);break;default:{const w='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}}return v}}function q(L,i,n){if(L==null)throw new Error("marked(): input parameter is undefined or null");if(typeof L!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(L)+", string expected");if(typeof i=="function"&&(n=i,i=null),Z(i=B({},q.defaults,i||{})),n){const a=i.highlight;let o;try{o=it.lex(L,i)}catch(x){return n(x)}const m=function(x){let w;if(!x)try{i.walkTokens&&q.walkTokens(o,i.walkTokens),w=ft.parse(o,i)}catch(R){x=R}return i.highlight=a,x?n(x):n(null,w)};if(!a||a.length<3||(delete i.highlight,!o.length))return m();let v=0;return q.walkTokens(o,function(x){x.type==="code"&&(v++,setTimeout(()=>{a(x.text,x.lang,function(w,R){if(w)return m(w);R!=null&&R!==x.text&&(x.text=R,x.escaped=!0),v--,v===0&&m()})},0))}),void(v===0&&m())}try{const a=it.lex(L,i);return i.walkTokens&&q.walkTokens(a,i.walkTokens),ft.parse(a,i)}catch(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+N(a.message+"",!0)+"</pre>";throw a}}return q.options=q.setOptions=function(L){var i;return B(q.defaults,L),i=q.defaults,s=i,q},q.getDefaults=e,q.defaults=s,q.use=function(...L){const i=B({},...L),n=q.defaults.extensions||{renderers:{},childTokens:{}};let a;L.forEach(o=>{if(o.extensions&&(a=!0,o.extensions.forEach(m=>{if(!m.name)throw new Error("extension name required");if(m.renderer){const v=n.renderers?n.renderers[m.name]:null;n.renderers[m.name]=v?function(...x){let w=m.renderer.apply(this,x);return w===!1&&(w=v.apply(this,x)),w}:m.renderer}if(m.tokenizer){if(!m.level||m.level!=="block"&&m.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[m.level]?n[m.level].unshift(m.tokenizer):n[m.level]=[m.tokenizer],m.start&&(m.level==="block"?n.startBlock?n.startBlock.push(m.start):n.startBlock=[m.start]:m.level==="inline"&&(n.startInline?n.startInline.push(m.start):n.startInline=[m.start]))}m.childTokens&&(n.childTokens[m.name]=m.childTokens)})),o.renderer){const m=q.defaults.renderer||new K;for(const v in o.renderer){const x=m[v];m[v]=(...w)=>{let R=o.renderer[v].apply(m,w);return R===!1&&(R=x.apply(m,w)),R}}i.renderer=m}if(o.tokenizer){const m=q.defaults.tokenizer||new b;for(const v in o.tokenizer){const x=m[v];m[v]=(...w)=>{let R=o.tokenizer[v].apply(m,w);return R===!1&&(R=x.apply(m,w)),R}}i.tokenizer=m}if(o.walkTokens){const m=q.defaults.walkTokens;i.walkTokens=function(v){o.walkTokens.call(this,v),m&&m.call(this,v)}}a&&(i.extensions=n),q.setOptions(i)})},q.walkTokens=function(L,i){for(const n of L)switch(i.call(q,n),n.type){case"table":for(const a of n.header)q.walkTokens(a.tokens,i);for(const a of n.rows)for(const o of a)q.walkTokens(o.tokens,i);break;case"list":q.walkTokens(n.items,i);break;default:q.defaults.extensions&&q.defaults.extensions.childTokens&&q.defaults.extensions.childTokens[n.type]?q.defaults.extensions.childTokens[n.type].forEach(function(a){q.walkTokens(n[a],i)}):n.tokens&&q.walkTokens(n.tokens,i)}},q.parseInline=function(L,i){if(L==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof L!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(L)+", string expected");Z(i=B({},q.defaults,i||{}));try{const n=it.lexInline(L,i);return i.walkTokens&&q.walkTokens(n,i.walkTokens),ft.parseInline(n,i)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+N(n.message+"",!0)+"</pre>";throw n}},q.Parser=ft,q.parser=ft.parse,q.Renderer=K,q.TextRenderer=_t,q.Lexer=it,q.lexer=it.lex,q.Tokenizer=b,q.Slugger=$t,q.parse=q,()=>{let L,i,n=null;function a(){if(n&&!n.closed)n.focus();else{if(n=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),n.marked=q,n.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		</script>
	</body>
</html>`),!n)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const x=i.getConfig().url,w=typeof x=="string"?x:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;L=setInterval(function(){n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:i.getState(),url:w}),"*")},500),window.addEventListener("message",m)})()}}function o(x){let w=i.getCurrentSlide(),R=w.querySelectorAll("aside.notes"),P=w.querySelector(".current-fragment"),_={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:i.getState()};if(w.hasAttribute("data-notes")&&(_.notes=w.getAttribute("data-notes"),_.whitespace="pre-wrap"),P){let T=P.querySelector("aside.notes");T?(_.notes=T.innerHTML,_.markdown=typeof T.getAttribute("data-markdown")=="string",R=null):P.hasAttribute("data-notes")&&(_.notes=P.getAttribute("data-notes"),_.whitespace="pre-wrap",R=null)}R&&(_.notes=Array.from(R).map(T=>T.innerHTML).join(`
`),_.markdown=R[0]&&typeof R[0].getAttribute("data-markdown")=="string"),n.postMessage(JSON.stringify(_),"*")}function m(x){if(function(w){try{return window.location.origin===w.source.location.origin}catch{return!1}}(x)){let w=JSON.parse(x.data);w&&w.namespace==="reveal-notes"&&w.type==="connected"?(clearInterval(L),v()):w&&w.namespace==="reveal-notes"&&w.type==="call"&&function(R,P,_){let T=i[R].apply(i,P);n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:T,callId:_}),"*")}(w.methodName,w.arguments,w.callId)}}function v(){i.on("slidechanged",o),i.on("fragmentshown",o),i.on("fragmenthidden",o),i.on("overviewhidden",o),i.on("overviewshown",o),i.on("paused",o),i.on("resumed",o),o()}return{id:"notes",init:function(x){i=x,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?a():window.addEventListener("message",w=>{if(!n&&typeof w.data=="string"){let P;try{P=JSON.parse(w.data)}catch{}P&&P.namespace==="reveal-notes"&&P.type==="heartbeat"&&(R=w.source,n&&!n.closed?n.focus():(n=R,window.addEventListener("message",m),v()))}var R}),i.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){a()}))},open:a}}})})(Je);const Nt=(f,t)=>{for(let e in t)f[e]=t[e];return f},I=(f,t)=>Array.from(f.querySelectorAll(t)),te=(f,t,e)=>{e?f.classList.add(t):f.classList.remove(t)},Pt=f=>{if(typeof f=="string"){if(f==="null")return null;if(f==="true")return!0;if(f==="false")return!1;if(f.match(/^-?[\d\.]+$/))return parseFloat(f)}return f},At=(f,t)=>{f.style.transform=t},Kt=(f,t)=>{let e=f.matches||f.matchesSelector||f.msMatchesSelector;return!(!e||!e.call(f,t))},at=(f,t)=>{if(typeof f.closest=="function")return f.closest(t);for(;f;){if(Kt(f,t))return f;f=f.parentNode}return null},Qe=(f,t,e,s="")=>{let r=f.querySelectorAll("."+e);for(let c=0;c<r.length;c++){let g=r[c];if(g.parentNode===f)return g}let h=document.createElement(t);return h.className=e,h.innerHTML=s,f.appendChild(h),h},ne=f=>{let t=document.createElement("style");return t.type="text/css",f&&f.length>0&&(t.styleSheet?t.styleSheet.cssText=f:t.appendChild(document.createTextNode(f))),document.head.appendChild(t),t},Ce=()=>{let f={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{f[t.split("=").shift()]=t.split("=").pop()});for(let t in f){let e=f[t];f[t]=Pt(unescape(e))}return f.dependencies!==void 0&&delete f.dependencies,f},Ge=(f,t=0)=>{if(f){let e,s=f.style.height;return f.style.height="0px",f.parentNode.style.height="auto",e=t-f.parentNode.offsetHeight,f.style.height=s+"px",f.parentNode.style.removeProperty("height"),e}return t},tn={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Ie=navigator.userAgent,Mt=/(iphone|ipod|ipad|android)/gi.test(Ie)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,De=/android/gi.test(Ie);var _e={};Object.defineProperty(_e,"__esModule",{value:!0});var Te=Object.assign||function(f){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(f[s]=e[s])}return f},en=_e.default=function(f){if(f){var t=function(b){return[].slice.call(b)},e=0,s=1,r=2,h=3,c=[],g=null,u="requestAnimationFrame"in f?function(){f.cancelAnimationFrame(g),g=f.requestAnimationFrame(function(){return N(c.filter(function(b){return b.dirty&&b.active}))})}:function(){},D=function(b){return function(){c.forEach(function(A){return A.dirty=b}),u()}},N=function(b){b.filter(function(k){return!k.styleComputed}).forEach(function(k){k.styleComputed=d(k)}),b.filter(U).forEach(Y);var A=b.filter(M);A.forEach(C),A.forEach(function(k){Y(k),E(k)}),A.forEach(pt)},E=function(b){return b.dirty=e},C=function(b){b.availableWidth=b.element.parentNode.clientWidth,b.currentWidth=b.element.scrollWidth,b.previousFontSize=b.currentFontSize,b.currentFontSize=Math.min(Math.max(b.minSize,b.availableWidth/b.currentWidth*b.previousFontSize),b.maxSize),b.whiteSpace=b.multiLine&&b.currentFontSize===b.minSize?"normal":"nowrap"},M=function(b){return b.dirty!==r||b.dirty===r&&b.element.parentNode.clientWidth!==b.availableWidth},d=function(b){var A=f.getComputedStyle(b.element,null);b.currentFontSize=parseFloat(A.getPropertyValue("font-size")),b.display=A.getPropertyValue("display"),b.whiteSpace=A.getPropertyValue("white-space")},U=function(b){var A=!1;return!b.preStyleTestCompleted&&(/inline-/.test(b.display)||(A=!0,b.display="inline-block"),b.whiteSpace!=="nowrap"&&(A=!0,b.whiteSpace="nowrap"),b.preStyleTestCompleted=!0,A)},Y=function(b){b.element.style.whiteSpace=b.whiteSpace,b.element.style.display=b.display,b.element.style.fontSize=b.currentFontSize+"px"},pt=function(b){b.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:b.previousFontSize,newValue:b.currentFontSize,scaleFactor:b.currentFontSize/b.previousFontSize}}))},lt=function(b,A){return function(){b.dirty=A,b.active&&u()}},st=function(b){return function(){c=c.filter(function(A){return A.element!==b.element}),b.observeMutations&&b.observer.disconnect(),b.element.style.whiteSpace=b.originalStyle.whiteSpace,b.element.style.display=b.originalStyle.display,b.element.style.fontSize=b.originalStyle.fontSize}},W=function(b){return function(){b.active||(b.active=!0,u())}},j=function(b){return function(){return b.active=!1}},V=function(b){b.observeMutations&&(b.observer=new MutationObserver(lt(b,s)),b.observer.observe(b.element,b.observeMutations))},B={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in f&&{subtree:!0,childList:!0,characterData:!0}},O=null,$=function(){f.clearTimeout(O),O=f.setTimeout(D(r),nt.observeWindowDelay)},Z=["resize","orientationchange"];return Object.defineProperty(nt,"observeWindow",{set:function(b){var A=(b?"add":"remove")+"EventListener";Z.forEach(function(k){f[A](k,$)})}}),nt.observeWindow=!0,nt.observeWindowDelay=100,nt.fitAll=D(h),nt}function J(b,A){var k=Te({},B,A),dt=b.map(function(ct){var it=Te({},k,{element:ct,active:!0});return function(K){K.originalStyle={whiteSpace:K.element.style.whiteSpace,display:K.element.style.display,fontSize:K.element.style.fontSize},V(K),K.newbie=!0,K.dirty=!0,c.push(K)}(it),{element:ct,fit:lt(it,h),unfreeze:W(it),freeze:j(it),unsubscribe:st(it)}});return u(),dt}function nt(b){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof b=="string"?J(t(document.querySelectorAll(b)),A):J([b],A)[0]}}(typeof window>"u"?null:window);class nn{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,I(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))}),I(t,"video, audio").forEach(r=>{let h=0;I(r,"source[data-src]").forEach(c=>{c.setAttribute("src",c.getAttribute("data-src")),c.removeAttribute("data-src"),c.setAttribute("data-lazy-loaded",""),h+=1}),Mt&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),h>0&&r.load()});let s=t.slideBackgroundElement;if(s){s.style.display="block";let r=t.slideBackgroundContentElement,h=t.getAttribute("data-background-iframe");if(s.hasAttribute("data-loaded")===!1){s.setAttribute("data-loaded","true");let g=t.getAttribute("data-background-image"),u=t.getAttribute("data-background-video"),D=t.hasAttribute("data-background-video-loop"),N=t.hasAttribute("data-background-video-muted");if(g)/^data:/.test(g.trim())?r.style.backgroundImage=`url(${g.trim()})`:r.style.backgroundImage=g.split(",").map(E=>`url(${encodeURI(E.trim())})`).join(",");else if(u&&!this.Reveal.isSpeakerNotes()){let E=document.createElement("video");D&&E.setAttribute("loop",""),N&&(E.muted=!0),Mt&&(E.muted=!0,E.setAttribute("playsinline","")),u.split(",").forEach(C=>{let M=((d="")=>tn[d.split(".").pop()])(C);E.innerHTML+=M?`<source src="${C}" type="${M}">`:`<source src="${C}">`}),r.appendChild(E)}else if(h&&e.excludeIframes!==!0){let E=document.createElement("iframe");E.setAttribute("allowfullscreen",""),E.setAttribute("mozallowfullscreen",""),E.setAttribute("webkitallowfullscreen",""),E.setAttribute("allow","autoplay"),E.setAttribute("data-src",h),E.style.width="100%",E.style.height="100%",E.style.maxHeight="100%",E.style.maxWidth="100%",r.appendChild(E)}}let c=r.querySelector("iframe[data-src]");c&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(h)&&c.getAttribute("src")!==h&&c.setAttribute("src",h)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{en(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",I(e,"iframe[src]").forEach(s=>{s.removeAttribute("src")})),I(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")}),I(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,s,r)=>{I(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+s+'"]').forEach(h=>{let c=h.getAttribute(e);c&&c.indexOf(r)===-1&&h.setAttribute(e,c+(/\?/.test(c)?"&":"?")+r)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(I(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),I(t,"video, audio").forEach(e=>{if(at(e,".fragment")&&!at(e,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!at(e,".slide-background")),s&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Mt){let r=e.play();r&&typeof r.catch=="function"&&e.controls===!1&&r.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),I(t,"iframe[src]").forEach(e=>{at(e,".fragment")&&!at(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),I(t,"iframe[data-src]").forEach(e=>{at(e,".fragment")&&!at(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!at(t.target,"html"),s=!!at(t.target,".present");e&&s&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let s=!!at(t.target,"html"),r=!!at(t.target,".present");if(s&&r){let h=this.Reveal.getConfig().autoPlayMedia;typeof h!="boolean"&&(h=e.hasAttribute("data-autoplay")||!!at(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=Nt({unloadIframes:!0},e),t&&t.parentNode&&(I(t,"video, audio").forEach(s=>{s.hasAttribute("data-ignore")||typeof s.pause!="function"||(s.setAttribute("data-paused-by-reveal",""),s.pause())}),I(t,"iframe").forEach(s=>{s.contentWindow&&s.contentWindow.postMessage("slide:stop","*"),s.removeEventListener("load",this.startEmbeddedIframe)}),I(t,'iframe[src*="youtube.com/embed/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),I(t,'iframe[src*="player.vimeo.com/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&I(t,"iframe[data-src]").forEach(s=>{s.setAttribute("src","about:blank"),s.removeAttribute("src")}))}}class sn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let s="none";t.slideNumber&&!this.Reveal.isPrintingPDF()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(s="block"),this.element.style.display=s}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,s=this.Reveal.getConfig(),r="h.v";if(typeof s.slideNumber=="function")e=s.slideNumber(t);else{typeof s.slideNumber=="string"&&(r=s.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let c=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+c);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+c,"/",this.Reveal.getTotalSlides());break;default:let g=this.Reveal.getIndices(t);e.push(g.h+c);let u=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(u,g.v+1)}}let h="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],h)}formatNumber(t,e,s,r="#"+this.Reveal.location.getHash()){return typeof s!="number"||isNaN(s)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${s}</span>
					</a>`}destroy(){this.element.remove()}}const ee=f=>{let t=f.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=f.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let s=f.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let r=f.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};class an{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);I(t,"section").forEach(s=>{this.createBackground(s,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let s=document.createElement("div");s.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",s.appendChild(r),e.appendChild(s),t.slideBackgroundElement=s,t.slideBackgroundContentElement=r,this.sync(t),s}sync(t){const e=t.slideBackgroundElement,s=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},h=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",s.style.backgroundSize="",s.style.backgroundRepeat="",s.style.backgroundPosition="",s.style.backgroundImage="",s.style.opacity="",s.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),h&&e.setAttribute("data-preload",""),r.backgroundSize&&(s.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(s.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(s.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(s.style.opacity=r.backgroundOpacity);let c=r.backgroundColor;if(!c||!ee(c)){let u=window.getComputedStyle(e);u&&u.backgroundColor&&(c=u.backgroundColor)}if(c){const u=ee(c);u&&u.a!==0&&(typeof(g=c)=="string"&&(g=ee(g)),(g?(299*g.r+587*g.g+114*g.b)/1e3:null)<128?t.classList.add("has-dark-background"):t.classList.add("has-light-background"))}var g}update(t=!1){let e=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),r=null,h=this.Reveal.getConfig().rtl?"future":"past",c=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((g,u)=>{g.classList.remove("past","present","future"),u<s.h?g.classList.add(h):u>s.h?g.classList.add(c):(g.classList.add("present"),r=g),(t||u===s.h)&&I(g,".slide-background").forEach((D,N)=>{D.classList.remove("past","present","future"),N<s.v?D.classList.add("past"):N>s.v?D.classList.add("future"):(D.classList.add("present"),u===s.h&&(r=D))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r){this.Reveal.slideContent.startEmbeddedContent(r);let g=r.querySelector(".slide-background-content");if(g){let N=g.style.backgroundImage||"";/\.gif/i.test(N)&&(g.style.backgroundImage="",window.getComputedStyle(g).opacity,g.style.backgroundImage=N)}let u=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,D=r.getAttribute("data-background-hash");D&&D===u&&r!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=r}e&&["has-light-background","has-dark-background"].forEach(g=>{e.classList.contains(g)?this.Reveal.getRevealElement().classList.add(g):this.Reveal.getRevealElement().classList.remove(g)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,s,r=this.Reveal.getHorizontalSlides(),h=this.Reveal.getVerticalSlides(),c=this.element.style.backgroundSize.split(" ");c.length===1?e=s=parseInt(c[0],10):(e=parseInt(c[0],10),s=parseInt(c[1],10));let g,u,D=this.element.offsetWidth,N=r.length;g=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:N>1?(e-D)/(N-1):0,u=g*t.h*-1;let E,C,M=this.element.offsetHeight,d=h.length;E=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(s-M)/(d-1),C=d>0?E*t.v:0,this.element.style.backgroundPosition=u+"px "+-C+"px"}}destroy(){this.element.remove()}}const rn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Pe=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let Ne=0;class on{constructor(t){this.Reveal=t}run(t,e){this.reset();let s=this.Reveal.getSlides(),r=s.indexOf(e),h=s.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>h?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||ne();let c=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",c.slideDirection=r>h?"forward":"backward";let g=t.style.display==="none";g&&(t.style.display=this.Reveal.getConfig().display);let u=this.getAutoAnimatableElements(t,e).map(D=>this.autoAnimateElements(D.from,D.to,D.options||{},c,Ne++));if(g&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let D=.8*c.duration,N=.2*c.duration;this.getUnmatchedAutoAnimateElements(e).forEach(E=>{let C=this.getAutoAnimateOptions(E,c),M="unmatched";C.duration===c.duration&&C.delay===c.delay||(M="unmatched-"+Ne++,u.push(`[data-auto-animate="running"] [data-auto-animate-target="${M}"] { transition: opacity ${C.duration}s ease ${C.delay}s; }`)),E.dataset.autoAnimateTarget=M},this),u.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${D}s ease ${N}s; }`)}this.autoAnimateStyleSheet.innerHTML=u.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){I(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),I(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,s,r,h){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=h;let c=this.getAutoAnimateOptions(e,r);s.delay!==void 0&&(c.delay=s.delay),s.duration!==void 0&&(c.duration=s.duration),s.easing!==void 0&&(c.easing=s.easing);let g=this.getAutoAnimatableProperties("from",t,s),u=this.getAutoAnimatableProperties("to",e,s);if(e.classList.contains("fragment")&&(delete u.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(Pe)||[""])[0]===(e.className.match(Pe)||[""])[0]&&r.slideDirection==="forward"&&e.classList.add("visible","disabled"),s.translate!==!1||s.scale!==!1){let E=this.Reveal.getScale(),C={x:(g.x-u.x)/E,y:(g.y-u.y)/E,scaleX:g.width/u.width,scaleY:g.height/u.height};C.x=Math.round(1e3*C.x)/1e3,C.y=Math.round(1e3*C.y)/1e3,C.scaleX=Math.round(1e3*C.scaleX)/1e3,C.scaleX=Math.round(1e3*C.scaleX)/1e3;let M=s.translate!==!1&&(C.x!==0||C.y!==0),d=s.scale!==!1&&(C.scaleX!==0||C.scaleY!==0);if(M||d){let U=[];M&&U.push(`translate(${C.x}px, ${C.y}px)`),d&&U.push(`scale(${C.scaleX}, ${C.scaleY})`),g.styles.transform=U.join(" "),g.styles["transform-origin"]="top left",u.styles.transform="none"}}for(let E in u.styles){const C=u.styles[E],M=g.styles[E];C===M?delete u.styles[E]:(C.explicitValue===!0&&(u.styles[E]=C.value),M.explicitValue===!0&&(g.styles[E]=M.value))}let D="",N=Object.keys(u.styles);return N.length>0&&(g.styles.transition="none",u.styles.transition=`all ${c.duration}s ${c.easing} ${c.delay}s`,u.styles["transition-property"]=N.join(", "),u.styles["will-change"]=N.join(", "),D='[data-auto-animate-target="'+h+'"] {'+Object.keys(g.styles).map(E=>E+": "+g.styles[E]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+h+'"] {'+Object.keys(u.styles).map(E=>E+": "+u.styles[E]+" !important;").join("")+"}"),D}getAutoAnimateOptions(t,e){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=Nt(s,e),t.parentNode){let r=at(t.parentNode,"[data-auto-animate-target]");r&&(s=this.getAutoAnimateOptions(r,s))}return t.dataset.autoAnimateEasing&&(s.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(s.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(s.delay=parseFloat(t.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(t,e,s){let r=this.Reveal.getConfig(),h={styles:[]};if(s.translate!==!1||s.scale!==!1){let g;if(typeof s.measure=="function")g=s.measure(e);else if(r.center)g=e.getBoundingClientRect();else{let u=this.Reveal.getScale();g={x:e.offsetLeft*u,y:e.offsetTop*u,width:e.offsetWidth*u,height:e.offsetHeight*u}}h.x=g.x,h.y=g.y,h.width=g.width,h.height=g.height}const c=getComputedStyle(e);return(s.styles||r.autoAnimateStyles).forEach(g=>{let u;typeof g=="string"&&(g={property:g}),g.from!==void 0&&t==="from"?u={value:g.from,explicitValue:!0}:g.to!==void 0&&t==="to"?u={value:g.to,explicitValue:!0}:(g.property==="line-height"&&(u=parseFloat(c["line-height"])/parseFloat(c["font-size"])),isNaN(u)&&(u=c[g.property])),u!==""&&(h.styles[g.property]=u)}),h}getAutoAnimatableElements(t,e){let s=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return s.filter((h,c)=>{if(r.indexOf(h.to)===-1)return r.push(h.to),!0})}getAutoAnimatePairs(t,e){let s=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(s,t,e,"[data-id]",h=>h.nodeName+":::"+h.getAttribute("data-id")),this.findAutoAnimateMatches(s,t,e,r,h=>h.nodeName+":::"+h.innerText),this.findAutoAnimateMatches(s,t,e,"img, video, iframe",h=>h.nodeName+":::"+(h.getAttribute("src")||h.getAttribute("data-src"))),this.findAutoAnimateMatches(s,t,e,"pre",h=>h.nodeName+":::"+h.innerText),s.forEach(h=>{Kt(h.from,r)?h.options={scale:!1}:Kt(h.from,"pre")&&(h.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-code",c=>c.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-line[data-line-number]",c=>c.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),s}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,s,r,h,c){let g={},u={};[].slice.call(e.querySelectorAll(r)).forEach((D,N)=>{const E=h(D);typeof E=="string"&&E.length&&(g[E]=g[E]||[],g[E].push(D))}),[].slice.call(s.querySelectorAll(r)).forEach((D,N)=>{const E=h(D);let C;if(u[E]=u[E]||[],u[E].push(D),g[E]){const M=u[E].length-1,d=g[E].length-1;g[E][M]?(C=g[E][M],g[E][M]=null):g[E][d]&&(C=g[E][d],g[E][d]=null)}C&&t.push({from:C,to:D,options:c})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,s)=>{const r=s.querySelector("[data-auto-animate-target]");return s.hasAttribute("data-auto-animate-target")||r||e.push(s),s.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(s))),e},[])}}class ln{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){I(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){I(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),s=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-s.length>0,next:!!s.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let s=[],r=[],h=[];t.forEach(g=>{if(g.hasAttribute("data-fragment-index")){let u=parseInt(g.getAttribute("data-fragment-index"),10);s[u]||(s[u]=[]),s[u].push(g)}else r.push([g])}),s=s.concat(r);let c=0;return s.forEach(g=>{g.forEach(u=>{h.push(u),u.setAttribute("data-fragment-index",c)}),c++}),e===!0?s:h}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=I(t,"section");e.forEach((s,r)=>{this.sort(s.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e){let s={shown:[],hidden:[]},r=this.Reveal.getCurrentSlide();if(r&&this.Reveal.getConfig().fragments&&(e=e||this.sort(r.querySelectorAll(".fragment"))).length){let h=0;if(typeof t!="number"){let c=this.sort(r.querySelectorAll(".fragment.visible")).pop();c&&(t=parseInt(c.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((c,g)=>{if(c.hasAttribute("data-fragment-index")&&(g=parseInt(c.getAttribute("data-fragment-index"),10)),h=Math.max(h,g),g<=t){let u=c.classList.contains("visible");c.classList.add("visible"),c.classList.remove("current-fragment"),g===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(c)),c.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(c)),u||(s.shown.push(c),this.Reveal.dispatchEvent({target:c,type:"visible",bubbles:!1}))}else{let u=c.classList.contains("visible");c.classList.remove("visible"),c.classList.remove("current-fragment"),u&&(this.Reveal.slideContent.stopEmbeddedContent(c),s.hidden.push(c),this.Reveal.dispatchEvent({target:c,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,h),-1),r.setAttribute("data-fragment",t)}return s}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments){let r=this.sort(s.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let c=this.sort(s.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=c?parseInt(c.getAttribute("data-fragment-index")||0,10):-1}t+=e;let h=this.update(t,r);return h.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:h.hidden[0],fragments:h.hidden}}),h.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:h.shown[0],fragments:h.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!h.shown.length&&!h.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class dn{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),I(this.Reveal.getRevealElement(),".slides section").forEach(r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),At(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&I(t,"section").forEach((s,r)=>{s.setAttribute("data-index-h",e),s.setAttribute("data-index-v",r),At(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{At(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),I(t,".slide-background").forEach((s,r)=>{At(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,s=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-s.h*this.overviewSlideWidth+"px)","translateY("+-s.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),I(this.Reveal.getRevealElement(),".slides section").forEach(e=>{At(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),I(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{At(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let s=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(s,r)}}}}class cn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(t){t.shiftKey&&t.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let s=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let h=document.activeElement&&document.activeElement.isContentEditable===!0,c=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),g=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),u=!([32,37,38,39,40,78,80].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(h||c||g||u)return;let D,N=[66,86,190,191];if(typeof e.keyboard=="object")for(D in e.keyboard)e.keyboard[D]==="togglePause"&&N.push(parseInt(D,10));if(this.Reveal.isPaused()&&N.indexOf(s)===-1)return!1;let E=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),C=!1;if(typeof e.keyboard=="object"){for(D in e.keyboard)if(parseInt(D,10)===s){let M=e.keyboard[D];typeof M=="function"?M.apply(null,[t]):typeof M=="string"&&typeof this.Reveal[M]=="function"&&this.Reveal[M].call(),C=!0}}if(C===!1){for(D in this.bindings)if(parseInt(D,10)===s){let M=this.bindings[D].callback;typeof M=="function"?M.apply(null,[t]):typeof M=="string"&&typeof this.Reveal[M]=="function"&&this.Reveal[M].call(),C=!0}}C===!1&&(C=!0,s===80||s===33?this.Reveal.prev({skipFragments:t.altKey}):s===78||s===34?this.Reveal.next({skipFragments:t.altKey}):s===72||s===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&E?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):s===76||s===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&E?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):s===75||s===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&E?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):s===74||s===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&E?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):s===36?this.Reveal.slide(0):s===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):s===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):s===58||s===59||s===66||s===86||s===190||s===191?this.Reveal.togglePause():s===70?(M=>{let d=(M=M||document.documentElement).requestFullscreen||M.webkitRequestFullscreen||M.webkitRequestFullScreen||M.mozRequestFullScreen||M.msRequestFullscreen;d&&d.apply(M)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):s===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):C=!1),C?t.preventDefault&&t.preventDefault():s!==27&&s!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class un{constructor(t){var e,s,r;r=1e3,(s="MAX_REPLACE_STATE_FREQUENCY")in(e=this)?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash){let e=t.replace(/^#\/?/,""),s=e.split("/");if(/^[0-9]*$/.test(s[0])||!e.length){const r=this.Reveal.getConfig();let h,c=r.hashOneBasedIndex?1:0,g=parseInt(s[0],10)-c||0,u=parseInt(s[1],10)-c||0;return r.fragmentInURL&&(h=parseInt(s[2],10),isNaN(h)&&(h=void 0)),{h:g,v:u,f:h}}{let r,h;/\/[-\d]+$/g.test(e)&&(h=parseInt(e.split("/").pop(),10),h=isNaN(h)?void 0:h,e=e.split("/").shift());try{r=document.getElementById(decodeURIComponent(e))}catch{}if(r)return{...this.Reveal.getIndices(r),f:h}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(s){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",s=t||this.Reveal.getCurrentSlide(),r=s?s.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let h=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(h.f=void 0),typeof r=="string"&&r.length)e="/"+r,h.f>=0&&(e+="/"+h.f);else{let c=this.Reveal.getConfig().hashOneBasedIndex?1:0;(h.h>0||h.v>0||h.f>=0)&&(e+=h.h+c),(h.v>0||h.f>=0)&&(e+="/"+(h.v+c)),h.f>=0&&(e+="/"+h.f)}return e}onWindowHashChange(t){this.readURL()}}class hn{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=I(e,".navigate-left"),this.controlsRight=I(e,".navigate-right"),this.controlsUp=I(e,".navigate-up"),this.controlsDown=I(e,".navigate-down"),this.controlsPrev=I(e,".navigate-prev"),this.controlsNext=I(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];De&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(s=>s.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(s=>s.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(s=>s.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(s=>s.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(s=>s.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(s=>s.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(s=>{s.classList.remove("enabled","fragmented"),s.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let s=this.Reveal.fragments.availableRoutes();s.prev&&this.controlsPrev.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsNext.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(s.prev&&this.controlsUp.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsDown.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})):(s.prev&&this.controlsLeft.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsRight.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let s=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&s.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&s.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class pn{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),s=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*s);this.Reveal.getConfig().rtl&&(r=s-r);let h=this.Reveal.getIndices(e[r]);this.Reveal.slide(h.h,h.v)}destroy(){this.element.remove()}}class gn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Me=(f,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=f,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const s=document.querySelector("head");s.insertBefore(e,s.lastChild)};class mn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(s=>{let r=[],h=0;if(e.forEach(c=>{c.condition&&!c.condition()||(c.async?this.asyncDependencies.push(c):r.push(c))}),r.length){h=r.length;const c=g=>{g&&typeof g.callback=="function"&&g.callback(),--h==0&&this.initPlugins().then(s)};r.forEach(g=>{typeof g.id=="string"?(this.registerPlugin(g),c(g)):typeof g.src=="string"?Me(g.src,()=>c(g)):(console.warn("Unrecognized plugin format",g),c())})}else this.initPlugins().then(s)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),s=e.length;if(s===0)this.loadAsync().then(t);else{let r,h=()=>{--s==0?this.loadAsync().then(t):r()},c=0;r=()=>{let g=e[c++];if(typeof g.init=="function"){let u=g.init(this.Reveal);u&&typeof u.then=="function"?u.then(h):h()}else h()},r()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Me(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class fn{constructor(t){this.Reveal=t}async setupPDF(){const t=this.Reveal.getConfig(),e=I(this.Reveal.getRevealElement(),".slides section"),s=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),h=Math.floor(r.width*(1+t.margin)),c=Math.floor(r.height*(1+t.margin)),g=r.width,u=r.height;await new Promise(requestAnimationFrame),ne("@page{size:"+h+"px "+c+"px; margin: 0px;}"),ne(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+g+"px; max-height:"+u+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=h+"px",document.body.style.height=c+"px";const D=document.querySelector(".reveal-viewport");let N;if(D){const U=window.getComputedStyle(D);U&&U.background&&(N=U.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(g,u),await new Promise(requestAnimationFrame);const E=e.map(U=>U.scrollHeight),C=[],M=e[0].parentNode;let d=1;e.forEach(function(U,Y){if(U.classList.contains("stack")===!1){let pt=(h-g)/2,lt=(c-u)/2;const st=E[Y];let W=Math.max(Math.ceil(st/c),1);W=Math.min(W,t.pdfMaxPagesPerSlide),(W===1&&t.center||U.classList.contains("center"))&&(lt=Math.max((c-st)/2,0));const j=document.createElement("div");if(C.push(j),j.className="pdf-page",j.style.height=(c+t.pdfPageHeightOffset)*W+"px",N&&(j.style.background=N),j.appendChild(U),U.style.left=pt+"px",U.style.top=lt+"px",U.style.width=g+"px",this.Reveal.slideContent.layout(U),U.slideBackgroundElement&&j.insertBefore(U.slideBackgroundElement,U),t.showNotes){const V=this.Reveal.getSlideNotes(U);if(V){const O=typeof t.showNotes=="string"?t.showNotes:"inline",$=document.createElement("div");$.classList.add("speaker-notes"),$.classList.add("speaker-notes-pdf"),$.setAttribute("data-layout",O),$.innerHTML=V,O==="separate-page"?C.push($):($.style.left=8+"px",$.style.bottom=8+"px",$.style.width=h-2*8+"px",j.appendChild($))}}if(s){const V=document.createElement("div");V.classList.add("slide-number"),V.classList.add("slide-number-pdf"),V.innerHTML=d++,j.appendChild(V)}if(t.pdfSeparateFragments){const V=this.Reveal.fragments.sort(j.querySelectorAll(".fragment"),!0);let B;V.forEach(function(O,$){B&&B.forEach(function(J){J.classList.remove("current-fragment")}),O.forEach(function(J){J.classList.add("visible","current-fragment")},this);const Z=j.cloneNode(!0);if(s){const J=$+1;Z.querySelector(".slide-number-pdf").innerHTML+="."+J}C.push(Z),B=O},this),V.forEach(function(O){O.forEach(function($){$.classList.remove("visible","current-fragment")})})}else I(j,".fragment:not(.fade-out)").forEach(function(V){V.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),C.forEach(U=>M.appendChild(U)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class vn{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(Kt(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)De&&t.preventDefault();else{this.Reveal.onUserInput(t);let s=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let h=this.Reveal.availableRoutes({includeFragments:!0}),c=s-this.touchStartX,g=r-this.touchStartY;c>40&&Math.abs(c)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):c<-40&&Math.abs(c)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):g>40&&h.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):g<-40&&h.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}class bn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!=="focus"&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="focus"}blur(){this.state!=="blur"&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="blur"}isFocused(){return this.state==="focus"}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=at(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class yn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(s=>s.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class wn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,s=this.diameter2,r=this.diameter2,h=28;this.progressOffset+=.1*(1-this.progressOffset);const c=-Math.PI/2+t*(2*Math.PI),g=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(s,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(s,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(s,r,e,g,c,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(s-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,h),this.context.fillRect(18,0,10,h)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,h),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var kn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,dependencies:[],plugins:[]};function $e(f,t){arguments.length<2&&(t=arguments[0],f=document.querySelector(".reveal"));const e={};let s,r,h,c,g,u={},D=!1,N={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},E=[],C=1,M={layout:"",overview:""},d={},U="idle",Y=0,pt=0,lt=-1,st=!1,W=new nn(e),j=new sn(e),V=new on(e),B=new an(e),O=new ln(e),$=new dn(e),Z=new cn(e),J=new un(e),nt=new hn(e),b=new pn(e),A=new gn(e),k=new mn(e),dt=new fn(e),ct=new bn(e),it=new vn(e),K=new yn(e);function _t(l){if(!f)throw'Unable to find presentation root (<div class="reveal">).';if(d.wrapper=f,d.slides=f.querySelector(".slides"),!d.slides)throw'Unable to find slides container (<div class="slides">).';return u={...kn,...u,...t,...l,...Ce()},$t(),window.addEventListener("load",X,!1),k.load(u.plugins,u.dependencies).then(ft),new Promise(p=>e.on("ready",p))}function $t(){u.embedded===!0?d.viewport=at(f,".reveal-viewport")||f:(d.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),d.viewport.classList.add("reveal-viewport")}function ft(){D=!0,q(),L(),v(),o(),m(),Fe(),x(),J.readURL(),B.update(!0),setTimeout(()=>{d.slides.classList.remove("no-transition"),d.wrapper.classList.add("ready"),et({type:"ready",data:{indexh:s,indexv:r,currentSlide:c}})},1),dt.isPrintingPDF()&&(R(),document.readyState==="complete"?dt.setupPDF():window.addEventListener("load",()=>{dt.setupPDF()}))}function q(){u.showHiddenSlides||I(d.wrapper,'section[data-visibility="hidden"]').forEach(l=>{l.parentNode.removeChild(l)})}function L(){d.slides.classList.add("no-transition"),Mt?d.wrapper.classList.add("no-hover"):d.wrapper.classList.remove("no-hover"),B.render(),j.render(),nt.render(),b.render(),K.render(),d.pauseOverlay=Qe(d.wrapper,"div","pause-overlay",u.controls?'<button class="resume-button">Resume presentation</button>':null),d.statusElement=i(),d.wrapper.setAttribute("role","application")}function i(){let l=d.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),d.wrapper.appendChild(l)),l}function n(l){d.statusElement.textContent=l}function a(l){let p="";if(l.nodeType===3)p+=l.textContent;else if(l.nodeType===1){let y=l.getAttribute("aria-hidden"),S=window.getComputedStyle(l).display==="none";y==="true"||S||Array.from(l.childNodes).forEach(z=>{p+=a(z)})}return p=p.trim(),p===""?"":p+" "}function o(){setInterval(()=>{d.wrapper.scrollTop===0&&d.wrapper.scrollLeft===0||(d.wrapper.scrollTop=0,d.wrapper.scrollLeft=0)},1e3)}function m(){document.addEventListener("fullscreenchange",Bt),document.addEventListener("webkitfullscreenchange",Bt)}function v(){u.postMessage&&window.addEventListener("message",ke,!1)}function x(l){const p={...u};if(typeof l=="object"&&Nt(u,l),e.isReady()===!1)return;const y=d.wrapper.querySelectorAll(".slides section").length;d.wrapper.classList.remove(p.transition),d.wrapper.classList.add(u.transition),d.wrapper.setAttribute("data-transition-speed",u.transitionSpeed),d.wrapper.setAttribute("data-background-transition",u.backgroundTransition),d.viewport.style.setProperty("--slide-width",u.width+"px"),d.viewport.style.setProperty("--slide-height",u.height+"px"),u.shuffle&&Vt(),te(d.wrapper,"embedded",u.embedded),te(d.wrapper,"rtl",u.rtl),te(d.wrapper,"center",u.center),u.pause===!1&&It(),u.previewLinks?(gt(),H("[data-preview-link=false]")):(H(),gt("[data-preview-link]:not([data-preview-link=false])")),V.reset(),g&&(g.destroy(),g=null),y>1&&u.autoSlide&&u.autoSlideStoppable&&(g=new wn(d.wrapper,()=>Math.min(Math.max((Date.now()-lt)/Y,0),1)),g.on("click",Xe),st=!1),u.navigationMode!=="default"?d.wrapper.setAttribute("data-navigation-mode",u.navigationMode):d.wrapper.removeAttribute("data-navigation-mode"),K.configure(u,p),ct.configure(u,p),A.configure(u,p),nt.configure(u,p),b.configure(u,p),Z.configure(u,p),O.configure(u,p),j.configure(u,p),le()}function w(){window.addEventListener("resize",Ee,!1),u.touch&&it.bind(),u.keyboard&&Z.bind(),u.progress&&b.bind(),u.respondToHashChanges&&J.bind(),nt.bind(),ct.bind(),d.slides.addEventListener("click",Se,!1),d.slides.addEventListener("transitionend",xe,!1),d.pauseOverlay.addEventListener("click",It,!1),u.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Ae,!1)}function R(){it.unbind(),ct.unbind(),Z.unbind(),nt.unbind(),b.unbind(),J.unbind(),window.removeEventListener("resize",Ee,!1),d.slides.removeEventListener("click",Se,!1),d.slides.removeEventListener("transitionend",xe,!1),d.pauseOverlay.removeEventListener("click",It,!1)}function P(){R(),Ot(),H(),K.destroy(),ct.destroy(),k.destroy(),A.destroy(),nt.destroy(),b.destroy(),B.destroy(),j.destroy(),document.removeEventListener("fullscreenchange",Bt),document.removeEventListener("webkitfullscreenchange",Bt),document.removeEventListener("visibilitychange",Ae,!1),window.removeEventListener("message",ke,!1),window.removeEventListener("load",X,!1),d.pauseOverlay&&d.pauseOverlay.remove(),d.statusElement&&d.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),d.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),d.wrapper.removeAttribute("data-transition-speed"),d.wrapper.removeAttribute("data-background-transition"),d.viewport.classList.remove("reveal-viewport"),d.viewport.style.removeProperty("--slide-width"),d.viewport.style.removeProperty("--slide-height"),d.slides.style.removeProperty("width"),d.slides.style.removeProperty("height"),d.slides.style.removeProperty("zoom"),d.slides.style.removeProperty("left"),d.slides.style.removeProperty("top"),d.slides.style.removeProperty("bottom"),d.slides.style.removeProperty("right"),d.slides.style.removeProperty("transform"),Array.from(d.wrapper.querySelectorAll(".slides section")).forEach(l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")})}function _(l,p,y){f.addEventListener(l,p,y)}function T(l,p,y){f.removeEventListener(l,p,y)}function Q(l){typeof l.layout=="string"&&(M.layout=l.layout),typeof l.overview=="string"&&(M.overview=l.overview),M.layout?At(d.slides,M.layout+" "+M.overview):At(d.slides,M.overview)}function et({target:l=d.wrapper,type:p,data:y,bubbles:S=!0}){let z=document.createEvent("HTMLEvents",1,2);return z.initEvent(p,S,!0),Nt(z,y),l.dispatchEvent(z),l===d.wrapper&&rt(p),z}function rt(l,p){if(u.postMessageEvents&&window.parent!==window.self){let y={namespace:"reveal",eventName:l,state:ye()};Nt(y,p),window.parent.postMessage(JSON.stringify(y),"*")}}function gt(l="a"){Array.from(d.wrapper.querySelectorAll(l)).forEach(p=>{/^(http|www)/gi.test(p.getAttribute("href"))&&p.addEventListener("click",Re,!1)})}function H(l="a"){Array.from(d.wrapper.querySelectorAll(l)).forEach(p=>{/^(http|www)/gi.test(p.getAttribute("href"))&&p.removeEventListener("click",Re,!1)})}function kt(l){ot(),d.overlay=document.createElement("div"),d.overlay.classList.add("overlay"),d.overlay.classList.add("overlay-preview"),d.wrapper.appendChild(d.overlay),d.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${l}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${l}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,d.overlay.querySelector("iframe").addEventListener("load",p=>{d.overlay.classList.add("loaded")},!1),d.overlay.querySelector(".close").addEventListener("click",p=>{ot(),p.preventDefault()},!1),d.overlay.querySelector(".external").addEventListener("click",p=>{ot()},!1)}function Ct(l){typeof l=="boolean"?l?ut():ot():d.overlay?ot():ut()}function ut(){if(u.help){ot(),d.overlay=document.createElement("div"),d.overlay.classList.add("overlay"),d.overlay.classList.add("overlay-help"),d.wrapper.appendChild(d.overlay);let l='<p class="title">Keyboard Shortcuts</p><br/>',p=Z.getShortcuts(),y=Z.getBindings();l+="<table><th>KEY</th><th>ACTION</th>";for(let S in p)l+=`<tr><td>${S}</td><td>${p[S]}</td></tr>`;for(let S in y)y[S].key&&y[S].description&&(l+=`<tr><td>${y[S].key}</td><td>${y[S].description}</td></tr>`);l+="</table>",d.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${l}</div>
				</div>
			`,d.overlay.querySelector(".close").addEventListener("click",S=>{ot(),S.preventDefault()},!1)}}function ot(){return!!d.overlay&&(d.overlay.parentNode.removeChild(d.overlay),d.overlay=null,!0)}function X(){if(d.wrapper&&!dt.isPrintingPDF()){if(!u.disableLayout){Mt&&!u.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const l=xt(),p=C;Rt(u.width,u.height),d.slides.style.width=l.width+"px",d.slides.style.height=l.height+"px",C=Math.min(l.presentationWidth/l.width,l.presentationHeight/l.height),C=Math.max(C,u.minScale),C=Math.min(C,u.maxScale),C===1?(d.slides.style.zoom="",d.slides.style.left="",d.slides.style.top="",d.slides.style.bottom="",d.slides.style.right="",Q({layout:""})):(d.slides.style.zoom="",d.slides.style.left="50%",d.slides.style.top="50%",d.slides.style.bottom="auto",d.slides.style.right="auto",Q({layout:"translate(-50%, -50%) scale("+C+")"}));const y=Array.from(d.wrapper.querySelectorAll(".slides section"));for(let S=0,z=y.length;S<z;S++){const F=y[S];F.style.display!=="none"&&(u.center||F.classList.contains("center")?F.classList.contains("stack")?F.style.top=0:F.style.top=Math.max((l.height-F.scrollHeight)/2,0)+"px":F.style.top="")}p!==C&&et({type:"resize",data:{oldScale:p,scale:C,size:l}})}d.viewport.style.setProperty("--slide-scale",C),b.update(),B.updateParallax(),$.isActive()&&$.update()}}function Rt(l,p){I(d.slides,"section > .stretch, section > .r-stretch").forEach(y=>{let S=Ge(y,p);if(/(img|video)/gi.test(y.nodeName)){const z=y.naturalWidth||y.videoWidth,F=y.naturalHeight||y.videoHeight,tt=Math.min(l/z,S/F);y.style.width=z*tt+"px",y.style.height=F*tt+"px"}else y.style.width=l+"px",y.style.height=S+"px"})}function xt(l,p){const y={width:u.width,height:u.height,presentationWidth:l||d.wrapper.offsetWidth,presentationHeight:p||d.wrapper.offsetHeight};return y.presentationWidth-=y.presentationWidth*u.margin,y.presentationHeight-=y.presentationHeight*u.margin,typeof y.width=="string"&&/%$/.test(y.width)&&(y.width=parseInt(y.width,10)/100*y.presentationWidth),typeof y.height=="string"&&/%$/.test(y.height)&&(y.height=parseInt(y.height,10)/100*y.presentationHeight),y}function qt(l,p){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",p||0)}function ie(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const p=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(p)||0,10)}return 0}function zt(l=c){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function se(){return!(!c||!zt(c))&&!c.nextElementSibling}function ae(){return s===0&&r===0}function jt(){return!!c&&!c.nextElementSibling&&(!zt(c)||!c.parentNode.nextElementSibling)}function re(){if(u.pause){const l=d.wrapper.classList.contains("paused");Ot(),d.wrapper.classList.add("paused"),l===!1&&et({type:"paused"})}}function It(){const l=d.wrapper.classList.contains("paused");d.wrapper.classList.remove("paused"),Tt(),l&&et({type:"resumed"})}function oe(l){typeof l=="boolean"?l?re():It():Dt()?It():re()}function Dt(){return d.wrapper.classList.contains("paused")}function qe(l){typeof l=="boolean"?l?Ft():Ht():st?Ft():Ht()}function Oe(){return!(!Y||st)}function vt(l,p,y,S){if(et({type:"beforeslidechange",data:{indexh:l===void 0?s:l,indexv:p===void 0?r:p,origin:S}}).defaultPrevented)return;h=c;const z=d.wrapper.querySelectorAll(".slides>section");if(z.length===0)return;p!==void 0||$.isActive()||(p=ie(z[l])),h&&h.parentNode&&h.parentNode.classList.contains("stack")&&qt(h.parentNode,r);const F=E.concat();E.length=0;let tt=s||0,mt=r||0;s=de(".slides>section",l===void 0?s:l),r=de(".slides>section.present>section",p===void 0?r:p);let wt=s!==tt||r!==mt;wt||(h=null);let Lt=z[s];c=Lt.querySelectorAll("section")[r]||Lt;let G=!1;wt&&h&&c&&!$.isActive()&&(h.hasAttribute("data-auto-animate")&&c.hasAttribute("data-auto-animate")&&h.getAttribute("data-auto-animate-id")===c.getAttribute("data-auto-animate-id")&&!(s>tt||r>mt?c:h).hasAttribute("data-auto-animate-restart")&&(G=!0,d.slides.classList.add("disable-slide-transitions")),U="running"),Xt(),X(),$.isActive()&&$.update(),y!==void 0&&O.goto(y),h&&h!==c&&(h.classList.remove("present"),h.setAttribute("aria-hidden","true"),ae()&&setTimeout(()=>{Be().forEach(bt=>{qt(bt,0)})},0));t:for(let bt=0,Ye=E.length;bt<Ye;bt++){for(let Wt=0;Wt<F.length;Wt++)if(F[Wt]===E[bt]){F.splice(Wt,1);continue t}d.viewport.classList.add(E[bt]),et({type:E[bt]})}for(;F.length;)d.viewport.classList.remove(F.pop());wt&&et({type:"slidechanged",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:c,origin:S}}),!wt&&h||(W.stopEmbeddedContent(h),W.startEmbeddedContent(c)),requestAnimationFrame(()=>{n(a(c))}),b.update(),nt.update(),K.update(),B.update(),B.updateParallax(),j.update(),O.update(),J.writeURL(),Tt(),G&&(setTimeout(()=>{d.slides.classList.remove("disable-slide-transitions")},0),u.autoAnimate&&V.run(h,c))}function le(){R(),w(),X(),Y=u.autoSlide,Tt(),B.create(),J.writeURL(),O.sortAll(),nt.update(),b.update(),Xt(),K.update(),K.updateVisibility(),B.update(!0),j.update(),W.formatEmbeddedContent(),u.autoPlayMedia===!1?W.stopEmbeddedContent(c,{unloadIframes:!1}):W.startEmbeddedContent(c),$.isActive()&&$.layout()}function He(l=c){B.sync(l),O.sync(l),W.load(l),B.update(),K.update()}function Fe(){St().forEach(l=>{I(l,"section").forEach((p,y)=>{y>0&&(p.classList.remove("present"),p.classList.remove("past"),p.classList.add("future"),p.setAttribute("aria-hidden","true"))})})}function Vt(l=St()){l.forEach((p,y)=>{let S=l[Math.floor(Math.random()*l.length)];S.parentNode===p.parentNode&&p.parentNode.insertBefore(p,S);let z=p.querySelectorAll("section");z.length&&Vt(z)})}function de(l,p){let y=I(d.wrapper,l),S=y.length,z=dt.isPrintingPDF(),F=!1,tt=!1;if(S){u.loop&&(p>=S&&(F=!0),(p%=S)<0&&(p=S+p,tt=!0)),p=Math.max(Math.min(p,S-1),0);for(let ht=0;ht<S;ht++){let G=y[ht],bt=u.rtl&&!zt(G);G.classList.remove("past"),G.classList.remove("present"),G.classList.remove("future"),G.setAttribute("hidden",""),G.setAttribute("aria-hidden","true"),G.querySelector("section")&&G.classList.add("stack"),z?G.classList.add("present"):ht<p?(G.classList.add(bt?"future":"past"),u.fragments&&ce(G)):ht>p?(G.classList.add(bt?"past":"future"),u.fragments&&ue(G)):ht===p&&u.fragments&&(F?ue(G):tt&&ce(G))}let mt=y[p],wt=mt.classList.contains("present");mt.classList.add("present"),mt.removeAttribute("hidden"),mt.removeAttribute("aria-hidden"),wt||et({target:mt,type:"visible",bubbles:!1});let Lt=mt.getAttribute("data-state");Lt&&(E=E.concat(Lt.split(" ")))}else p=0;return p}function ce(l){I(l,".fragment").forEach(p=>{p.classList.add("visible"),p.classList.remove("current-fragment")})}function ue(l){I(l,".fragment.visible").forEach(p=>{p.classList.remove("visible","current-fragment")})}function Xt(){let l,p,y=St(),S=y.length;if(S&&s!==void 0){let z=$.isActive()?10:u.viewDistance;Mt&&(z=$.isActive()?6:u.mobileViewDistance),dt.isPrintingPDF()&&(z=Number.MAX_VALUE);for(let F=0;F<S;F++){let tt=y[F],mt=I(tt,"section"),wt=mt.length;if(l=Math.abs((s||0)-F)||0,u.loop&&(l=Math.abs(((s||0)-F)%(S-z))||0),l<z?W.load(tt):W.unload(tt),wt){let Lt=ie(tt);for(let ht=0;ht<wt;ht++){let G=mt[ht];p=Math.abs(F===(s||0)?(r||0)-ht:ht-Lt),l+p<z?W.load(G):W.unload(G)}}}fe()?d.wrapper.classList.add("has-vertical-slides"):d.wrapper.classList.remove("has-vertical-slides"),me()?d.wrapper.classList.add("has-horizontal-slides"):d.wrapper.classList.remove("has-horizontal-slides")}}function yt({includeFragments:l=!1}={}){let p=d.wrapper.querySelectorAll(".slides>section"),y=d.wrapper.querySelectorAll(".slides>section.present>section"),S={left:s>0,right:s<p.length-1,up:r>0,down:r<y.length-1};if(u.loop&&(p.length>1&&(S.left=!0,S.right=!0),y.length>1&&(S.up=!0,S.down=!0)),p.length>1&&u.navigationMode==="linear"&&(S.right=S.right||S.down,S.left=S.left||S.up),l===!0){let z=O.availableRoutes();S.left=S.left||z.prev,S.up=S.up||z.prev,S.down=S.down||z.next,S.right=S.right||z.next}if(u.rtl){let z=S.left;S.left=S.right,S.right=z}return S}function he(l=c){let p=St(),y=0;t:for(let S=0;S<p.length;S++){let z=p[S],F=z.querySelectorAll("section");for(let tt=0;tt<F.length;tt++){if(F[tt]===l)break t;F[tt].dataset.visibility!=="uncounted"&&y++}if(z===l)break;z.classList.contains("stack")===!1&&z.dataset.visibility!=="uncounted"&&y++}return y}function Ue(){let l=ve(),p=he();if(c){let y=c.querySelectorAll(".fragment");if(y.length>0){let S=.9;p+=c.querySelectorAll(".fragment.visible").length/y.length*S}}return Math.min(p/(l-1),1)}function pe(l){let p,y=s,S=r;if(l){let z=zt(l),F=z?l.parentNode:l,tt=St();y=Math.max(tt.indexOf(F),0),S=void 0,z&&(S=Math.max(I(l.parentNode,"section").indexOf(l),0))}if(!l&&c&&c.querySelectorAll(".fragment").length>0){let z=c.querySelector(".current-fragment");p=z&&z.hasAttribute("data-fragment-index")?parseInt(z.getAttribute("data-fragment-index"),10):c.querySelectorAll(".fragment.visible").length-1}return{h:y,v:S,f:p}}function Yt(){return I(d.wrapper,'.slides section:not(.stack):not([data-visibility="uncounted"])')}function St(){return I(d.wrapper,".slides>section")}function ge(){return I(d.wrapper,".slides>section>section")}function Be(){return I(d.wrapper,".slides>section.stack")}function me(){return St().length>1}function fe(){return ge().length>1}function We(){return Yt().map(l=>{let p={};for(let y=0;y<l.attributes.length;y++){let S=l.attributes[y];p[S.name]=S.value}return p})}function ve(){return Yt().length}function be(l,p){let y=St()[l],S=y&&y.querySelectorAll("section");return S&&S.length&&typeof p=="number"?S?S[p]:void 0:y}function Ke(l,p){let y=typeof l=="number"?be(l,p):l;if(y)return y.slideBackgroundElement}function ye(){let l=pe();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:Dt(),overview:$.isActive()}}function je(l){if(typeof l=="object"){vt(Pt(l.indexh),Pt(l.indexv),Pt(l.indexf));let p=Pt(l.paused),y=Pt(l.overview);typeof p=="boolean"&&p!==Dt()&&oe(p),typeof y=="boolean"&&y!==$.isActive()&&$.toggle(y)}}function Tt(){if(Ot(),c&&u.autoSlide!==!1){let l=c.querySelector(".current-fragment");l||(l=c.querySelector(".fragment"));let p=l?l.getAttribute("data-autoslide"):null,y=c.parentNode?c.parentNode.getAttribute("data-autoslide"):null,S=c.getAttribute("data-autoslide");p?Y=parseInt(p,10):S?Y=parseInt(S,10):y?Y=parseInt(y,10):(Y=u.autoSlide,c.querySelectorAll(".fragment").length===0&&I(c,"video, audio").forEach(z=>{z.hasAttribute("data-autoplay")&&Y&&1e3*z.duration/z.playbackRate>Y&&(Y=1e3*z.duration/z.playbackRate+1e3)})),!Y||st||Dt()||$.isActive()||jt()&&!O.availableRoutes().next&&u.loop!==!0||(pt=setTimeout(()=>{typeof u.autoSlideMethod=="function"?u.autoSlideMethod():Gt(),Tt()},Y),lt=Date.now()),g&&g.setPlaying(pt!==-1)}}function Ot(){clearTimeout(pt),pt=-1}function Ht(){Y&&!st&&(st=!0,et({type:"autoslidepaused"}),clearTimeout(pt),g&&g.setPlaying(!1))}function Ft(){Y&&st&&(st=!1,et({type:"autoslideresumed"}),Tt())}function Ut({skipFragments:l=!1}={}){N.hasNavigatedHorizontally=!0,u.rtl?($.isActive()||l||O.next()===!1)&&yt().left&&vt(s+1,u.navigationMode==="grid"?r:void 0):($.isActive()||l||O.prev()===!1)&&yt().left&&vt(s-1,u.navigationMode==="grid"?r:void 0)}function Zt({skipFragments:l=!1}={}){N.hasNavigatedHorizontally=!0,u.rtl?($.isActive()||l||O.prev()===!1)&&yt().right&&vt(s-1,u.navigationMode==="grid"?r:void 0):($.isActive()||l||O.next()===!1)&&yt().right&&vt(s+1,u.navigationMode==="grid"?r:void 0)}function Jt({skipFragments:l=!1}={}){($.isActive()||l||O.prev()===!1)&&yt().up&&vt(s,r-1)}function Qt({skipFragments:l=!1}={}){N.hasNavigatedVertically=!0,($.isActive()||l||O.next()===!1)&&yt().down&&vt(s,r+1)}function we({skipFragments:l=!1}={}){if(l||O.prev()===!1)if(yt().up)Jt({skipFragments:l});else{let p;if(p=u.rtl?I(d.wrapper,".slides>section.future").pop():I(d.wrapper,".slides>section.past").pop(),p&&p.classList.contains("stack")){let y=p.querySelectorAll("section").length-1||void 0;vt(s-1,y)}else Ut({skipFragments:l})}}function Gt({skipFragments:l=!1}={}){if(N.hasNavigatedHorizontally=!0,N.hasNavigatedVertically=!0,l||O.next()===!1){let p=yt();p.down&&p.right&&u.loop&&se()&&(p.down=!1),p.down?Qt({skipFragments:l}):u.rtl?Ut({skipFragments:l}):Zt({skipFragments:l})}}function Ve(l){u.autoSlideStoppable&&Ht()}function ke(l){let p=l.data;if(typeof p=="string"&&p.charAt(0)==="{"&&p.charAt(p.length-1)==="}"&&(p=JSON.parse(p),p.method&&typeof e[p.method]=="function"))if(rn.test(p.method)===!1){const y=e[p.method].apply(e,p.args);rt("callback",{method:p.method,result:y})}else console.warn('reveal.js: "'+p.method+'" is is blacklisted from the postMessage API')}function xe(l){U==="running"&&/section/gi.test(l.target.nodeName)&&(U="idle",et({type:"slidetransitionend",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:c}}))}function Se(l){const p=at(l.target,'a[href^="#"]');if(p){const y=p.getAttribute("href"),S=J.getIndicesFromHash(y);S&&(e.slide(S.h,S.v,S.f),l.preventDefault())}}function Ee(l){X()}function Ae(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Bt(l){(document.fullscreenElement||document.webkitFullscreenElement)===d.wrapper&&(l.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function Re(l){if(l.currentTarget&&l.currentTarget.hasAttribute("href")){let p=l.currentTarget.getAttribute("href");p&&(kt(p),l.preventDefault())}}function Xe(l){jt()&&u.loop===!1?(vt(0,0),Ft()):st?Ft():Ht()}const Le={VERSION:"4.4.0",initialize:_t,configure:x,destroy:P,sync:le,syncSlide:He,syncFragments:O.sync.bind(O),slide:vt,left:Ut,right:Zt,up:Jt,down:Qt,prev:we,next:Gt,navigateLeft:Ut,navigateRight:Zt,navigateUp:Jt,navigateDown:Qt,navigatePrev:we,navigateNext:Gt,navigateFragment:O.goto.bind(O),prevFragment:O.prev.bind(O),nextFragment:O.next.bind(O),on:_,off:T,addEventListener:_,removeEventListener:T,layout:X,shuffle:Vt,availableRoutes:yt,availableFragments:O.availableRoutes.bind(O),toggleHelp:Ct,toggleOverview:$.toggle.bind($),togglePause:oe,toggleAutoSlide:qe,isFirstSlide:ae,isLastSlide:jt,isLastVerticalSlide:se,isVerticalSlide:zt,isPaused:Dt,isAutoSliding:Oe,isSpeakerNotes:K.isSpeakerNotesWindow.bind(K),isOverview:$.isActive.bind($),isFocused:ct.isFocused.bind(ct),isPrintingPDF:dt.isPrintingPDF.bind(dt),isReady:()=>D,loadSlide:W.load.bind(W),unloadSlide:W.unload.bind(W),showPreview:kt,hidePreview:ot,addEventListeners:w,removeEventListeners:R,dispatchEvent:et,getState:ye,setState:je,getProgress:Ue,getIndices:pe,getSlidesAttributes:We,getSlidePastCount:he,getTotalSlides:ve,getSlide:be,getPreviousSlide:()=>h,getCurrentSlide:()=>c,getSlideBackground:Ke,getSlideNotes:K.getSlideNotes.bind(K),getSlides:Yt,getHorizontalSlides:St,getVerticalSlides:ge,hasHorizontalSlides:me,hasVerticalSlides:fe,hasNavigatedHorizontally:()=>N.hasNavigatedHorizontally,hasNavigatedVertically:()=>N.hasNavigatedVertically,addKeyBinding:Z.addKeyBinding.bind(Z),removeKeyBinding:Z.removeKeyBinding.bind(Z),triggerKey:Z.triggerKey.bind(Z),registerKeyboardShortcut:Z.registerKeyboardShortcut.bind(Z),getComputedSlideSize:xt,getScale:()=>C,getConfig:()=>u,getQueryHash:Ce,getSlidePath:J.getHash.bind(J),getRevealElement:()=>f,getSlidesElement:()=>d.slides,getViewportElement:()=>d.viewport,getBackgroundsElement:()=>B.element,registerPlugin:k.registerPlugin.bind(k),hasPlugin:k.hasPlugin.bind(k),getPlugin:k.getPlugin.bind(k),getPlugins:k.getRegisteredPlugins.bind(k)};return Nt(e,{...Le,announceStatus:n,getStatusText:a,print:dt,focus:ct,progress:b,controls:nt,location:J,overview:$,fragments:O,slideContent:W,slideNumber:j,onUserInput:Ve,closeOverlay:ot,updateSlidesVisibility:Xt,layoutSlideContents:Rt,transformSlides:Q,cueAutoSlide:Tt,cancelAutoSlide:Ot}),Le}let Et=$e,ze=[];Et.initialize=f=>(Object.assign(Et,new $e(document.querySelector(".reveal"),f)),ze.map(t=>t(Et)),Et.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(f=>{Et[f]=(...t)=>{ze.push(e=>e[f].call(null,...t))}}),Et.isReady=()=>!1,Et.VERSION="4.4.0";const xn=new Et;xn.initialize({controls:!1,progress:!1,transition:"none",hideCursorTime:0});
