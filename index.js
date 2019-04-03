driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  newObj = Object.assign({}, driver, {[key]: value})
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]= value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  updatedObj = Object.assign({}, driver)
  delete updatedObj[key]
  return updatedObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
