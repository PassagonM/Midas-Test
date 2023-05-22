function getClockAngle(hh_mm) {
    const [hour, minute] = hh_mm.split(':').map(Number);

    const hourAngle = (30 * hour + 0.5 * minute) % 360;
    const minuteAngle = 6 * minute;

    const angle = hourAngle > minuteAngle ? hourAngle - minuteAngle : minuteAngle - hourAngle;
    const shorterAngle = angle <= 180 ? angle : 360 - angle;

    return shorterAngle;
}
console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));