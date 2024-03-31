document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('.content');

    document.querySelectorAll('.menu-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the href attribute of the clicked anchor link
            const pageUrl = this.getAttribute('href');

            // Fetch the content of the target HTML file
            fetch(pageUrl)
                .then(response => response.text())
                .then(html => {
                    // Replace the content of the content container with the fetched content
                    contentContainer.innerHTML = html;
                })
                .catch(error => console.error('Error fetching page:', error));
        });
    });
});
