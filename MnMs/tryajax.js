document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadExternal');
    const contentColumn = document.getElementById('externalContentColumn');
  
    loadButton.addEventListener('click', function() {
      // Fetch the content from external.html
      fetch('http://localhost:5500/article1.html')
        .then(response => response.text())
        .then(content => {
          // Insert the fetched content into the contentColumn
          contentColumn.innerHTML = content;
        })
        .catch(error => {
          console.error('Error loading external content:', error);
        });
    });
  });
  