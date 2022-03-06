function process_odd_positions(arrNum = []) {

    let odd = (arrNum.filter((num, i)=>i % 2 == 1));
    let double = odd.map(x=>x * 2);
    let reverse = (double.reverse()).join(" ");
    console.log(reverse);

}

process_odd_positions([10, 15, 20, 25]);
process_odd_positions([3, 0, 10, 4, 7, 3]);