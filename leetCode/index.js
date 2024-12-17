//  ---------------------------------------- Q1. Two Sum ----------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Solution

        // var twoSum = function (nums = [], target) {
        // const numIndices = new Map();

        // for (let i = 0; i < nums.length; i++) {
        //     const complement = target - nums[i];

        //     if (numIndices.has(complement)) {
        //     return [numIndices.get(complement), i];
        //     }

        //     numIndices.set(nums[i], i);
        // }

        // return [];
        // };
        // console.log(twoSum([3, 3, 3], 6));


//  ---------------------------------------- Q1. Add Two Numbers ----------------------------------------

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.