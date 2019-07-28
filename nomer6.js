arkaFood = (total,voc,jarak,pajak) => {
    let bayar
    let pjk
    let ongkir
    let w
    q = 0
    if (voc != false) {
        if (voc == "ARKAFOOD5") {
            if (total >= 50000) {
                q = total*50/100
                if (q>50000) {
                    q = 50000
                }
            }
        }
        if(voc == "DITRAKTIRDEMY"){
            if (total >= 25000) {
                q = total*60/100
                if (q > 30000) {
                    q = 30000
                }
            }
        }
    }
    if (pajak==true) {
        pjk = total * 5/100
    }else{
      pjk = 0
    }
    ongkir = 5000
    if (jarak>1.5) {
        w = jarak-1.5
        ongkir = Math.ceil(w) * 3000 + 5000
    }

    bayar = total - q + pjk + ongkir
    console.log(bayar);
    

}

arkaFood(75000,"ARKAFOOD5",5,false)

