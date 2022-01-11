// Your code here
function deleteTask(){



}
    // Declaro el elemento INPUT e inicializo las variables que servirán para generar la ID única de los LI y SPAN
    let textTask = document.querySelector("#addToDo");
    let numeroLi = 0;
    let numeroSpan = 0;

    textTask.addEventListener("click", (event) => {
        let textoIntroducido = " pepe";

        // QuerySelector para el elemento UL
        let ul = document.querySelector("#myTask");

        /* Creo el elemento LI y le doy una ID como atributo. Le añado el valor del texto introducido y lo convierto 
            en hijo del elemento UL*/
        let li = document.createElement("li");
        li.setAttribute("id", "customLi"+numeroLi);
        li.textContent = textoIntroducido;
	    ul.appendChild(li);

        // QuerySelector para el elemento LI que acabamos de crear
        let customLi = document.querySelector("#customLi"+numeroLi);

        // Mismo proceso que el anterior, creamos un elemento Span con ID única y lo convertimos en hijo del LI
        let span = document.createElement("span");
        span.setAttribute("id", "customSpan"+numeroSpan);
        customLi.appendChild(span);

        // QuerySelector para el elemento Span que acabamos de crear
        let customSpan = document.querySelector("#customSpan"+numeroSpan);

        // Creamos un elemento I (no es necesario asignarle una ID) y lo convertimos en hijo del SPAN
        let i = document.createElement("i");
        i.setAttribute("class", "fa fa-trash");
        customSpan.appendChild(i);

        i.addEventListener("click", (event) => {
            ul.removeChild(customLi);
        });

        //La ID única pasa a la siguiente iteración, proporcionando una nueva ID la próxima vez que suceda el evento.
        numeroLi++;
        numeroSpan++;
    });
    


