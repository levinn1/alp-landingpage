document.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.querySelector('form[role="search"]');
    
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = event.target.querySelector('input[type="search"]').value;
      alert(`You searched for: ${query}`);
      // Implement your search functionality here
    });
  });
  