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

// Function to make AJAX request to NekosBest API and display the image
function fetchAndDisplayNekoImage() {
    const apiUrl = 'https://nekos.best/api/v2/neko';
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Access the image URL from the first element in the results array
            const imageUrl = data.results[0].url;
            const imageElement = document.getElementById('nekoImage');
            imageElement.className = 'neko-image'; 
            if (imageElement && imageUrl) { // Ensure element and URL exist
                imageElement.src = imageUrl;
            } else {
                console.error('Missing image element or URL');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Call the fetchAndDisplayNekoImage function to fetch and display the image
fetchAndDisplayNekoImage();
