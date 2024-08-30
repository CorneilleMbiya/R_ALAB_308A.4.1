

// The breed selection input element.
//const breedSelect = document.getElementById("breedSelect");    remove
// The information section div element.
//const infoDump = document.getElementById("infoDump");       remove
// The progress bar div element.
//const progressBar = document.getElementById("progressBar");     remove
// The get favourites button element.
//const getFavouritesBtn = document.getElementById("getFavouritesBtn");     remove
const infoDump = document.getElementById("infoDump");
const progressBar = document.getElementById("progressBar");
const getFavouritesBtn = document.getElementById("getFavouritesBtn");
const API_KEY = 'live_OxvqHCRGE3ftF135yw0vPckMuZYC39KLpNtYfQyYNIBYXBatsZKrMDVVAFHUrzLN';
const BASE_URL = 'https://api.thecatapi.com/v1';


// Step 0: Store your API key here for reference and easy access.
//const API_KEY = "";
//const API_KEY = 'live_OxvqHCRGE3ftF135yw0vPckMuZYC39KLpNtYfQyYNIBYXBatsZKrMDVVAFHUrzLN';
//const BASE_URL = 'https://api.thecatapi.com/v1';

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */
// Call the function to load breeds when the page loads
//initialLoad();





// async function initialLoad() {
//     try {
//         const response = await fetch(`${BASE_URL}/breeds`, {
//             headers: {
//                 'x-api-key': API_KEY
//             }
//         });
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch breeds');
//         }

//         const breeds = await response.json();

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// // Call the function to load breeds when the page loads
// initialLoad();




/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 *  - Make sure your request is receiving multiple array items!
 *  - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new element for the carousel.
 *  - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 *  - Be creative with how you create DOM elements and HTML.
 *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 *  - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */






// async function initialLoad() {
//     try {
//         const response = await fetch(`${BASE_URL}/breeds`, {
//             headers: {
//                 'x-api-key': API_KEY
//             }
//         });
        
//         if (!response.ok) {
//             throw new Error('Failed to fetch breeds');
//         }

//         const breeds = await response.json();

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await fetch(`${BASE_URL}/images/search?breed_ids=${selectedBreedId}&limit=5`, {
//             headers: {
//                 'x-api-key': API_KEY
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch breed information');
//         }

//         const breedData = await response.json();

//         // Clear existing carousel and info
//         const carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         carousel = new bootstrap.Carousel(carouselElement);
//         carousel.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }

// // Add event listener to breedSelect
// breedSelect.addEventListener('change', handleBreedSelect);

// // Call initialLoad to set up the page
// initialLoad();















/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */





// Set default base URL and headers for Axios
//axios.defaults.baseURL = BASE_URL;
//axios.defaults.headers.common['x-api-key'] = API_KEY;

// async function initialLoad() {
//     try {
//         const response = await axios.get('/breeds');
        
//         const breeds = response.data;

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`);

//         const breedData = response.data;

//         // Clear existing carousel and info
//         const carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         carousel = new bootstrap.Carousel(carouselElement);
//         carousel.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }














/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */






// import axios from 'axios';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['x-api-key'] = API_KEY;

// // Add axios interceptors to log request-response time
// axios.interceptors.request.use(config => {
//     config.metadata = { startTime: new Date() };
//     console.log('Request started');
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     const endTime = new Date();
//     const duration = endTime - response.config.metadata.startTime;
//     console.log(`Request-response time: ${duration}ms`);
//     return response;
// }, error => {
//     return Promise.reject(error);
// });

// async function initialLoad() {
//     try {
//         const response = await axios.get('/breeds');
        
//         const breeds = response.data;

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`);

//         const breedData = response.data;

//         // Clear existing carousel and info
//         carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         const carouselInstance = new bootstrap.Carousel(carouselElement);
//         carouselInstance.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }







/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar element has already been created for you.
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar element to 0%.
 *  - This is to reset the progress with each request.
 * - Research the axios onDownloadProgress config option.
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */




// import axios from 'axios';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['x-api-key'] = API_KEY;

// // Add axios interceptors to log request-response time
// axios.interceptors.request.use(config => {
//     config.metadata = { startTime: new Date() };
//     console.log('Request started');
//     progressBar.style.width = '0%';
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     const endTime = new Date();
//     const duration = endTime - response.config.metadata.startTime;
//     console.log(`Request-response time: ${duration}ms`);
//     return response;
// }, error => {
//     return Promise.reject(error);
// });

// async function initialLoad() {
//     try {
//         const response = await axios.get('/breeds');
        
//         const breeds = response.data;

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// function updateProgress(progressEvent) {
//     console.log(progressEvent);
//     if (progressEvent.lengthComputable) {
//         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         progressBar.style.width = percentCompleted + '%';
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`, {
//             onDownloadProgress: updateProgress
//         });

//         const breedData = response.data;

//         // Clear existing carousel and info
//         const carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         const carouselInstance = new bootstrap.Carousel(carouselElement);
//         carouselInstance.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }






/**
 * 7. As a final element of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body element's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body element.
 */




// import axios from 'axios';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['x-api-key'] = API_KEY;

// // Add axios interceptors to log request-response time
// axios.interceptors.request.use(config => {
//     config.metadata = { startTime: new Date() };
//     console.log('Request started');
//     progressBar.style.width = '0%';
//     document.body.style.cursor = 'progress';
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     const endTime = new Date();
//     const duration = endTime - response.config.metadata.startTime;
//     console.log(`Request-response time: ${duration}ms`);
//     document.body.style.cursor = 'default';
//     return response;
// }, error => {
//     document.body.style.cursor = 'default';
//     return Promise.reject(error);
// });

// async function initialLoad() {
//     try {
//         const response = await axios.get('/breeds');
        
//         const breeds = response.data;

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// function updateProgress(progressEvent) {
//     console.log(progressEvent);
//     if (progressEvent.lengthComputable) {
//         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         progressBar.style.width = percentCompleted + '%';
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`, {
//             onDownloadProgress: updateProgress
//         });

//         const breedData = response.data;

//         // Clear existing carousel and info
//         const carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         const carouselInstance = new bootstrap.Carousel(carouselElement);
//         carouselInstance.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }






/**
 * 8. To practice posting data, we'll create a system to "favourite" certain images.
 * - The skeleton of this function has already been created for you.
 * - This function is used within Carousel.js to add the event listener as items are created.
 *  - This is why we use the export keyword for this function.
 * - Post to the cat API's favourites endpoint with the given ID.
 * - The API documentation gives examples of this functionality using fetch(); use Axios!
 * - Add additional logic to this function such that if the image is already favourited,
 *   you delete that favourite using the API, giving this function "toggle" functionality.
 * - You can call this function by clicking on the heart at the top right of any image.
*/

// export async function favourite(imgId) {
//   // your code here
 
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['x-api-key'] = API_KEY;

// // Add axios interceptors to log request-response time
// axios.interceptors.request.use(config => {
//     config.metadata = { startTime: new Date() };
//     console.log('Request started');
//     progressBar.style.width = '0%';
//     document.body.style.cursor = 'progress';
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     const endTime = new Date();
//     const duration = endTime - response.config.metadata.startTime;
//     console.log(`Request-response time: ${duration}ms`);
//     document.body.style.cursor = 'default';
//     return response;
// }, error => {
//     document.body.style.cursor = 'default';
//     return Promise.reject(error);
// });

// async function initialLoad() {
//     try {
//         const response = await axios.get('/breeds');
        
//         const breeds = response.data;

//         breeds.forEach(breed => {
//             const option = document.createElement('option');
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });

