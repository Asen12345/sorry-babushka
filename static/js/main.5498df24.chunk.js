(this.webpackJsonpcafe=this.webpackJsonpcafe||[]).push([[0],{23:function(e,a,t){e.exports={checkbox:"styles_checkbox__cDgsa",image:"styles_image__3foRY"}},24:function(e,a,t){e.exports={input:"styles_input__30fkA"}},3:function(e,a,t){e.exports={header:"styles_header__1ehT3",header__title:"styles_header__title__38hvW",header__logo:"styles_header__logo__2ljRb",errors:"styles_errors__1g1Ep",main:"styles_main__3bhP7",main__title:"styles_main__title__1bnim",main__form:"styles_main__form__tYEzO",data_input:"styles_data_input__3DawC",main__form__checkboxBlock:"styles_main__form__checkboxBlock__2PFp6",main__form__text:"styles_main__form__text__1Q2pR",footer:"styles_footer__2vjrr",footer__menu:"styles_footer__menu__MfhTv",copyright:"styles_copyright__sXAm8",footer__menu__links:"styles_footer__menu__links__2CEJk",footer__title:"styles_footer__title__36cMI",footer__link:"styles_footer__link__2gCQx",footer__contact_us:"styles_footer__contact_us__CUK8r",instagram_icon:"styles_instagram_icon__aAA7b",instagram_link:"styles_instagram_link__14c1K"}},34:function(e,a,t){e.exports={button:"styles_button__R-bR5"}},7:function(e,a,t){e.exports={header:"styles_header__1cUUB",header__title:"styles_header__title__3mVAB",header__logo:"styles_header__logo__3QNVj",main:"styles_main__2m1Va",main__title:"styles_main__title__3s_N5",qrcode_block:"styles_qrcode_block__1Alag",addToWallet:"styles_addToWallet__18Uxy",googleWallet:"styles_googleWallet__2saWd",appleWallet:"styles_appleWallet__1X8TC",footer:"styles_footer__1j5nS",footer__menu:"styles_footer__menu__19Yee",copyright:"styles_copyright__11fYp",footer__menu__links:"styles_footer__menu__links__JzhFC",footer__title:"styles_footer__title__BPmMX",footer__link:"styles_footer__link__ilNeB",footer__contact_us:"styles_footer__contact_us__32TQQ",instagram_icon:"styles_instagram_icon__1ss0k",instagram_link:"styles_instagram_link__tYFl3"}},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(15),o=t.n(c),r=t(22),_=t(4),l=t(11),i=t(16),h=t.n(i),d=t(34),m=t.n(d),j=t(1),u=function(e){var a=e.children;return Object(j.jsx)("button",{className:m.a.button,children:a})},b=t(23),f=t.n(b),g=t.p+"static/media/checkbox.f88bb36a.svg",p=function(){var e=Object(s.useState)(!0),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(j.jsx)("div",{onClick:function(){return n(!t)},className:f.a.checkbox,children:Object(j.jsx)("img",{style:{display:"".concat(t?"block":"none")},className:f.a.image,src:g,alt:"checkbox"})})},O=t(35),x=t.n(O),y=t(24),k=t.n(y),N=function(e){var a=e.placeholder,t=e.className,s=e.onChange,n=e.value;return Object(j.jsx)("input",{maxLength:40,value:n,onChange:function(e){return s(e)},className:"".concat(k.a.input," ").concat(t),placeholder:a})},v=function(e){var a=e.placeholder,t=e.className,s=e.onChange,n=(e.value,e.mask),c=void 0===n?"":n;return Object(j.jsx)(x.a,{mask:c,maxLength:40,onChange:function(e){return s(e)},className:"".concat(k.a.input," ").concat(t),placeholder:a})},C=t(3),S=t.n(C),R=t.p+"static/media/logo.e1f182e7.png",w=t.p+"static/media/instagram.db0f7337.svg",T=t(14),B=t(12),Q=Object(T.b)({name:"inputs",initialState:{name:"",surname:"",phone:"",birth_date:""},reducers:{changeName:function(e,a){e.name=a.payload},changeSurname:function(e,a){e.surname=a.payload},changePhone:function(e,a){e.phone=a.payload},changeBirthDate:function(e,a){e.birth_date=a.payload}}}),W=Q.actions,F=(W.changeName,W.changeSurname,W.changePhone),P=W.changeBirthDate,D=Q.reducer,Y=Object(T.b)({name:"inputs",initialState:{qrcode:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},reducers:{chandeQR:function(e,a){e.qrcode=a.payload}}}),A=(Y.actions.chandeQR,Y.reducer),E=Object(T.a)({reducer:{InputsReducer:D,QRReducer:A}}),q=E,I=t(37),U=t.n(I);var J=function(){var e=Object(_.g)(),a=Object(B.b)(),t=Object(B.c)((function(e){return e.InputsReducer})),n=(t.name,t.surname,t.phone),c=t.birth_date,o=Object(s.useState)(""),r=Object(l.a)(o,2),i=r[0],d=r[1],m=Object(s.useState)(""),b=Object(l.a)(m,2),f=b[0],g=b[1],O=Object(s.useState)(""),x=Object(l.a)(O,2),y=x[0],k=x[1],C=function(a){a.preventDefault(),console.log(U.a);var t=String(function(e){var a=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),s=0;s<t.length;s++){var n=t[s].trim();if(n.substring(0,e.length+1)===e+"="){a=decodeURIComponent(n.substring(e.length+1));break}}return a}("csrftoken"));h()({method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":t},url:"https://sorry-babushka.ru/api/user-create/",data:{name:i,second_name:f,phone:n,date:c}}).then((function(a){a&&"success"==a.data?e.push("/signout"):k(a.data)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:S.a.header,children:[Object(j.jsx)("h1",{className:S.a.header__title,children:"\u041a\u0410\u0420\u0422\u0410 \u041f\u041e\u0421\u0422\u041e\u042f\u041d\u041d\u041e\u0413\u041e \u0413\u041e\u0421\u0422\u042f"}),Object(j.jsx)("img",{className:S.a.header__logo,src:R,alt:"logo"})]}),Object(j.jsxs)("main",{className:S.a.main,children:[Object(j.jsx)("h2",{className:S.a.main__title,children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435\u043c"}),Object(j.jsxs)("form",{className:S.a.main__form,onSubmit:function(e){C(e)},children:[Object(j.jsx)(N,{value:i,onChange:function(e){var a;a=e.target.value,/\d/g.test(a)||d(a)},className:S.a.data_input,placeholder:"\u0418\u043c\u044f"}),Object(j.jsx)(N,{value:f,onChange:function(e){var a;a=e.target.value,/\d/g.test(a)||g(a)},className:S.a.data_input,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(j.jsx)(v,{mask:"\\+7 (999) 999 99 99",value:n,onChange:function(e){a(F(e.target.value))},className:S.a.data_input,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(j.jsx)(v,{mask:"99.99.9999",value:c,onChange:function(e){a(P(e.target.value))},className:S.a.data_input,placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(j.jsx)("span",{className:S.a.errors,children:y}),Object(j.jsxs)("div",{className:S.a.main__form__checkboxBlock,children:[Object(j.jsx)(p,{}),Object(j.jsx)("span",{className:S.a.main__form__text,children:"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"})]}),Object(j.jsx)(u,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})]}),Object(j.jsxs)("footer",{className:S.a.footer,children:[Object(j.jsx)("div",{className:S.a.footer__menu,children:Object(j.jsxs)("div",{className:S.a.footer__contact_us,children:[Object(j.jsx)("h4",{className:S.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(j.jsx)("a",{href:"tel:+7 985 060-65-02",className:S.a.footer__link,children:"+7 985 060-65-02"}),Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/sorrybabushka_family/",className:S.a.instagram_link,children:Object(j.jsx)("img",{className:S.a.instagram_icon,src:w,alt:"instagram"})})]})}),Object(j.jsx)("div",{className:S.a.copyright,children:Object(j.jsxs)("span",{children:["\xa9",(new Date).getFullYear()," \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"]})})]})]})},M=(t(72),t(7)),X=t.n(M),V=t.p+"static/media/logo-2.d86d7e53.png",z=t.p+"static/media/google-wallet.31010535.svg",K=t.p+"static/media/apple-wallet.8f236765.svg",L=function(){var e=Object(B.c)((function(e){return e.QRReducer})),a=(e.qrcode,Object(s.useState)()),t=Object(l.a)(a,2),n=t[0],c=t[1],o=Object(s.useState)(),r=Object(l.a)(o,2),_=r[0],i=r[1];return Object(s.useEffect)((function(){h()({method:"POST",headers:{"Content-type":"application/json"},url:"https://sorry-babushka.ru/api/google-passes/",data:{}}).then((function(e){c(e.data)}))}),[]),Object(s.useEffect)((function(){h()({method:"POST",headers:{"Content-type":"application/json"},url:"https://sorry-babushka.ru/api/apple-passes/",data:{}}).then((function(e){i(e.data)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:X.a.header,children:Object(j.jsx)("img",{className:X.a.header__logo,src:V,alt:"logo"})}),Object(j.jsxs)("main",{className:X.a.main,children:[Object(j.jsx)("h1",{className:X.a.header__title,children:"\u0412\u0410\u0428\u0410 \u041a\u0410\u0420\u0422\u0410 \u0413\u041e\u0422\u041e\u0412\u0410"}),Object(j.jsxs)("div",{className:X.a.addToWallet,children:[Object(j.jsx)("a",{href:n,target:"_blank",children:Object(j.jsx)("img",{src:z,alt:"google-wallet-icon"})}),Object(j.jsx)("a",{href:_,download:!0,children:Object(j.jsx)("img",{src:K,alt:"apple-wallet"})})]})]}),Object(j.jsxs)("footer",{className:X.a.footer,children:[Object(j.jsx)("div",{className:X.a.footer__menu,children:Object(j.jsxs)("div",{className:X.a.footer__contact_us,children:[Object(j.jsx)("h4",{className:X.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(j.jsx)("a",{className:X.a.footer__link,href:"1",children:"+7 985 060-65-02"}),Object(j.jsx)("a",{href:"1",className:X.a.instagram_link,children:Object(j.jsx)("img",{className:X.a.instagram_icon,src:w,alt:"instagram"})})]})}),Object(j.jsx)("div",{className:X.a.copyright,children:Object(j.jsxs)("span",{children:["\xa9",(new Date).getFullYear()," \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"]})})]})]})},G=function(){return Object(j.jsx)(B.a,{store:q,children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(_.d,{children:[Object(j.jsx)(_.b,{path:"/sign",children:Object(j.jsx)(J,{})}),Object(j.jsx)(_.b,{path:"/signout",children:Object(j.jsx)(L,{})}),Object(j.jsx)(_.b,{path:"*",children:Object(j.jsx)(_.a,{to:"/sign"})})]})})})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.5498df24.chunk.js.map