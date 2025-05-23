// Problem 1
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

function hasDuplicate(nums) {
  const map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    map1.set(nums[i]);
  }
  if (map1.size == nums.length) {
    return false;
  } else {
    return true;
  }
}

hasDuplicate([1, 2, 3, 3]);
hasDuplicate([1, 2, 3, 4]);

// Problem 2
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

function isAnagram(s, t) {
  const splitted1 = s.split("").sort().join("");
  const splitted2 = t.split("").sort().join("");
  return splitted1 == splitted2 ? true : false;
}

isAnagram("racecar", "carrace");
isAnagram("jar", "jam");

//Problem 3
//Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < nums.length; y++) {
      if (nums[i] + nums[y] == target && i != y) {
        return;
      }
    }
  }
}

twoSum([3, 4, 5, 6], 7);
twoSum([4, 5, 6], 10);
twoSum([5, 5], 10);

//Problem 4
//Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.

function topKFrequent(nums, k) {
  const numarray = {};

  nums.forEach((element) => {
    if (numarray[element] >= 1) {
      numarray[element] = numarray[element] + 1;
    } else {
      numarray[element] = 1;
    }
  });

  let sortedObject = 
    Object.entries(numarray).sort(([, a], [, b]) => b - a)
  return sortedObject.slice(0,k).map(x=>x[0]);
   
}

topKFrequent([4, 2, 2, 3, 3, 3], 2);
topKFrequent([7, 7], 1);
