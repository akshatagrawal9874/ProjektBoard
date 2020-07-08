function check(ele){
    if(event.key=='Enter'){
        let li=document.querySelector("#list-1");
        let item=document.createElement("li");
        let t=ele.value.toUpperCase();
        let tex=document.createTextNode(t);        
        item.appendChild(tex);
        li.appendChild(item);
        console.log(li);
        ele.value="";
    }
}