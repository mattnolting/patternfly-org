(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1009:function(t,e,a){"use strict";var n=a(2),r=a.n(n),i=a(1),l=a.n(i),c=a(756),o=a.n(c),h=a(1846),s=a(768),b=a(799),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},m={"":l.a.any},d=function ChartDonut(t){return r.a.createElement(h.a,u({innerRadius:88,labelComponent:r.a.createElement(b.a,null),padAngle:1,theme:s.a.default},t))};o()(d,h.a),d.propTypes=m,e.a=d},1010:function(t,e,a){"use strict";var n=a(2),r=a.n(n),i=a(1),l=a.n(i),c=a(756),o=a.n(c),h=a(1844),s={"":l.a.any},b=function ChartLabel(t){return r.a.createElement(h.a,t)};o()(b,h.a),b.propTypes=s,e.a=b},455:function(t,e,a){"use strict";a.r(e);var n=a(11),r=a.n(n),i=a(3),l=a(2),c=a.n(l),o=a(1009),h=a(1037),s=a(1010),b=a(768),u=a(58),m=a(27),d=a(724),p=function(t){function SimpleChart(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).getChart=function(t){return Object(i.b)(o.a,{data:[{x:"Cats",y:35},{x:"Dogs",y:55},{x:"Birds",y:10}],labels:e.getTooltipLabel,theme:t,height:200,width:200})},e.getLegend=function(t,e){return Object(i.b)(h.a,{data:[{name:"Cats"},{name:"Dogs"},{name:"Birds"}],orientation:e?"horizontal":"vertical",theme:t,y:e?0:55,height:e?35:200,width:200})},e.getTooltipLabel=function(t){return t.x+": "+t.y},e}return r()(SimpleChart,t),SimpleChart.prototype.render=function render(){var t=Object(i.b)("svg",{className:"chart-label",height:this.size,width:this.size},Object(i.b)(s.a,{style:{fontSize:20},text:"100",textAnchor:"middle",verticalAnchor:"middle",x:100,y:90}),Object(i.b)(s.a,{style:{fill:"#bbb"},text:"Pets",textAnchor:"middle",verticalAnchor:"middle",x:100,y:110}));return Object(i.b)(u.a,{gutter:"md"},Object(i.b)(m.a,{lg:6},Object(i.b)(d.b,{className:"chart-title",component:d.a.h2},"Blue Theme"),Object(i.b)("div",{className:"chart-inline"},Object(i.b)("div",{className:"chart-container"},t,this.getChart(b.a.light.blue)),this.getLegend(b.a.light.blue,!1))),Object(i.b)(m.a,{lg:3},Object(i.b)(d.b,{className:"chart-title",component:d.a.h2},"Multi Color Theme"),Object(i.b)("div",{className:"chart-container"},t,this.getChart(b.a.light.multi)),this.getLegend(b.a.light.multi,!0)))},SimpleChart}(c.a.Component);e.default=p}}]);