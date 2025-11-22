class RoyalStarHomepage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupHeaderScroll();
        this.setupSmoothScrolling();
        this.setupAnimations();
        this.setupPerformanceOptimizations();
        
        // NEW FEATURES
        this.setupHeroSlider();
        this.setupModernStats();
        this.setup3DCarousel();
        
        console.log('🚀 Royal Star Global Homepage initialized');
    }

    // 1. HERO BACKGROUND SLIDER LOGIC
    setupHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;
        const totalSlides = slides.length;

        if (totalSlides === 0) return;

        // Start loop
        setInterval(() => {
            // Remove active from current
            slides[currentSlide].classList.remove('active');
            
            // Move to next
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Add active to next
            slides[currentSlide].classList.add('active');
        }, 3500); // Change every 3.5 seconds
    }

    // 2. MODERN STATS ANIMATION (Slide Up & Count)
    setupModernStats() {
        const stats = document.querySelectorAll('.stat-item-modern');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate each stat with delay
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                            stat.style.opacity = '1';
                            stat.style.transform = 'translateY(0)';
                            
                            // Start counting
                            const numEl = stat.querySelector('.stat-num');
                            this.animateCounter(numEl);
                        }, index * 150);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsContainer = document.querySelector('.hero-stats-modern');
        if (statsContainer) observer.observe(statsContainer);
    }

    animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));
        // Optimize for large numbers
        const increment = target > 100 ? Math.ceil(target / 50) : 1; 
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = start;
            }
        }, 30);
    }

    // 3. MODERN 3D CAROUSEL LOGIC
    setup3DCarousel() {
        const items = document.querySelectorAll('.carousel-3d-item');
        if (items.length === 0) return;

        let currentIndex = 0; // 0 = Center, 1 = Right, 2 = Left

        const updateCarousel = () => {
            // Reset classes
            items.forEach(item => {
                item.classList.remove('center', 'left', 'right');
            });

            // Assign new classes based on index (Loop logic for 3 items)
            items[currentIndex].classList.add('center');
            items[(currentIndex + 1) % 3].classList.add('right');
            items[(currentIndex + 2) % 3].classList.add('left');
        };

        // Initial Setup
        updateCarousel();

        // Auto Rotate
        setInterval(() => {
            currentIndex = (currentIndex + 1) % 3;
            updateCarousel();
        }, 3000);
    }

    // ... (Keep standard functions: setupMobileNavigation, setupHeaderScroll, etc. from previous versions) ...
    // For brevity, ensure you include the standard navbar/scroll logic here as before.
    
    setupMobileNavigation() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn) {
            menuBtn.addEventListener('click', () => nav.classList.add('active'));
            if(closeBtn) closeBtn.addEventListener('click', () => nav.classList.remove('active'));
        }
    }

    setupHeaderScroll() {
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    setupAnimations() {}
    setupCounters() {} 
    setupPerformanceOptimizations() {}
}

// =================================================
// 2. ABOUT PAGE CLASS
// =================================================
class RoyalStarAboutPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupHeaderScroll();
        this.setupTimelineAnimations();
        this.setupCounterAnimations();
        this.setupImageInteractions();
        this.setupTeamAnimations();
        console.log('ℹ️ Royal Star About Page initialized');
    }

    setupMobileNavigation() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn && nav) {
            menuBtn.addEventListener('click', () => { 
                nav.classList.add('active'); 
                document.body.style.overflow = 'hidden';
                document.body.classList.add('no-scroll');
            });
            if(closeBtn) closeBtn.addEventListener('click', () => { 
                nav.classList.remove('active'); 
                document.body.style.overflow = '';
                document.body.classList.remove('no-scroll');
            });
        }
    }

    setupHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }
    }

    setupTimelineAnimations() {
        const items = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.8s ease';
            observer.observe(item);
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.achievement-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        counters.forEach(c => observer.observe(c));
    }

    animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        let count = 0;
        const update = () => {
            const increment = target / 100;
            if (count < target) {
                count += increment;
                el.textContent = Math.ceil(count);
                setTimeout(update, 20);
            } else {
                el.textContent = target;
            }
        };
        update();
    }

    setupImageInteractions() {
        const container = document.querySelector('.image-container');
        if (container) {
            container.addEventListener('mouseenter', () => {
                const overlay = container.querySelector('.image-overlay');
                if (overlay) overlay.style.transform = 'translateY(0)';
            });
            container.addEventListener('mouseleave', () => {
                const overlay = container.querySelector('.image-overlay');
                if (overlay) overlay.style.transform = 'translateY(100%)';
            });
        }
    }

    setupTeamAnimations() {
        const members = document.querySelectorAll('.team-member');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        });
        members.forEach(m => {
            m.style.opacity = '0';
            m.style.transform = 'translateY(30px)';
            m.style.transition = 'all 0.6s ease';
            observer.observe(m);
        });
    }
}

