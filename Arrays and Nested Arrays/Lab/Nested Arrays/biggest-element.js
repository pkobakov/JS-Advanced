function biggest_element(matrix) {

    let biggest = matrix[0][0];

   for(let row of matrix){
      if (Math.max(...row) > biggest) {
          biggest = Math.max(...row);
      }
    
   }

    return biggest;
}

biggest_element([[20, 50, 10],
    [8, 33, 145]]
   );