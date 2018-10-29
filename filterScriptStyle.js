var s=document.getElementsByTagName("SCRIPT");
for(var i=0; i<s.length; i++) {
if(!(s[i].src=="")) {
document.getElementsByTagName("SCRIPT")[i].externalHTML="<scri"+"pt>"+require(s[i].src)+"</scri"+"pt>";
}
}
var st=document.getElementsByTagName("LINK");
for(var i=0; i<st.length; i++) {
if(st[i].rel=="stylesheet") {
if(!(st[i].href=="")) {
document.getElementsByTagName("LINK")[i].externalHTML="<style>"+require(st[i].src)+"</style>";
}
}
}
