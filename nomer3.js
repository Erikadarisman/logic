segitiga = (value) => {
    n = value
    m = 1
    star=''
    for (let x = 1; x < value; x++) {
        str = ''
        for (let i = 1; i < n; i++) {
            str += ' ' 
        }
        for (let a = 0; a < m; a++) {
            str += '*'
        }
        m++
        n--
        console.log(str);
        
    }
}
segitiga(5)

