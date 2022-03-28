export const randomNum = (min: number, max: number, fix = 0) => {
    const num = Math.random() * (max - min) + min;
    return Number(num.toFixed(fix));
}