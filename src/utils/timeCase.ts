const getTime = (time: Date): string => {
    const Year = time.getFullYear()
    const Month = time.getMonth()+1
    const Day = time.getDay()
    return `${Year}年 ${Month}月${Day}日`
}
export default getTime