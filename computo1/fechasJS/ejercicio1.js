const date = new Date('February 20, 2012 03:12:00');

const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
};

const formattedDateTime = date.toLocaleString('en-US', options);

console.log(`Fecha y hora formateada: ${formattedDateTime}`);
