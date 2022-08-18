//Changing labels to uppercase so I don't need to do it one by one.
let labele=document.querySelectorAll("label");
for(let i=0;i<labele.length;i++){
    let vece=labele[i].innerText.toUpperCase();
    labele[i].innerText=vece;
}

//Active states
let gumb=document.querySelector("button");
let sviUlazi=document.querySelectorAll("input");
let errors=document.querySelectorAll("h5");
let forma=document.querySelector(".desno");
let complete=document.querySelector(".drugiDesno");

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
function brojKartice(i){
    document.querySelector(".gornja h1").innerText=sviUlazi[i].value;
}
function prazno(i,putanja,tekst){
    document.querySelector(putanja).innerText=tekst;
}
gumb.addEventListener("click",e=>{ 
    e.preventDefault();

    let brojErrora=0;
    for(let i=0;i<sviUlazi.length;i++){
        if(sviUlazi[i].value===""){
            errors[i].style.display="block";
            errors[i].innerText="Can't be blank";
            sviUlazi[i].style="border-color:hsl(0, 100%, 66%);";
            brojErrora++;
        }
        else{
           errors[i].style.display="none";
           sviUlazi[i].style="border-color:hsl(270, 3%, 87%)";
        }  
        if(i===0){
            if(sviUlazi[i].value.length===0){
                prazno(i,".name","JANE APPLESEED");
            }
            else{
                document.querySelector(".name").innerText=sviUlazi[i].value.toUpperCase();
            }
        }
        if(i===1){
            if(sviUlazi[i].value.length===0){
                prazno(i,".gornja h1","0000 0000 0000 0000");
            }
            else{
            let brojRazmaka=0;
            let imaLiSlova=containsAnyLetter(sviUlazi[1].value);

            for(let j=0;j<sviUlazi[1].value.length;j++){
                if(sviUlazi[1].value.charAt(j)===" "){
                    brojRazmaka++;
                }
            }
            if(sviUlazi[1].value.length<19 && (brojRazmaka!==3 || imaLiSlova===true)){
                errors[i].style.display="block";
                errors[i].innerText="Wrong format, numbers only";
                sviUlazi[i].style="border-color:hsl(0, 100%, 66%);";
                brojErrora++;
                brojKartice(i);
            }
            else{
                errors[i].style.display="none";
                sviUlazi[i].style="border-color:hsl(270, 3%, 87%)";
                brojKartice(i);
            }
        }
        }
        if(i===2){
            if(sviUlazi[i].value.length===0 || sviUlazi[i+1].value.length===0){
                prazno(i,".year","00/00");
            }
            else{
            if(sviUlazi[i].value.length===1){
                document.querySelector(".year").innerText="0"+sviUlazi[i].value+"/"+sviUlazi[i+1].value;
            }
            else{
                document.querySelector(".year").innerText=sviUlazi[i].value+"/"+sviUlazi[i+1].value;
            }
        }
        }
        if(i===4){
            if(sviUlazi[i].value.length===0){
                prazno(i,".donja span","000");
            }
            else{
                document.querySelector(".donja span").innerText=sviUlazi[i].value;
            }
        }
    }
    if(brojErrora===0){
        forma.style.display="none";
        complete.style.display="block";
    }
});

//Complete state
let thank=document.querySelector(".complete h1");
thank.innerText=thank.innerText.toUpperCase();

let nastavi=document.querySelector(".complete button");
nastavi.addEventListener("click",e=>{
    e.preventDefault();

    forma.style.display="block";
    complete.style.display="none";
    for(let i=0;i<sviUlazi.length;i++){
        sviUlazi[i].value="";
        prazno(i,".name","JANE APPLESEED");
        prazno(i,".gornja h1","0000 0000 0000 0000");
        prazno(i,".year","00/00");
        prazno(i,".donja span","000");
    }
    
});
