function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] === val && arr[rightIdx] === val) {
      return rightIdx - leftIdx + 1;
    }
    if (arr[leftIdx] < val) {
      leftIdx += 1;
    }
    if (arr[rightIdx] > val) {
      rightIdx -= 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
6;
