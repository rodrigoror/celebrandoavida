document.addEventListener('DOMContentLoaded', function() {
    // Function to format the date
    function formatDate(date) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('pt-BR', options);
    }

    // Get all elements with class post-date
    const dateElements = document.querySelectorAll('.post-date');
    
    // Set different dates for each post (for demonstration)
    const dates = [
        new Date(), // today
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
        new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
        new Date(Date.now() - 10 * 24 * 60 * 60 * 1000) // 10 days ago
    ];

    // Update each date element
    dateElements.forEach((element, index) => {
        element.textContent = formatDate(dates[index] || new Date());
    });
}); 