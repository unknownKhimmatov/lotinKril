function kril() {
    let matn = document.querySelector('#kril').value;
    let s = "абсдефгхижклмнопкртувхйз";
    let l = "absdefghijklmnopqrtuvxyz";
    let S = "АБСДЕФГХИЖКЛМНОПКРТУВХЙЗ";
    let L = "ABCDEFGHIJKLMNOPQRTUVXYZ";
    let b="у́";
    let s2 = "";
    for (let i = 0; i < matn.length; i++) {
        if (matn[i] == " ") {
            s2 += " ";
        }
        else if (matn[i] == "я") {
            s2 += "ya";
        }
        else if (matn[i] == "Я") {
            s2 += "Ya";
        }
        else if (matn[i] == "ю") {
            s2 += "yu";
        }
        else if (matn[i] == "Ю") {
            s2 += "Yu";
        }
        else if (matn[i] == "Ё") {
            s2 += "Yo";
        }
        else if (matn[i] == "ё") {
            s2 += "yo";
        }
        else if (matn[i] == "ч") {
            s2 += "ch";
        }
        else if (matn[i] == "Ч") {
            s2 += "Ch";
        }
        else if (matn[i] == "ш") {
            s2 += "sh";
        }
        else if (matn[i] == "Ш") {
            s2 += "Sh";
        }
        for (let j = 0; j < s.length; j++) {
            if (matn[i] == s[j]) {
                s2 += l[j];
            }
            else if (matn[i] == S[j]) {
                s2 += L[j];
            }
        }
    }
    document.getElementById('lotin').value = s2;
}

function lotin() {
    let matn2 = document.querySelector('#lotin2').value;
    let s = "absdefghijklmnopqrtuvxyz";
    let k = "абсдефгхижклмнопкртувхйз";
    let S = "АБСДЕФГХИЖКЛМНОПКРТУВХЙЗ";
    let L = "ABCDEFGHIJKLMNOPQRTUVXYZ";
    let s2 = "";
    for (let i = 0; i < matn2.length; i++) {
        if ((matn2[i] == "s" && matn2[i + 1] == "h") || (matn2[i] == "s" && matn2[i + 1] == "H")) {
            s2 += "ш";
            i++;
        }
        else if ((matn2[i] == "S" && matn2[i + 1] == "h") || (matn2[i] == "S" && matn2[i + 1] == "H")) {
            s2 += "Ш";
            i++;
        }
        else if ((matn2[i] == "C" && matn2[i + 1] == "h") || (matn2[i] == "C" && matn2[i + 1] == "H")) {
            s2 += "Ч";
            i++;
        }
        else if ((matn2[i] == "c" && matn2[i + 1] == "h") || (matn2[i] == "c" && matn2[i + 1] == "H")) {
            s2 += "ч";
            i++;
        }
        else if ((matn2[i] == "y" && matn2[i + 1] == "a") || (matn2[i] == "y" && matn2[i + 1] == "A")) {
            s2 += "я";
            i++;
        }
        else if ((matn2[i] == "Y" && matn2[i + 1] == "a") || (matn2[i] == "Y" && matn2[i + 1] == "A")) {
            s2 += "Я";
            i++;
        }
        else if ((matn2[i] == "y" && matn2[i + 1] == "u") || (matn2[i] == "y" && matn2[i + 1] == "U")) {
            s2 += "ю";
            i++;
        }
        else if ((matn2[i] == "Y" && matn2[i + 1] == "u") || (matn2[i] == "Y" && matn2[i + 1] == "U")) {
            s2 += "Ю";
            i++;
        }
        else if ((matn2[i] == "y" && matn2[i + 1] == "o") || (matn2[i] == "y" && matn2[i + 1] == "O")) {
            s2 += "ё";
            i++;
        }
        else if ((matn2[i] == "Y" && matn2[i + 1] == "o") || (matn2[i] == "Y" && matn2[i + 1] == "O")) {
            s2 += "Ё";
            i++;
        }
        else if(matn2[i]=="O" && matn2[i+1]=="'")
        {
            s2+="у́";
            i++;
        }
        else if(matn2[i]=="o" && matn2[i+1]=="'")
        {
            s2+="у́";
            i++;
        }
        else if (matn2[i] == " ") {
            s2 += " ";
        }
        else {
            for (let j = 0; j < s.length; j++) {
                if (matn2[i] == s[j]) {
                    s2 += k[j];
                }
                else if (matn2[i] == L[j]) {
                    s2 += S[j];
                }
            }
        }
    }
    document.getElementById('kril2').value = s2;
}