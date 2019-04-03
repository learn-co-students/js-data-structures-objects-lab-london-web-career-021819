// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '11 Broadway'
};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver.name
   return driver
}
