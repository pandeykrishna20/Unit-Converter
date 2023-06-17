var meter= document.getElementById('meter');
var cm=document.getElementById('cm');
meter.addEventListener('input' , function(){
let f =this.value;
let i=f*100;
cm.value=i;
});

cm.addEventListener('input' , function() {
let i = this.value;
let f =i/100;
 if(!Number.isInteger(f)){
 f=f.toFixed(2);
 } 
meter.value=f;
});