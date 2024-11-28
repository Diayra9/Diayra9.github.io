document.addEventListener("DOMContentLoaded", function () {
    const treatmentWrappers = document.querySelectorAll('.treatment-wrapper');
    const treatmentGrid = document.querySelector('.treatment-grid');

    treatmentWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // If treatment is active, span 2 columns, otherwise reset it
            if (this.classList.contains('active')) {
                // When clicked, span 2 columns (make it large)
                this.style.gridColumn = 'span 2';
            } else {
                // Reset to the normal grid behavior when not active
                this.style.gridColumn = 'auto';
            }

            // Remove the active class from other treatment cards
            treatmentWrappers.forEach(otherWrapper => {
                if (otherWrapper !== this) {
                    otherWrapper.classList.remove('active');
                    otherWrapper.style.gridColumn = 'auto';
                }
            });
        });
    });
});
