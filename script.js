document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu-link');
    const contentContainer = document.getElementById('main-content');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the "#" from the href
            loadContent(targetId);
        });
    });

    function loadContent(targetId) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', targetId + '.html', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contentContainer.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }
});
