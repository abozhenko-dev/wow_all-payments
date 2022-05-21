const modals = () => {
    function actionsWithModal(modal, isAdd) {
        const windows = document.querySelectorAll('[data-modal]'),
            body = document.body;
        let paddingScroll = window.innerWidth - document.documentElement.clientWidth;

        windows.forEach(window => {
            window.classList.add('hide');
        });

        if (isAdd === 'yes') {
            modal.classList.add('show');
            body.classList.add('lock');
            body.style.marginRight = `${paddingScroll}px`;
        } else {
            modal.classList.remove('show');
            body.classList.remove('lock');
            body.style.marginRight = ``;
        }
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverOverlay = true, overlaySelector = null) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);
            // close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                actionsWithModal(modal, 'yes');
            });
        });

        // close.addEventListener('click', () => {
        //     actionsWithModal(modal, 'no');
        // });

        if (overlaySelector && closeOverOverlay && modal) {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains(overlaySelector)) {
                    actionsWithModal(modal, 'no');
                }
            });
        }
    }

    // Initialize contact modal
    bindModal(".contact-us", ".contact-modal", null, true, "contact-modal__wrapper");

    // Initialize thanks modal
    bindModal(".programm__title", ".subscription", null, true, "thanks-modal__overlay");

    // Initialize partner modal
    bindModal(".programm__action", ".partner-modal", null, true, "partner-modal__wrapper");
};
export default modals;