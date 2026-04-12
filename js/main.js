// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 模态框功能
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeButtons = document.querySelectorAll('.close');

    // 打开登录模态框
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            loginModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // 打开注册模态框
    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            registerModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // 关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 表单提交
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // 模拟登录
            alert('登录成功！');
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // 模拟注册
            alert('注册成功！');
            registerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // 滚动效果
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // 初始检查

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            // 滚动时导航栏变为半透明白色
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            // 滚动时修改文字颜色为黑色
            document.querySelectorAll('.logo span, .nav-links a, .user-actions .btn').forEach(element => {
                element.style.color = 'black';
                element.style.textShadow = 'none';
            });
            document.querySelectorAll('.user-actions .btn').forEach(btn => {
                btn.style.border = '1px solid rgba(0, 0, 0, 0.3)';
            });
        } else {
            // 回到顶部时导航栏透明
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
            // 回到顶部时恢复文字颜色为白色
            document.querySelectorAll('.logo span, .nav-links a, .user-actions .btn').forEach(element => {
                element.style.color = 'white';
                element.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.4)';
            });
            document.querySelectorAll('.user-actions .btn').forEach(btn => {
                btn.style.border = '1px solid rgba(255, 255, 255, 0.85)';
            });
        }
    });

    // 作品卡片悬停效果
    const workCards = document.querySelectorAll('.work-card');

    workCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        });
    });

    // 功能卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        });
    });

    // 创作者卡片悬停效果
    const creatorCards = document.querySelectorAll('.creator-card');

    creatorCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // 按钮点击效果
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // 创建波纹效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 轮播图功能
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => slide.classList.remove('active'));
        // 隐藏所有指示器
        indicators.forEach(indicator => indicator.classList.remove('active'));
        // 显示当前幻灯片
        slides[index].classList.add('active');
        // 激活当前指示器
        indicators[index].classList.add('active');
        // 更新当前幻灯片索引
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    // 自动轮播
    setInterval(nextSlide, 5000);

    // 点击指示器切换幻灯片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // 页面加载动画
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// 波纹效果样式
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);