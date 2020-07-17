export const actualDate = () => {
    const date = new Date()
    const year = date.getUTCFullYear()
    const day = date.getUTCDate() < 10 ? '0'+date.getUTCDate() : date.getUTCDate()
    const month = date.getUTCMonth()+1 < 10 ? '0'+(date.getUTCMonth()+1) : date.getUTCMonth()+1
    
    const formatedDate = `${day}/${month}/${year}`
    return formatedDate
}