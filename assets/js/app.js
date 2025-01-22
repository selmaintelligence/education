document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('https://selmaintelligence.pythonanywhere.com/data')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `<p>Data from server: ${JSON.stringify(data)}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
