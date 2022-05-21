export const contactModal = () => {
    let contactTextarea = document.querySelector('.contact-modal__textarea textarea'),
        textareaWrapper = document.querySelector(".contact-modal__textarea");
    let isTextareaEmpty = true;


    if (contactTextarea && textareaWrapper) {
        const inputLabels = document.querySelectorAll(".contact-modal__label");

        contactTextarea.setAttribute('style', 'height:' + (contactTextarea.scrollHeight) + 'px;overflow-y:hidden;');
        contactTextarea.addEventListener("input", OnInput, false);

        function OnInput(e) {
            if (e.target.value.length !== 0) {
                isTextareaEmpty = false;
            } else {
                isTextareaEmpty = true;
            }
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        }

        contactTextarea.addEventListener("focus", () => {
            textareaWrapper.classList.add("contact-modal__textarea--active");
        });

        contactTextarea.addEventListener("blur", () => {
            if (isTextareaEmpty === true) {
                textareaWrapper.classList.remove("contact-modal__textarea--active");
            }
        });


        inputLabels.forEach(label => {
            const input = label.querySelector(".contact-modal__input");
            let isFocused = false;
            let isEmpty = true;

            input.addEventListener("focus", () => {
                label.classList.add("contact-modal__label--active");
                isFocused = true;
            });

            input.addEventListener("blur", () => {
                if (isEmpty === true) {
                    label.classList.remove("contact-modal__label--active");
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
    }
};