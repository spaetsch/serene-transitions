!function(o){function e(t){if(n[t])return n[t].exports;var r=n[t]={exports:{},id:t,loaded:!1};return o[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=o,e.c=n,e.p="",e(0)}([function(o,e){$(document).ready(function(){console.log("in doc ready"),$("body").addClass("js");var o=$("#menu"),e=$(".menu-link");e.click(function(){return console.log("in click"),e.toggleClass("active"),o.toggleClass("active"),!1})})}]);