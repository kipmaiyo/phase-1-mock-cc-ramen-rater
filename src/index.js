// write your code here




document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.querySelector('#ramen-menu');
    const ramenDetail = document.querySelector('#ramen-detail');
    const newRamenForm = document.querySelector('#new-ramen');
  
    // Fetch all ramen objects from the server
    fetch('http://localhost:3000/ramens')
      .then(res => res.json())
      .then(ramens => {
        // Display ramen images in the #ramen-menu div
        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.addEventListener('click', () => {
            // Display detailed information about the clicked ramen
            showRamenDetails(ramen);
          });
          ramenMenu.appendChild(img);
        });
      });
  
    // Display detailed information about a ramen
    function showRamenDetails(ramen) {
      ramenDetail.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}">
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <p>Comment: ${ramen.comment}</p>
        <p>Rating: ${ramen.rating}</p>
      `;
    }
  
    // Handle form submission to create a new ramen
    newRamenForm.addEventListener('submit', event => {
      event.preventDefault();
  
      // Retrieve form values
      const image = document.querySelector('#new-ramen-image').value;
      const name = document.querySelector('#new-ramen-name').value;
      const restaurant = document.querySelector('#new-ramen-restaurant').value;
      const rating = document.querySelector('#new-ramen-rating').value;
  
      // Create a new ramen object
      const newRamen = {
        image,
        name,
        restaurant,
        rating,
        comment: 'insert comment here', // Default comment
      };
  
      // Display the new ramen in the #ramen-menu div
      const img = document.createElement('img');
      img.src = newRamen.image;
      img.addEventListener('click', () => {
        // Display detailed information about the new ramen
        showRamenDetails(newRamen);
      });
      ramenMenu.appendChild(img);
  
      // Reset the form
      newRamenForm.reset();
    });
  });
  


