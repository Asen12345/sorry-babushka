(this.webpackJsonpcafe=this.webpackJsonpcafe||[]).push([[0],{23:function(e,a,t){e.exports={checkbox:"styles_checkbox__cDgsa",image:"styles_image__3foRY"}},24:function(e,a,t){e.exports={input:"styles_input__30fkA"}},3:function(e,a,t){e.exports={header:"styles_header__1ehT3",header__title:"styles_header__title__38hvW",header__logo:"styles_header__logo__2ljRb",errors:"styles_errors__1g1Ep",main:"styles_main__3bhP7",main__title:"styles_main__title__1bnim",main__form:"styles_main__form__tYEzO",data_input:"styles_data_input__3DawC",main__form__checkboxBlock:"styles_main__form__checkboxBlock__2PFp6",main__form__text:"styles_main__form__text__1Q2pR",footer:"styles_footer__2vjrr",footer__menu:"styles_footer__menu__MfhTv",copyright:"styles_copyright__sXAm8",footer__menu__links:"styles_footer__menu__links__2CEJk",footer__title:"styles_footer__title__36cMI",footer__link:"styles_footer__link__2gCQx",footer__contact_us:"styles_footer__contact_us__CUK8r",instagram_icon:"styles_instagram_icon__aAA7b",instagram_link:"styles_instagram_link__14c1K"}},34:function(e,a,t){e.exports={button:"styles_button__R-bR5"}},5:function(e,a,t){e.exports={header:"styles_header__1cUUB",header__title:"styles_header__title__3mVAB",header__logo:"styles_header__logo__3QNVj",main:"styles_main__2m1Va",main__title:"styles_main__title__3s_N5",qrcode_block:"styles_qrcode_block__1Alag",addToWallet:"styles_addToWallet__18Uxy",googleWallet:"styles_googleWallet__2saWd",appleWallet:"styles_appleWallet__1X8TC",footer:"styles_footer__1j5nS",footer__menu:"styles_footer__menu__19Yee",copyright:"styles_copyright__11fYp",footer__menu__links:"styles_footer__menu__links__JzhFC",footer__title:"styles_footer__title__BPmMX",footer__link:"styles_footer__link__ilNeB",footer__contact_us:"styles_footer__contact_us__32TQQ",instagram_icon:"styles_instagram_icon__1ss0k",instagram_link:"styles_instagram_link__tYFl3"}},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(15),o=t.n(c),r=t(22),l=t(4),_=t(12),i=t(19),d=t.n(i),h=t(34),m=t.n(h),j=t(1),u=function(e){var a=e.children;return Object(j.jsx)("button",{className:m.a.button,children:a})},b=t(23),g=t.n(b),f=t.p+"static/media/checkbox.f88bb36a.svg",O=function(){var e=Object(s.useState)(!0),a=Object(_.a)(e,2),t=a[0],n=a[1];return Object(j.jsx)("div",{onClick:function(){return n(!t)},className:g.a.checkbox,children:Object(j.jsx)("img",{style:{display:"".concat(t?"block":"none")},className:g.a.image,src:f,alt:"checkbox"})})},p=t(35),x=t.n(p),y=t(24),k=t.n(y),v=function(e){var a=e.placeholder,t=e.className,s=e.onChange,n=e.value;return Object(j.jsx)("input",{maxLength:40,value:n,onChange:function(e){return s(e)},className:"".concat(k.a.input," ").concat(t),placeholder:a})},A=function(e){var a=e.placeholder,t=e.className,s=e.onChange,n=(e.value,e.mask),c=void 0===n?"":n;return Object(j.jsx)(x.a,{mask:c,maxLength:40,onChange:function(e){return s(e)},className:"".concat(k.a.input," ").concat(t),placeholder:a})},N=t(3),C=t.n(N),W=t.p+"static/media/logo.e1f182e7.png",Y=t.p+"static/media/instagram.db0f7337.svg",E=t(14),Q=t(11),B=Object(E.b)({name:"inputs",initialState:{name:"",surname:"",phone:"",birth_date:""},reducers:{changeName:function(e,a){e.name=a.payload},changeSurname:function(e,a){e.surname=a.payload},changePhone:function(e,a){e.phone=a.payload},changeBirthDate:function(e,a){e.birth_date=a.payload}}}),I=B.actions,R=(I.changeName,I.changeSurname,I.changePhone),S=I.changeBirthDate,w=B.reducer,V=Object(E.b)({name:"inputs",initialState:{qrcode:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},reducers:{chandeQR:function(e,a){e.qrcode=a.payload}}}),F=(V.actions.chandeQR,V.reducer),K=Object(E.a)({reducer:{InputsReducer:w,QRReducer:F}}),T=K,z=t(37),P=t.n(z);var Z=function(){var e=Object(l.g)(),a=Object(Q.b)(),t=Object(Q.c)((function(e){return e.InputsReducer})),n=(t.name,t.surname,t.phone),c=t.birth_date,o=Object(s.useState)(""),r=Object(_.a)(o,2),i=r[0],h=r[1],m=Object(s.useState)(""),b=Object(_.a)(m,2),g=b[0],f=b[1],p=Object(s.useState)(""),x=Object(_.a)(p,2),y=x[0],k=x[1],N=function(a){a.preventDefault(),console.log(P.a);var t=String(function(e){var a=null;if(document.cookie&&""!==document.cookie)for(var t=document.cookie.split(";"),s=0;s<t.length;s++){var n=t[s].trim();if(n.substring(0,e.length+1)===e+"="){a=decodeURIComponent(n.substring(e.length+1));break}}return a}("csrftoken"));d()({method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":t},url:"https://sorry-babushka.ru/api/user-create/",data:{name:i,second_name:g,phone:n,date:c}}).then((function(a){a&&"success"==a.data?e.push("/signout"):k(a.data)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:C.a.header,children:[Object(j.jsx)("h1",{className:C.a.header__title,children:"\u041a\u0410\u0420\u0422\u0410 \u041f\u041e\u0421\u0422\u041e\u042f\u041d\u041d\u041e\u0413\u041e \u0413\u041e\u0421\u0422\u042f"}),Object(j.jsx)("img",{className:C.a.header__logo,src:W,alt:"logo"})]}),Object(j.jsxs)("main",{className:C.a.main,children:[Object(j.jsx)("h2",{className:C.a.main__title,children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435\u043c"}),Object(j.jsxs)("form",{className:C.a.main__form,onSubmit:function(e){N(e)},children:[Object(j.jsx)(v,{value:i,onChange:function(e){var a;a=e.target.value,/\d/g.test(a)||h(a)},className:C.a.data_input,placeholder:"\u0418\u043c\u044f"}),Object(j.jsx)(v,{value:g,onChange:function(e){var a;a=e.target.value,/\d/g.test(a)||f(a)},className:C.a.data_input,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(j.jsx)(A,{mask:"\\+7 (999) 999 99 99",value:n,onChange:function(e){a(R(e.target.value))},className:C.a.data_input,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(j.jsx)(A,{mask:"99.99.9999",value:c,onChange:function(e){a(S(e.target.value))},className:C.a.data_input,placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(j.jsx)("span",{className:C.a.errors,children:y}),Object(j.jsxs)("div",{className:C.a.main__form__checkboxBlock,children:[Object(j.jsx)(O,{}),Object(j.jsx)("span",{className:C.a.main__form__text,children:"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"})]}),Object(j.jsx)(u,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})]}),Object(j.jsxs)("footer",{className:C.a.footer,children:[Object(j.jsx)("div",{className:C.a.footer__menu,children:Object(j.jsxs)("div",{className:C.a.footer__contact_us,children:[Object(j.jsx)("h4",{className:C.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(j.jsx)("a",{href:"tel:+7 985 060-65-02",className:C.a.footer__link,children:"+7 985 060-65-02"}),Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/sorrybabushka_family/",className:C.a.instagram_link,children:Object(j.jsx)("img",{className:C.a.instagram_icon,src:Y,alt:"instagram"})})]})}),Object(j.jsx)("div",{className:C.a.copyright,children:Object(j.jsxs)("span",{children:["\xa9",(new Date).getFullYear()," \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"]})})]})]})},H=(t(72),t(5)),M=t.n(H),D=t.p+"static/media/logo-2.d86d7e53.png",q=t.p+"static/media/google-wallet.31010535.svg",U=function(){var e=Object(Q.c)((function(e){return e.QRReducer})),a=(e.qrcode,Object(s.useState)()),t=Object(_.a)(a,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){d()({method:"POST",headers:{"Content-type":"application/json"},url:"https://sorry-babushka.ru/api/google-passes/",data:{}}).then((function(e){c(e.data)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:M.a.header,children:Object(j.jsx)("img",{className:M.a.header__logo,src:D,alt:"logo"})}),Object(j.jsxs)("main",{className:M.a.main,children:[Object(j.jsx)("h1",{className:M.a.header__title,children:"\u0412\u0410\u0428\u0410 \u041a\u0410\u0420\u0422\u0410 \u0413\u041e\u0422\u041e\u0412\u0410"}),Object(j.jsxs)("div",{className:M.a.addToWallet,children:[Object(j.jsx)("a",{href:n,target:"_blank",children:Object(j.jsx)("img",{src:q,alt:"google-wallet-icon"})}),Object(j.jsxs)("button",{className:M.a.appleWallet,children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT7SURBVHgB7Vk7bBxFGP5mdvd8t35hRzIgjHxKiIhFMEGgPKxATJECQXoqKiqQaGihoIIGIVHQIDo6ZBpoXAQESEZEQiKgQIxkAUGyjWIc++yz77E3wz+zj9u7nd1bJ7kolvxZa9/MzuOb+b//n3/OrFwun5ISH+KAwPY8PMA55nBAwHHAcEi43zgk3G8cOMJ2rwaSgrQCY1wV2i9Y8Fkyc1nX6Yp2fbzcARY8InjP90dY8WLU33WLOPH4cYyNj8PiLGWykARLeWfqx7r6+n+arRZu3PgHy8t/EgeuOeQirBpOTEzgnbffwvTxo/CYRRsozfMb+MQnkrH16I2Id2HoWKsuUqNvv1vEe+9/AEFWYXkIK7zx+muYOnoMny95WKnU0JBmM4VWlh0VaFd0zcgCycj4KoM2RYfhmQdtzF04h6WlS5if/yrRP0FYrZCTHmdmpnFt3cPV1aZWFmQrVX1xflkwCCHR4N9KCyeOFDHz5BOY/+JLdDNOEPbNyVByXWyu1sDqm5h0VuEk7N45MctaTdiQGdQe69eiN383HsWtvQG4gy5MsM2zCE3gYWsNHx37GC5vQKlJyjTHujuQzMYfu0dwU7yZarL0sEZb/ZS7BOeWh6YntCxYht27JZuICzIW2dKmpFkeG1jDUHEFV5GbcMwdpMAPgmPFHtTmyo2MCBgoriOkq7JaEKfKpxs1jNFsyE+4vQvLtoOFkVG9BCbbb2RWpyj8+RVMxkKYElbwXhr6qwhy3S3gVVjYB+FweyTtLEe9VodstuDRRHEJ82BGwTrL3RCBDELi0lQO4jPoJlF0bPzHeYxLT8LthgNViVd+GkO56sKSWScd0H0sqfDoHxJMWyjrLAxHrVkCVya24D2UPk+q0ynLTd90Mb49SK4g9WPmGZjeQMeXQnC2ybZvSGkeq+jZOL82ho2KhY1ohB5xOJRDdWcb1q7AjmNFW+DvVkiUfgkKf/U6ClSwbNvXIZI7rfkKSbmCB4/aSccJTjwZubg/tqC0h95v7mKvtgcTzBomUQ0OD8E6NwtOTwttImFuoIenZEVWd1H7+QoK16/BKhTIXZI7LVoCjYID7/QF8Kkp8AIdCkEyxToW6Qt7iD65v/6Wl7AMkhSuV6+kEO5FsJx2smITvdERyOcvosZtDPz+C7hdiI+kM8aaKrxwEfZkmZwsHEd2zBn97o42XchI4CVCdUZnqoyV9b4ELYiEc34O9UfKaDQapBShpSBaEjUq4+xzsIisshyL+iWf+E8act84lHMxlj6QkqTz4stonnoW9YESqs0mqqPDkC9dAk6ehOBZcSIYQzmmlJltet448iKMo9aZWcgzZ0miJCodZJk+ctldykOMTsciOdwGlBUod1ZxW2tYik5tZnYNHDvM9PMRvlP4nq8DVg/z3g76QLgNZjj90t4ZehtrDU7nBzDRh93ZD6QQxvoEYR14aPWVra1Mr83j0WGb9lcFrGe0CVHZriAXYRVTBaVYi4s/RpPce4Tz58nW1NWa2n3y6Wdw6KidnT2NUqlEYYoHXh9kbazr9tsdtvRZwKK7faotwvCsDkW66K6vb2Bh4TIuf/29/+VN91ImJ8tzFD6/SRttZHiYLqSlqBzlFInbJ0sQYfGLqvGSGiTF4eJJtzvVKvZ2a6kJaY8oQVre3tHPvUfuKHF/45Bwv3FIuN84JNxvqP+E/kUH2rs4IPgfIe3zWTb8hP0AAAAASUVORK5CYII=",alt:"apple-wallet"}),Object(j.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 Apple Wallet"})]})]})]}),Object(j.jsxs)("footer",{className:M.a.footer,children:[Object(j.jsx)("div",{className:M.a.footer__menu,children:Object(j.jsxs)("div",{className:M.a.footer__contact_us,children:[Object(j.jsx)("h4",{className:M.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(j.jsx)("a",{className:M.a.footer__link,href:"1",children:"+7 985 060-65-02"}),Object(j.jsx)("a",{href:"1",className:M.a.instagram_link,children:Object(j.jsx)("img",{className:M.a.instagram_icon,src:Y,alt:"instagram"})})]})}),Object(j.jsx)("div",{className:M.a.copyright,children:Object(j.jsxs)("span",{children:["\xa9",(new Date).getFullYear()," \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"]})})]})]})},J=function(){return Object(j.jsx)(Q.a,{store:T,children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/sign",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(l.b,{path:"/signout",children:Object(j.jsx)(U,{})}),Object(j.jsx)(l.b,{path:"*",children:Object(j.jsx)(l.a,{to:"/sign"})})]})})})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.abf6a010.chunk.js.map