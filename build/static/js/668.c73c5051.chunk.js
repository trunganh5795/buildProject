"use strict";(self.webpackChunklaptop_store=self.webpackChunklaptop_store||[]).push([[668],{17668:function(e,t,n){n.r(t);var r=n(33032),a=n(23430),i=n(84322),o=n.n(i),l=n(23695),c=n(96038),s=n(87309),u=n(71871),d=n(26826),f=n(72791),p=n(1780),m=n(72426),v=n.n(m),h=n(80184),x=!0;t.default=function(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],m=(0,f.useState)(!1),y=(0,a.Z)(m,2),Z=y[0],k=y[1],b=(0,f.useState)(1),g=(0,a.Z)(b,2),C=g[0],w=g[1],E=(0,f.useState)(null),N=(0,a.Z)(E,2),P=N[0],S=N[1],O=(0,f.useState)(""),T=(0,a.Z)(O,2),j=T[0],I=T[1],B=(0,f.useState)(0),D=(0,a.Z)(B,2),V=D[0],H=D[1],K=function(){var e=(0,r.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.delCustomer(t);case 3:(r=e.sent)&&200===r.status&&(l.ZP.success("Xo\xe1 t\xe0i kho\u1ea3n th\xe0nh c\xf4ng"),i(n.filter((function(e){return e.id!==t})))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l.ZP.error("Xo\xe1 t\xe0i kho\u1ea3n th\u1ea5t b\u1ea1i");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Y=(0,f.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a,c,s,u=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>3&&void 0!==u[3]&&u[3],x=a,e.prev=2,e.next=5,d.Z.getCustomerListBy(t,n,r);case 5:c=e.sent,console.log(c.data.rows),s=c.data.rows.map((function(e,t){return{key:t,id:e.id,email:e.email,birthday:e.dateOfBirth,fullName:e.name,address:e.address,gender:e.gender,role:e.role,active:e.active}})),H(c.data.count),i(s),S(n),I(r),k(!1),console.log("Hererererererere"),x&&w(t),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),l.ZP.error(e.t0.response.data);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n,r){return e.apply(this,arguments)}}(),[]),_=[{title:"ID",key:"id",dataIndex:"id",render:function(e){return(0,h.jsx)("a",{children:e})}},{title:"Email",key:"email",dataIndex:"email"},{title:"Full Name",key:"fullName",dataIndex:"fullName"},{title:"Role",key:"role",dataIndex:"role",filters:[{text:"Client",value:"client"},{text:"Admin",value:"admin"}]},{title:"Tr\u1ea1ng th\xe1i",key:"active",dataIndex:"active"},{title:"\u0110\u1ecba ch\u1ec9",key:"address",dataIndex:"address"},{title:"Date Of Birth",key:"birthday",dataIndex:"birthday",render:function(e){return v()(e).format("DD-MM-YYYY")}},{title:"Gender",key:"gender",dataIndex:"gender",render:function(e){return e?"Nam":"N\u1eef"}},{title:"H\xe0nh \u0111\u1ed9ng",render:function(e,t){return(0,h.jsx)(c.Z,{title:"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1 ?",placement:"left",cancelText:"Hu\u1ef7 b\u1ecf",okText:"Xo\xe1",onConfirm:function(){return K(t.id)},children:(0,h.jsx)(s.Z,{danger:!0,children:"Kh\xf3a"})})}}];return(0,f.useEffect)((function(){var e=!0;function t(){return(t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x)try{k(!0),Y(C,P,j)}catch(n){e&&k(!1)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!1,x=!0}}),[C]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"m-lr-10 m-t-10",children:[(0,h.jsx)(p.Z,{options:[{id:0,text:"T\u1ea5t C\u1ea3"},{id:1,text:"T\xean"},{id:2,text:" S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},{id:3,text:"M\xe3 KH"},{id:4,text:"Email"}],onSearch:Y,setPage:w,setSearchOption:S}),(0,h.jsx)(u.Z,{columns:_,dataSource:n,pagination:{showLessItems:!0,position:["bottomCenter"],current:C,pageSize:10,total:V,onChange:function(e){x=!1,w(e)}},loading:Z})]})})}},96038:function(e,t,n){var r=n(83963),a=n(34093),i=n(10187),o=n(81694),l=n.n(o),c=n(75179),s=n(11354),u=n(72791),d=n(87309),f=n(2571),p=n(71929),m=n(93486),v=n(70454),h=n(69228),x=n(41783),y=n(57924),Z=n(61113),k=void 0,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=u.forwardRef((function(e,t){var n=u.useContext(p.E_).getPrefixCls,i=(0,c.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=(0,a.Z)(i,2),g=o[0],C=o[1],w=function(t,n){var r;C(t,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,t,n)},E=function(e){w(!1,e)},N=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(k,t)},P=function(t){var n;w(!1,t),null===(n=e.onCancel)||void 0===n||n.call(k,t)},S=e.prefixCls,O=e.placement,T=e.children,j=e.overlayClassName,I=b(e,["prefixCls","placement","children","overlayClassName"]),B=n("popover",S),D=n("popconfirm",S),V=l()(D,j),H=u.createElement(m.Z,{componentName:"Popconfirm",defaultLocale:v.Z.Popconfirm},(function(t){return function(t,a){var i=e.okButtonProps,o=e.cancelButtonProps,l=e.title,c=e.cancelText,s=e.okText,p=e.okType,m=e.icon,v=e.showCancel,h=void 0===v||v;return u.createElement("div",{className:"".concat(t,"-inner-content")},u.createElement("div",{className:"".concat(t,"-message")},m,u.createElement("div",{className:"".concat(t,"-message-title")},(0,y.Z)(l))),u.createElement("div",{className:"".concat(t,"-buttons")},h&&u.createElement(d.Z,(0,r.Z)({onClick:P,size:"small"},o),c||a.cancelText),u.createElement(x.Z,{buttonProps:(0,r.Z)((0,r.Z)({size:"small"},(0,f.n)(p)),i),actionFn:N,close:E,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},s||a.okText)))}(B,t)}));return u.createElement(h.Z,(0,r.Z)({},I,{prefixCls:B,placement:O,onVisibleChange:function(t){e.disabled||w(t)},visible:g,_overlay:H,overlayClassName:V,ref:t}),(0,Z.Tm)(T,{onKeyDown:function(e){var t,n;u.isValidElement(T)&&(null===(n=null===T||void 0===T?void 0:(t=T.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.Z.ESC&&g&&w(!1,e)}(e)}}))}));g.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:u.createElement(i.Z,null),disabled:!1},t.Z=g}}]);
//# sourceMappingURL=668.c73c5051.chunk.js.map