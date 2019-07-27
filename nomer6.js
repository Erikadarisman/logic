arkaFood = (total,voc,jarak,pajak) => {
    let bayar
    if (voc != false) {
        let q
        if (voc == 'ARKAFOOD5') {
            if (bayar >= 50000) {
                q = total*50/100
                if (q>50000) {
                    q = 50000
                }
            }
        }
        if(voc == 'DITRAKTIRDEMY'){
            if (bayar >= 30000) {
                q = total*60/100
                if (q > 30000) {
                    q = 30000
                }
            }
        }
    }
    if (condition) {
        
    }


}

arkaFood(7500,"ARKAFOOD5",5,"FALSE")

