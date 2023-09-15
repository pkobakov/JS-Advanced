function previousDay(year, month, day){

    
    let previousDate = new Date(year, month-1, day-1);
    let prevYear  = previousDate.getFullYear();
    let prevMonth = previousDate.getMonth()+1;
    let prevDay = previousDate.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
}

previousDay(2015, 5, 10)