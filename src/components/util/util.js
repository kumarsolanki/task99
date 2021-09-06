export function getNumDays(createDdate) {
    let date1 = new Date(createDdate * 1000);
    let date2 = new Date();
    let oneDay = 1000 * 60 * 60 * 24;
    let result = Math.round(date2.getTime() - date1.getTime()) / oneDay;
    var finalResult = result.toFixed(0);
    return finalResult;
}
