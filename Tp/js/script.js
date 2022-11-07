/*
Declaracion----------------------------------------------------------------------------------
*/
const btnResumen=document.getElementById('btnResumen');
const totpaga=document.getElementById('totpaga');
const cant=document.getElementById('cant');
const optCate = document.getElementById('cate');
const btnBorrar = document.getElementById('btnBorrar');
const nombre = document.getElementById('Nom');
const apellido = document.getElementById('Ape');
const correo = document.getElementById("mail");

//Definicion de Funciones-------------------------------------------------------------------
function calculo(){
    
    let tot,pre;
    pre=parseInt(200);

    if(optCate.value == 'Estudiante'){tot=(pre*cant.value)*0.2;}
    if(optCate.value =='Trainee'){tot=(pre*cant.value)*0.5;}
    if(optCate.value =='Junior'){tot=(pre*cant.value)*0.85;}
    
    totpaga.innerHTML='Total a  Pagar:$ ' + tot;
}
//------------------------------------------------------------------------------------------
function limpiar(){
    totpaga.innerHTML='Total a  Pagar:$ 0.00';
    cant.value='';
    nombre.value='';
    apellido.value='';
    correo.value='';
}
//Eventos------------------------------------------------------------------------------------
btnResumen.onclick=calculo;
btnBorrar.onclick=limpiar;
