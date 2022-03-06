function bigger_half (input) {

   let k = Math.ceil(input.length/2);
   let sorted = input.sort((a,b)=>a-b).slice(-k);
   return sorted;
}

bigger_half([4, 7, 2, 5]);
bigger_half([3, 19, 14, 7, 2, 19, 6]);