export const inputPlaceholder = () => {
    const labels = document.querySelectorAll(".consultation__wrap");

    labels.forEach(label => {
        const input = label.querySelector("input");
        let isFocused = false;
        let isEmpty = true;

        input.addEventListener("focus", () => {
            label.classList.add("consultation__wrap--active");
            isFocused = true;
        });

        input.addEventListener("blur", () => {
            if (isEmpty === true) {
                label.classList.remove("consultation__wrap--active");
                isFocused = false;
            }
        });

        input.addEventListener("input", (e) => {
            if (e.target.value.length !== 0) {
                isEmpty = false;
            } else {
                isEmpty = true;
            }
        });
    });
};