function calcular() {
    // Calculo valor 0%
    var valor1 = parseFloat(document.getElementById("preco").value) /
        parseFloat(document.getElementById("custo").value);
    var a = document.getElementById("preco").value
    var b = document.getElementById("preco").value * 0 / 100;
    var re1 = a - b;
    var c = re1 - (re1 * (0.0925 + document.getElementById("icms").value / 100));
    var d = c - document.getElementById("custo").value;
    var e = d / c * 100;

    document.getElementById("tela").innerHTML = valor1.toFixed(2);
    document.getElementById("li1").innerHTML = re1.toFixed(2);
    document.getElementById("li2").innerHTML = c.toFixed(2);
    document.getElementById("li3").innerHTML = d.toFixed(2);
    document.getElementById("li4").innerHTML = e.toFixed(2);

    // Calculo valor 2%

    var a2 = document.getElementById("preco").value
    var b2 = document.getElementById("preco").value * 2 / 100;
    var re2 = a2 - b2;
    var c2 = re2 - (re2 * (0.0925 + document.getElementById("icms").value / 100));
    var d2 = c2 - document.getElementById("custo").value;
    var e2 = d2 / c2 * 100;


    document.getElementById("li5").innerHTML = re2.toFixed(2);
    document.getElementById("li6").innerHTML = c2.toFixed(2);
    document.getElementById("li7").innerHTML = d2.toFixed(2);
    document.getElementById("li8").innerHTML = e2.toFixed(2);

    // Calculo valor 5%

    var a3 = document.getElementById("preco").value
    var b3 = document.getElementById("preco").value * 5 / 100;
    var re3 = a3 - b3;
    var c3 = re3 - (re3 * (0.0925 + document.getElementById("icms").value / 100));
    var d3 = c3 - document.getElementById("custo").value;
    var e3 = d3 / c3 * 100;


    document.getElementById("li9").innerHTML = re3.toFixed(2);
    document.getElementById("li10").innerHTML = c3.toFixed(2);
    document.getElementById("li11").innerHTML = d3.toFixed(2);
    document.getElementById("li12").innerHTML = e3.toFixed(2);

    // Calculo valor 10%

    var a4 = document.getElementById("preco").value
    var b4 = document.getElementById("preco").value * 10 / 100;
    var re4 = a4 - b4;
    var c4 = re4 - (re4 * (0.0925 + document.getElementById("icms").value / 100));
    var d4 = c4 - document.getElementById("custo").value;
    var e4 = d4 / c4 * 100;


    document.getElementById("li13").innerHTML = re4.toFixed(2);
    document.getElementById("li14").innerHTML = c4.toFixed(2);
    document.getElementById("li15").innerHTML = d4.toFixed(2);
    document.getElementById("li16").innerHTML = e4.toFixed(2);

    // Calculo valor 15%

    var a5 = document.getElementById("preco").value
    var b5 = document.getElementById("preco").value * 15 / 100;
    var re5 = a5 - b5;
    var c5 = re5 - (re5 * (0.0925 + document.getElementById("icms").value / 100));
    var d5 = c5 - document.getElementById("custo").value;
    var e5 = d5 / c5 * 100;


    document.getElementById("li17").innerHTML = re5.toFixed(2);
    document.getElementById("li18").innerHTML = c5.toFixed(2);
    document.getElementById("li19").innerHTML = d5.toFixed(2);
    document.getElementById("li20").innerHTML = e5.toFixed(2);

    // Calculo valor 20%

    var a6 = document.getElementById("preco").value
    var b6 = document.getElementById("preco").value * 20 / 100;
    var re6 = a6 - b6;
    var c6 = re6 - (re6 * (0.0925 + document.getElementById("icms").value / 100));
    var d6 = c6 - document.getElementById("custo").value;
    var e6 = d6 / c6 * 100;


    document.getElementById("li21").innerHTML = re6.toFixed(2);
    document.getElementById("li22").innerHTML = c6.toFixed(2);
    document.getElementById("li23").innerHTML = d6.toFixed(2);
    if (e6 < 0) {
        document.getElementById("li24").innerHTML = e6.toFixed(2);
        document.getElementById("li24").style.color = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li24").innerHTML = e6.toFixed(2);
        document.getElementById("li24").style.color = "";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 25%

    var a7 = document.getElementById("preco").value
    var b7 = document.getElementById("preco").value * 25 / 100;
    var re7 = a7 - b7;
    var c7 = re7 - (re7 * (0.0925 + document.getElementById("icms").value / 100));
    var d7 = c7 - document.getElementById("custo").value;
    var e7 = d7 / c7 * 100;


    document.getElementById("li25").innerHTML = re7.toFixed(2);
    document.getElementById("li26").innerHTML = c7.toFixed(2);
    document.getElementById("li27").innerHTML = d7.toFixed(2);
    if (e7 < 0) {
        document.getElementById("li28").innerHTML = e7.toFixed(2);
        document.getElementById("li28").style.color = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li28").innerHTML = e7.toFixed(2);
        document.getElementById("li28").style.color = "";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
    }


    // Calculo valor 28%

    var a8 = document.getElementById("preco").value
    var b8 = document.getElementById("preco").value * 28 / 100;
    var re8 = a8 - b8;
    var c8 = re8 - (re8 * (0.0925 + document.getElementById("icms").value / 100));
    var d8 = c8 - document.getElementById("custo").value;
    var e8 = d8 / c8 * 100;


    document.getElementById("li29").innerHTML = re8.toFixed(2);
    document.getElementById("li30").innerHTML = c8.toFixed(2);
    document.getElementById("li31").innerHTML = d8.toFixed(2);
    if (e8 < 0) {
        document.getElementById("li32").innerHTML = e8.toFixed(2);
        document.getElementById("li32").style.color = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li32").innerHTML = e8.toFixed(2);
        document.getElementById("li32").style.color = "";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 30%

    var a9 = document.getElementById("preco").value
    var b9 = document.getElementById("preco").value * 30 / 100;
    var re9 = a9 - b9;
    var c9 = re9 - (re9 * (0.0925 + document.getElementById("icms").value / 100));
    var d9 = c9 - document.getElementById("custo").value;
    var e9 = d9 / c9 * 100;


    document.getElementById("li33").innerHTML = re9.toFixed(2);
    document.getElementById("li34").innerHTML = c9.toFixed(2);
    document.getElementById("li35").innerHTML = d9.toFixed(2);
    if (e9 < 0) {
        document.getElementById("li36").innerHTML = e9.toFixed(2);
        document.getElementById("li36").style.color = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li36").innerHTML = e9.toFixed(2);
        document.getElementById("li36").style.color = "";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 33%

    var a10 = document.getElementById("preco").value
    var b10 = document.getElementById("preco").value * 33 / 100;
    var re10 = a10 - b10;
    var c10 = re10 - (re10 * (0.0925 + document.getElementById("icms").value / 100));
    var d10 = c10 - document.getElementById("custo").value;
    var e10 = d10 / c10 * 100;


    document.getElementById("li37").innerHTML = re10.toFixed(2);
    document.getElementById("li38").innerHTML = c10.toFixed(2);
    document.getElementById("li39").innerHTML = d10.toFixed(2);
    if (e10 < 0) {
        document.getElementById("li40").innerHTML = e10.toFixed(2);
        document.getElementById("li40").style.color = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li40").innerHTML = e10.toFixed(2);
        document.getElementById("li40").style.color = "";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
    }


    // Calculo valor 35%

    var a11 = document.getElementById("preco").value
    var b11 = document.getElementById("preco").value * 35 / 100;
    var re11 = a11 - b11;
    var c11 = re11 - (re11 * (0.0925 + document.getElementById("icms").value / 100));
    var d11 = c11 - document.getElementById("custo").value;
    var e11 = d11 / c11 * 100;


    document.getElementById("li41").innerHTML = re11.toFixed(2);
    document.getElementById("li42").innerHTML = c11.toFixed(2);
    document.getElementById("li43").innerHTML = d11.toFixed(2);
    if (e11 < 0) {
        document.getElementById("li44").innerHTML = e11.toFixed(2);
        document.getElementById("li44").style.color = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li44").innerHTML = e11.toFixed(2);
        document.getElementById("li44").style.color = "";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 40%

    var a12 = document.getElementById("preco").value
    var b12 = document.getElementById("preco").value * 40 / 100;
    var re12 = a12 - b12;
    var c12 = re12 - (re12 * (0.0925 + document.getElementById("icms").value / 100));
    var d12 = c12 - document.getElementById("custo").value;
    var e12 = d12 / c12 * 100;


    document.getElementById("li45").innerHTML = re12.toFixed(2);
    document.getElementById("li46").innerHTML = c12.toFixed(2);
    document.getElementById("li47").innerHTML = d12.toFixed(2);
    if (e12 < 0) {
        document.getElementById("li48").innerHTML = e12.toFixed(2);
        document.getElementById("li48").style.color = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li48").innerHTML = e12.toFixed(2);
        document.getElementById("li48").style.color = "";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 45%

    var a13 = document.getElementById("preco").value
    var b13 = document.getElementById("preco").value * 45 / 100;
    var re13 = a13 - b13;
    var c13 = re13 - (re13 * (0.0925 + document.getElementById("icms").value / 100));
    var d13 = c13 - document.getElementById("custo").value;
    var e13 = d13 / c13 * 100;


    document.getElementById("li49").innerHTML = re13.toFixed(2);
    document.getElementById("li50").innerHTML = c13.toFixed(2);
    document.getElementById("li51").innerHTML = d13.toFixed(2);
    if (e13 < 0) {
        document.getElementById("li52").innerHTML = e13.toFixed(2);
        document.getElementById("li52").style.color = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li52").innerHTML = e13.toFixed(2);
        document.getElementById("li52").style.color = "";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 50%

    var a14 = document.getElementById("preco").value
    var b14 = document.getElementById("preco").value * 50 / 100;
    var re14 = a14 - b14;
    var c14 = re14 - (re14 * (0.0925 + document.getElementById("icms").value / 100));
    var d14 = c14 - document.getElementById("custo").value;
    var e14 = d14 / c14 * 100;


    document.getElementById("li53").innerHTML = re14.toFixed(2);
    document.getElementById("li54").innerHTML = c14.toFixed(2);
    document.getElementById("li55").innerHTML = d14.toFixed(2);
    if (e14 < 0) {
        document.getElementById("li56").innerHTML = e14.toFixed(2);
        document.getElementById("li56").style.color = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li56").innerHTML = e14.toFixed(2);
        document.getElementById("li56").style.color = "";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
    }

    // Calculo valor 60%

    var a15 = document.getElementById("preco").value
    var b15 = document.getElementById("preco").value * 60 / 100;
    var re15 = a15 - b15;
    var c15 = re15 - (re15 * (0.0925 + document.getElementById("icms").value / 100));
    var d15 = c15 - document.getElementById("custo").value;
    var e15 = d15 / c15 * 100;


    document.getElementById("li57").innerHTML = re15.toFixed(2);
    document.getElementById("li58").innerHTML = c15.toFixed(2);
    document.getElementById("li59").innerHTML = d15.toFixed(2);
    if (e15 < 0) {
        document.getElementById("li60").innerHTML = e15.toFixed(2);
        document.getElementById("li60").style.color = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#cc0000";
    } else {
        document.getElementById("li60").innerHTML = e15.toFixed(2);
        document.getElementById("li60").style.color = "";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }


}

// LIMPAR

function limpar() {
    document.getElementById("preco").value = "";
    document.getElementById("custo").value = "";
    document.getElementById("icms").value = "";
    document.getElementById("tela").innerHTML = "";
    document.getElementById("li1").innerHTML = 0.00;
    document.getElementById("li2").innerHTML = 0.00;
    document.getElementById("li3").innerHTML = 0.00;
    document.getElementById("li4").innerHTML = 0.00;
    document.getElementById("li5").innerHTML = 0.00;
    document.getElementById("li6").innerHTML = 0.00;
    document.getElementById("li7").innerHTML = 0.00;
    document.getElementById("li8").innerHTML = 0, 00;
    document.getElementById("li9").innerHTML = 0, 00;
    document.getElementById("li10").innerHTML = 0, 00;
    document.getElementById("li11").innerHTML = 0, 00;
    document.getElementById("li12").innerHTML = 0, 00;
    document.getElementById("li13").innerHTML = 0, 00;
    document.getElementById("li14").innerHTML = 0, 00;
    document.getElementById("li15").innerHTML = 0, 00;
    document.getElementById("li16").innerHTML = 0, 00;
    document.getElementById("li17").innerHTML = 0, 00;
    document.getElementById("li18").innerHTML = 0, 00;
    document.getElementById("li19").innerHTML = 0, 00;
    document.getElementById("li20").innerHTML = 0, 00;
    document.getElementById("li21").innerHTML = 0, 00;
    document.getElementById("li22").innerHTML = 0, 00;
    document.getElementById("li23").innerHTML = 0, 00;
    document.getElementById("li24").innerHTML = 0, 00;
    document.getElementById("li25").innerHTML = 0, 00;
    document.getElementById("li26").innerHTML = 0, 00;
    document.getElementById("li27").innerHTML = 0, 00;
    document.getElementById("li28").innerHTML = 0, 00;
    document.getElementById("li29").innerHTML = 0, 00;
    document.getElementById("li30").innerHTML = 0, 00;
    document.getElementById("li31").innerHTML = 0, 00;
    document.getElementById("li32").innerHTML = 0, 00;
    document.getElementById("li33").innerHTML = 0, 00;
    document.getElementById("li34").innerHTML = 0, 00;
    document.getElementById("li35").innerHTML = 0, 00;
    document.getElementById("li36").innerHTML = 0, 00;
    document.getElementById("li37").innerHTML = 0, 00;
    document.getElementById("li38").innerHTML = 0, 00;
    document.getElementById("li39").innerHTML = 0, 00;
    document.getElementById("li40").innerHTML = 0, 00;
    document.getElementById("li41").innerHTML = 0, 00;
    document.getElementById("li42").innerHTML = 0, 00;
    document.getElementById("li43").innerHTML = 0, 00;
    document.getElementById("li44").innerHTML = 0, 00;
    document.getElementById("li45").innerHTML = 0, 00;
    document.getElementById("li46").innerHTML = 0, 00;
    document.getElementById("li47").innerHTML = 0, 00;
    document.getElementById("li48").innerHTML = 0, 00;
    document.getElementById("li49").innerHTML = 0, 00;
    document.getElementById("li50").innerHTML = 0, 00;
    document.getElementById("li51").innerHTML = 0, 00;
    document.getElementById("li52").innerHTML = 0, 00;
    document.getElementById("li53").innerHTML = 0, 00;
    document.getElementById("li54").innerHTML = 0, 00;
    document.getElementById("li55").innerHTML = 0, 00;
    document.getElementById("li56").innerHTML = 0, 00;
    document.getElementById("li57").innerHTML = 0, 00;
    document.getElementById("li58").innerHTML = 0, 00;
    document.getElementById("li59").innerHTML = 0, 00;
    document.getElementById("li60").innerHTML = 0, 00;
    document.getElementById("li60").style.color = "";
    document.getElementById("li60").style.backgroundColor = "#ffffff";
    document.getElementById("li56").style.color = "";
    document.getElementById("li56").style.backgroundColor = "#ffffff";
    document.getElementById("li52").style.color = "";
    document.getElementById("li52").style.backgroundColor = "#ffffff";
    document.getElementById("li48").style.color = "";
    document.getElementById("li48").style.backgroundColor = "#ffffff";
    document.getElementById("li44").style.color = "";
    document.getElementById("li44").style.backgroundColor = "#ffffff";
    document.getElementById("li40").style.color = "";
    document.getElementById("li40").style.backgroundColor = "#ffffff";
    document.getElementById("li36").style.color = "";
    document.getElementById("li36").style.backgroundColor = "#ffffff";
    document.getElementById("li32").style.color = "";
    document.getElementById("li32").style.backgroundColor = "#ffffff";
    document.getElementById("li28").style.color = "";
    document.getElementById("li28").style.backgroundColor = "#ffffff";
    document.getElementById("li24").style.color = "";
    document.getElementById("li24").style.backgroundColor = "#ffffff";



}