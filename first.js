// 1) calcular distancia de carrito (km), teniendo: vel constante (km/h) y tiempo (h) en MRU
function calcular(){
    let speed = document.getElementById("speed").value
    let time = document.getElementById("time").value
    let distance = speed * time;
    document.getElementById("result").innerHTML = distance + " km"; 
}
document.getElementById("calc").onclick = function(){
    calcular();
}
document.getElementById("reset").onclick = function(){
    document.getElementById("result").innerHTML = 0 + " km"; 
}
// 2) sacar promedio de estudiante a partir de el número de notas que determine el profe 
function prom(){
    let grades = document.getElementById("grades").value; 
    let numbers = grades.filter(element => {
        if(isNaN(element)){
            return false
        }
        else{
            let sum = 0
            for(let i of numbers){
                sum += i
                var nota = (sum/numbers.length).toFixed(2)
            }  
        }
    })
    document.getElementById("result").innerHTML = nota; 


}
document.getElementById("calc").onclick = function(){
    calcular();
}
document.getElementById("reset").onclick = function(){
    document.getElementById("result").innerHTML = 0 + " km"; 
}


/* 3) solicitar respuestas correctas, incorrectas y en blanco de un postulante, teniendo en cuenta que:
    correcta -> 4 puntos
    incorrecta -> -1 puntos
    En blanco -> 0 puntos
*/
function puntaje(correctas, incorrectas, blanco){
    let puntajeFinal = (correctas * 4) + (incorrectas * -1) + (blanco * 0)
    console.log(puntajeFinal)
}
puntaje(6,3,3)

/* 3.1) solicitar respuestas correctas, incorrectas y en blanco de varios postulantes, teniendo en cuenta que (lo voy a hacer con tope de 12 preguntas):
    correcta -> 4 puntos
    incorrecta -> -1 puntos
    En blanco -> 0 puntos
*/
function puntaje2(listaPostulantes){
    let resultados = []
    for(let i = 0; i < listaPostulantes.length; i++){
        let nombre = listaPostulantes[i].nombre;
        console.log(nombre)
        let puntajeTotal = (listaPostulantes[i].correctas * 4) + (listaPostulantes[i].incorrectas * -1)+(listaPostulantes[i].blanco * 0)
        resultados.push("Nombre del postulante: " + nombre +" -> " +"Puntaje total =  " + puntajeTotal)
        console.log(resultados)
    }
}
puntaje2([
    {nombre:"Adriana", correctas:5, incorrectas:5, blanco:2,}, 
    {nombre:"Pedro", correctas:3, incorrectas:5, blanco:4 }, 
    {nombre:"Carlos", correctas:8, incorrectas:4, blanco:0 },
    {nombre:"Laura", correctas:12, incorrectas:0, blanco:0 },
    {nombre:"Juliana", correctas:5, incorrectas:0, blanco:7 }
])

/* 5) calcular puntaje total de un equipo en el torneo de apertura teniendo en cuenta que:
    Partido ganados -> 3 puntos
    partido empatado -> 1 puntos
    partido perdido -> 0 puntos
*/
//Es igual que el anterior
function puntajeTorneoApertura (listaEquipos){
    let datosFinales = []
    for(let i = 0; i<listaEquipos.length; i++){
        let equipo = listaEquipos[i].Equipo;
        let puntajeTotal = (listaEquipos[i].ganados * 3) + (listaEquipos[i].perdidos * 0) + (listaEquipos[i].empatados* 1)
        datosFinales.push("Equipo: " + equipo + " -> Puntaje de torneo = " + puntajeTotal)
        console.log(datosFinales)
    }
}
puntajeTorneoApertura([
    {Equipo:"Colombia", ganados:1, perdidos:1, empatados:10}, 
    {Equipo:"Peru", ganados:5, perdidos:5, empatados:1}, 
    {Equipo:"Argentina", ganados:9, perdidos:0, empatados:2 },
    {Equipo:"Chile", ganados:7, perdidos:2, empatados:2 },
    {Equipo:"Brasil", ganados:10, perdidos:0, empatados:1 }
])

// 4) Se requiere un algoritmo para elaborara la plantilla de un empleado, teniendo en cuenta las horas laboradas al mes y de la tarifa por hora.

function calcSueldo(horas, tarifa){
    let sueldo = horas * tarifa;
    console.log("Salario " + "$" + sueldo )
}
 calcSueldo(160, 3000)

// 6) calcular el área de un triángulo teniendo en cuenta sus tres medidas, usar la formula de Herón
function calculoArea(lado1,lado2,lado3){
    let semiperimtro = (lado1 + lado2 + lado3)/2;
    let area = Math.sqrt(semiperimtro*(semiperimtro-lado1)*(semiperimtro-lado2)*(semiperimtro-lado3)).toFixed(2)
    console.log("El área del triangulo es " + area + " cm^2")
}
calculoArea(5,5,5)
/* 7) Crear un algoritmo que determine el # de CDs necesarios para hacer una copia de seguridad de un disco duro teniendo en cuenta que:
    - El disco duro esta lleno de info (Esa la define el usuario en Gb)
    - 1Gb = 1024Mb
    - Capacidad de CD = 700 Mb -> 0.7Gb
*/
function numeroCDs(capacidadHD){
    let conversion = 700/1024;
    let numeroCds = (capacidadHD/conversion).toFixed(0);
    console.log("El número de CDs necesarios es : " + numeroCds + " CDs")
}
numeroCDs(2048)










