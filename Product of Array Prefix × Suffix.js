const nums = [1, 2, 3, 4];
function productExceptSelf(nums) {

  const n = nums.length;

  const prefix  = new Array(n).fill(1); // prefix[i] = product of nums[0..i-1]

  const suffix  = new Array(n).fill(1); // suffix[i] = product of nums[i+1..n-1]

  const output  = new Array(n).fill(1);

 

  // ── Pass 1: fill prefix ──────────────────

  for (let i = 1; i < n; i++) {

    prefix[i] = prefix[i-1] * nums[i-1];

  }

 

  // ── Pass 2: fill suffix ──────────────────

  for (let i = n-2; i >= 0; i--) {

    suffix[i] = suffix[i+1] * nums[i+1];

  }

 

  // ── Pass 3: multiply ─────────────────────

  for (let i = 0; i < n; i++) {

    output[i] = prefix[i] * suffix[i];

  }

 

  return output;

}

console.log(productExceptSelf(nums));