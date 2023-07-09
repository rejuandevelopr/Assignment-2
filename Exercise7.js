// Exercise 7

function getAddressCity(address) {
    return address?.city || "Unknown";
  }
  
  const address = { street: '123 Main St', country: 'USA' };
  const city = getAddressCity(address);
  console.log(city);
  