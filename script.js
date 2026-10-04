const topics=[
["1. Matrices, determinantes y rango","Matrices, operaciones, producto, potencias, inversa, determinantes, propiedades, rango, operaciones elementales, matrices 4×4 y relación con sistemas."],
["2. Sistemas de ecuaciones","Métodos de resolución, Gauss, expresión matricial, rangos, Rouché-Frobenius, parámetros e interpretación geométrica."],
["3. Vectores","Componentes, módulo, operaciones, dependencia, base, producto escalar, ángulos, ortogonalidad y producto vectorial."],
["4. Geometría: rectas y planos","Ecuaciones, vectores directores y normales, posiciones relativas, intersecciones, paralelismo, perpendicularidad, distancias y ángulos."],
["5. Límites y continuidad","Límites laterales, infinitos, indeterminaciones, simplificación, continuidad, discontinuidades y asíntotas."],
["6. Derivadas","Tasa de variación, definición, interpretación geométrica, tangente, reglas de derivación, cadena y derivadas sucesivas."],
["7. Aplicaciones de las derivadas","Crecimiento, extremos, puntos críticos, concavidad, inflexión y problemas de optimización."],
["8. Estudio de funciones","Dominio, simetrías, cortes, límites, asíntotas, derivadas, extremos, concavidad e interpretación gráfica."],
["9. Integrales","Primitivas, integral indefinida, propiedades, técnicas básicas, integral definida, Barrow y teorema fundamental."],
["10. Aplicaciones de las integrales","Área bajo una curva, área entre curvas y planteamiento correcto de límites."],
["11. Probabilidad","Sucesos, Laplace, probabilidad condicionada, independencia, probabilidad total, Bayes, árboles y tablas."],
["12. Estadística","Población, muestra, variables, frecuencias, media, mediana, moda, dispersión, gráficos e interpretación."]
];

const topicsEl=document.getElementById("topics");
topics.forEach((t,i)=>{
  topicsEl.innerHTML+=`<article class="topic">
    <h3>${t[0]}</h3><p>${t[1]}</p>
    <span class="level basic">🟢 BÁSICO</span><span class="level medium">🟡 INTERMEDIO</span><span class="level advanced">🔴 AVANZADO</span>
    <p><strong>Objetivo:</strong> entender qué significa el concepto, por qué funciona, cómo se calcula y cuándo utilizarlo.</p>
    <div class="question"><strong>Ejercicio ${i+1}:</strong> escribe con tus palabras qué parte del tema te parece más importante para resolver ejercicios.
    <input id="m${i}" placeholder="Escribe tu respuesta">
    <button onclick="checkText('m${i}','mf${i}')">Corregir</button><div id="mf${i}" class="feedback"></div></div>
  </article>`;
});

const life=[
"Si tienes 50 € y quieres comprar algo que cuesta 40 €, ¿qué operación matemática puedes usar para saber cuánto te queda?",
"Si una camiseta cuesta 30 € y tiene un descuento, ¿para qué sirven los porcentajes?",
"¿Dónde usarías una escala o proporción en la vida cotidiana?",
"¿Qué profesión crees que necesita más geometría? ¿Por qué?",
"¿Cómo podría una empresa utilizar una gráfica para tomar una decisión?",
"¿Para qué podría servir la estadística al analizar las opiniones de clientes?"
];
document.getElementById("lifeQuestions").innerHTML=life.map((q,i)=>`<div class="question"><strong>${i+1}. ${q}</strong><input id="l${i}" placeholder="Tu respuesta"><button onclick="checkText('l${i}','lf${i}')">Comprobar</button><div id="lf${i}" class="feedback"></div></div>`).join("");

const eco=[
"Si recibes dinero y decides guardar una parte, ¿qué concepto económico estás aplicando?",
"Antes de comprar algo, ¿por qué puede ser útil comparar precios?",
"¿Qué diferencia hay entre necesitar algo y querer comprarlo?",
"Si una empresa vende un producto por más de lo que le cuesta producirlo, ¿qué ocurre?",
"¿Por qué una empresa necesita controlar sus gastos?",
"¿Qué puede pasar si muchas personas quieren comprar un producto pero hay pocas unidades?",
"¿Por qué puede ser importante tener un presupuesto mensual?",
"¿Qué significa ahorrar pensando en un objetivo futuro?",
"¿Qué información te gustaría conocer antes de montar un negocio?",
"¿Por qué una empresa necesita conocer a sus clientes?",
"¿Cómo puede influir la competencia en los precios?",
"¿Por qué pedir dinero prestado puede tener un coste?",
"¿Qué diferencia hay entre ingresos y beneficios?",
"¿Por qué una empresa necesita tomar decisiones sobre inversión?",
"Si algún día creas una empresa, ¿qué problema de la vida cotidiana intentarías solucionar?"
];
document.getElementById("ecoQuestions").innerHTML=eco.map((q,i)=>`<div class="question"><strong>${i+1}. ${q}</strong><input id="e${i}" placeholder="Tu respuesta"><button onclick="checkText('e${i}','ef${i}')">Comprobar</button><div id="ef${i}" class="feedback"></div></div>`).join("");

function checkText(inputId,feedbackId){
 const input=document.getElementById(inputId), out=document.getElementById(feedbackId);
 if(input.value.trim().length<3){out.textContent="💡 Escribe un poco más para poder reflexionar sobre tu respuesta.";return}
 out.textContent="🎉 ¡Muy bien! Has razonado la respuesta. Recuerda: entender el porqué es más importante que memorizar una frase.";
}
function showSection(id){
 document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 window.scrollTo({top:document.getElementById(id).offsetTop-12,behavior:"smooth"});
}
showSection("mates");
