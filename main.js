const { createApp, ref, onMounted, reactive } = Vue;

createApp({
    setup() {
        const isScrolled = ref(false);
        const mobileMenuOpen = ref(false);
        const modalOpen = ref(false);
        const currentPortfolioIndex = ref(0);

        const formData = reactive({
            name: '',
            phone: '',
            email: '',
            message: ''
        });

        const services = ref([
            {
                title: 'Строительные материалы',
                icon: 'fa-solid fa-cubes-stacked',
                description: 'Бетон, кирпич, блоки, ЖБИ, гипсокартон, отделочные материалы и многое другое'
            },
            {
                title: 'Кабельная продукция',
                icon: 'fa-solid fa-tower-broadcast',
                description: 'Кабель, провода, комплектующие и электротехническая продукция'
            },
            {
                title: 'Техника и оборудование',
                icon: 'fa-solid fa-microchip',
                description: 'Инструменты, спецтехника, складская техника и промышленное оборудование'
            },
            {
                title: 'Алкогольная продукция',
                icon: 'fa-solid fa-wine-bottle',
                description: 'Коньяк, виски, шампанское, водка, ром и другие напитки с конфискатов'
            },
            {
                title: 'Шины и автозапчасти',
                icon: 'fa-solid fa-screwdriver-wrench',
                description: 'Автомобильные шины, диски, запчасти и аксессуары'
            },
            {
                title: 'Разное',
                icon: 'fa-solid fa-store',
                description: 'Другие товарные категории, остатки которых постоянно обновляются'
            }
        ]);

        const portfolioItems = ref([
            {
                title: 'Поставка строительных материалов',
                category: 'Строительные материалы',
                description: 'Крупная поставка остатков строительных материалов для строительной компании',
                result: 'Экономия заказчика составила 65% от рыночной стоимости',
                image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                title: 'Ликвидация складских остатков',
                category: 'Кабельная продукция',
                description: 'Реализация складских остатков кабельной продукции для электротехнической компании',
                result: 'Клиент сэкономил 70% на закупке качественного кабеля',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                title: 'Поставка алкогольной продукции',
                category: 'Алкоголь',
                description: 'Реализация конфиската алкогольной продукции премиум-класса',
                result: 'Заказчик получил продукцию высшего качества со скидкой 80%',
                image: 'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                title: 'Оборудование для склада',
                category: 'Техника',
                description: 'Поставка складской техники и оборудования для логистической компании',
                result: 'Экономия бюджета составила 60% при полном соответствии техники требованиям',
                image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                title: 'Автозапчасти и шины',
                category: 'Автомобильные товары',
                description: 'Комплексная поставка автозапчастей и шин для автосервиса',
                result: 'Автосервис сократил расходы на запчасти на 55% без потери качества',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                title: 'Ликвидация остатков магазина',
                category: 'Разное',
                description: 'Полная ликвидация товарных остатков закрывающегося магазина',
                result: 'Товар был реализован со скидкой 75% в кратчайшие сроки',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
        ]);

        const partners = ref([
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+1',
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+2',
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+3',
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+4',
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+5',
            'https://via.placeholder.com/150x80/2a2a2a/cccccc?text=Partner+6'
        ]);

        const currentPortfolio = ref(portfolioItems.value[0]);

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const scrollToSection = (sectionId) => {
            if (mobileMenuOpen.value) {
                mobileMenuOpen.value = false;
            }

            const element = document.getElementById(sectionId);
            if (element) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: element,
                    ease: "power2.inOut"
                });
            }
        };

        const openModal = (index) => {
            currentPortfolioIndex.value = index;
            currentPortfolio.value = portfolioItems.value[index];
            modalOpen.value = true;
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modalOpen.value = false;
            document.body.style.overflow = 'auto';
        };

        const cardHover = (index) => {
            gsap.to(`.service-card:nth-child(${index + 1})`, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                ease: "power2.out"
            });
        };

        const cardLeave = (index) => {
            gsap.to(`.service-card:nth-child(${index + 1})`, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                ease: "power2.out"
            });
        };

        const submitForm = () => {
            // Валидация формы
            let isValid = true;

            if (!formData.name.trim()) {
                isValid = false;
                document.querySelector('input[type="text"]').classList.add('error');
            }

            if (!formData.phone.trim()) {
                isValid = false;
                document.querySelector('input[type="tel"]').classList.add('error');
            }

            if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
                isValid = false;
                document.querySelector('input[type="email"]').classList.add('error');
            }

            if (isValid) {
                // Отправка формы (здесь должен быть код для отправки данных на сервер)
                alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.');

                // Сброс формы
                formData.name = '';
                formData.phone = '';
                formData.email = '';
                formData.message = '';

                // Удаление классов ошибок
                const inputs = document.querySelectorAll('.form-input');
                inputs.forEach(input => input.classList.remove('error'));
            } else {
                alert('Пожалуйста, заполните все обязательные поля корректно.');
            }
        };

        const initAnimations = () => {
            // Инициализация ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // Анимация для секций при скролле
            gsap.utils.toArray('section').forEach(section => {
                gsap.fromTo(section,
                    { autoAlpha: 0, y: 50 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%',
                            end: 'bottom 60%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Анимация для карточек услуг
            gsap.utils.toArray('.service-card').forEach((card, i) => {
                gsap.fromTo(card,
                    { autoAlpha: 0, y: 30 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Анимация для элементов преимуществ
            gsap.utils.toArray('.benefit-item').forEach((item, i) => {
                gsap.fromTo(item,
                    { autoAlpha: 0, x: -30 },
                    {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.8,
                        delay: i * 0.2,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Параллакс эффект для героя
            gsap.to('.hero-bg', {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Анимация плавающих форм
            gsap.to('.shape-1', {
                y: 30,
                x: -30,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to('.shape-2', {
                y: -30,
                x: 30,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        };

        const initMap = () => {
            // Инициализация карты (здесь должен быть код для инициализации карты)
            // В реальном проекте нужно подключить API карт и добавить реализацию
            console.log('Карта инициализирована');
        };

        onMounted(() => {
            // Обработчик скролла для хедера
            window.addEventListener('scroll', () => {
                isScrolled.value = window.scrollY > 50;
            });

            // Инициализация анимаций
            initAnimations();

            // Инициализация карты
            initMap();
        });

        return {
            isScrolled,
            mobileMenuOpen,
            modalOpen,
            formData,
            services,
            portfolioItems,
            partners,
            currentPortfolio,
            toggleMobileMenu,
            scrollToSection,
            openModal,
            closeModal,
            cardHover,
            cardLeave,
            submitForm
        };
    }
}).mount('#app');