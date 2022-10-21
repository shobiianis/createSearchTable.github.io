
var std1={
    sName:"FARAZ",
    rollNO:10001,
    sec:"A"

}
var std2={
    sName:"Ahmed",
    rollNO:10002,
    sec:"C"

}
var std3={
    sName:"FARAZ",
    rollNO:10003,
    sec:"C"

}
var std4={
    sName:"WAHAB",
    rollNO:10004,
    sec:"C"

}
var std5={
    sName:"MALIK",
    rollNO:10005,
    sec:"E"

}
var std6={
    sName:"AHMED",
    rollNO:10006,
    sec:"D"

}
var std7={
    sName:"SHOAIB",
    rollNO:10007,
    sec:"B"

}
var std8={
    sName:"KAMIL",
    rollNO:10008,
    sec:"B"

}
var std9={
    sName:"AIMEN",
    rollNO:10009,
    sec:"B"

}
var std10={
    sName:"AINA",
    rollNO:10010,
    sec:"D"

}
parent=document.getElementById("parent");   

var array=[std1,std2,std3,std4,std5,std6,std7,std8,std9,std10]
parent.innerHTML +=`<div class="table123"><table>
<thead>

<td>NAME</td>
<td>Roll No</td>
<td>Section</td>
</thead>
 
`

for(var i=0;i<array.length;i++){

parent.innerHTML +=`
<table>
<tr>
  <td>${array[i].sName}</td>
  <td>${array[i].rollNO}</td>
  <td>${array[i].sec}</td>
</tr>

</table>
</div>`
}


var inputValue,j;
function showInput(){
 inputValue=document.getElementById("input").value;
for(var i=0;i<array.length;i++){
if( array[i].rollNO==inputValue){
  
    j=i;
   
}

   
}
parent.innerHTML = `<div class="table123"><table>
<thead>

<td>NAME</td>
<td>Roll No</td>
<td>Section</td>
</thead>
<tr>
<td>${array[j].sName}</td>
<td>${array[j].rollNO}</td>
<td>${array[j].sec}</td>
</tr>
</table>
`
}

// parent.innerHTML +=`<div class="table123"><table>
// <thead>

// <td>NAME</td>
// <td>Roll No</td>
// <td>Section</td>
// </thead>
// <tr>
// <td>${array[j].sName}</td>
// <td>${array[j].rollNO}</td>
// <td>${array[j].sec}</td>
// </tr>
// </table>
// `