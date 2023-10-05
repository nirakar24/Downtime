const axios = require('axios');

const websitesToMonitor = [
  { name: 'Example Website', url: 'http://localhost:3000/health' }, // Updated URL
  // Add more websites here
];

async function checkDowntime(website) {
  try {
    const response = await axios.get(website.url);
    if (response.status === 200) {
      console.log(`${website.name} is up and running.`);
    } else {
      console.log(`${website.name} is down!`);
    }
  } catch (error) {
    console.error(`Error checking ${website.name}: ${error.message}`);
  }
}

const monitoringInterval = 60000; // 1 minute

setInterval(() => {
  websitesToMonitor.forEach(checkDowntime);
}, monitoringInterval);

websitesToMonitor.forEach(checkDowntime);
