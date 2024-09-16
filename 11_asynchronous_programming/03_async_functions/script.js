async function exampleFunction() {
  const result = await new Promise((resolve) => setTimeout(() => resolve("Hello, World!"), 2000));
  console.log(result); // Output after 1 second: "Hello, World!"
}

exampleFunction();



// Helper function to simulate a delayed payment processing
function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    // Simulate a random delay between 1 to 3 seconds
    const delay = Math.floor(Math.random() * 2000) + 1000;
    
    setTimeout(() => {
      // Simulate a random success or failure
      const success = Math.random() > 0.2; // 80% chance of success
      
      if (success) {
        resolve(`Payment for order ${orderId} processed successfully.`);
      } else {
        reject(`Payment for order ${orderId} failed.`);
      }
    }, delay);
  });
}

// Async function to handle order payment
async function handleOrderPayment(orderId) {
  try {
    console.log(`Processing payment for order ${orderId}...`);
    const result = await processPayment(orderId); // Wait for the payment process to complete
    console.log(result);
  } catch (error) {
    console.error(error); // Handle payment failure
  }
}

// Usage
handleOrderPayment(123);
console.log('Another Message ...'); // This will be logged first
console.log('After Message ...'); // This will be logged first

const APIKey = '2675a0482e5c8100dce84fc9f2ecfe88';

async function fetchWeatherData(city) {
  try {
    console.log(`Fetching weather data for ${city}...`);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Weather in ${city}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

console.log('Before fetching weather data...');
fetchWeatherData('London');


function sendConfirmationEmail(userEmail) {
  return new Promise((resolve) => {
    // Simulate email sending delay between 500ms to 1500ms
    const delay = Math.floor(Math.random() * 1000) + 500;
    
    setTimeout(() => {
      resolve(`Confirmation email sent to ${userEmail}`);
    }, delay);
  });
}

// Async function to handle user registration
async function registerUser(userEmail) {
  console.log(`Registering user with email: ${userEmail}`);
  
  // Simulate registration process
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('User registered successfully.');

  // Send confirmation email
  const emailResult = await sendConfirmationEmail(userEmail);
  console.log(emailResult);
}

// Usage
registerUser('hashimtahir.com');


function fetchPriceFromSupplier(supplier, productId) {
  return new Promise((resolve) => {
    // Simulate varying delay for each supplier
    const delay = Math.floor(Math.random() * 1500) + 500;
    
    setTimeout(() => {
      const price = (Math.random() * 100).toFixed(2); // Random price
      resolve({ supplier, price });
    }, delay);
  });
}

// Async function to retrieve product prices from multiple suppliers
async function retrieveProductPrices(productId) {
  const suppliers = ['SupplierA', 'SupplierB', 'SupplierC'];
  
  const prices = []; // To store the prices
  
  for (const supplier of suppliers) {
    const priceData = await fetchPriceFromSupplier(supplier, productId); // Fetch price
    console.log(`Price from ${supplier}: $${priceData.price}`);
    prices.push(priceData);
  }

  console.log('All prices retrieved:', prices);
}

// Usage
retrieveProductPrices(101);