export const tabs = (tabsHeadParentSelector, tabsHeadsSelector, tabsContentSelector, activeClass) => {
    const tabsHeadParent = document.querySelector(tabsHeadParentSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    if (tabsHeadParent) {
        const tabsHeads = tabsHeadParent.querySelectorAll(tabsHeadsSelector);

        function hideTabContent() {
            tabsHeads.forEach((item, i) => {
                item.classList.remove(activeClass.substring(1));
            });
            tabsContent.forEach(item => {
                item.classList.add("hide");
            });
        }

        function showTabContent(i = 0) {
            tabsHeads[i].classList.add(activeClass.substring(1));
            tabsContent[i].classList.remove("hide");
        }
        hideTabContent();
        showTabContent();

        tabsHeadParent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains(tabsHeadsSelector.substring(1))) {
                tabsHeads.forEach((item, i) => {
                    if (e.target === item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
};