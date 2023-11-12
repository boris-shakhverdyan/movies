export const toTimeString = (seconds: number) => {
    const wholeHours = seconds / 3600;
    const hours = +wholeHours.toString().split(".")[0];
    const minutes = +((wholeHours - hours) * 60).toString().split(".")[0];

    return `${hours ? hours + "h" : ""} ${minutes + "m"}`;
};