//         // Call the event handler function to create the initial carousel
//         handleBreedSelect();
//     } catch (error) {
//         console.error('Error loading breeds:', error);
//     }
// }

// function updateProgress(progressEvent) {
//     console.log(progressEvent);
//     if (progressEvent.lengthComputable) {
//         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         progressBar.style.width = percentCompleted + '%';
//     }
// }

// async function handleBreedSelect() {
//     const selectedBreedId = breedSelect.value;
//     if (!selectedBreedId) return;

//     try {
//         const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`, {
//             onDownloadProgress: updateProgress
//         });

//         const breedData = response.data;

//         // Clear existing carousel and info
//         const carousel = document.querySelector('.carousel');
//         carousel.innerHTML = '';
//         infoDump.innerHTML = '';

//         // Create and append carousel items
//         breedData.forEach((item, index) => {
//             const carouselItem = document.createElement('div');
//             carouselItem.classList.add('carousel-item');
//             if (index === 0) carouselItem.classList.add('active');

//             const img = document.createElement('img');
//             img.src = item.url;
//             img.alt = item.breeds[0].name;
//             img.classList.add('d-block', 'w-100');

//             carouselItem.appendChild(img);
//             carousel.appendChild(carouselItem);
//         });

//         // Create info section
//         const breedInfo = breedData[0].breeds[0];
//         const infoHTML = `
//             <h2>${breedInfo.name}</h2>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//             <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
//         `;
//         infoDump.innerHTML = infoHTML;

//         // Restart the carousel
//         const carouselElement = document.querySelector('#breedCarousel');
//         const carouselInstance = new bootstrap.Carousel(carouselElement);
//         carouselInstance.cycle();

//     } catch (error) {
//         console.error('Error fetching breed information:', error);
//     }
// }

// export async function favourite(imageId) {
//     try {
//         // Check if the image is already favorited
//         const favoritesResponse = await axios.get('/favourites');
//         const favorites = favoritesResponse.data;
//         const existingFavorite = favorites.find(fav => fav.image_id === imageId);

