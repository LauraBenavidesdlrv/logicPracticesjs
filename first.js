// 1) calcular distancia de carrito (km), teniendo: vel constante (km/h) y tiempo (h) en MRU
function mru(vel, time){
    let distance = vel * time;
    console.log(distance + " km")
}
mru(50,0.5)

// 2) sacar promedio de estudiante a partir de el número de notas que determine el profe 

function prom(notas){
    let sum = 0
    for(let i of notas){
        sum += i
        var nota = (sum/notas.length).toFixed(2)
    }
    console.log(nota)
}
prom([2,2.5,5,4.2,2.1])

