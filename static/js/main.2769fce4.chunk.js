(this.webpackJsonproman=this.webpackJsonproman||[]).push([[0],{12:function(n,t,e){},13:function(n,t,e){},15:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),c=e(3),o=e.n(c),i=(e(12),e(13),e(4)),s=e(5),u=e(7),l=e(6),C=function(n){return n.toString().slice(-1)},h=function(n){return n.toString().slice(-2,-1)},X=function(n){return n.toString().slice(-3,-2)},f=function(n){return n.toString().slice(-5,-3)};var j=function(n){var t,e="",r="",a="",c="";return n<=0?t="none":n>1e4?t="".concat(n," is too high for me!"):(1==C(n)&&(e="I"),2==C(n)&&(e="II"),3==C(n)&&(e="III"),4==C(n)&&(e="IV"),5==C(n)&&(e="V"),6==C(n)&&(e="VI"),7==C(n)&&(e="VII"),8==C(n)&&(e="VIII"),9==C(n)&&(e="IX"),1==h(n)&&(r="X"),2==h(n)&&(r="XX"),3==h(n)&&(r="XXX"),4==h(n)&&(r="XL"),5==h(n)&&(r="L"),6==h(n)&&(r="LX"),7==h(n)&&(r="LXX"),8==h(n)&&(r="LXXX"),9==h(n)&&(r="XC"),1==X(n)&&(a="C"),2==X(n)&&(a="CC"),3==X(n)&&(a="CCC"),4==X(n)&&(a="CD"),5==X(n)&&(a="D"),6==X(n)&&(a="DC"),7==X(n)&&(a="DCC"),8==X(n)&&(a="DCCC"),9==X(n)&&(a="CM"),1==f(n)&&(c="M"),2==f(n)&&(c="MM"),3==f(n)&&(c="MMM"),4==f(n)&&(c="|XL|"),5==f(n)&&(c="|L|"),6==f(n)&&(c="|LX|"),7==f(n)&&(c="|LXX|"),8==f(n)&&(c="|LXXX|"),9==f(n)&&(c="|XC|"),10==f(n)&&(c="|C|"),t=c+a+r+e),t},b=e(0),g=function(n){Object(u.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=t.call.apply(t,[this].concat(a))).state={roman:null},n.handleChange=function(t){var e=Math.round(t.target.value);n.setState({roman:j(e)})},n}return Object(s.a)(e,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("label",{children:["Arabic: ",Object(b.jsx)("input",{className:"input",onChange:this.handleChange,type:"number"})]}),Object(b.jsxs)("p",{children:["Roman: ",this.state.roman?this.state.roman:"none"]})]})}}]),e}(a.a.Component);var I=function(){return Object(b.jsx)(g,{})},d=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),c(n),o(n)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.2769fce4.chunk.js.map