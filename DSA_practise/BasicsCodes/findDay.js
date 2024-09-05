function findDay(day){
    let dayName;
    switch (day){
        case 1:dayName='Sunday'
        break;
        case 2: dayName="Tuesday"
        break
        case 3:dayName="Wednesday"
        break
        case 4:dayName='Thursday'
        break
        case 5:dayName="Friday"
        break
        case 6:dayName="Saturday"
        break
        case 7:dayName="Sunday"
        break
        default:dayName = "Invalid"
    }
    return dayName
}
let day=3
console.log (findDay(day))