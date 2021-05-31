function aumentar(tipo){
    if(tipo==="rotacion")
    {
        let valor=document.getElementById("rotacion").value
        ++valor
        if(valor<=5){ 
        document.getElementById("rotacion").value=valor
        rotacion(valor)
    }else{
        alert("no se permiten valores mayores de 5")
    }
    }else     if(tipo==="escalado")
    {
        let valor=document.getElementById("escalado").value
        ++valor
        if(valor<=5){ 
        document.getElementById("escalado").value=valor
        escalado(valor)
    }else{
        alert("no se permiten valores mayores de 5")
    }
    }else     if(tipo==="xtranslation")
    {
        let valor=document.getElementById("xtranslation").value
        ++valor
        if(valor<=5){ 
        document.getElementById("xtranslation").value=valor
        xtranslation(valor)
    }else{
        alert("no se permiten valores mayores de 5")
    }
    }
    else     if(tipo==="ytranslation")
    {
        let valor=document.getElementById("ytranslation").value
        ++valor
        if(valor<=5){ 
        document.getElementById("ytranslation").value=valor
        ytranslation(valor)
    }else{
        alert("no se permiten valores mayores de 5")
    }
    }

}

function disminuir(tipo){
 
    if(tipo==="rotacion")
    {
        let valor=document.getElementById("rotacion").value
        --valor
        if(valor>=0){ 
        document.getElementById("rotacion").value=valor
        rotacion(valor)
    }else{
        alert("no se permiten valores menores de 1")
    }
    }else     if(tipo==="escalado")
    {
        let valor=document.getElementById("escalado").value
        --valor
        if(valor>=0){ 
        document.getElementById("escalado").value=valor
        escalado(valor)
    }else{
        alert("no se permiten valores menores de 1")
    }
    }else     if(tipo==="xtranslation")
    {
        let valor=document.getElementById("xtranslation").value
        --valor
        if(valor>=0){ 
        document.getElementById("xtranslation").value=valor
        xtranslation(valor)
    }else{
        alert("no se permiten valores menores de 1")
    }
    }
    else     if(tipo==="ytranslation")
    {
        let valor=document.getElementById("ytranslation").value
        --valor
        if(valor>=0){ 
        document.getElementById("ytranslation").value=valor
        ytranslation(valor)
    }else{
        alert("no se permiten valores menores de 1")
    }
    }
}

function rotacion(valor){
 
    let angle= 15 * valor
    document.getElementById("cuadrado").style.transform = `rotate(${angle}deg)`; 
}



function escalado(valor){
    if(valor!=0){
    let width=50*valor
    let height=50*valor
    document.getElementById("cuadrado").style.width = `${width}px`;
    document.getElementById("cuadrado").style.height = `${height}px`;}else{
        document.getElementById("cuadrado").style.width = `50px`;
    document.getElementById("cuadrado").style.height = `50px`;
    }
}

function xtranslation(valor){
    if(valor!=0){
    let move=20*valor
   
    document.getElementById("cuadrado").style.paddingLeft = `${move}px`;
    }
}
function ytranslation(valor){
    if(valor!=0){
    let move=20*valor
   
    document.getElementById("cuadrado").style.paddingTop = `${move}px`;}
  
}