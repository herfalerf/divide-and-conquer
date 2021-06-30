// function sortedFrequency(arr, val) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];
//     let count = 0;

//     if (arr[leftIdx] === val && arr[rightIdx] === val) {
//       count = rightIdx - leftIdx + 1;
//     } else if (middleVal < val) {
//       leftIdx = middleIdx + 1;
//     } else if (middleVal > val) {
//       rightIdx = middleIdx - 1;
//     } else {

//     }
//   }
//   return -1;
// }

function sortedFrequency(arr, val) {
  let firstIdx = findFirst(arr, val);

  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, val);

  return lastIdx - firstIdx + 1;
}

function findFirst(arr, val) {
  leftIdx = 0;
  rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (arr[leftIdx] === val) {
      return leftIdx;
    } else if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      rightIdx = middleIdx - 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
  }
  if (arr[leftIdx] === val) {
    return leftIdx;
  } else {
    return -1;
  }
}
function findLast(arr, val) {
  leftIdx = 0;
  rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (arr[rightIdx] === val) {
      return rightIdx;
    } else if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
      middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    }
  }
  if (arr[rightIdx] === val) {
    return rightIdx;
  } else {
    return -1;
  }
}

module.exports = sortedFrequency;
6;
