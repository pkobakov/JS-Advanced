function diagonalSum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                mainDiagonalSum += matrix[row][col];
            }

            if (row+col == matrix.length-1) {
                secondaryDiagonalSum += matrix[row][col];
            }
            
        }
    }

    let result = [mainDiagonalSum, secondaryDiagonalSum];

    console.log(result.join(' '));
}

diagonalSum([[20, 40],
             [10, 60]]);

diagonalSum([[3, 5, 17],
             [-1, 7, 14],
             [1, -8, 89]]);