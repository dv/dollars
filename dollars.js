$$ = dollars = {};

// Formatting Methods
dollars.formatSize = function(size, precisionArg, thresholdArg) {
  var units = " bytes, KB, MB, GB".split(",");
  var precision = precisionArg || 1;
  var threshold = thresholdArg || 500;
  var kilo = 1024;

  for (var dim = 0; dim < units.length-1; dim++) {
    if (size < threshold) {
      return (size % 1 ? size.toFixed(precision) : size) + units[dim];
    } else {
      size = size / kilo;
    }
  }

  return size.toFixed(precision) + units.pop();
}

// Creates a copy from `collection` with only the key-value
// pairs specified by `keys`.
//
// Example:
//
//  var obj = {name: "David", age: 25, email: "david@crowdway.com"};
//  $$.filterKeys(obj, ["name", "age"]);
//  // This would return
//  { name: "David", age: 25 }
dollars.filterKeys = function(collection, keys) {
  var results = {};

  _.each(collection, function(value, key) {
    if (_.include(keys, key)) {
      results[key] = value;
    }
  });
  
  return results;
}