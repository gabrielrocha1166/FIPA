const botaoGmail = document.querySelector('.btnGmail');
const botaoNavegador = document.querySelector('.btnNavegador');
const botaoHome = document.querySelector('.btnHome');
const botaoConfiguracoes = document.querySelector('.btnConfiguracoes');

function Relogio() {
    const data = new Date();
    const hr = data.getHours();
    const mn = data.getMinutes();
    document.getElementById('relogio').innerHTML = hr + ":" + mn;
 }
 
 setInterval( Relogio, 500); 

 botaoGmail.onclick = function() {
   location.href='https://www.gmail.com';
}

botaoNavegador.onclick = function() {
    location.href='https://www.google.com.br/';
 }
 
 botaoHome.onclick = function () {
    location.href='index.html';
 }
 
 botaoConfiguracoes.onclick = function () {
  location.href='fipaConfiguracoes.html';
 }
 