//         if (existingFavorite) {
//             // If already favorited, delete the favorite
//             await axios.delete(`/favourites/${existingFavorite.id}`);
//             console.log('Favorite removed');
//         } else {
//             // If not favorited, add to favorites
//             await axios.post('/favourites', { image_id: imageId });
//             console.log('Favorite added');
//         }
//     } catch (error) {
//         console.error('Error toggling favorite:', error);
//     }
// }

  
// }    

/**
 * 9. Test your favourite() function by creating a getFavourites() function.
 * - Use Axios to get all of your favourites from the cat API.
 * - Clear the carousel and display your favourites when the button is clicked.
 *  - You will have to bind this event listener to getFavouritesBtn yourself.
 *  - Hint: you already have all of the logic built for building a carousel.
 *    If that isn't in its own function, maybe it should be so you don't have to
 *    repeat yourself in this section.
 */



axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['x-api-key'] = API_KEY;

// Add axios interceptors to log request-response time
axios.interceptors.request.use(config => {
    config.metadata = { startTime: new Date() };
    console.log('Request started');
    progressBar.style.width = '0%';
    document.body.style.cursor = 'progress';
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    const endTime = new Date();
    const duration = endTime - response.config.metadata.startTime;
    console.log(`Request-response time: ${duration}ms`);
    document.body.style.cursor = 'default';
    return response;
}, error => {
    document.body.style.cursor = 'default';
    return Promise.reject(error);
});

async function initialLoad() {
    try {
        const response = await axios.get('/breeds');
        
        const breeds = response.data;

        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

        // Call the event handler function to create the initial carousel
        handleBreedSelect();
    } catch (error) {
        console.error('Error loading breeds:', error);
    }
}

function updateProgress(progressEvent) {
    console.log(progressEvent);
    if (progressEvent.lengthComputable) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        progressBar.style.width = percentCompleted + '%';
    }
}

async function handleBreedSelect() {
    const selectedBreedId = breedSelect.value;
    if (!selectedBreedId) return;

    try {
        const response = await axios.get(`/images/search?breed_ids=${selectedBreedId}&limit=5`, {
            onDownloadProgress: updateProgress
        });

        const breedData = response.data;

        buildCarousel(breedData);
        displayBreedInfo(breedData[0].breeds[0]);

    } catch (error) {
        console.error('Error fetching breed information:', error);
    }
}

function buildCarousel(data) {
    // Clear existing carousel
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = '';

    // Create and append carousel items
    data.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');

        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.breeds[0]?.name || 'Cat Image';
        img.classList.add('d-block', 'w-100');

        carouselItem.appendChild(img);
        carousel.appendChild(carouselItem);
    });

    // Restart the carousel
    const carouselElement = document.querySelector('#breedCarousel');
    const carouselInstance = new bootstrap.Carousel(carouselElement);
    carouselInstance.cycle();
}

function displayBreedInfo(breedInfo) {
    // Clear existing info
    infoDump.innerHTML = '';

    if (breedInfo) {
        const infoHTML = `
            <h2>${breedInfo.name}</h2>
            <p><strong>Origin:</strong> ${breedInfo.origin}</p>
            <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
            <p><strong>Description:</strong> ${breedInfo.description}</p>
            <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
            <p><strong>Weight:</strong> ${breedInfo.weight.metric} kg</p>
        `;
        infoDump.innerHTML = infoHTML;
    } else {
        infoDump.innerHTML = '<p>No breed information available.</p>';
    }
}

export async function favourite(imageId) {
    try {
        // Check if the image is already favorited
        const favoritesResponse = await axios.get('/favourites');
        const favorites = favoritesResponse.data;
        const existingFavorite = favorites.find(fav => fav.image_id === imageId);

        if (existingFavorite) {
            // If already favorited, delete the favorite
            await axios.delete(`/favourites/${existingFavorite.id}`);
            console.log('Favorite removed');
        } else {
            // If not favorited, add to favorites
            await axios.post('/favourites', { image_id: imageId });
            console.log('Favorite added');
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
    }
}

async function getFavourites() {
    try {
        const response = await axios.get('/favourites');
        const favourites = response.data;

        // Transform the favourites data to match the format expected by buildCarousel
        const carouselData = favourites.map(fav => ({
            url: fav.image.url,
            breeds: [] // We don't have breed info in favourites, so we'll leave this empty
        }));

        buildCarousel(carouselData);
        displayBreedInfo(null); // Clear breed info when showing favourites

        console.log('Favourites loaded');
    } catch (error) {
        console.error('Error fetching favourites:', error);
    }
}

// Add event listener for the getFavourites button
document.getElementById('getFavouritesBtn').addEventListener('click', getFavourites);







/**
 * 10. Test your site, thoroughly!
 * - What happens when you try to load the Malayan breed?
 *  - If this is working, good job! If not, look for the reason why and fix it!
 * - Test other breeds as well. Not every breed has the same data available, so
 *   your code should account for this.
 */

