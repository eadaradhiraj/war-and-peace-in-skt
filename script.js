var sents = document.getElementsByTagName("span");
for (var i=0; i < sents.length; i++) {
  sents[i].onclick = function(){
    for (var k=0; k < sents.length; k++) { sents[k].style.color = "black"; }
    let sid = this.getAttribute("sid");
    let pid = this.getAttribute("pid");
    let items2color = document.querySelectorAll(`[sid="${sid}"][pid="${pid}"]`);
    for (var j=0; j < items2color.length; j++) {
      items2color[j].style.color = "red";
    }
  }
};