// =================================================
// 3. SERVICES PAGE CLASS
// =================================================
class RoyalStarServicesPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupHeaderScroll();
        this.setupServiceAnimations();
        this.setupProcessAnimations();
        this.setupComparisonTable();
        console.log('🛠️ Royal Star Services Page initialized');
    }

    setupMobileNavigation() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn && nav) {
            menuBtn.addEventListener('click', () => { 
                nav.classList.add('active'); 
                document.body.classList.add('no-scroll');
            });
            if(closeBtn) closeBtn.addEventListener('click', () => { 
                nav.classList.remove('active'); 
                document.body.classList.remove('no-scroll');
            });
        }
    }

    setupHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }
    }

    setupServiceAnimations() {
        const cards = document.querySelectorAll('.service-main-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        });
        cards.forEach(c => {
            c.style.opacity = '0';
            c.style.transform = 'translateY(30px)';
            c.style.transition = 'all 0.6s ease';
            observer.observe(c);
        });
    }

    setupProcessAnimations() {
        const steps = document.querySelectorAll('.process-step');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        });
        steps.forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'scale(0.8)';
            s.style.transition = 'all 0.5s ease';
            observer.observe(s);
        });
    }

    setupComparisonTable() {
        const rows = document.querySelectorAll('.comparison-table tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => row.classList.add('highlight'));
            row.addEventListener('mouseleave', () => row.classList.remove('highlight'));
        });
    }
}

// =================================================
// 4. CAREERS PAGE CLASS
// =================================================
class RoyalStarCareersPage {
    constructor() {
        this.jobsData = [];
        this.filteredJobs = [];
        this.currentFilters = { department: 'all', location: 'all', type: 'all' };
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupHeaderScroll();
        this.loadJobsData();
        this.setupJobFilters();
        this.setupModalFunctionality();
        console.log('💼 Royal Star Careers Page initialized');
    }

    setupMobileNavigation() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn && nav) {
            menuBtn.addEventListener('click', () => { 
                nav.classList.add('active'); 
                document.body.classList.add('no-scroll');
            });
            if(closeBtn) closeBtn.addEventListener('click', () => { 
                nav.classList.remove('active'); 
                document.body.classList.remove('no-scroll');
            });
        }
    }

    setupHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }
    }

    loadJobsData() {
        this.jobsData = [
            {
                id: 1,
                title: "Operations Manager",
                department: "operations",
                location: "alexandria",
                type: "full-time",
                salary: "15,000 - 20,000 EGP",
                description: "Lead and manage daily operations for our freight transportation services.",
                requirements: ["Bachelor's degree", "5+ years experience", "Leadership skills"]
            },
            {
                id: 2,
                title: "Heavy Truck Driver",
                department: "drivers",
                location: "damietta",
                type: "full-time",
                salary: "7,000 - 10,000 EGP",
                description: "Operate heavy trucks for container transportation.",
                requirements: ["Valid license", "3+ years experience", "Clean record"]
            },
            {
                id: 3,
                title: "Customer Service",
                department: "administration",
                location: "alexandria",
                type: "full-time",
                salary: "5,000 - 7,000 EGP",
                description: "Support logistics clients.",
                requirements: ["Excellent communication", "Computer skills"]
            }
        ];
        this.filteredJobs = [...this.jobsData];
        this.renderJobs();
    }

    setupJobFilters() {
        const deptFilter = document.getElementById('department-filter');
        const locFilter = document.getElementById('location-filter');
        const typeFilter = document.getElementById('type-filter');
        const resetBtn = document.getElementById('resetFilters');

        if (deptFilter) deptFilter.addEventListener('change', (e) => { this.currentFilters.department = e.target.value; this.applyFilters(); });
        if (locFilter) locFilter.addEventListener('change', (e) => { this.currentFilters.location = e.target.value; this.applyFilters(); });
        if (typeFilter) typeFilter.addEventListener('change', (e) => { this.currentFilters.type = e.target.value; this.applyFilters(); });
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetFilters());
    }

    applyFilters() {
        this.filteredJobs = this.jobsData.filter(job => {
            const dMatch = this.currentFilters.department === 'all' || job.department === this.currentFilters.department;
            const lMatch = this.currentFilters.location === 'all' || job.location === this.currentFilters.location;
            const tMatch = this.currentFilters.type === 'all' || job.type === this.currentFilters.type;
            return dMatch && lMatch && tMatch;
        });
        this.renderJobs();
    }

    resetFilters() {
        this.currentFilters = { department: 'all', location: 'all', type: 'all' };
        document.getElementById('department-filter').value = 'all';
        document.getElementById('location-filter').value = 'all';
        document.getElementById('type-filter').value = 'all';
        this.filteredJobs = [...this.jobsData];
        this.renderJobs();
    }

    renderJobs() {
        const container = document.getElementById('jobsContainer');
        const noJobs = document.getElementById('noJobsMessage');
        if (!container) return;

        container.innerHTML = '';
        if (this.filteredJobs.length === 0) {
            if(noJobs) noJobs.style.display = 'block';
            return;
        }
        if(noJobs) noJobs.style.display = 'none';

        this.filteredJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card job-entrance';
            card.innerHTML = `
                <div class="job-header">
                    <h3 class="job-title">${job.title}</h3>
                    <span class="job-department">${job.department}</span>
                </div>
                <div class="job-content">
                    <p>${job.description}</p>
                    <div class="job-requirements">
                        <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
                    </div>
                </div>
                <div class="job-footer">
                    <div class="job-salary">${job.salary}</div>
                    <button class="apply-btn btn btn-primary" data-id="${job.id}">Apply Now</button>
                </div>
            `;
            container.appendChild(card);
            
            // Add animation
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        });

        // Re-attach event listeners to new buttons
        document.querySelectorAll('.apply-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const title = e.target.closest('.job-card').querySelector('.job-title').textContent;
                this.openModal(title);
            });
        });
    }

    setupModalFunctionality() {
        this.modal = document.getElementById('jobApplicationModal');
        this.modalClose = document.getElementById('modalClose');
        this.form = document.getElementById('jobApplicationForm');

        if (this.modalClose) this.modalClose.addEventListener('click', () => this.closeModal());
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.closeModal();
            });
        }
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simulate submission
                const btn = this.form.querySelector('.submit-btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending...';
                setTimeout(() => {
                    alert('Application Sent Successfully!');
                    btn.innerHTML = originalText;
                    this.closeModal();
                }, 1500);
            });
        }
    }

    openModal(jobTitle) {
        if (this.modal) {
            document.getElementById('modalJobTitle').textContent = `Apply for: ${jobTitle}`;
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('no-scroll');
        }
    }

    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('no-scroll');
        }
    }
}

