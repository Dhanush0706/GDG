document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('year-filter');
    const events = document.querySelectorAll('.event-card');

    filterSelect.addEventListener('change', function() {
        const selectedYear = filterSelect.value;

        events.forEach(event => {
            const eventYear = event.getAttribute('data-year');

            if (selectedYear === 'all' || eventYear === selectedYear) {
                event.style.display = 'block';
                event.classList.add('fade-in');
            } else {
                event.style.display = 'none';
                event.classList.remove('fade-in');
            }
        });
    });
});
