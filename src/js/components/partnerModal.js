import Choices from "choices.js";

export const partnerModal = () => {
    const modalSelects = document.querySelectorAll(".partner-modal__select select");
    const formItems = document.querySelectorAll(".partner-modal__form-wrapper");
    const nextBtns = document.querySelectorAll("[data-next]");
    const prevBtn = document.querySelector("[data-prev]");
    const submitBtn = document.querySelector(".partner-modal .partner-modal__btn");
    const currentForm = document.querySelector(".partner-modal__step--current");
    const labels = document.querySelectorAll(".partner-modal__label");


    if (modalSelects.length !== 0 && formItems) {
        // Initialize custom selects
        modalSelects.forEach(select => {
            const customSelect = new Choices(select, {
                searchEnabled: false,
                itemSelectText: "",
                shouldSort: false
            });
        });

        // Initialize listener on prev and next buttons
        let counter = 0;

        nextBtns.forEach(nextBtn => {
            nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.hasAttribute("data-next") && counter <= 1) {
                    counter++;

                    callCorrectForm(counter);

                    if (counter === 2) {
                        submitBtn.textContent = "Submit";

                        // do some actions fetch...
                    }
                }
            });
        });

        prevBtn.addEventListener("click", (e) => {
            if (counter > 0) {
                counter--;

                callCorrectForm(counter);

                if (counter === 1) {
                    submitBtn.textContent = "next step";
                }
            }
        });

        function callCorrectForm(index) {
            formItems.forEach(el => el.classList.add("partner-modal__form-wrapper--hidden"));
            formItems[index].classList.remove("partner-modal__form-wrapper--hidden");
            currentForm.textContent = index + 1;
        }

        // Initialize events for input labels
        labels.forEach(label => {
            const input = label.querySelector("input") || label.querySelector("textarea");
            let isFocused = false;
            let isEmpty = true;

            input.addEventListener("focus", () => {
                label.classList.add("partner-modal__label--active");
                isFocused = true;
            });

            input.addEventListener("blur", () => {
                if (isEmpty === true) {
                    label.classList.remove("partner-modal__label--active");
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