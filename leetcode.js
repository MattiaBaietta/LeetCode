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
