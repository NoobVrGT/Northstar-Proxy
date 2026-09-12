// Apply saved cloak settings immediately on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('ns_cloak_title');
    const savedIcon = localStorage.getItem('ns_cloak_icon');
    
    if (savedTitle) document.title = savedTitle;
    if (savedIcon) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = savedIcon;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
});

// Global Panic Key Listener (Press '\' anywhere)
document.addEventListener('keydown', (e) => {
    if (e.key === '\\') {
        e.preventDefault();
        const panicUrl = localStorage.getItem('ns_panic_url') || 'https://classroom.google.com';
        window.location.replace(panicUrl);
    }
});