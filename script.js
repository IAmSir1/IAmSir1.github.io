document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById("text-input");
    const scriptButton = document.getElementById("script-button");
    const scriptOutput = document.getElementById("script-output");

    scriptButton.addEventListener('click', function () {
        scriptOutput.textContent = inputText.value;
    });
})


document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?category=health&apiKey=a694f57d57bb49c7b6aa962aa08821a8';

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let news = data.articles;
            news = news.slice(0, 10);
            const newsBlock = document.getElementById('news-container');
            newsBlock.innerHTML = "";

            news.forEach(function(note) {
                const columna = document.createElement('div');
                columna.classList.add('col-md-4', 'mb-4');

                columna.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${note.title}</h5>
                            <p class="card-text">${note.description || 'No description available.'}</p>
                            <a href="${note.url}" class="btn btn-light" target="_blank">More info...</a>
                        </div>
                    </div>
                `;
                newsBlock.appendChild(columna);
            });
        })
        .catch(function(error) {
            console.log('Hubo un error:', error);
        });
});
