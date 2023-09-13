function DayInMonth(month, year)
{
    let days = new Date(year, month, 0).getDate();
    console.log(days);
     
}

DayInMonth(1, 2012);