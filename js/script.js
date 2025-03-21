document.addEventListener("DOMContentLoaded", () => {
    let colores = JSON.parse(localStorage.getItem("colores")) || [];

    if (colores.length === 0) {
        fetch("./colores.json")
            .then(response => response.json())
            .then(data => {
                colores = data;
                localStorage.setItem("colores", JSON.stringify(colores));
                generarCubos(colores);
                generarManchas(colores);
            })
            .catch(error => console.error("Error al cargar el archivo JSON:", error));
    } else {
        generarCubos(colores);
        generarManchas(colores);
    }

    function generarCubos(colores) {
        const container = document.getElementById("container_cube");
        container.innerHTML = "";

        colores.forEach(color => {
            const cubo = document.createElement("div");
            cubo.classList.add("cubo");
            cubo.style.backgroundColor = color;

            const codigoHex = document.createElement("span");
            codigoHex.textContent = color;
            cubo.appendChild(codigoHex);

            const copiarIcono = document.createElement("i");
            copiarIcono.classList.add("fa-solid", "fa-copy");
            cubo.appendChild(copiarIcono);

            copiarIcono.addEventListener("click", () => {
                navigator.clipboard.writeText(codigoHex.textContent).then(() => {
                    alert("¡Código copiado al portapapeles!");
                }).catch(err => {
                    console.error("Error al copiar al portapapeles: ", err);
                });
            });

            container.appendChild(cubo);
        });
    }

    // Asegúrate de que solo se registre el evento una vez
    const addColorButton = document.getElementById("addColor");

        document.getElementById("addColor").onclick = onAddColorClick;

    function onAddColorClick() {

        const colorInput = document.getElementById("colorInput").value.trim();
        console.log(`Input recibido: '${colorInput}'`);

        if (colorInput === "") {
            alert("No has ingresado ningun color hexadecimal.");
            return;
        }
        document.getElementById("colorInput").value = "";

        if (/^#([0-9A-F]{3}){1,2}$/i.test(colorInput)) {
            if (!colores.includes(colorInput)) {
                colores.push(colorInput);
                localStorage.setItem("colores", JSON.stringify(colores));
                generarCubos(colores);
                generarManchas(colores);
            } else {
                alert("Ese color ya está en la lista.");
                document.getElementById("colorInput").value = "";
            }
        } else {
            alert("Por favor ingresa un color válido en formato hexadecimal.");
        }
        document.getElementById("colorInput").value = "";
    }

    function generarManchas(coloresList) {
        const acuarelasContainer = document.getElementById("acuarelas_container");
        acuarelasContainer.innerHTML = "";

        const numManchas = 100;
        const tamanoBase = 250;
        const tamanoAjustado = tamanoBase / coloresList.length;

        for (let i = 0; i < numManchas; i++) {
            let div = document.createElement("div");
            div.classList.add("watercolor");

            div.style.background = `radial-gradient(circle, ${coloresList[i % coloresList.length]} 30%, transparent 60%)`;

            const size = Math.random() * tamanoAjustado + tamanoAjustado;
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;

            div.style.left = `${Math.random() * 100}vw`;
            div.style.top = `${Math.random() * 100}vh`;

            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            const animationDuration = Math.random() * 10 + 10;

            div.style.setProperty('--randomX', `${randomX}vw`);
            div.style.setProperty('--randomY', `${randomY}vh`);
            div.style.setProperty('--animationDuration', `${animationDuration}s`);

            div.style.zIndex = -1;

            acuarelasContainer.appendChild(div);
        }
    }

    // Función para descargar los colores como JSON
    function descargarJSON() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(colores));
        const a = document.createElement("a");
        a.href = dataStr;
        a.download = "colores.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function cargarJSON(event) {
        const file = event.target.files[0];
        if (file && file.name.endsWith(".json")) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    colores = data;
                    localStorage.setItem("colores", JSON.stringify(colores));
                    generarCubos(colores);
                } catch (error) {
                    alert("Error al leer el archivo JSON.");
                    console.error(error);
                }
            };
            reader.readAsText(file);
        } else {
            alert("Por favor, selecciona un archivo JSON válido.");
        }
    }

    document.getElementById("downloadButton").addEventListener("click", descargarJSON);
    document.getElementById("fileInput").addEventListener("change", cargarJSON);
});
