export default function getCurrentDate() {
    
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = year + "-" + month + "-" + date;

    return currentDate;
}


