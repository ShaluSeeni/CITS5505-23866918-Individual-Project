document.querySelectorAll('.menu-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Get the href attribute of the clicked anchor link
        const pageUrl = this.getAttribute('href');

        // Check if the clicked link is not for index.html (Home)
        if (!pageUrl.endsWith("index.html")) {
            // Prevent the default behavior for non-Home links
            e.preventDefault();

            // Fetch the content of the target HTML file
            fetch(pageUrl)
                .then(response => response.text())
                .then(html => {
                    // Replace the content of the content section with the fetched content
                    document.querySelector('.content').innerHTML = html;
                })
                .catch(error => console.error('Error fetching page:', error));
        }
    });
});
