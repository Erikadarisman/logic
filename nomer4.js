count = (str) => {
    total = 0
    cek = 'aiueoAIUEO'
    arr = cek.split('')
    leng = arr.length
    for (let i = 0; i < leng; i++) {
        n=str.indexOf(arr[i])
        if (n!=-1) {
            total++
        }
    }
    console.log(total);
}
count('programmer');
