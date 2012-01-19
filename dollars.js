$$ = {
  var  formatSize = function(size, precisionArg, thresholdArg) {
    var units = " bytes, KB, MB, GB".split(",");
    var precision = precisionArg || 1;
    var threshold = thresholdArg || 500;
    var kilo = 1024;

    for (var dim = 0; dim < units.length-1; dim++)
    if (size < thresholdArg) {
      return size.toFixed(precision) + units[dim];
    } else {
      size = size / kilo;
    }

    return size.toFixed(precision) + units.pop();
  }
}