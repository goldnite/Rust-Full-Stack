(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(n,e,t){n.exports=t(273)},272:function(n,e,t){},273:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(113),i=t.n(o),l=t(28),m=t(5),d=t(3),s=t(4);function c(){var n=Object(d.a)(["\n\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.7);\n    animation: 0.6s ",";\n\n    /* Contents in it  */\n\n    .content {\n        padding: 2rem;\n    }\n\n    @media all and (max-width: 38.4rem) {\n\t\t.content {\n            font-size: 1.6rem;\n        }\n\t}\n\n"]);return c=function(){return n},n}function h(){var n=Object(d.a)(["\n    0%{\n        transform: scale(0);\n        opacity: 0;\n    }\n    1% {\n        display: flex;\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n"]);return h=function(){return n},n}var u=Object(s.b)(h()),p=s.a.section(c(),u),g=function(n){n.modalIsOpen;var e=n.nome,t=n.email,r=void 0===t?"":t,o=n.idade,i=n.telefone,l=n.setModal;return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"width-vw height-vh cursor-pointer absolute",title:"\ud83d\uddb1 clique para encerrar isso.",onClick:function(n){n.preventDefault(),l(!1)}}),a.a.createElement("section",{className:"center-percent-absolute theme-white max-width border-half content"},a.a.createElement("section",{className:"flex flex-flow-column"},a.a.createElement("span",{class:"text-center blue bold margin-bottom-one"},"Bem Recebido!"),a.a.createElement("span",null,a.a.createElement("span",{className:"disappear-at-mobile"},"Seu nome \xe9 "),a.a.createElement("span",{className:"bold"},e)),a.a.createElement("span",null,a.a.createElement("span",null,"Voc\xea tem "),a.a.createElement("span",{className:"bold"},o)," "," "," anos"),a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-envelope blue disappear-at-mobile--slowly"}),a.a.createElement("span",{title:r}," "," "," ",r.length<25?r:"".concat(r.slice(0,25),"..."))),a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-phone-square green disappear-at-mobile--slowly"}),a.a.createElement("span",null," "," "," ",i)))))},f=function(n){var e=n.modalIsOpen,t=n.nome,r=n.email,o=void 0===r?"":r,i=n.idade,l=n.telefone,m=n.setModal;return a.a.createElement(p,{style:{display:"".concat(e?"block":"none")}},a.a.createElement(g,{nome:t,email:o,idade:i,telefone:l,setModal:m}))};function b(){var n=Object(d.a)(["\n\tpadding: 5.6rem 2rem 0 1rem;\n\tbackground: white;\n\twidth: 64rem;\n\tmargin: 0 auto;\n\n\tinput {\n\t\tpadding: 0.5rem;\n\t\tdisplay: block;\n\t\tborder-radius: 4px;\n\t\tborder: 1px solid #ccc;\n\t\tmargin-bottom: 2rem;\n\t\twidth: 100%;\n\t}\n\n\tinput:focus {\n\t\tborder-color: #08c;\n\t\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 2px rgba(0, 126, 255, 0.1);\n\t\toutline: none;\n\t}\n\n\tinput.error {\n\t\tborder-color: red;\n\t}\n\n\t.input-feedback {\n\t\tcolor: red;\n\t\tmargin-top: 0.25rem;\n\t}\n\n\tlabel {\n\t\tfont-weight: bold;\n\t\tdisplay: block;\n\t\ttext-align: start;\n\t\tmargin-bottom: 0.5rem;\n\t\tfont-size: 1.6rem;\n\t}\n\n\t.form-button {\n\t\tmax-width: 15rem;\n\t\tmargin: 2rem 0 2rem 0.5rem;\n\t\tpadding: 1.2rem 1.8rem;\n\t\tborder-radius: 0.5rem;\n\t\tbox-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.15);\n\t\tfont-size: 1.7rem;\n\t\tfont-weight: 500;\n\t\t-webkit-appearance: none;\n\t}\n\n\t.form-button:disabled {\n\t\topacity: 0.5;\n\t\tcursor: not-allowed !important;\n\t}\n\n\t.form-button.outline {\n\t\tbackground-color: #eee;\n\t\tborder: 1px solid #aaa;\n\t\tcolor: #555;\n\t}\n\n\t@media all and (max-width: 66rem) {\n\t\twidth: 48rem;\n\t}\n\n\t@media all and (max-width: 48rem) {\n\t\twidth: 25.6rem;\n\t\tfont-size: 2rem;\n\n\t\t.sign-up {\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t/* \n\t\t\tUso !important aqui porque isso tem menons import\xe2ncia para CSS renderer que SteadylearnerCSS.js \n\t\t\tN\xe3o ter\xe1 problema porque n\xe3o vai usar .social depois de ele fica disaparecido.\n\t\t*/\n\t\n\t\t.social {\n\t\t\tdisplay: none !important; \n\t\t}\n\n\t\t.errors {\n\t\t\tfont-size: 1.2rem !important;\n\t\t}\n\t}\n\n\t@media all and (max-height: 38.4rem) {\n\t\t.sign-up {\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.social {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n"]);return b=function(){return n},n}var w=s.a.section.attrs({className:"font-two max-width"})(b()),x=function(n){return a.a.createElement(w,n)},v=t(22),y={nome:v.string().matches(/^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/,"Nome Inv\xe1lido").min(2,"Nome deve ser mais que uma letra.").max(50,"Pode usar nome mais curto.").required("Este campo \xe9 OBRIGAT\xd3RIO"),email:v.string().min(5,"Email muito curto.").max(255,"Email deve ter menos 255 letras.").email("Email Inv\xe1lido").required("Este campo \xe9 OBRIGAT\xd3RIO"),idade:v.number().min(16,"Voc\xea ainda n\xe3o \xe9 adulto.").positive("N\xfamero tem que mais que um.").integer("N\xfamero Inv\xe1lido para ser idade").required("Este campo \xe9 OBRIGAT\xd3RIO"),telefone:v.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Numero de telefone n\xe3o \xe9 valido.").required("Este campo \xe9 OBRIGAT\xd3RIO.")},k=v.object().shape(y),E=function(n){var e=n.children,t="flex red margin-bottom-one-and-a-half margin-left-two-point font-normal hover cursor-pointer errors ",o=Object(r.useState)(!0),i=Object(l.a)(o,2),m=i[0],d=i[1];return a.a.createElement("span",{className:m?t:t.concat("x-display"),onClick:function(){d(!1)},title:"Pode remover isso com clique caso incomda voc\xea."},e)},_=function(){return a.a.createElement("label",{htmlFor:"nome"},a.a.createElement("span",null,"Nome"),a.a.createElement("strong",null,a.a.createElement("abbr",{className:"red-white",title:"This is required."},"*")))},N=function(){return a.a.createElement("label",{htmlFor:"idade"},"Idade",a.a.createElement("strong",null,a.a.createElement("abbr",{className:"red-white",title:" This is required. "},"*")))},z=function(){return a.a.createElement("label",{htmlFor:"email"},a.a.createElement("i",{className:"fas fa-envelope blue hover"})," "," Email",a.a.createElement("strong",null,a.a.createElement("abbr",{className:"red-white",title:" This is required. "},"*")))},j=function(){return a.a.createElement("label",{htmlFor:"telefone"},a.a.createElement("i",{className:"fas fa-phone-square green hover"})," "," Telefone",a.a.createElement("strong",null,a.a.createElement("abbr",{className:"red-white",title:" This is required. "},"*")))},O=t(65);function q(){var n=Object(d.a)(["\n    .navbar {\n        margin: 0;\n\n        display: flex;\n        flex: 1 1;\n        justify-content: flex-start;\n        align-items: center;\n\n        color: white;\n        font-size: 1.6rem;\n        position: fixed;\n        z-index: 1;\n\n        outline: 0.2px white solid;\n    }\n\n    .navbar__brand {\n        width: 1.6rem;\n        height: 1.6rem;\n    }\n\n    .navbar__youtube {\n        width: 2rem;\n        height: 2rem;\n        margin-right: 0.1rem;\n    }\n\n    .navbar__list {\n        height: 5.6rem;\n        line-height: 5.6rem;\n        margin-right: 1.6rem;\n    }\n\n    .navbar__list__search {\n        margin-right: 6rem;\n        font-size: 1.7rem;\n    }\n\n    .link--active {\n        text-shadow: 0 0 1rem yellow;\n    }\n\n    .search-container {\n        width: 10rem;\n    }\n\n    .search-icon {\n        font-size: 2rem;\n    }\n\n    .navbar__current {\n        text-shadow: 0 0 1rem yellow;\n    }\n\n    .navbar__list__last {\n        margin-right: 7.5rem;\n    }\n\n    /* @media all and (max-width: 96rem) {\n\n        li:not(:first-child):not(:nth-child(2)):not(:last-child) {\n            display: none;\n        }\n\n        .box-shadow-menu:before {\n            left: -1rem;\n        }\n\n        .navbar__list__search {\n            margin-right: 6rem;\n        }\n    } */\n\n    @media all and (max-width: 67.2rem) {\n        li:not(:first-child):not(:nth-child(2)):not(:last-child) {\n            display: none;\n        }\n\n        .box-shadow-menu:before {\n            left: -1rem;\n        }\n\n        .navbar__list__search {\n            margin-right: 6rem;\n        }\n\n        .search-input {\n            /* padding: 1.6rem;\n            margin-top: 0;\n            font-size: 2rem;\n            position: absolute;\n            left: 0;\n            width: calc(100vw - 10rem); */\n            \n            /* padding: 1.1rem; */\n            /* margin: 0.2rem; */\n            \n            padding: 1.25rem;\n            margin: 0.25rem;\n\n            font-size: 2.5rem;\n            position: absolute;\n            left: 0;\n            width: calc(100vw - 8.5rem);\n        }\n    }\n\n    @media all and (max-width: 48rem) {\n\n    }\n\n    @media all and (max-width: 38.4rem) {\n        li:not(:first-child):not(:last-child) {\n            display: none;\n        }\n        /* li:not(:first-child):not(:last-child):not(:nth-child(2)) {\n            display: none;\n        } */\n    }\n"]);return q=function(){return n},n}var S=s.a.header.attrs({className:"fixed border-white index-one"})(q()),T=function(n){return a.a.createElement(S,n)},I=function(){var n="navbar__list cursor-pointer hover";return a.a.createElement(T,null,a.a.createElement("nav",null,a.a.createElement("ul",{className:"\n        navbar border max-width no-list-style\n        theme-black x-overflow text-center no-text-decoration\n        transition width-vw\n\t",role:"navigation"},a.a.createElement("li",{className:n,key:Object(O.key)()},a.a.createElement("a",{href:"https://www.steadylearner.com/blog",className:"white no-text-decoration font-normal hover transition-half",target:"_blank",rel:"noopener noreferrer",title:"Steadylearner Blog"},"\xa9ode")),a.a.createElement("li",{className:n.concat(" left-auto margin-right-six"),key:Object(O.key)()},a.a.createElement("span",{className:"border-white pad-button",title:"Clique para come\xe7ar a usar esse site."},"Sign Up")))))},F=function(){return a.a.createElement("a",{href:"https://www.youtube.com/channel/UCt_jsJOe91EVjd58kHpgTfw",className:"no-text-decoration hover-more-opacity transition-half",target:"_blank",rel:"noopener noreferrer",title:"Steadylearner YouTube"},a.a.createElement("i",{class:"fab fa-youtube red"}))},R=function(){return a.a.createElement("a",{href:"https://twitter.com/steadylearner_p",className:"no-text-decoration hover transition-half",target:"_blank",rel:"noopener noreferrer",title:"Steadylearner YouTube"},a.a.createElement("i",{class:"fa fa-twitter blue margin-left-one"}))},C=function(){return a.a.createElement("a",{href:"https://github.com/steadylearner",className:" no-text-decoration white flex center font-normal hover transition-half ",target:"_blank",rel:"noopener noreferrer",title:"Steadylearner GitHub"},a.a.createElement("span",{className:"white font-normal fab fa-github"},a.a.createElement("span",{className:"margin-left-half red-white"},"Steadylearner")))},D=t(68);function Y(){var n=Object(d.a)(["\n    ","\n\n    color: white;\n\n    &:hover {\n        opacity: 0.7;\n    }\n"]);return Y=function(){return n},n}function B(){var n=Object(d.a)(["\n    ","\n"]);return B=function(){return n},n}var A="\n    text-decoration: none;\n    outline: none;\n\n    &:focus,\n    &:hover,\n    &:visited,\n    &:link, {\n        text-decoration: none;\n    }\n",L=(Object(s.a)(D.a)(B(),A),Object(s.a)(D.b)(Y(),A),function(){return a.a.createElement("footer",{className:"fixed sub nav-height width-vw theme-black border-white center"},a.a.createElement(C,null))}),G=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)({}),d=Object(l.a)(i,2),s=d[0],c=d[1],h=s.nome,u=s.email,p=s.idade,g=s.telefone,b="form-button x-outline hover white cursor-pointer x-border-style ";return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null),a.a.createElement(x,null,a.a.createElement("section",{className:"flex"},a.a.createElement("h1",{className:"sign-up"},a.a.createElement("span",null,"\xa9")," "," Sign Up"),a.a.createElement("section",{className:"left-auto flex center font-two-and-a-half social"},a.a.createElement(F,null),a.a.createElement(R,null))),a.a.createElement(m.d,{initialValues:{nome:"",email:"",idade:"",telefone:""},validationSchema:k,onSubmit:function(n,e){var t=e.setSubmitting;setTimeout(function(){o(!0),c(n),t(!1)},500)}},function(n){var e=n.dirty,t=n.handleReset,r=n.isSubmitting;return n.errors,a.a.createElement(m.c,null,a.a.createElement(_,null),a.a.createElement(m.b,{id:"nome",name:"nome",type:"text",minLength:"2",maxLength:"50",placeholder:"Steady Learner"}),a.a.createElement(m.a,{name:"nome",component:E}),a.a.createElement(N,null),a.a.createElement(m.b,{id:"idade",name:"idade",type:"number",min:"16",max:"80",placeholder:"16",step:"1"}),a.a.createElement(m.a,{name:"idade",component:E}),a.a.createElement(z,null),a.a.createElement(m.b,{id:"email",name:"email",type:"email",minLength:"5",maxLength:"255",placeholder:"steady@learner.com"}),a.a.createElement(m.a,{name:"email",component:E}),a.a.createElement(j,null),a.a.createElement(m.b,{id:"telefone",name:"telefone",type:"tel",minLength:"10",maxLength:"25",placeholder:"11 11111-1111"}),a.a.createElement(m.a,{name:"telefone",component:E}),a.a.createElement("section",{className:"center margin-bottom-half"},a.a.createElement("button",{className:b.concat("theme-red"),type:"button",onClick:t,disabled:!e||r,title:"You can use this only to reset the form."},a.a.createElement("i",{className:"fas fa-eraser"})," "," Reset"),a.a.createElement("button",{className:b.concat("theme-blue"),type:"submit",disabled:r},a.a.createElement("i",{className:"fas fa-user-edit"})," "," Submit")))}),a.a.createElement(f,{modalIsOpen:t,nome:h,email:u,idade:p,telefone:g,setModal:o})),a.a.createElement(L,null))};function M(){var n=Object(d.a)(['\n  /* Default Theme for Background use this or theme-white-black */\n  /* background: url("/static/images/tile/ef_relevant.jpg"); */\n\n  /* @media all and (max-width: 66rem) Remove background when it is not needed more */\n\n  /*  */\n\n  ',"\n  ",'\n\n  .heart {\n    position: relative;\n    width: 4.5rem;\n    height: 4.5rem;\n  }\n\n  .heart::before,\n  .heart::after {\n    position: absolute;\n    content: "";\n    left: 2.5rem;\n    top: 0;\n    width: 2.5rem;\n    height: 4rem;\n    background: red;\n    border-radius: 2.5rem 2.5rem 0 0;\n    transform: rotate(-45deg);\n    transform-origin: 0 100%;\n  }\n  .heart::after {\n    left: 0;\n    transform: rotate(45deg);\n    transform-origin: 100% 100%;\n  }\n\n  .heart--youtube {\n    z-index: 1;\n    font-size: 2rem;\n    position: absolute;\n    color: white;\n    margin-left: 1.6rem;\n    margin-top: 0.8rem;\n  }\n\n  .YouTube-heart-image {\n    width: 5.6rem;\n    /* margin-bottom: 0.5rem; */\n  }\n\n  .YouTube-cursor {\n    cursor: url("https://www.steadylearner.com/static/images/brand/Steadylearner_YouTube_s.png"), auto;\n  }\n\n /* content */\n\n  .default-padding {\n    padding: 0.5rem;\n  }\n\n  .pad-button {\n    padding: 1rem;\n  }\n\n  /* Remove this later */\n\n  .default-padding-small {\n    padding: 0.1rem;\n  }\n\n  .padding-a-point {\n    padding: 0.1rem;\n  }\n\n  .padding-two-point {\n    padding: 0.2rem;\n  }\n\n  .padding-left-a-quarter {\n    padding-left: 0.25rem;\n  }\n\n  .padding-right-a-quarter {\n    padding-right: 0.25rem;\n  }\n  .padding-top-a-quarter {\n    padding-top: 0.25rem;\n  }\n  .padding-bottom-a-quarter {\n    padding-bottom: 0.25rem;\n  }\n\n .padding-left-a-point {\n    padding-left: 0.1rem;\n  }\n\n  .padding-right-a-point {\n    padding-right: 0.1rem;\n  }\n  .padding-top-a-point {\n    padding-top: 0.1rem;\n  }\n  .padding-bottom-a-point {\n    padding-bottom: 0.1rem;\n  }\n\n  /* font */\n\n  .font-one {\n    font-size: 1rem;\n  }\n\n  .font-one-quarter {\n    font-size: 1.25rem;\n  }\n\n  .font-one-and-a-half {\n    font-size: 1.5rem;\n  }\n\n  .font-normal {\n    font-size: 1.6rem;\n  }\n\n  .font-one-and-eight {\n    font-size: 1.8rem;\n  }\n\n\n  .font-two {\n    font-size: 2rem;\n  }\n\n  .font-two-and-a-half {\n    font-size: 2.5rem;\n  }\n\n  .font-two-and-eight {\n    font-size: 2.8rem;\n  }\n\n  .font-three-and-a-point {\n    font-size: 3.1rem;\n  }\n\n  .font-three-and-four {\n    font-size: 3.4rem;\n  }\n\n  .font-three-and-six {\n    font-size: 3.6rem;\n  }\n\n  .font-four {\n    font-size: 4rem;\n  }\n\n  .font--helvetica {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .font--cursive {\n    font-family: cursive;\n  }\n\n  .bold {\n    font-weight: bold;\n  }\n\n  .uppercase {\n    text-transform: uppercase;\n  }\n\n  /* color */\n\n  .red {\n    color: red;\n  }\n\n  .red-white {\n    color: #ff7676;\n  }\n\n  .blue {\n    color: #08c;\n  }\n\n  .brown {\n    color: brown;\n  }\n\n  .green {\n    color: green;\n  }\n\n  .yellow {\n    color: yellow;\n  }\n\n  .yellow-green {\n    color: yellowgreen;\n  }\n\n  .black {\n    color: #121212;\n  }\n\n  /* Letter Space */\n\n  .letter-space--five-point {\n    letter-spacing: 0.05rem;\n  }\n\n  /* Background for colors */\n\n  .theme-black {\n    background-color: #121212;\n  }\n\n  .theme-white {\n    background-color: white;\n  }\n\n  .theme-black-white {\n    background-color: #efefef;\n  }\n\n  .theme-green {\n    background-color: green;\n  }\n\n  .theme-red {\n    background-color: red;\n  }\n  \n  .theme-blue {\n    background-color: #08c;\n  }\n\n  .theme-dark-blue {\n    background-color: #1b2638\n  }\n\n  .theme-youtube {\n    background-color: #bb0000;\n  }\n\n  /* background-images */\n\n  .theme--black-white-crossed-line {\n    background: url("/static/images/tile/black_white_crossed_lines.jpg");\n  }\n  .theme--black-white-relevant {\n    background: url("/static/images/tile/ef_relevant.jpg");\n  }\n\n  .theme--pink-pattern {\n    background: url("/static/images/tile/pink_pattern.jpg");\n  }\n\n  .theme--green-crossed-lines {\n    background: url("/static/images/tile/green_crossed_lines.jpg");\n  }\n\n  .theme--blue-square {\n    background: url("/static/images/tile/blue_square.jpg");\n  }\n\n  .theme--blue-tile {\n    background: url("/static/images/tile/blue_tile.jpg");\n  }\n\n  .theme--blue-burn {\n    background: url("/static/images/tile/blue_burn.jpg");\n  }\n\n  /*  */\n\n  .white {\n    color: #efefef;\n  }\n\n  .border-white {\n    border: 1px solid rgba(238, 238, 238, 1);\n  }\n\n  /* no series -> to x later*/\n\n  .no-text-decoration {\n    text-decoration: none;\n  }\n\n  .no-list-style {\n    list-style: none;\n    list-style-type: none;\n  }\n\n  /* Don\'t maintain layout */\n  .x-display {\n    display: none !important;\n  }\n\n  .x-input-disp\u013aay {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n  }\n\n  /* It maintains layout */\n  .x-opacity {\n    opacity: 0;\n  }\n\n  .x-outline {\n    outline: none;\n  }\n\n  .x-overflow {\n    overflow: hidden;\n  }\n\n  .x-border-style {\n    border-style: none;\n  }\n\n  .x-margin {\n    margin: 0;\n  }\n\n  .x-padding {\n    padding: 0;\n  }\n\n  .x-ul {\n    list-style: none;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  /* effect */\n\n  .hover:hover {\n    opacity: 0.7;\n  }\n\n  .hover-show {\n    opacity: 0.1;\n    :hover {\n      opacity: 1;\n    }\n  }\n\n  .underline {\n    text-decoration: underline;\n  }\n\n  .underline-hover:hover {\n    text-decoration: underline;\n    color: #121212;\n  }\n\n  .transition {\n    transition: 1s;\n  }\n\n  .transition-half {\n    transition: 0.5s;\n  }\n\n  .transition--ease-in-and-out {\n    transition: ease-in-out 1s;\n  }\n\n  .transition--ease-in-and-out-half {\n    transition: ease-in-out 0.5s;\n  }\n\n  .scale-a-point {\n    transform: scale(1.01);\n  }\n\n  .scale-five-point {\n    transform: scale(1.05);\n  }\n\n  .scale-fifteen-point {\n    transform: scale(1.15);\n  }\n\n  .scale-a-point--hover:hover {\n    transform: scale(1.01);\n  }\n\n  .scale-five-point--hover:hover {\n    transform: scale(1.05);\n  }\n\n  .scale-fifteen-point--hover:hover {\n    transform: scale(1.15);\n  }\n\n  .cursor-pointer {\n    cursor: pointer;\n  }\n\n  .cursor-auto {\n    cursor: auto;\n  }\n\n  .cursor-default {\n    cursor: auto;\n  }\n\n  .text-shadow-white {\n    text-shadow: 0 0 0.5rem white;\n  }\n\n  .text-shadow-white-black {\n    text-shadow: 0 0 0.5rem #efefef;\n  }\n\n  .text-shadow-black {\n    text-shadow: 0 0 0.5rem #121212;\n  }\n\n  .text-shadow-black-hover:hover {\n    text-shadow: 0 0 1rem #121212;\n  }\n\n  .text-shadow-black-hover--l:hover {\n    text-shadow: 0 0 0.2rem #121212;\n  }\n\n  .text-shadow-blue-hover--l:hover {\n    text-shadow: 0 0 0.2rem #08c;\n  }\n\n  .text-shadow-blue-hover:hover {\n    text-shadow: 0 0 1rem #08c;\n  }\n\n  .text-shadow-red-hover:hover {\n    text-shadow: 0 0 1rem #ff7676;\n  }\n\n  .text-shadow-red-hover--l:hover {\n    text-shadow: 0 0 0.2rem #ff7676;\n  }\n\n  .text-shadow-yellow:hover {\n    text-shadow: 0 0 1rem yellow;\n  }\n\n  .text-shadow-yellow-l:hover {\n    text-shadow: 0 0 0.2rem yellow;\n  }\n\n  .link--active-yellow {\n    text-shadow: 0 0 1rem yellow;\n  }\n\n  .thumbnail {\n    transition: transform 1s ease;\n\n    :hover {\n      opacity: 0.8;\n      box-shadow: 0 0 0.5rem rgba(0, 130, 176, 0.8);\n      cursor: pointer;\n    }\n  }\n\n  /* position */\n\n  .fixed {\n    position: fixed;\n  }\n\n  .absolute {\n    position: absolute;\n  }\n\n  .sticky {\n    position: sticky;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .index-one {\n    z-index: 1;\n  }\n\n  /* layout */\n\n  .content__main {\n    flex: 1 1 auto;\n    max-width: 64rem;\n    width: 64rem;\n    margin-left: 3rem;\n    margin-right: 6rem;\n    margin-bottom: 1rem;\n    padding: 0 2rem;\n  }\n\n  .content__side {\n\t\tflex: 0 0 auto;\n\t\tmargin-right: 3rem;\n\t}\n\n  .margin-left-a-point {\n    margin-left: 0.1rem;\n  }\n\n  .margin-right-a-point {\n    margin-right: 0.1rem;\n  }\n\n  .margin-top-a-point {\n    margin-top: 0.1rem;\n  }\n\n  .margin-bottom-a-point {\n    margin-bottom: 0.1rem;\n  }\n\n  .margin-left-two-point {\n    margin-left: 0.2rem;\n  }\n\n  .margin-right-two-point {\n    margin-right: 0.2rem;\n  }\n  \n  .margin-top-two-point {\n    margin-top: 0.2rem;\n  }\n  \n  .margin-bottom-two-point {\n    margin-bottom: 0.2rem;\n  }\n\n  .margin-left-half {\n    margin-left: 0.5rem;\n  }\n\n  .margin-right-half {\n    margin-right: 0.5rem;\n  }\n\n  .margin-top-half {\n    margin-top: 0.5rem;\n  }\n\n  .margin-bottom-half {\n    margin-bottom: 0.5rem;\n  }\n\n  .margin-left-one {\n    margin-left: 1rem;\n  }\n\n  .margin-right-one {\n    margin-right: 1rem;\n  }\n\n  .margin-top-one {\n    margin-top: 1rem;\n  }\n\n  .margin-bottom-one {\n    margin-bottom: 1rem;\n  }\n\n  .margin-left-one-and-a-half {\n    margin-left: 1.5rem;\n  }\n\n  .margin-right-one-and-a-half {\n    margin-right: 1.5rem;\n  }\n\n  .margin-top-one-and-a-half {\n    margin-top: 1.5rem;\n  }\n\n  .margin-bottom-one-and-a-half {\n    margin-bottom: 1.5rem;\n  }\n\n  .margin-left-two {\n    margin-left: 2rem;\n  }\n\n  .margin-right-two {\n    margin-right: 2rem;\n  }\n\n  .margin-top-two {\n    margin-top: 2rem;\n  }\n\n  .margin-bottom-two {\n    margin-bottom: 2rem;\n  }\n\n  .margin-left-two-and-a-half {\n    margin-left: 2.5rem;\n  }\n\n  .margin-right-two-and-a-half {\n    margin-right: 2.5rem;\n  }\n\n  .margin-top-two-and-a-half {\n    margin-top: 2.5rem;\n  }\n\n  .margin-bottom-two-and-a-half {\n    margin-bottom: 2.5rem;\n  }\n\n  .margin-left-four {\n    margin-left: 4rem;\n  }\n\n  .margin-right-four {\n    margin-right: 4rem;\n  }\n\n  .margin-top-four {\n    margin-top: 4rem;\n  }\n\n  .margin-bottom-four {\n    margin-bottom: 4rem;\n  }\n\n  .margin-right-six {\n    margin-right: 6rem;\n  }\n\n  .padding-left-four {\n    padding-left: 4rem;\n  }\n\n  .padding-right-four {\n    padding-right: 4rem;\n  }\n\n  .padding-top-four {\n    padding-top: 4rem;\n  }\n\n  .padding-bottom-five {\n    padding-bottom: 5rem;\n  }\n\n  .padding-left-five {\n    padding-left: 5rem;\n  }\n\n  .padding-right-five {\n    padding-right: 5rem;\n  }\n\n  .padding-top-five {\n    padding-top: 5rem;\n  }\n\n  .padding-bottom-four {\n    padding-bottom: 5rem;\n  }\n\n  .padding-left-fifteen {\n    padding-left: 15rem;\n  }\n\n  .padding-right-fifteen {\n    padding-right: 15rem;\n  }\n\n  .padding-top-fifteen {\n    padding-top: 15rem;\n  }\n\n  .padding-bottom-fifteen {\n    padding-bottom: 15rem;\n  }\n\n\n\n  .text-init {\n    margin-left: 1rem;\n  }\n\n  .text-end {\n    margin-right: 1rem;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .border {\n    border-radius: 0.5rem;\n    /* border-radius: 0.2rem; */\n  }\n\n  .border-round {\n    border-radius: 50%;\n  }\n\n  .border-top-large-black {\n    border-top: 0.6rem solid #121212;\n  }\n\n  .border-left-large-black {\n    border-left: 0.6rem solid #121212;\n  }\n\n  .border-top-large-blue {\n    border-top: 0.6rem solid #08c;\n  }\n\n  .border-left-large-blue {\n    border-left: 0.6rem solid #08c;\n  }\n\n  .border-top-yellow {\n    border-top: 0.2rem solid yellow;\n  }\n\n  .border-left-yellow {\n    border-left: 0.2rem solid yellow;\n  }\n\n  .border-top-blue {\n    border-top: 0.2rem solid #08c;\n  }\n\n  .border-left-blue {\n    border-left: 0.2rem solid #08c;\n  }\n\n  .hover-round:hover {\n    border-radius: 50%;\n  }\n\n  .width-default {\n    width: 65rem;\n  }\n\n  .width-two-and-a-half {\n    width: 2.5rem;\n  }\n\n  .width-four {\n    width: 4rem;\n  }\n\n  .width-five {\n    width: 5rem;\n  }\n\n  .width-five-point-six {\n    width: 5,6rem;\n  }\n\n  .width-vw {\n    width: 100vw;\n  }\n\n  .width-percent {\n    width: 100%;\n  }\n\n  .height-percent {\n    height: 100%;\n  }\n\n  .min-height-percent {\n    min-height: 100%;\n  }\n\n  .min-height-vh {\n    min-height: 100vh;\n  }\n\n  .height-vh {\n    height: 100vh;\n  }\n\n  .height-two-and-a-half {\n    height: 2.5rem;\n  }\n\n  .max-width {\n    max-width: 100%;\n  }\n\n  .max-width-sixty-four {\n    max-height: 64rem;\n  }\n\n  .max-height-thirty-six {\n    max-height: 36rem;\n  }\n\n  .left-auto {\n    margin-left: auto;\n  }\n\n  .right-auto {\n    margin-right: auto;\n  }\n\n  .center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .center-percent-absolute {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .center-percent-relative {\n    position: relative;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .flex-flow-row {\n    flex-flow: row;\n  }\n\n  .flex-flow-column {\n    flex-flow: column;\n  }\n\n  .column-center {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .column-center-start {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n  }\n\n  .background-cover {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  .background-percent {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n\n  .no-repeat {\n    background-repeat: no-repeat;\n  }\n\n  .position-center {\n    background-position: center;\n  }\n\n  .cover {\n    background-size: cover;\n  }\n\n  .activeYellow {\n    color: yellow;\n  }\n\n  .uppercase {\n    text-transform: uppercase;\n  }\n\n  /* color */\n\n  .red {\n    color: red;\n  }\n\n  .youtube-red {\n    color: #bb0000;\n  }\n\n  .red-white {\n    color: #ff7676;\n  }\n\n  .blue {\n    color: #08c;\n  }\n\n  .green {\n    color: green;\n  }\n\n  .yellow {\n    color: yellow;\n  }\n\n  .yellow-green {\n    color: yellowgreen;\n  }\n\n  .forest-green {\n    color: forestgreen;\n  }\n\n  .black {\n    color: #121212;\n  }\n\n  .white {\n    color: #efefef;\n  }\n\n  .border-white {\n    border: 1px solid rgba(238, 238, 238, 1);\n  }\n\n\n  /* no series */\n  .no-text-decoration {\n    text-decoration: none;\n  }\n\n  .no-list-style {\n    list-style: none;\n    list-style-type: none;\n  }\n\n  .x-outline {\n    outline: none;\n  }\n\n  .x-overflow {\n    overflow: hidden;\n  }\n\n  .x-border-style {\n    border-style: none;\n  }\n\n  .x-margin {\n    margin: 0;\n  }\n\n  .x-padding {\n    padding: 0;\n  }\n\n  /* effects */\n\n  .opacity {\n    opacity: 0.8;\n  }\n\n  .more-opacity {\n    opacity: 0.5;\n  }\n\n  .opacity--a-point {\n    opacity: 0.1\n  }\n\n  .hover:hover {\n    opacity: 0.8;\n  }\n\n  .hover-more-opacity:hover {\n    opacity: 0.5;\n  }\n\n  .hover-theme-black:hover {\n    background-color: #121212;\n  }\n\n  .hover-blue:hover {\n    color: #08c;\n  }\n\n  .hover-red:hover {\n    color: red;\n  }\n\n  .hover-black:hover {\n    color: black;\n  }\n\n  .hover-white-black:hover {\n    color: #efefef;\n  }\n\n  .hover-white:hover {\n    color: white;\n  }\n\n  .hover-red-white:hover {\n    color: #ff7676;\n  }\n\n  .hover-green:hover {\n    color: green;\n  }\n\n  .cursor-pointer {\n    cursor: pointer;\n  }\n\n  .text-shadow-yellow:hover {\n    text-shadow: 0 0 10px yellow;\n  }\n\n  .link--active-blue {\n    text-shadow: 0 0 0.5rem #08c;\n  }\n\n  .link--active-red {\n    text-shadow: 0 0 0.5rem red;\n  }\n\n  .link--active-yellow {\n    text-shadow: 0 0 10px yellow;\n  }\n\n  .thumbnail {\n    transition: transform 1s ease;\n\n    :hover {\n      opacity: 0.8;\n      box-shadow: 0 0 0.5rem rgba(0, 130, 176, 0.8);\n      cursor: pointer;\n    }\n  }\n\n  .box-shadow-black {\n    box-shadow: 0 0 0.5rem 0.1rem #121212;\n  }\n\n  .box-shadow-white {\n    box-shadow: 0 0 0.5rem 0.1rem white;\n  }\n\n  .box-shadow-white-black {\n    box-shadow: 0 0 0.5rem 0.1rem #efefef;\n  }\n\n  .box-shadow-red {\n    box-shadow: 0 0 0.5rem 0.1rem red;\n  }\n\n  .box-shadow-green {\n    box-shadow: 0 0 0.5rem 0.1rem forestgreen;\n  }\n\n  .box-shadow-blue {\n    box-shadow: 0 0 0.5rem 0.1rem #08c;\n  }\n\n  .box-shadow-white-red {\n    box-shadow: 0 0 0.5rem 0.1rem #ff7676;\n  }\n\n  .in-box-shadow-black {\n    box-shadow: inset 0 0 0.2rem 0.1rem #121212;\n  }\n\n  .in-box-shadow-blue {\n    box-shadow: inset 0 0 0.2rem 0.1rem #08c;\n  }\n\n  /* position */\n\n  .fixed {\n    position: fixed;\n  }\n\n  .absolute {\n    position: absolute;\n  }\n\n  .sticky {\n    position: sticky;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .index-one {\n    z-index: 1;\n  }\n\n  .index-ten {\n    z-index: 10;\n  }\n\n  /* layout */\n\n  .main-width {\n    width: 66rem;\n  }\n\n  .side-width {\n    width: 29.2rem;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .border {\n    border-radius: 0.2rem;\n  }\n\n  .border-half {\n    border-radius: 0.5rem;\n  }\n\n  .border-round {\n    border-radius: 50%;\n  }\n\n  .hover-round:hover {\n    border-radius: 50%;\n  }\n\n  .width-vw {\n    width: 100vw;\n  }\n\n  .width-percent {\n    width: 100%;\n  }\n\n  .height-percent {\n    height: 100%;\n  }\n\n  .height-vh {\n    height: 100vh;\n  }\n\n  .max-width {\n    max-width: 100%;\n  }\n\n  .flex {\n    display: flex;\n  }\n\n  .left-auto {\n    margin-left: auto;\n  }\n\n  .right-auto {\n    margin-right: auto;\n  }\n\n  .center-auto {\n    margin: auto;\n  }\n\n  .center-auto-margin {\n    margin: 0 auto;\n  }\n\n  .center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .center-percent-absolute {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .center-percent-relative {\n    position: relative;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .column-center {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .inline {\n    display: inline;\n  }\n\n  .background-cover {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  .background-percent {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n\n  .nav-height {\n    height: 5.6rem;\n  }\n\n  .padding-for-nav {\n    padding-top: 5.6rem;\n  }\n\n  .activeYellow {\n    color: yellow;\n  }\n\n  .box-shadow-menu {\n    position: relative;\n    padding-left: 1.25em;\n  }\n\n  /* scroll */\n\n  .oveflow-x-scroll {\n    overflow-x: scroll;\n  }\n\n  /* To fix it to the top, use it with fixed, use it for share at mobile mode */\n\n  .top {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  /* To fix it to the bottom, use it with fixed, use it for share at mobile mode */\n  .sub {\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .sub-navbar--about--s {\n    display: none;\n  }\n\n  .sub-navbar--share {\n    display: none;\n  }\n\n  /* blog */\n\n\t.content-break {\n\t\t/* margin-top: 2rem; */\n\t\tmargin-top: 1rem;\n    margin-left: 0.2rem;\n    margin-right: 0.2rem;\n\t\topacity: 0.7rem;\n\t}\n\n  .scroll-top {\n\t\tmargin-left: auto;\n\t\ttext-transform: capitalize;\n\t\tcursor: pointer;\n    margin-top: 0.5rem;\n    display: none;\n\n    /* remove two lines below if you don\'t like this */\n    position: fixed;\n    right: 2rem;\n    bottom: 2rem;\n    /* bottom: 6.5rem; */\n    /*  */\n    font-size: 2rem;\n\n\t\t:hover {\n\t\t\topacity: 0.8;\n\t\t\tcolor: red;\n\t\t}\n\t}\n\n  /* Side */\n\n  .aside {\n    max-width: 29.2rem;\n    /* position: absolute;\n    top: 4rem;\n    right: 12rem; */\n    /* right: 28rem; */\n    /* width: 29.2rem; */\n  }\n\n  .stager-wrapper {\n    width: 3.6px;\n    height: 3.6px;\n    position: absolute;\n    z-index: 3;\n  }\n\n  .stager {\n    border-radius: 50%;\n    background-color: white;\n    width: 5rem;\n    height: 5rem;\n    border: 0.5rem solid white;\n    position: absolute;\n    background-size: 10rem;\n    background-repeat: none;\n    background-position: center;\n  }\n\n  /* filter */\n\n  .filter-grayscale {\n    filter: grayscale(100%);\n  }\n\n  .filter-contrast {\n    filter: contrast(250%);\n  }\n\n  /* Steadylearner */\n\n  .steadylearner-brand--s {\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 0.2rem;\n  }\n\n  /* programming languages */\n\n  .programming-language--javacript {\n    padding-left: 0.15rem;\n    padding-right: 0.15rem;\n  }\n\n  /* media query */\n\n  .appear-at-mobile {\n      display: none;\n  }\n\n  .appear-at-mobile--flex {\n      display: none;\n  }\n\n  .disappear-at-mobile {\n    display: inheirt !important;\n  }\n\n  .disappear-at-mobile--slowly {\n    display: inheirt !important;\n  }\n\n  @media all and (max-width: 75.6rem) {\n\n    .content__main-wrapper {\n      width: 100vw;\n    }\n\n    .content__main {\n      margin: 0 auto 1rem;\n      /* margin: 0 auto; */\n      padding: 0 1rem;\n    }\n\n    .content__side {\n      section {\n        display: none;\n        margin-right: 0;\n      }\n    }\n\n    /* for containers, You may write various features here.*/\n    padding-bottom: 5.6rem;\n    /* padding-bottom: 3.7rem; */\n    /* .for-sub-navbar--share {\n      padding-bottom: 3.7rem;\n    } */\n\n    .margin-for-sub-navbar {\n      margin-bottom: 5.6rem\n    }\n\n    .sub-navbar--about {\n      display: none;\n    }\n\n    .sub-navbar--about--s {\n      display: flex;\n    }\n\n    .scroll-top {\n      opacity: 0.5;\n      font-size: 2.5rem;\n    }\n\n    /* You don\'t need print feature other than computers */\n    .print {\n      display: none;\n    }\n\n    .appear-at-mobile {\n      display: inherit;\n    }\n\n    .appear-at-mobile--flex {\n      display: flex;\n    }\n\n    .disappear-at-mobile {\n      display: none;\n    }\n\n    .no-background-at-mobile {\n      background: none;\n    }\n  }\n\n  /* For mobile share components */\n\n  .mobile-share__components {\n    display: block;\n    text-align: center;\n    transition: all 0.6s ease;\n    color: white;\n    /* margin-right: 0.01rem; */\n  }\n\n  /*  */\n\n  @media all and (max-width: 66rem) {\n    .content__main {\n      width: inherit;\n    }\n  }\n\n   /* When device size is closer to main cotent, remove side contents */\n\n  @media all and (max-width: 48rem) {\n    background: none;\n    .theme--black-white-crossed-line, \n    .theme--black-white-relevant, \n    .theme--pink-pattern, \n    .theme--green-crossed-lines, \n    .theme--blue-square, \n    .theme--blue-tile, \n    .theme--blue-burn {\n      background: none;\n    }\n    .sub-navbar--about--s {\n      display: none;\n    }\n    .sub-navbar--share {\n      display: flex;\n    }\n\n    .disappear-at-mobile {\n      display: none !important;\n    }\n\n    /* .display-none-at-480px {\n      display: none\n    }\n\n    .display-flex-at-480px {\n      display: flex;\n    } */\n\n    .YouTube-heart-image {\n      width: 4.8rem;\n      /* margin-bottom: 0.5rem; */\n    }\n  }\n\n  @media all and (max-width: 38.4rem) {\n    .disappear-at-mobile--slowly {\n      display: none !important;\n    }\n  }\n\n  /*  */\n\n  @media all and (max-height: 38.4rem) {\n\t\t.disappear-at-mobile {\n      display: none !important;\n    }\n  }\n\n  @media all and (max-height: 27.6rem) {\n    .disappear-at-mobile--slowly {\n      display: none !important;\n    }\n  }\n']);return M=function(){return n},n}var U=s.a.section(M(),"",""),V=function(n){return a.a.createElement(U,n)};t(272);var H=document.getElementById("root");i.a.render(a.a.createElement(function(){return a.a.createElement("section",{className:"App"},a.a.createElement(V,null,a.a.createElement(G,null)))},null),H)}},[[121,1,2]]]);
//# sourceMappingURL=main.7841ea30.chunk.js.map