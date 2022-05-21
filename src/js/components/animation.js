export const animation = () => {
    const trustItems = document.querySelectorAll(".trust__item");
    const advantagesItems = document.querySelectorAll(".advantages__wrapper");
    const trustWrapper = document.querySelector(".trust__wrapper");
    const trustRight = document.querySelector(".trust__right");
    const trust = document.querySelector(".trust");
    let isActivated = true;
    const loader = document.querySelector(".loader");



    if (loader) {
        const loaderFill = loader.querySelector(".loader__fill");
        let paddingScroll = window.innerWidth - document.documentElement.clientWidth;


        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${paddingScroll}px`;

        let loaderTl = gsap.timeline();

        loaderTl.to(loaderFill, {
            yPercent: -150,
            duration: 1.4,
            ease: SlowMo.ease.config(0.7, 0.7, false)
        })
        loaderTl.to(loader, {
            scale: 20,
            rotate: 360,
            duration: 1.4
        })
        loaderTl.to(loader, {
            autoAlpha: 0,
            duration: 0.5,
            onComplete: () => {
                loader.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = "";
            }
        }, 2.8)
        loaderTl.from(".header", {
            autoAlpha: 0,
            duration: 0.5
        })
        loaderTl.from(".main", {
            autoAlpha: 0,
            duration: 1
        }, 3.2)
        loaderTl.to(".main__left--animated .main__title", {
            duration: 2,
            text: "Simple payments like a paper plane",
            onComplete: () => {
                document.querySelector(".main__left--animated .main__title").insertAdjacentHTML("beforeend", `<span>.</span>`);
            }
        })
        loaderTl.from(".main__left--animated .main__subtitle", {
            autoAlpha: 0,
            yPercent: 50
        }, 6.2)
        loaderTl.from(".main__left--animated .section__btn", {
            autoAlpha: 0,
            yPercent: 50
        }, 6.2)
    }

    if (trustWrapper && trustItems) {
        // Define media query
        const mediaQuery = window.matchMedia('(max-width: 992px)');

        // Funtion for removing active class from trust items
        const removeActiveClass = () => {
            trustItems.forEach(el => el.classList.remove("trust__item--active"));
        };

        // function which is animate trust elements
        const handlerForShowingTrustAdvantages = (direction, removeIndex, addIndex) => {
            // checking direction
            if (direction === 1) {
                //remove invisibility from the next item
                trustItems[removeIndex].classList.remove("trust__item--hidden");

                //remove active class from the items
                removeActiveClass();

                // checking if this item is active or not (this needed in order to avoid jumping for trust left block while scrolling)
                if (isActivated !== true) {

                    // moving block higher
                    gsap.to(".trust__left", {
                        y: -140 * removeIndex,
                    });
                }


                // revealing next item
                gsap.to(trustItems[addIndex], {
                    yPercent: 0,
                    duration: 1
                });

                // giving to it active class
                trustItems[addIndex].classList.add("trust__item--active");
            } else if (direction === -1) {
                // checking if this item is active or not (this needed in order to avoid jumping for trust left block while scrolling)
                if (isActivated !== true) {

                    // moving block lower
                    gsap.to(".trust__left", {
                        y: -140 * addIndex,
                    });
                }

                // hiding next item
                gsap.to(trustItems[removeIndex], {
                    yPercent: 70,
                    duration: 1
                });

                // adding hidden class to the next one and giving active class to the current one
                trustItems[removeIndex].classList.add("trust__item--hidden");
                removeActiveClass();
                trustItems[addIndex].classList.add("trust__item--active");
            }
        };

        // function for correct showing of active item while scrolling according to scroll progress
        const showTrustAdvantages = (progress, direction, mobile) => {
            // checking the direction of scrolling
            if (direction === 1) {
                // giving active class to the first item
                if (progress > 0 && progress < 3) {
                    handlerForShowingTrustAdvantages(direction, 0, 0);

                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // giving active class to the second item
                if (progress >= 0.3 && progress < 0.6) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 1, 1);

                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // giving active class to the third item
                if (progress >= 0.60 && progress < 0.9) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 2, 2);
                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // giving active class to the fourth item
                if (progress >= 0.90) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 3, 3);
                    if (mobile === false) {
                        isActivated = true;
                    }
                }

            } else if (direction === -1) {
                // removing active class to the first item
                if (progress <= 0) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 0, 0);
                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // removing active class to the second item
                if (progress > 0 && progress < 0.3) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 1, 0);
                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // removing active class to the third item
                if (progress >= 0.3 && progress < 0.6) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 2, 1);
                    if (mobile === false) {
                        isActivated = true;
                    }
                }

                // removing active class to the fourth item
                if (progress >= 0.6 && progress < 0.9) {
                    if (mobile === false) {
                        isActivated = false;
                    }
                    handlerForShowingTrustAdvantages(direction, 3, 2);
                }
            }
        };

        function handleTabletChange(e) {
            // Check if the media query is true
            if (!e.matches) {
                // Change initial position of trust items
                trustItems.forEach(el => {
                    gsap.set(el, {
                        yPercent: 70
                    });
                });

                // init timeline for trust block with scrollTrigger
                const trustTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".trust",
                        start: "10% 60%",
                        end: "90% 60%",
                        scrub: 0.3,
                        pin: true,
                        pinSpacing: false,
                        onUpdate: ({
                            progress,
                            direction
                        }) => {
                            showTrustAdvantages(progress, direction, false);
                        },
                        onEnter: () => {
                            gsap.to(".trust__left", {
                                autoAlpha: 1,
                                duration: 1
                            });
                            gsap.to(trustRight, {
                                yPercent: -24,
                                autoAlpha: 1,
                                duration: 1.5
                            });
                            gsap.from(".trust__left", {
                                yPercent: 20,
                                duration: 1
                            });
                        },
                        onLeaveBack: () => {
                            gsap.to(".trust__left", {
                                autoAlpha: 0,
                                yPercent: 50,
                                duration: 0.5
                            });
                            gsap.to(trustRight, {
                                autoAlpha: 0,
                                yPercent: 50,
                                duration: 0.5
                            });
                            gsap.to(".trust__left", {
                                yPercent: 0,
                                delay: 0.5,
                                autoAlpha: 0,
                                duration: 0,
                            });
                            gsap.to(trust, {
                                backgroundColor: "#fff",
                            }, 0);
                        },
                    },
                });

                //rotating the plane when scrolling the trust block
                trustTl.to(trustRight, {
                    scale: 1,
                    rotate: -180,
                    duration: 2
                });

                // init timeline for numbers block with scrollTriger
                const numbersTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".numbers",
                        scrub: 0.3,
                        start: "-25% 60%",
                        end: "5% 50%",
                        onLeaveBack: () => {
                            // change trust bg again to white
                            gsap.to(trust, {
                                backgroundColor: "#fff",
                                delay: 0.3,
                                onEnd: () => {
                                    // adding active class for the last trust item
                                    handlerForShowingTrustAdvantages(1, 3, 3);
                                }
                            });

                            gsap.to(".pin-spacer", {
                                backgroundColor: "#fff",
                                delay: 0.3,
                            });
                        },
                        onEnter: () => {
                            // remove active class form trust items
                            removeActiveClass();

                            // change bg color for trust block
                            numbersTl.fromTo(trust, {
                                backgroundColor: "#576fff",
                            }, {
                                backgroundColor: "#282066",
                            }, 0)
                            numbersTl.fromTo(".pin-spacer", {
                                backgroundColor: "#576fff",
                            }, {
                                backgroundColor: "#282066",
                            }, 0)
                        },
                    },
                });

                numbersTl.to(trustRight, {
                    yPercent: 90,
                    scale: 0,
                }, 0)
                //changing bg for two block together
                numbersTl.to(".numbers", {
                    backgroundColor: "#282066",
                }, 0)


            }
        }

        mediaQuery.addListener(handleTabletChange)

        // Initial check
        handleTabletChange(mediaQuery);





        // remove active class
        const removeAdvantageActiveClass = () => {
            advantagesItems.forEach(el => el.classList.remove("advantages__wrapper--active"));
        };

        // function which is animate advantage elements
        const showAdvantages = (direction, item) => {
            if (direction === 1) {
                // removing active class
                removeAdvantageActiveClass();

                // addin active class to advantage item
                advantagesItems[item].classList.add("advantages__wrapper--active");
            } else if (direction === -1) {
                // removing active class
                removeAdvantageActiveClass();

                // addin active class to advantage item
                advantagesItems[item].classList.add("advantages__wrapper--active");
            }
        };

        // function for correct showing of active item while scrolling according to scroll progress
        const advantagesHandler = (progress, direction) => {
            if (direction === 1) {
                if (progress > 0.01) {
                    showAdvantages(direction, 0);
                }
                if (progress > 0.17) {
                    showAdvantages(direction, 1);
                }

                if (progress > 0.34) {
                    showAdvantages(direction, 2);
                }

                if (progress > 0.51) {
                    showAdvantages(direction, 3);
                }

                if (progress > 0.68) {
                    showAdvantages(direction, 4);
                }

                if (progress > 0.85) {
                    showAdvantages(direction, 5);
                }
            } else if (direction === -1) {
                if (progress <= 0.01) {
                    removeAdvantageActiveClass();
                }
                if (progress <= 0.17) {
                    showAdvantages(direction, 0);
                }
                if (progress > 0.17 && progress < 0.34) {
                    showAdvantages(direction, 1);
                }

                if (progress >= 0.34 && progress < 0.51) {
                    showAdvantages(direction, 2);
                }

                if (progress >= 0.51 && progress < 0.68) {
                    showAdvantages(direction, 3);
                }

                if (progress >= 0.68 && progress < 0.85) {
                    showAdvantages(direction, 4);
                }

                if (progress >= 0.85 && progress < 1) {
                    showAdvantages(direction, 5);
                }
            }
        };

        // init scrollTriger for advantages block
        gsap.to(".advantages", {
            scrollTrigger: {
                trigger: ".advantages",
                start: "top 50%",
                end: "100% 90%",
                onUpdate: ({
                    progress,
                    direction
                }) => {
                    advantagesHandler(progress, direction);
                }
            }
        });
    }
};