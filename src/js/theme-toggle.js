// Color scheme toggle functionality
function updateColorScheme(scheme) {
    if(!document.startViewTransition) {
        document.documentElement.style.colorScheme = scheme;
    } else {
        document.startViewTransition(() => { document.documentElement.style.colorScheme = scheme });
    }
    // Save to localStorage
    localStorage.setItem('colorScheme', scheme);
}

// Load saved color scheme on page load
function loadSavedColorScheme() {
    const savedScheme = localStorage.getItem('colorScheme');
    const colorSchemeSelectInput = document.querySelector('select[name="color-scheme"]');
    
    if (savedScheme) {
        document.documentElement.style.colorScheme = savedScheme;
        colorSchemeSelectInput.value = savedScheme;
    } else {
        // Default to system preference if no saved scheme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultScheme = prefersDark ? 'dark' : 'light';
        document.documentElement.style.colorScheme = defaultScheme;
        colorSchemeSelectInput.value = defaultScheme;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadSavedColorScheme);

// Handle color scheme changes
document.addEventListener('DOMContentLoaded', () => {
    const colorSchemeSelectInput = document.querySelector('select[name="color-scheme"]');
    colorSchemeSelectInput.addEventListener('change', (event) => {
        const selectedValue = colorSchemeSelectInput.value;
        updateColorScheme(selectedValue);
    });
});