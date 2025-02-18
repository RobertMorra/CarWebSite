// JavaScript functions for creating header and footer
function createHeader() {
    // Check if the header already exists
    if (!document.querySelector('header')) {
        const header = document.createElement('header');
        header.innerHTML = '<h1>Porsche</h1>';
        document.body.insertBefore(header, document.body.firstChild);
    }
}

function createFooter() {
    // Check if the footer already exists
    if (!document.querySelector('footer')) {
        const footer = document.createElement('footer');
        footer.innerHTML = '<p>&copy; 2023 Porsche. All rights reserved.</p>';
        document.body.appendChild(footer);
    }
}

// Ensure the DOM is fully loaded before calling the functions
document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
});
