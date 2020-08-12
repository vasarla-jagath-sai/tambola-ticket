var row0=[0,0,0,0,0,0,0,0,0]
var row1=[0,0,0,0,0,0,0,0,0]
var row2=[0,0,0,0,0,0,0,0,0]
var jaldi=0
var frow=0;
var srow=0;
var trow=0;
var rep=true;
function filler(row,r){
    let c=0
    while(c<9){
        if(row[c]!=0){
            document.getElementById("row"+r+"col"+c).value=row[c]
        }
        c+=1   
    }    
}
function loader(){
    let k=0;
    let start=[1,10,20,30,40,50,60,70,80];
    let end = [10,20,30,40,50,60,70,80,91];
    let col=0;
    let num = 0;
    let fill=1
    let val=0
    let i=0
    while(k<3){
        document.getElementById("row"+k+"col"+i).value=" ";
        i+=1
        if(i==9){
            k+=1
            i=0
        }
    }
    k=0
    while(k<3){
        col=Math.floor((Math.random()*9)+0);
        num=Math.floor((Math.random()*11)+0)
        if(row0[col]==0 && k==0 && fill<6){    
            val = start[col]+num
            if(val<end[col] || val==90){
                row0[col]=val
                fill+=1
                
            }
            else{
                continue
            }
        }
        else if(row1[col]==0 && k==1 && fill<6 && (row0[col]==0 || (row0[col]-start[col])<num)){
            val= start[col]+num
            if(val<end[col]){
                row1[col]=val
                fill+=1
                
            }
            else{
                continue
            }
        }
        else if(row2[col]==0 && k==2 && fill<6 && (row0[col]==0 || (row0[col]-start[col])<num) && (row1[col]==0 || (row1[col]-start[col])<num)){
            val= start[col]+num
            if(val<end[col]){
                row2[col]=val
                fill+=1
                
            }
            else{
                continue
            }
        }
        else if(fill==6){
            k+=1
            fill=1
            if(k==3){
                break
            }
        }
        else{
            continue
        }


    }
    filler(row0,0);
    filler(row1,1);
    filler(row2,2);

}
function cuter(gotid){
    
    if(document.getElementById(gotid).value!=" " && document.getElementById(gotid).style.textDecoration!="line-through"){
        document.getElementById(gotid).style.textDecoration="line-through";
        document.getElementById(gotid).style.color="red";
        jaldi+=1
    
    if(gotid[3]==0 && document.getElementById(gotid).value!=" " && document.getElementById(gotid).style.textDecoration=="line-through"){
        frow+=1
    }
    else if(gotid[3]==1 && document.getElementById(gotid).value!=" " && document.getElementById(gotid).style.textDecoration=="line-through" ){
        srow+=1
    }
    else if(gotid[3]==2 && document.getElementById(gotid).value!=" " && document.getElementById(gotid).style.textDecoration=="line-through"){
        trow+=1
    }
    }
    if(jaldi==5 && document.getElementById(gotid).value!=" " && rep){
        let congo = `<li> You Completed first five</li>`
        document.getElementById("alist").insertAdjacentHTML("beforeend",congo)
        rep=false
    }
    if(frow==5 && document.getElementById(gotid).value!=" "){
        let congo = `<li> You Completed first row</li>`
        document.getElementById("alist").insertAdjacentHTML("beforeend",congo)
        frow+=1
    }
    if(srow==5 && document.getElementById(gotid).value!=" "){
        let congo = `<li> You Completed second row</li>`
        document.getElementById("alist").insertAdjacentHTML("beforeend",congo)
        srow+=1
    }
    if(trow==5 && document.getElementById(gotid).value!=" "){
        let congo = `<li> You Completed third row</li>`
        document.getElementById("alist").insertAdjacentHTML("beforeend",congo)
        trow+=1
    }
    if(jaldi==15 && document.getElementById(gotid).value!=" "){
        let congo = `<li> You Completed the Game</li>`
        document.getElementById("alist").insertAdjacentHTML("beforeend",congo)
        setTimeout(function(){
            let ans = confirm("Game over click ok to get next ticket");
            if(ans==true){
                location.reload();
            }
        },3000)
        
    }
    
}
