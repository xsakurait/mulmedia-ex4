window.document.write("これはJavaScriptで書き込み！<br>")

let mind = window.confirm("まじめに取り組みますか？");
window.document.write(mind);

if(mind===true){
    window.alert("安心です！");
    window.document.write("<br>");
}
else{
    window.alert("社会で心配です！");
    window.document.write("<br>");
}

window.document.write("<br>書き込みを終えました!");