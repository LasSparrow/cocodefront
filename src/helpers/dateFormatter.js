export default function dateFormatter(dateToFormat){
    let date = new Date(dateToFormat)
    // date = new Date(date.toLocaleDateString())
    console.log(dateToFormat)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` 
}