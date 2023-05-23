function verificar(){

    
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
if(fano.value.length == 0 || fano.value > ano)
{
window.alert('[ERRO] Verifique os dados e tente novamente!')
}
else{
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id', 'foto')

if(fsex[0].checked){
genero = 'Homem'

if(idade >=0 && idade <10){
//Criança
img.setAttribute('src', 'img./criançamenino.jpg')
}
else if( idade < 21){
//Jovem
img.setAttribute('src', 'img./JovemHomem.jpg')
}
else if(idade < 50){
//Adulto
img.setAttribute("src", 'img./adultoHomem.jpg')
}
else{
//Idoso
img.setAttribute('src', 'img./idoso.jpg')
}
}

else if( fsex[1].checked){
genero = 'Mulher'

if (idade >= 0 && idade < 10) {
//Criança
img.setAttribute('src', 'img./criançamenina.jpg')
} else if (idade < 21) {
//Jovem
img.setAttribute('src', 'img./JovemMulher.jpg')
} else if (idade < 50) {
//Adulto
img.setAttribute('src', 'img./AdultaMulher.jpg')
} else {
//Idoso
img.setAttribute('src', 'img./idosa')
}
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}
}
