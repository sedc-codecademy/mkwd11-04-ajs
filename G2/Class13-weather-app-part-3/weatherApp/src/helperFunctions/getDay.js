

function getDay(number) {
    number = number % 7;
    if (number == 0) return 'Sunday';
    if (number == 1) return 'Monday';
    if (number == 2) return 'Tuesday';
    if (number == 3) return 'Wednesday';
    if (number == 4) return 'Thursday';
    if (number == 5) return 'Friday';
    if (number == 6) return 'Saturday';
}

export default getDay;