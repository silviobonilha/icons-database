
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's saved data
    if (localStorage.getItem('lessonsData')) {
        console.log('Dados carregados do localStorage');
    }
// Mask sensitive information if needed
    const sensitiveElements = document.querySelectorAll('.font-mono');
    sensitiveElements.forEach(el => {
        el.addEventListener('click', function() {
            this.textContent = '•••••••••';
        });
    });
});
