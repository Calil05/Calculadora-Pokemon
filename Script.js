function calc_Damage(){

    let stab = 1
    let crit = 1

    if (document.getElementById("Stab").checked) {
        stab = 1.5;
    }

    if (document.getElementById("Crit").checked) {
        crit = 1.5;
    } 


    let atk_Level = Number(document.getElementById("atk_Level").value);
    let atk_Atack = Number(document.getElementById("atk_Atack").value);
    let atk_Mult = Number(document.getElementById("atk_Mult").value);
    let atk_Move = Number(document.getElementById("atk_Move").value);
    let atk_Other = Number(document.getElementById("atk_Other").value);

    let def_Level = Number(document.getElementById("def_Level").value);
    let def_HP = Number(document.getElementById("def_HP").value);
    let def_Defense = Number(document.getElementById("def_Defense").value);
    let def_Mult = Number(document.getElementById("def_Mult").value);
    let def_Res = Number(document.getElementById("def_Res").value);
    let def_Other = Number(document.getElementById("def_Other").value);

    let max_Total = Number(document.getElementById("max_Damage").innerHTML);
    let min_Total = Number(document.getElementById("min_Damage").innerHTML);

    max_Damage = ((((2*atk_Level/5+2)*(atk_Atack*atk_Mult)*atk_Move/(def_Defense*def_Mult))/50)+2)*stab*def_Res*crit*atk_Other*(100/100);
    min_Damage = ((((2*atk_Level/5+2)*(atk_Atack*atk_Mult)*atk_Move/(def_Defense*def_Mult))/50)+2)*stab*def_Res*crit*atk_Other*(80/100);

    document.getElementById("max_Damage").innerHTML = max_Damage.toFixed(2);
    document.getElementById("min_Damage").innerHTML = min_Damage.toFixed(2);

    HP_left = Number(document.getElementById("HP_left").innerHTML);

    if (max_Damage >= def_HP && min_Damage < def_HP) {
        document.getElementById("HP_left").innerHTML = "Pokemon Derrotado pelo Dano Maximo";
    } else if (min_Damage >= def_HP) {
        document.getElementById("HP_left").innerHTML = "Pokemon Derrotado";
    } else {
        document.getElementById("HP_left").innerHTML = "Pokemon não seria Derrotado";
    }

}

  