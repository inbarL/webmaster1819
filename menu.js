document.getElementsByTagName("NAV")[0].innerHTML = "    <ul>" +
"      <li><a href=\"MBHS.html\" class=\"homeLink\"><b>Home<\/b><\/a><\/li>" +
"      <li><a href=\"CTE.html\" class=\"homeLink\">CTE<\/a><\/li>" +
"      <li><a href=\"TSA.html\">TSA<\/a><\/li>" +
"    <\/ul>";

console.log("hi");

window.onscroll = function(e){
  var direction = this.oldScroll > this.scrollY;
  // console.log(direction);
  this.oldScroll = this.scrollY;
  show(direction);
}


var show = function(a){
  // console.log("in show, a = " + a);
  if(a == true){
    document.getElementsByTagName("NAV")[0].style.position = 'fixed';
  }else{
    document.getElementsByTagName("NAV")[0].style.position = 'relative';
  }
}
