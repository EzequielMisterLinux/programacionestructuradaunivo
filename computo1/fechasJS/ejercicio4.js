const date1 = new Date('August 20, 2023');
const date2 = new Date('February 20, 2024');

const differenceInTime = date2.getTime() - date1.getTime();
const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
console.log(`Diferencia en días entre las dos fechas: ${differenceInDays} días`);
