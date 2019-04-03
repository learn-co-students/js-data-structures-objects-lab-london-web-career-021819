// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue ( driver, key, value ) {
  obj = Object.assign({}, driver, { [key]: value} )
  return obj;
}

function destructivelyUpdateDriverWithKeyAndValue ( driver, key, value ) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey ( driver, key ) {
  obj = Object.assign( {}, driver );
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver; 
}
