const windowElement = document.getElementById("Greeting");
const handle = document.getElementById("GreetingHandle");

handle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;

    const rect = windowElement.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;

    windowElement.style.position = "fixed";
    windowElement.style.left = `${rect.left}px`;
    windowElement.style.top = `${rect.top}px`;
    windowElement.style.transform = "none";

    handle.setPointerCapture(e.pointerId);

    function move(e) {
        windowElement.style.left = `${rect.left + e.clientX - startX}px`;
        windowElement.style.top = `${rect.top + e.clientY - startY}px`;
    }

    function stop() {
        handle.removeEventListener("pointermove", move);
        handle.removeEventListener("pointerup", stop);
        handle.removeEventListener("pointercancel", stop);
    }

    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", stop);
    handle.addEventListener("pointercancel", stop);
});