(this.webpackJsonpcafe=this.webpackJsonpcafe||[]).push([[0],{22:function(e,a,t){e.exports={checkbox:"styles_checkbox__V-n6v",image:"styles_image__11aMU"}},23:function(e,a,t){e.exports={input:"styles_input__2sCmO"}},3:function(e,a,t){e.exports={header:"styles_header__1jKwr",header__title:"styles_header__title__GGjch",header__logo:"styles_header__logo__1fUgv",main:"styles_main__T-6-R",main__title:"styles_main__title__3txfV",main__form:"styles_main__form__3xNDm",data_input:"styles_data_input__alI6X",main__form__checkboxBlock:"styles_main__form__checkboxBlock__1BjL4",main__form__text:"styles_main__form__text__1KBpx",footer:"styles_footer__1b5NT",footer__menu:"styles_footer__menu__3y-ev",copyright:"styles_copyright__3uQPb",footer__menu__links:"styles_footer__menu__links__pMiSZ",footer__title:"styles_footer__title__2wXyW",footer__link:"styles_footer__link__1sVRH",footer__contact_us:"styles_footer__contact_us__1GX7N",instagram_icon:"styles_instagram_icon__1xHYM",instagram_link:"styles_instagram_link__1KmHM"}},38:function(e,a,t){e.exports={button:"styles_button__7sfo1"}},4:function(e,a,t){e.exports={header:"styles_header__33-dv",header__title:"styles_header__title__3Avga",header__logo:"styles_header__logo__1jKMP",main:"styles_main__3PPFO",main__title:"styles_main__title__1SYee",qrcode_block:"styles_qrcode_block__1kmSK",addToWallet:"styles_addToWallet__2aUVH",googleWallet:"styles_googleWallet__2i4kd",appleWallet:"styles_appleWallet__1X4-U",footer:"styles_footer__1ekX6",footer__menu:"styles_footer__menu__1q9hZ",copyright:"styles_copyright__AGECo",footer__menu__links:"styles_footer__menu__links__2Z55S",footer__title:"styles_footer__title__i-Hbe",footer__link:"styles_footer__link__mDXxo",footer__contact_us:"styles_footer__contact_us__32cfM",instagram_icon:"styles_instagram_icon__1XKW3",instagram_link:"styles_instagram_link__14FN_"}},72:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(15),l=t.n(n),o=t(11),r=t(5),i=t(37),_=t.n(i),m=t(38),d=t.n(m),h=t(1),j=function(e){var a=e.children;return Object(h.jsx)("button",{className:d.a.button,children:a})},b=t(43),u=t(22),g=t.n(u),x=t.p+"static/media/checkbox.f88bb36a.svg",f=function(){var e=Object(s.useState)(!0),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(h.jsx)("div",{onClick:function(){return c(!t)},className:g.a.checkbox,children:Object(h.jsx)("img",{style:{display:"".concat(t?"block":"none")},className:g.a.image,src:x,alt:"checkbox"})})},A=t(39),O=t.n(A),p=t(23),y=t.n(p),N=function(e){var a=e.placeholder,t=e.className,s=e.onChange,c=e.value;return Object(h.jsx)("input",{maxLength:40,value:c,onChange:function(e){return s(e)},className:"".concat(y.a.input," ").concat(t),placeholder:a})},k=function(e){var a=e.placeholder,t=e.className,s=e.onChange,c=(e.value,e.mask),n=void 0===c?"":c;return Object(h.jsx)(O.a,{mask:n,maxLength:40,onChange:function(e){return s(e)},className:"".concat(y.a.input," ").concat(t),placeholder:a})},v=t(3),C=t.n(v),W=t.p+"static/media/logo.e1f182e7.png",Q=t.p+"static/media/instagram.db0f7337.svg",w=t(14),Y=t(12),B=Object(w.b)({name:"inputs",initialState:{name:"",surname:"",phone:"",birth_date:""},reducers:{changeName:function(e,a){e.name=a.payload},changeSurname:function(e,a){e.surname=a.payload},changePhone:function(e,a){e.phone=a.payload},changeBirthDate:function(e,a){e.birth_date=a.payload}}}),R=B.actions,V=R.changeName,S=R.changeSurname,I=R.changePhone,H=R.changeBirthDate,E=B.reducer,Z=Object(w.b)({name:"inputs",initialState:{qrcode:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},reducers:{chandeQR:function(e,a){e.qrcode=a.payload}}}),K=(Z.actions.chandeQR,Z.reducer),D=Object(w.a)({reducer:{InputsReducer:E,QRReducer:K}}),M=D,q=t(40),F=t.n(q),U=function(e){return!Number.isInteger(Number(e))&&"string"===typeof e},T=function(){Object(r.g)();var e=Object(Y.b)(),a=Object(Y.c)((function(e){return e.InputsReducer})),t=a.name,s=a.surname,c=a.phone,n=a.birth_date;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:C.a.header,children:[Object(h.jsx)("h1",{className:C.a.header__title,children:"\u041a\u0410\u0420\u0422\u0410 \u041f\u041e\u0421\u0422\u041e\u042f\u041d\u041d\u041e\u0413\u041e \u0413\u041e\u0421\u0422\u042f"}),Object(h.jsx)("img",{className:C.a.header__logo,src:W,alt:"logo"})]}),Object(h.jsxs)("main",{className:C.a.main,children:[Object(h.jsx)("h2",{className:C.a.main__title,children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435\u043c"}),Object(h.jsxs)("form",{className:C.a.main__form,onSubmit:function(e){!function(e){e.preventDefault();var a=String(F.a.get("csrftoken"));_()({method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":a},url:"http://127.0.0.1:8000/api/user-create/",data:{name:t,second_name:s,phone:c,date:n}}).then((function(e){window.location.href="http://127.0.0.1:8000/signout/"}))}(e)},children:[Object(h.jsx)(N,{value:t,onChange:function(a){var t;t=a.target.value,U(t[t.length-1])&&e(V(t))},className:C.a.data_input,placeholder:"\u0418\u043c\u044f"}),Object(h.jsx)(N,{value:s,onChange:function(a){var t;t=a.target.value,U(t[t.length-1])&&e(S(t))},className:C.a.data_input,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(h.jsx)(k,{mask:"\\+7 (999) 999 99 99",value:c,onChange:function(a){e(I(a.target.value))},className:C.a.data_input,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(h.jsx)(k,{mask:"99.99.9999",value:n,onChange:function(a){e(H(a.target.value))},className:C.a.data_input,placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(h.jsxs)("div",{className:C.a.main__form__checkboxBlock,children:[Object(h.jsx)(f,{}),Object(h.jsx)("span",{className:C.a.main__form__text,children:"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"})]}),Object(h.jsx)(j,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})]}),Object(h.jsxs)("footer",{className:C.a.footer,children:[Object(h.jsxs)("div",{className:C.a.footer__menu,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:C.a.footer__title,children:"\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"}),Object(h.jsxs)("div",{className:C.a.footer__menu__links,children:[Object(h.jsx)(o.b,{className:C.a.footer__link,to:"/main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsx)(o.b,{className:C.a.footer__link,to:"/about",children:"\u041e \u043d\u0430\u0441"}),Object(h.jsx)(o.b,{className:C.a.footer__link,to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})]}),Object(h.jsxs)("div",{className:C.a.footer__contact_us,children:[Object(h.jsx)("h4",{className:C.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(h.jsx)("a",{href:"tel:+7 985 060-65-02",className:C.a.footer__link,children:"+7 985 060-65-02"}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/sorrybabushka_family/",className:C.a.instagram_link,children:Object(h.jsx)("img",{className:C.a.instagram_icon,src:Q,alt:"instagram"})})]})]}),Object(h.jsx)("div",{className:C.a.copyright,children:Object(h.jsx)("span",{children:"\xa92021 \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"})})]})]})},P=(t(72),t(4)),X=t.n(P),J=t(42),z=t.n(J),G=t.p+"static/media/logo-2.d86d7e53.png",L=function(){var e=Object(Y.c)((function(e){return e.QRReducer})),a=e.qrcode;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:X.a.header,children:[Object(h.jsx)("h1",{className:X.a.header__title,children:"\u0412\u0410\u0428\u0410 \u041a\u0410\u0420\u0422\u0410 \u0413\u041e\u0422\u041e\u0412\u0410"}),Object(h.jsx)("img",{className:X.a.header__logo,src:G,alt:"logo"})]}),Object(h.jsxs)("main",{className:X.a.main,children:[Object(h.jsx)("h2",{className:X.a.main__title,children:"\u041f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043a\u043e\u0434 \u0438 \u0445\u0440\u043e\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043a\u0430\u0440\u0442\u0443 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435"}),Object(h.jsx)("div",{className:X.a.qrcode_block,children:Object(h.jsx)(z.a,{size:180,value:a})}),Object(h.jsxs)("div",{className:X.a.addToWallet,children:[Object(h.jsxs)("button",{className:X.a.googleWallet,children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAYCAYAAABEHYUrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVTSURBVHgB3VhPTxtXEJ/3dqHQJqqp1JKkqmpSKdca1YcqQPsWcugNA5e2l8AnwD5WVYV94tBKNl+gmFPg0OJKPfQA+DWFCCWp2N7ak51LyQ2naTBg777O7HrNshibINMIftJ6972d92fezPxm1gxaoCAioS7oCtHzdblZhAsM1qhzW0QFYyzGGIxiM3worErAmKmAZXtXHy7ABcMRZcmKV7g+bwOLnWJs0bYrxnVpFlsJDok7aQDVcE6F83CA7H25eu6HV1d2W0TCnHfkwWfJloMVmC9UxeiTZqmZ3IAwsgz4XWgOqYM1JqUswTmB0w9Z9ERFlUK3hSxTSuJ1uBEFRUtpY60UDWCuClafd9lg9StQido7YYE+A+cInX5eZx0ZCChKCpbtNxJ9gZP+W0TjGmPTttKMlycsVdqUshjoNG+L4RIHNo+Kx4UQqfOyLi/nIdz9ydOAi7HUtbVHU30NFr0hH2d684/62snMD+QaujkU6fkA+Gn44kzQtYoe1wafgvZOGXZX3gX7WafZu/YwCa8IGvAduqOFQ1Xg0wzYpKp7HWUCZVrQkdqUvxQHxR2BbcdQG3J1qtF8Q2IkZgOMYiZ5omMq+ZA6O249g6u9ZXj+83uJ4AAxuxPmtiaa7BFsmxXlN1clnAEfi8/CCipherag+oTaFlQcDlGORJ0rIugBEQ0qAmUMHfZMPJBlPITQoBAL6+j/DaZPM3eeBMVsxOvlbx7A29k/jw1wFeXz0AScO27YBy8B13qkQGXeVQpyD6Q0yRoOawCgknxsXa5KatwWAhV1lAvrOAZ1MwaFgSmLTaNPELlJ//w1y4fp2QI7R2wcgv8NbGZQjCjvqoKGLqvllXPyqogM7XjVb3I1VwHbqILdvy5XpDeaDoL6a03hHpbK+Nv+1XDOSfcOWSJGsiy5SF1I5SHEDDi3XBcEERNWZAsdYGU2fIRIm0PXFHgoo6rmfRR3NlrIHQPhA7xQzkQZia8FunQc70mSpVBAj3Hi2QIrRXdS1iRBamxb3TD77wBOfNT3bW5JbsNRAlDsfYz3ZH3TymXT5lCpdbmWhFNgQIxQ2Ey6StZXwcJAm6m5PBUJNSMxVEYJcmc8nwylLg4HojZSeulOR1P/iownlvY+gO93b8Fz1XHM9+VXPSSc9feNzO5OK9uut22l/oA2YUgMp1VNUVKkCtWspxwqS/3Tfnlydc+6FeD0PqNhyCh3TNaT0zv1aua7f/pnlso3vT4RXRxPP/78x8RJmyF2VraV9J85TpyDtsGtzdG9ExtyJRN4GR8Uw3eJgf2dNqgFLEwEGm4UiYlSlMMD9+VavebmFJ+LL27OBRaLR5cmliP3YmF/b2Q+Fooujc/Yr/215V+Mivmzpp1G8PIqWqUQfIfV1mRQUQIVJrUUJfBKUx9aN+mXcWpjax+thDVwYMWYzrTCR4sThejiRD56b3xL69YKGKvJ3RvfhvZ7lg9FKxUD2gvpbgGSRDReJxEWWi998jBeM5qKkFU5WD8deUs/5lSuhDQ/puA4yTD3lAWSESX0+onuv5WD3Wtz6D4wJZM9RWgrWMrbNObTLYzHPObegpumVIlBYzLUoZo5LECYDNbY3Hswv8gVrTJ+hdgwB6cAHcxel9kvv76SbSWLpLLjbpDtwCng5lZmYKrBMc4Bi5prSywODFq7kcKkHMaso6CXbvxo+E8FxaqmWBz/rfiULAo+BekbVilY+P3LH9pISCeDCgXKp53ECy2+hiie3a8nyDaqlRlcIpCrux5gGY3qZB0uCciqXtm50fiD4DBmLzqoiKjdkyfJXApl3a8kAjOb/XH3HwjoVMoDQyaPAAAAAElFTkSuQmCC",alt:"google-wallet"}),Object(h.jsx)("span",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"})]}),Object(h.jsxs)("button",{className:X.a.appleWallet,children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT7SURBVHgB7Vk7bBxFGP5mdvd8t35hRzIgjHxKiIhFMEGgPKxATJECQXoqKiqQaGihoIIGIVHQIDo6ZBpoXAQESEZEQiKgQIxkAUGyjWIc++yz77E3wz+zj9u7nd1bJ7kolvxZa9/MzuOb+b//n3/OrFwun5ISH+KAwPY8PMA55nBAwHHAcEi43zgk3G8cOMJ2rwaSgrQCY1wV2i9Y8Fkyc1nX6Yp2fbzcARY8InjP90dY8WLU33WLOPH4cYyNj8PiLGWykARLeWfqx7r6+n+arRZu3PgHy8t/EgeuOeQirBpOTEzgnbffwvTxo/CYRRsozfMb+MQnkrH16I2Id2HoWKsuUqNvv1vEe+9/AEFWYXkIK7zx+muYOnoMny95WKnU0JBmM4VWlh0VaFd0zcgCycj4KoM2RYfhmQdtzF04h6WlS5if/yrRP0FYrZCTHmdmpnFt3cPV1aZWFmQrVX1xflkwCCHR4N9KCyeOFDHz5BOY/+JLdDNOEPbNyVByXWyu1sDqm5h0VuEk7N45MctaTdiQGdQe69eiN383HsWtvQG4gy5MsM2zCE3gYWsNHx37GC5vQKlJyjTHujuQzMYfu0dwU7yZarL0sEZb/ZS7BOeWh6YntCxYht27JZuICzIW2dKmpFkeG1jDUHEFV5GbcMwdpMAPgmPFHtTmyo2MCBgoriOkq7JaEKfKpxs1jNFsyE+4vQvLtoOFkVG9BCbbb2RWpyj8+RVMxkKYElbwXhr6qwhy3S3gVVjYB+FweyTtLEe9VodstuDRRHEJ82BGwTrL3RCBDELi0lQO4jPoJlF0bPzHeYxLT8LthgNViVd+GkO56sKSWScd0H0sqfDoHxJMWyjrLAxHrVkCVya24D2UPk+q0ynLTd90Mb49SK4g9WPmGZjeQMeXQnC2ybZvSGkeq+jZOL82ho2KhY1ohB5xOJRDdWcb1q7AjmNFW+DvVkiUfgkKf/U6ClSwbNvXIZI7rfkKSbmCB4/aSccJTjwZubg/tqC0h95v7mKvtgcTzBomUQ0OD8E6NwtOTwttImFuoIenZEVWd1H7+QoK16/BKhTIXZI7LVoCjYID7/QF8Kkp8AIdCkEyxToW6Qt7iD65v/6Wl7AMkhSuV6+kEO5FsJx2smITvdERyOcvosZtDPz+C7hdiI+kM8aaKrxwEfZkmZwsHEd2zBn97o42XchI4CVCdUZnqoyV9b4ELYiEc34O9UfKaDQapBShpSBaEjUq4+xzsIisshyL+iWf+E8act84lHMxlj6QkqTz4stonnoW9YESqs0mqqPDkC9dAk6ehOBZcSIYQzmmlJltet448iKMo9aZWcgzZ0miJCodZJk+ctldykOMTsciOdwGlBUod1ZxW2tYik5tZnYNHDvM9PMRvlP4nq8DVg/z3g76QLgNZjj90t4ZehtrDU7nBzDRh93ZD6QQxvoEYR14aPWVra1Mr83j0WGb9lcFrGe0CVHZriAXYRVTBaVYi4s/RpPce4Tz58nW1NWa2n3y6Wdw6KidnT2NUqlEYYoHXh9kbazr9tsdtvRZwKK7faotwvCsDkW66K6vb2Bh4TIuf/29/+VN91ImJ8tzFD6/SRttZHiYLqSlqBzlFInbJ0sQYfGLqvGSGiTF4eJJtzvVKvZ2a6kJaY8oQVre3tHPvUfuKHF/45Bwv3FIuN84JNxvqP+E/kUH2rs4IPgfIe3zWTb8hP0AAAAASUVORK5CYII=",alt:"apple-wallet"}),Object(h.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 Apple Wallet"})]})]})]}),Object(h.jsxs)("footer",{className:X.a.footer,children:[Object(h.jsxs)("div",{className:X.a.footer__menu,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:X.a.footer__title,children:"\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"}),Object(h.jsxs)("div",{className:X.a.footer__menu__links,children:[Object(h.jsx)(o.b,{className:X.a.footer__link,to:"/main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsx)(o.b,{className:X.a.footer__link,to:"/about",children:"\u041e \u043d\u0430\u0441"}),Object(h.jsx)(o.b,{className:X.a.footer__link,to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})]}),Object(h.jsxs)("div",{className:X.a.footer__contact_us,children:[Object(h.jsx)("h4",{className:X.a.footer__title,children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(h.jsx)("a",{className:X.a.footer__link,href:"1",children:"+7 985 060-65-02"}),Object(h.jsx)("a",{href:"1",className:X.a.instagram_link,children:Object(h.jsx)("img",{className:X.a.instagram_icon,src:Q,alt:"instagram"})})]})]}),Object(h.jsx)("div",{className:X.a.copyright,children:Object(h.jsx)("span",{children:"\xa92021 \xabSorry \u0411\u0430\u0431\u0443\u0448\u043a\u0430\xbb"})})]})]})},$=function(){return Object(h.jsx)(Y.a,{store:M,children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/sign",children:Object(h.jsx)(T,{})}),Object(h.jsx)(r.b,{path:"/signout",children:Object(h.jsx)(L,{})}),Object(h.jsx)(r.b,{path:"*",children:Object(h.jsx)(r.a,{to:"/sign"})})]})})})};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0c7af301.chunk.js.map