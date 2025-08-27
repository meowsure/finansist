
// Vue + GSAP behavior
window.addEventListener('DOMContentLoaded', () => {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        mobile: false,
        portfolio: [
          {
            "id": 1,
            "title": "Жилой комплекс",
            "date": "1 кв. 2025",
            "year": 2025,
            "type": "Жилой комплекс",
            "img": "https://images.unsplash.com/photo-1670352690826-84b1d9ef735c?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Современный жилой комплекс комфорт-класса, разработанный с применением энергоэффективных технологий и материалов. Проект включает благоустроенную территорию с детскими площадками, зонами отдыха и подземным паркингом. Мы реализовали продуманные планировки квартир с высокими потолками и панорамным остеклением, чтобы создать комфортную и современную среду для жизни. Сдача объекта запланирована на первый квартал 2025 года."
          },
          {
            "id": 2,
            "title": "Офисный центр",
            "date": "2 кв. 2025",
            "year": 2025,
            "type": "Офисный центр",
            "img": "https://images.unsplash.com/photo-1631247022917-53f9af27d719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Многофункциональный бизнес-центр класса «А», предназначенный для крупных корпоративных арендаторов. Здание спроектировано с футуристичным стеклянным фасадом, что обеспечивает максимальное естественное освещение. Инфраструктура включает конференц-залы, коворкинг-зоны, фитнес-центр и кафе. Особое внимание уделено инженерным системам, системам безопасности и интеллектуальному управлению зданием (BMS). Сдача — 2 квартал 2025 года."
          },
          {
            "id": 3,
            "title": "Складской комплекс",
            "date": "2024",
            "year": 2024,
            "type": "Складской",
            "img": "https://images.unsplash.com/photo-1635961179148-3d886568775c?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Современный складской логистический комплекс класса «А» общей площадью 25 000 м², успешно сданный в эксплуатацию в 2024 году. Объект оснащен высокотехнологичными системами вентиляции, противопожарной безопасности и охранного мониторинга. Комплекс включает офисные помещения, зоны погрузки/разгрузки и обладает высокой транспортной доступностью. Реализация данного проекта позволила заказчику оптимизировать логистические цепочки и увеличить оборотные мощности."
          },
          {
            "id": 4,
            "title": "Реконструкция фасада",
            "date": "2023",
            "year": 2023,
            "type": "Реконструкция",
            "img": "https://images.unsplash.com/photo-1738104317134-5dfee8df01ec?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Комплексная реконструкция исторического фасада здания в центре города с целью сохранения архитектурного наследия и адаптации к современным требованиям. Работы включали бережный демонтаж, реставрацию элементов декора, усиление несущих конструкций и утепление с применением инновационных материалов. Нами был полностью сохранен первоначальный облик объекта, при этом значительно повышены его энергоэффективность и эксплуатационные характеристики."
          },
          {
            "id": 5,
            "title": "Промышленное здание",
            "date": "2024",
            "year": 2024,
            "type": "Промышленное",
            "img": "https://images.unsplash.com/photo-1547895749-888a559fc2a7?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Строительство высокотехнологичного производственного комплекса «под ключ» для машиностроительного предприятия. Проект реализован с учетом всех специфических требований заказчика: монтаж мощных крановых путей, организация цехов с особыми температурными режимами, подвод необходимых инженерных коммуникаций и создание эффективной системы вентиляции. Здание возведено в кратчайшие сроки с соблюдением всех норм промышленной безопасности."
          },
          {
            "id": 6,
            "title": "Многофункциональный центр",
            "date": "2025",
            "year": 2025,
            "type": "Коммерческий",
            "img": "https://images.unsplash.com/photo-1711910382806-d341dcdd656f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Крупномасштабный проект многофункционального общественно-делового центра, объединяющего в себе ритейл-пространства, премиальные офисы, апартаменты и общественную зону. Уникальная архитектура здания станет новой точкой притяжения в городе. При проектировании особый упор сделан на создание бесшовной и комфортной среды для работы, жизни и отдыха. В настоящее время ведутся активные строительные работы, полное завершение проекта запланировано на 2025 год."
          }
        ],
        modalOpen: false,
        current: {},
        form: { name: '', phone: '', email: '', msg: '' }
      }
    },
    methods: {
      openModal(p) { this.current = p; this.modalOpen = true; document.body.style.overflow = 'hidden' },
      closeModal() { this.modalOpen = false; document.body.style.overflow = '' },
      scrollTo(hash) { document.querySelector(hash).scrollIntoView({ behavior: 'smooth' }) },
      submitForm() {
        if (!this.form.name || !this.form.phone || !this.form.email || !this.form.msg) {
          return alert('Пожалуйста, заполните все поля.');
        }

        alert('Заявка отправлена! Мы свяжемся с вами в течение дня.');
        this.form = { name: '', phone: '', email: '', msg: '' };
      }
    },
    mounted() {
      // Respect reduced motion
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      // Try to register ScrollTrigger safely
      try { gsap.registerPlugin(ScrollTrigger); } catch (e) { }

      // Guard: if GSAP or ScrollTrigger missing, don't set opacity to 0 anywhere
      if (typeof gsap === 'undefined' || !gsap) return;

      // Safe reveal: use fromTo so initial state stays visible if something fails
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const targets = section.querySelectorAll('h1,h2,p, .group, .p-4, article, .rounded-2xl, form');
        if (!targets.length) return;
        try {
          gsap.fromTo(targets,
            { y: 24, opacity: 1 },
            {
              y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
              scrollTrigger: { trigger: section, start: 'top 85%' }
            }
          );
        } catch (e) { /* noop */ }
      });

      const heroIllustration = document.querySelector('.will-change-transform');
      if (heroIllustration) {
        window.addEventListener('mousemove', (e) => {
          const x = (e.clientX - window.innerWidth / 2) / 40;
          const y = (e.clientY - window.innerHeight / 2) / 60;
          gsap.to(heroIllustration, { x: x, y: y, rotation: x * 0.2, duration: 0.9, ease: 'power3.out' });
        });
      }

      // Lightweight floating emojis
      const bigEmoji = document.querySelector('#hero .emoji-big');
      const smallEmoji = document.querySelector('#hero .emoji-small');
      if (bigEmoji) gsap.to(bigEmoji, { y: 10, yoyo: true, repeat: -1, duration: 4, ease: 'sine.inOut' });
      if (smallEmoji) gsap.to(smallEmoji, { y: -8, yoyo: true, repeat: -1, duration: 5, ease: 'sine.inOut' });

      // Portfolio hover effect using transform only
      document.querySelectorAll('article.card').forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.02, duration: 0.18 }));
        el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.18 }));
      });
    }
  }).mount('#app')
});
