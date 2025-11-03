// Load saved color scheme on page load
function loadSavedColorScheme() {
    const savedScheme = localStorage.getItem('colorScheme');
    let currentScheme;
    
    if (savedScheme) {
        currentScheme = savedScheme;
    } else {
        // Default to system preference if no saved scheme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentScheme = prefersDark ? 'dark' : 'light';
    }
    
    document.documentElement.style.colorScheme = currentScheme;
    updateThemeIcons(currentScheme);
}

// Color scheme toggle functionality
function updateColorScheme(scheme) {
    if(!document.startViewTransition) {
        document.documentElement.style.colorScheme = scheme;
    } else {
        document.startViewTransition(() => { document.documentElement.style.colorScheme = scheme });
    }
    // Save to localStorage
    localStorage.setItem('colorScheme', scheme);
    
    // Update button icons
    updateThemeIcons(scheme);
}

// Update theme toggle button icons
function updateThemeIcons(scheme) {
    const button = document.querySelector('#theme-toggle');
    const sunIcon = button.querySelector('.sun-icon');
    const moonIcon = button.querySelector('.moon-icon');
    
    if (scheme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Initialize on page load - DOM is ready since script is deferred
function init() {
    loadSavedColorScheme();
    
    const themeToggleButton = document.querySelector('#theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        const currentScheme = document.documentElement.style.colorScheme;
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
        updateColorScheme(newScheme);
    });

    // Home page buttons - connect and view resume
    const connectButton = document.querySelector('#connect-button');
    connectButton && connectButton.addEventListener('click', () => {
        location.href = 'mailto:ramens.regress_8l@icloud.com?subject-=Let\'s%20Connect';
        const timeout = setTimeout(() => {
            // Fallback: open Gmail web compose
            window.open('https://mail.google.com/mail/?view=cm&to=ramens.regress_8l@icloud.com');
        }, 500);
        window.addEventListener('blur', () => clearTimeout(timeout));
    });
    const viewResumeButton = document.querySelector('#view-resume-button');
    viewResumeButton && viewResumeButton.addEventListener('click', () => {
        window.open('/resume.pdf', '_blank');
    });
}

// Run initialization
init();