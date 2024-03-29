document.querySelectorAll('.menu-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove the message section
        const messageSection = document.querySelector('.message');
        if (messageSection) {
            messageSection.remove();
        }

        // Get the href attribute of the clicked anchor link
        const pageUrl = this.getAttribute('href');

        // Fetch the content of the target HTML file
        fetch(pageUrl)
            .then(response => response.text())
            .then(html => {
                // Remove any existing content
                document.querySelector('.container').innerHTML = '';

                // Create a new div element to hold the fetched content
                const contentDiv = document.createElement('div');
                contentDiv.innerHTML = html;

                // Append the content below the menu
                document.querySelector('.container').appendChild(contentDiv);
            })
            .catch(error => console.error('Error fetching page:', error));
    });
});
