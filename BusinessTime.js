
function addBusinessTime(holiday, time, duration) {
    const { start, end } = holiday;
    let res = new Date(time);
    res.setSeconds(res.getSeconds() + duration);

    // Best case scenario
    if (!dateInRange(res, start, end)) {
        return res;
    }

    const calculatedDate = new Date(res);
    // Take the correct baseDate if we are going to add or substract
    res = duration > 0 ? new Date(end) : new Date(start);

    if (start.getSeconds() > calculatedDate.getSeconds() - duration) {
        res.setSeconds(res.getSeconds() + (calculatedDate.getTime() - start.getTime()) / 1000);
    } else{
        res.setSeconds(res.getSeconds() + duration);
    }

    return res;
}

function dateInRange(date, start, end) {
    return date.getTime() > start.getTime() && date.getTime() < end.getTime();
}

module.exports = addBusinessTime;