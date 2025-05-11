tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                }
            }
        }
    }
}


const html = document.documentElement;
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');

let isOpen = false;

menuToggle.addEventListener('click', () => {
    if (!isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('animate-slide-up');
        mobileMenu.classList.add('animate-slide-down');
        menuIcon.classList.replace('fa-bars', 'fa-times');
        isOpen = true;
    } else {
        mobileMenu.classList.remove('animate-slide-down');
        mobileMenu.classList.add('animate-slide-up');

        // Delay hide to allow animation to finish
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 200);
        menuIcon.classList.replace('fa-times', 'fa-bars');
        isOpen = false;
    }
});

themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        html.classList.toggle('dark');
    });
});