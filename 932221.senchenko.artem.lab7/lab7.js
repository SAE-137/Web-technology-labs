document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button[data-shape]");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => createFigures(btn.dataset.shape));
    });
});

function createFigures(kind) {
    const qty = Math.max(1, +document.getElementById("amount").value || 1);
    const base = {
        square: "crimson",
        circle: "seagreen",
        triangle: "royalblue"
    };
    const selectedColor = "yellow";

    for (let n = 0; n < qty; n++) {
        const fig = document.createElement("div");
        fig.classList.add("shape", kind);

        const size = 30 + Math.floor(Math.random() * 70);

        if (kind === "triangle") {
            const half = Math.floor(size / 2);
            Object.assign(fig.style, {
                width: 0,
                height: 0,
                borderLeft: `${half}px solid transparent`,
                borderRight: `${half}px solid transparent`,
                borderBottom: `${size}px solid ${base[kind]}`
            });
        } else {
            fig.style.width = `${size}px`;
            fig.style.height = `${size}px`;
            fig.style.backgroundColor = base[kind];
        }

        fig.dataset.color = base[kind];
        fig.dataset.active = "false";

        const posX = Math.floor(Math.random() * (window.innerWidth - size - 30)) + 10;
        const posY = Math.floor(Math.random() * (window.innerHeight - size - 30)) + 10;
        fig.style.left = posX + "px";
        fig.style.top = posY + "px";

      
        fig.addEventListener("click", e => {
            e.stopPropagation();
            document.querySelectorAll(".shape").forEach(el => {
                if (el.dataset.active === "true") {
                    resetColor(el);
                }
            });
            if (fig.dataset.active === "false") {
                highlight(fig);
            } else {
                resetColor(fig);
            }
        });

      
        fig.addEventListener("dblclick", () => fig.remove());

        document.body.appendChild(fig);
    }

    function highlight(elem) {
        if (elem.classList.contains("triangle")) {
            elem.style.borderBottomColor = selectedColor;
        } else {
            elem.style.backgroundColor = selectedColor;
        }
        elem.dataset.active = "true";
    }

    function resetColor(elem) {
        const color = elem.dataset.color;
        if (elem.classList.contains("triangle")) {
            elem.style.borderBottomColor = color;
        } else {
            elem.style.backgroundColor = color;
        }
        elem.dataset.active = "false";
    }
}
