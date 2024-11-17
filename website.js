// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value;
    if (query.trim() !== '') {
        // Redirect to Google search with the query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
