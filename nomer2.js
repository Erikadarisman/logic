segitiga = (value) => {
    n = value
    for (let x = 0; x < value; x++) {
        str = ''
        for (let i = 0; i < n; i++) {
            str += '*'
        }
        n--
        console.log(str);            
    }
}
segitiga(5)

