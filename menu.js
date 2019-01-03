document.getElementsByTagName("NAV")[0].innerHTML = "    <ul>" +
"      <li><a href=\"MBHS.html\" class=\"homeLink\"><b>Home<\/b><\/a><\/li>" +
"      <li><a href=\"CTE.html\" class=\"homeLink\">CTE<\/a><\/li>" +
"      <li><a href=\"TSA.html\">TSA<\/a><\/li>" +
"    <\/ul>";

console.log("hi");

window.onscroll = function(e){
  var direction = this.oldScroll > this.scrollY;
  // console.log(direction);
  if(this.oldScroll - this.scrollY > 5 || this.oldScroll - this.scrollY < -5){
    document.getElementsByTagName("NAV")[0].style.position = 'fixed';
    show(direction);
  }
  if(this.scrollY <= 10){
    show(true);
    document.getElementsByTagName("NAV")[0].style.position = 'relative';
  }
  this.oldScroll = this.scrollY;
}


var show = function(a){
  // console.log("in show, a = " + a);
  if(a == true){
    document.getElementsByTagName("NAV")[0].style.top = '0px';
  }else{
    document.getElementsByTagName("NAV")[0].style.top = '-100px';
  }
}
