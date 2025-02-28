const breedSelect = document.getElementById('breedSelect');
const dogImage = document.getElementById('dogImage');

// Fetch all dog breeds and populate the breed selector
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;
    for (let breed in breeds) {
      const option = document.createElement('option');
      option.value = breed;
      option.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);
      breedSelect.appendChild(option);
    }
  })
  .catch(error => console.error('Error fetching breeds:', error));

// Get a random dog image
function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
    })
    .catch(error => console.error('Error fetching random dog:', error));
}

// Get a dog image based on breed
function getDogByBreed() {
  const breed = breedSelect.value;
  if (breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => {
        dogImage.src = data.message;
      })
      .catch(error => console.error('Error fetching dog by breed:', error));
  }
}