// =================================================
// 5. CONTACT PAGE CLASS
// =================================================
class RoyalStarContactPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupHeaderScroll();
        this.setupFormValidation();
        this.setupFAQInteractions();
        console.log('📞 Royal Star Contact Page initialized');
    }

    setupMobileNavigation() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn && nav) {
            menuBtn.addEventListener('click', () => { 
                nav.classList.add('active'); 
                document.body.classList.add('no-scroll');
            });
            if(closeBtn) closeBtn.addEventListener('click', () => { 
                nav.classList.remove('active'); 
                document.body.classList.remove('no-scroll');
            });
        }
    }

    setupHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }
    }

    setupFormValidation() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('.submit-btn');
                const originalText = btn.innerHTML;
                
                // Basic validation
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let valid = true;
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        valid = false;
                        input.style.borderColor = 'red';
                    } else {
                        input.style.borderColor = '#e0e0e0';
                    }
                });

                if (valid) {
                    btn.innerHTML = 'Sending...';
                    btn.disabled = true;
                    setTimeout(() => {
                        alert('Message Sent Successfully! We will contact you soon.');
                        form.reset();
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }, 2000);
                }
            });
        }
    }

    setupFAQInteractions() {
        const faqs = document.querySelectorAll('.faq-item');
        faqs.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close others
                faqs.forEach(f => f.classList.remove('active'));
                // Toggle current
                if (!isActive) item.classList.add('active');
            });
        });
    }
}

// =================================================
// 6. MASTER INITIALIZATION (THE SMART LOADER)
// =================================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Check for Homepage (Hero Section)
    if (document.querySelector('.hero') && document.querySelector('.hero-stats')) {
        if (typeof RoyalStarHomepage !== 'undefined') {
            new RoyalStarHomepage();
        }
    } 
    // 2. Check for About Page (Overview Section)
    else if (document.querySelector('.company-overview')) {
        if (typeof RoyalStarAboutPage !== 'undefined') {
            new RoyalStarAboutPage();
        }
    }
    // 3. Check for Services Page (Services Overview)
    else if (document.querySelector('.services-overview')) {
        if (typeof RoyalStarServicesPage !== 'undefined') {
            new RoyalStarServicesPage();
        }
    }
    // 4. Check for Careers Page (Jobs Grid)
    else if (document.querySelector('.current-openings') || document.getElementById('jobsContainer')) {
        if (typeof RoyalStarCareersPage !== 'undefined') {
            new RoyalStarCareersPage();
        }
    }
    // 5. Check for Contact Page (Form Section)
    else if (document.querySelector('.contact-form-section') || document.getElementById('contactForm')) {
        if (typeof RoyalStarContactPage !== 'undefined') {
            new RoyalStarContactPage();
        }
    }
    // 6. Check for Performance Page
    else if (document.querySelector('.performance-hero')) {
        // Performance page uses generic scripts (nav/footer) mostly.
        // If you have specific charts logic, add a class for it here.
        console.log('📊 Performance Page Loaded');
        
        // Basic Mobile Nav setup for Performance page if no class exists
        const menuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('mobileCloseBtn');
        if(menuBtn && nav) {
            menuBtn.addEventListener('click', () => { 
                nav.classList.add('active'); 
                document.body.classList.add('no-scroll');
            });
            if(closeBtn) closeBtn.addEventListener('click', () => { 
                nav.classList.remove('active'); 
                document.body.classList.remove('no-scroll');
            });
        }
    }

    // Global: Add 'loaded' class for CSS transitions
    document.body.classList.add('loaded');
    
    // Global: Offline Detection
    window.addEventListener('online', () => console.log('Online'));
    window.addEventListener('offline', () => alert('You are currently offline.'));
});