const inputBox = document.getElementById("inputBox")
const resultBox = document.getElementById("resultBox")
const unitCategory = document.getElementById("unitCategory")
const resultCategory = document.getElementById("resultCategory")
const borrarBtn = document.querySelector("button")

const convFactors = {
    metro: {
        kilometro: 0.001,
        metro: 1,
        centimetro: 100,
        milimetro: 1000,
        micron: 1000000,
        nanometro: 1000000000,
        milla: 1 / 1609.344,
        yarda: 1.09361,
        pie: 3.28084,
        pulgada: 39.3701,
    },
    kilometro: {
        metro: 1000,
        kilometro: 1,
        centimetro: 100000,
        milimetro: 1000000,
        micron: 1000000000,
        nanometro: 1000000000000,
        milla: 0.621371,
        yarda: 1093.6133,
        pie: 3280.84,
        pulgada: 39370.1
    },
    centimetro: {
        metro: 0.01,
        kilometro: 0.00001,
        centimetro: 1,
        milimetro: 10,
        micron: 10000,
        nanometro: 10000000,
        milla: 1 / 160934,
        yarda: 1 / 91.44,
        pie: 1 / 30.48,
        pulgada: 1 / 2.54,
    },
    milimetro: {
        metro: 0.001,
        kilometro: 0.000001,
        centimetro: 0.1,
        milimetro: 1,
        micron: 1000,
        nanometro: 1000000,
        milla: 1 / 1609340,
        yarda: 1 / 914.4,
        pie: 1 / 304.8,
        pulgada: 1 / 25.4
    },
    micron: {
        metro: 0.000001,
        kilometro: 0.000000001,
        centimetro: 0.0001,
        milimetro: 0.001,
        micron: 1,
        nanometro: 1000,
        milla: 1 / 1609340000,
        yarda: 1 / 914400,
        pie: 1 / 304800,
        pulgada: 1 / 25400
    },
    nanometro: {
        metro: 0.000000001,
        kilometro: 0.000000000001,
        centimetro: 0.0000001,
        milimetro: 0.000001,
        micron: 0.001,
        nanometro: 1,
        milla: 1 / 1609340000000,
        yarda: 1 / 914400000,
        pie: 1 / 304800000,
        pulgada: 1 / 25400000
    },
    milla: {
        metro: 1609.34,
        kilometro: 1.60934,
        centimetro: 160934,
        milimetro: 1609340,
        micron: 1609340000,
        nanometro: 1609340000000,
        milla: 1,
        yarda: 1760,
        pie: 5280,
        pulgada: 63360
    },
    yarda: {
        metro: 0.9144,
        kilometro: 0.0009144,
        centimetro: 91.44,
        milimetro: 914.4,
        micron: 914400,
        nanometro: 914400000,
        milla: 1 / 1760,
        yarda: 1,
        pie: 3,
        pulgada: 36
    },
    pie: {
        metro: 0.3048,
        kilometro: 0.0003048,
        centimetro: 30.48,
        milimetro: 304.8,
        micron: 304800,
        nanometro: 304800000,
        milla: 1 / 5280,
        yarda: 1 / 3,
        pie: 1,
        pulgada: 12
    },
    pulgada: {
        metro: 0.0254,
        kilometro: 0.0000254,
        centimetro: 2.54,
        milimetro: 25.4,
        micron: 25400,
        nanometro: 25400000,
        milla: 1 / 63360,
        yarda: 1 / 36,
        pie: 1 / 12,
        pulgada: 1
    },
    "kmHora": {
        "kmHora": 1,
        "kmMin": 1 / 60,
        "metroSeg": 1 / 3.6,
        "metroMin": 1 / 60 / 3.6,
        "cmSeg": 100 / 3600,
        "millaSeg": 0.621371 / 3600,
        "millaMin": 0.621371 / 60,
        "millaHora": 0.621371,
        "piesSeg": 3.28084 / 3.6,
        "nudo": 0.539957,
        "mach": 1234.8 / 3600,
    },
    "kmMin": {
        "kmHora": 60,
        "kmMin": 1,
        "metroSeg": 60 / 3.6,
        "metroMin": 1 / 60,
        "cmSeg": 100 / 60 / 60,
        "millaSeg": 0.621371 / 60,
        "millaMin": 0.621371,
        "millaHora": 0.621371 * 60,
        "piesSeg": 3.28084,
        "nudo": 0.539957 * 60,
        "mach": 1234.8 / 60,
    },
    "metroSeg": {
        "kmHora": 3.6,
        "kmMin": 3.6 * 60,
        "metroSeg": 1,
        "metroMin": 1 / 60,
        "cmSeg": 100,
        "millaSeg": 0.621371 * 3.6,
        "millaMin": 0.621371,
        "millaHora": 0.621371 * 3600,
        "piesSeg": 3.28084,
        "nudo": 0.539957 * 3.6,
        "mach": 1234.8 / 3.6,
    },
    "metroMin": {
        "kmHora": 3.6 * 60,
        "kmMin": 60,
        "metroSeg": 60,
        "metroMin": 1,
        "cmSeg": 100 * 60,
        "millaSeg": 0.621371 * 60,
        "millaMin": 0.621371 * 60 * 60,
        "millaHora": 0.621371 * 3600 * 60,
        "piesSeg": 3.28084 * 60,
        "nudo": 0.539957 * 60 * 60,
        "mach": 1234.8,
    },
    "cmSeg": {
        "kmHora": 3600 / 100,
        "kmMin": 60 / 100,
        "metroSeg": 1 / 100,
        "metroMin": 1 / 100 / 60,
        "cmSeg": 1,
        "millaSeg": 0.621371 * 3600 / 100,
        "millaMin": 0.621371 * 60 / 100,
        "millaHora": 0.621371 * 3600,
        "piesSeg": 3.28084 / 100,
        "nudo": 0.539957 * 3600 / 100,
        "mach": 1234.8 / 100,
    },
    "millaSeg": {
        "kmHora": 3600 / 0.621371,
        "kmMin": 60 / 0.621371,
        "metroSeg": 1 / 0.621371,
        "metroMin": 1 / 60 / 0.621371,
        "cmSeg": 100 / 0.621371,
        "millaSeg": 1,
        "millaMin": 1 / 60,
        "millaHora": 1 * 3600,
        "piesSeg": 3.28084 / 0.621371,
        "nudo": 0.539957 * 3600 / 0.621371,
        "mach": 1234.8 / 0.621371,
    },
    "millaMin": {
        "kmHora": 3600 / 0.621371 / 60,
        "kmMin": 60 / 0.621371 / 60,
        "metroSeg": 1 / 0.621371 / 60,
        "metroMin": 1 / 60 / 0.621371 / 60,
        "cmSeg": 100 / 0.621371 / 60,
        "millaSeg": 60,
        "millaMin": 1,
        "millaHora": 60 * 3600,
        "piesSeg": 3.28084 / 0.621371 / 60,
        "nudo": 0.539957 * 3600 / 0.621371 / 60,
        "mach": 1234.8 / 0.621371 / 60,
    },
    "millaHora": {
        "kmHora": 1 / 0.621371,
        "kmMin": 60 / 0.621371,
        "metroSeg": 1 / 0.621371 / 3600,
        "metroMin": 1 / 60 / 0.621371 / 3600,
        "cmSeg": 100 / 0.621371 / 3600,
        "millaSeg": 1 / 3600,
        "millaMin": 1 / 60 / 3600,
        "millaHora": 1,
        "piesSeg": 3.28084 / 0.621371 / 3600,
        "nudo": 0.539957 * 3600 / 0.621371 / 3600,
        "mach": 1234.8 / 0.621371 / 3600,
    },
    "piesSeg": {
        "kmHora": 3600 / 3.28084,
        "kmMin": 60 / 3.28084,
        "metroSeg": 1 / 3.28084,
        "metroMin": 1 / 60 / 3.28084,
        "cmSeg": 100 / 3.28084,
        "millaSeg": 0.621371 * 3600 / 3.28084,
        "millaMin": 0.621371 * 60 / 3.28084,
        "millaHora": 0.621371 * 3600 / 3.28084,
        "piesSeg": 1,
        "nudo": 0.539957 * 3600 / 3.28084,
        "mach": 123,
    },
    "nudo": {
        "kmHora": 1.852,
        "kmMin": 1.852 * 60,
        "metroSeg": 1.852 * 3600 / 1852,
        "metroMin": 1.852 * 60,
        "cmSeg": 1.852 * 3600 / 100 / 1852,
        "millaSeg": 3600 / 1852,
        "millaMin": 60 / 1852,
        "millaHora": 1,
        "piesSeg": 3600 / 1852 / 3.28084,
        "nudo": 1,
        "mach": 1234.8 / 1852,
    },
    "mach": {
        "kmHora": 1234.8,
        "kmMin": 1234.8 * 60,
        "metroSeg": 1234.8 * 3600 / 1234.8,
        "metroMin": 1234.8 * 60,
        "cmSeg": 1234.8 * 3600 / 100 / 1234.8,
        "millaSeg": 3600 / 1234.8,
        "millaMin": 60 / 1234.8,
        "millaHora": 1 / 1234.8,
        "piesSeg": 3600 / 1234.8 / 3.28084,
        "nudo": 1234.8 / 1852,
        "mach": 1,
    },
     "newton": {
        "newton": 1,
        "kgFuer": 0.101972,
        "liFuer": 0.224809,
        "dina": 100000
    },
    "kgFuer": {
        "newton": 9.80665,
        "kgFuer": 1,
        "liFuer": 2.20462,
        "dina": 980665
    },
    "liFuer": {
        "newton": 4.44822,
        "kgFuer": 0.453592,
        "liFuer": 1,
        "dina": 444822
    },
    "dina": {
        "newton": 0.00001,
        "kgFuer": 1.01972e-7,
        "liFuer": 2.24809e-7,
        "dina": 1
    },
    "joule": {
        "joule": 1,
        "cal": 0.239006,
        "kCal": 0.000239006,
        "ergio": 10000000
    },
    "cal": {
        "joule": 4.184,
        "cal": 1,
        "kCal": 0.001,
        "ergio": 41840000
    },
    "kCal": {
        "joule": 4184,
        "cal": 1000,
        "kCal": 1,
        "ergio": 4184000000
    },
    "ergio": {
        "joule": 0.0000001,
        "cal": 0.000000024,
        "kCal": 0.00000000024,
        "ergio": 1
    },
    "gramo": {
        "gramo": 1,
        "kilogramo": 0.001,
        "ton": 0.000001,
        "miligramo": 1000,
        "microgramo": 1000000,
        "libra": 0.00220462,
        "onza": 0.035274,
        "quin": 0.0000220462
    },
    "kilogramo": {
        "gramo": 1000,
        "kilogramo": 1,
        "ton": 0.001,
        "miligramo": 1000000,
        "microgramo": 1000000000,
        "libra": 2.20462,
        "onza": 35.274,
        "quin": 0.0220462
    },
    "ton": {
        "gramo": 1000000,
        "kilogramo": 1000,
        "ton": 1,
        "miligramo": 1000000000,
        "microgramo": 1000000000000,
        "libra": 2204.62,
        "onza": 35274,
        "quin": 22.0462
    },
    "miligramo": {
        "gramo": 0.001,
        "kilogramo": 0.000001,
        "ton": 0.000000001,
        "miligramo": 1,
        "microgramo": 1000,
        "libra": 0.00000220462,
        "onza": 0.000035274,
        "quin": 0.0000000220462
    },
    "microgramo": {
        "gramo": 0.000001,
        "kilogramo": 0.000000001,
        "ton": 0.000000000001,
        "miligramo": 0.001,
        "microgramo": 1,
        "libra": 0.00000000220462,
        "onza": 0.000000035274,
        "quin": 0.0000000000220462
    },
    "libra": {
        "gramo": 453.592,
        "kilogramo": 0.453592,
        "ton": 0.000453592,
        "miligramo": 453592,
        "microgramo": 453592000,
        "libra": 1,
        "onza": 16,
        "quin": 0.0005
    },
    "onza": {
        "gramo": 28.3495,
        "kilogramo": 0.0283495,
        "ton": 0.0000283495,
        "miligramo": 28349.5,
        "microgramo": 28349000,
        "libra": 0.0625,
        "onza": 1,
        "quin": 0.00003125
    },
    "quin": {
        "gramo": 45359.2,
        "kilogramo": 45.3592,
        "ton": 0.0453592,
        "miligramo": 45359200,
        "microgramo": 45359200000,
        "libra": 200,
        "onza": 3200,
        "quin": 1
    },
    "celsius": {
        "celsius": 1,
        "fahren": 33.8,
        "kelv": 274.15,
        "rankine": 493.47
    },
    "fahren": {
        "celsius": -17.2222,
        "fahren": 1,
        "kelv": 255.928,
        "rankine": 460.67
    },
    "kelv": {
        "celsius": -272.15,
        "fahren": -457.87,
        "kelv": 1,
        "rankine": 1.8
    },
    "rankine": {
        "celsius": -272.594,
        "fahren": -458.67,
        "kelv": 0.55556,
        "rankine": 1
    },
     "seg": {
        "seg": 1,
        "miliseg": 1000,
        "microseg": 1000000,
        "min": 0.0166667,
        "hora": 0.000277778,
        "dia": 1.1574e-5,
        "sem": 1.6534e-6,
        "mes": 3.8027e-7,
        "year": 3.171e-8
    },
    "miliseg": {
        "seg": 0.001,
        "miliseg": 1,
        "microseg": 1000,
        "min": 1.6667e-5,
        "hora": 2.7778e-7,
        "dia": 1.1574e-8,
        "sem": 1.6534e-9,
        "mes": 3.8027e-10,
        "year": 3.171e-11
    },
    "microseg": {
        "seg": 1e-6,
        "miliseg": 0.001,
        "microseg": 1,
        "min": 1.6667e-8,
        "hora": 2.7778e-10,
        "dia": 1.1574e-11,
        "sem": 1.6534e-12,
        "mes": 3.8027e-13,
        "year": 3.171e-14
    },
    "min": {
        "seg": 60,
        "miliseg": 60000,
        "microseg": 60000000,
        "min": 1,
        "hora": 0.0166667,
        "dia": 0.000694444,
        "sem": 9.9206e-5,
        "mes": 2.2831e-5,
        "year": 1.9026e-6
    },
    "hora": {
        "seg": 3600,
        "miliseg": 3600000,
        "microseg": 3600000000,
        "min": 60,
        "hora": 1,
        "dia": 0.0416667,
        "sem": 0.00595238,
        "mes": 0.00136986,
        "year": 0.000114155
    },
    "dia": {
        "seg": 86400,
        "miliseg": 8.64e+7,
        "microseg": 8.64e+10,
        "min": 1440,
        "hora": 24,
        "dia": 1,
        "sem": 0.142857,
        "mes": 0.0328767,
        "year": 0.00273973
    },
    "sem": {
        "seg": 604800,
        "miliseg": 6.048e+8,
        "microseg": 6.048e+11,
        "min": 10080,
        "hora": 168,
        "dia": 7,
        "sem": 1,
        "mes": 0.229984,
        "year": 0.0191781
    },
    "mes": {
        "seg": 2.628e+6,
        "miliseg": 2.628e+9,
        "microseg": 2.628e+12,
        "min": 43800,
        "hora": 730.001,
        "dia": 30.4167,
        "sem": 4.34524,
        "mes": 1,
        "year": 0.0833333
    },
    "year": {
        "seg": 3.154e+7,
        "miliseg": 3.154e+10,
        "microseg": 3.154e+13,
        "min": 525600,
        "hora": 8760,
        "dia": 365,
        "sem": 52.1429,
        "mes": 12,
        "year": 1
    },
     "culombio": {
        "culombio": 1,
        "miliculombio": 1000,
        "microculombio": 1000000,
        "nanoculombio": 1e+9,
        "picoculombio": 1e+12
    },
    "miliculombio": {
        "culombio": 0.001,
        "miliculombio": 1,
        "microculombio": 1000,
        "nanoculombio": 1e+6,
        "picoculombio": 1e+9
    },
    "microculombio": {
        "culombio": 1e-6,
        "miliculombio": 0.001,
        "microculombio": 1,
        "nanoculombio": 1000,
        "picoculombio": 1e+6
    },
    "nanoculombio": {
        "culombio": 1e-9,
        "miliculombio": 1e-6,
        "microculombio": 0.000001,
        "nanoculombio": 1,
        "picoculombio": 1000
    },
    "picoculombio": {
        "culombio": 1e-12,
        "miliculombio": 1e-9,
        "microculombio": 1e-6,
        "nanoculombio": 0.000001,
        "picoculombio": 1
    },
    "watt": {
        "watt": 1,
        "kilowatt": 0.001,
        "megawatt": 1e-6,
        "gigawatt": 1e-9,
        "horsepower": 0.00134102,
        "kcalHora": 0.85984523
    },
    "kilowatt": {
        "watt": 1000,
        "kilowatt": 1,
        "megawatt": 0.001,
        "gigawatt": 1e-6,
        "horsepower": 1.34102,
        "kcalHora": 859.84523
    },
    "megawatt": {
        "watt": 1e+6,
        "kilowatt": 1000,
        "megawatt": 1,
        "gigawatt": 0.001,
        "horsepower": 1341.02,
        "kcalHora": 859845.23
    },
    "gigawatt": {
        "watt": 1e+9,
        "kilowatt": 1e+6,
        "megawatt": 1000,
        "gigawatt": 1,
        "horsepower": 1.34102e+6,
        "kcalHora": 8.5984523e+8
    },
    "horsepower": {
        "watt": 745.699872,
        "kilowatt": 0.745699872,
        "megawatt": 0.000745699872,
        "gigawatt": 7.45699872e-10,
        "horsepower": 1,
        "kcalHora": 641.6151573
    },
    "kcalHora": {
        "watt": 1.162222222,
        "kilowatt": 0.001162222222,
        "megawatt": 1.162222222e-6,
        "gigawatt": 1.162222222e-9,
        "horsepower": 0.00155961,
        "kcalHora": 1
    },
     "kgM3": {
        "kgM3": 1,
        "gM3": 0.001,
        "lbFt3": 0.062427961,
        "kgLitro": 0.001,
        "ozGal": 0.0083454056,
        "tonM3": 0.001,
        "gMl": 1,
        "lbIn3": 0.000036127292
    },
    "gM3": {
        "kgM3": 1000,
        "gM3": 1,
        "lbFt3": 62.427961,
        "kgLitro": 1,
        "ozGal": 8.3454056,
        "tonM3": 1,
        "gMl": 1000,
        "lbIn3": 0.036127292
    },
    "lbFt3": {
        "kgM3": 16.018463,
        "gM3": 0.016018463,
        "lbFt3": 1,
        "kgLitro": 0.016018463,
        "ozGal": 0.13368056,
        "tonM3": 0.016018463,
        "gMl": 16.018463,
        "lbIn3": 0.00057803667
    },
    "kgLitro": {
        "kgM3": 1000,
        "gM3": 1,
        "lbFt3": 62.427961,
        "kgLitro": 1,
        "ozGal": 8.3454056,
        "tonM3": 1,
        "gMl": 1000,
        "lbIn3": 0.036127292
    },
    "ozGal": {
        "kgM3": 119.82643,
        "gM3": 0.11982643,
        "lbFt3": 7.9999997,
        "kgLitro": 0.11982643,
        "ozGal": 1,
        "tonM3": 0.11982643,
        "gMl": 119.82643,
        "lbIn3": 0.0043290043
    },
    "tonM3": {
        "kgM3": 1000,
        "gM3": 1,
        "lbFt3": 62.427961,
        "kgLitro": 1,
        "ozGal": 8.3454056,
        "tonM3": 1,
        "gMl": 1000,
        "lbIn3": 0.036127292
    },
    "gMl": {
        "kgM3": 0.001,
        "gM3": 0.000001,
        "lbFt3": 0.062427961,
        "kgLitro": 0.001,
        "ozGal": 0.0083454056,
        "tonM3": 0.001,
        "gMl": 1,
        "lbIn3": 0.000036127292
    },
    "lbIn3": {
        "kgM3": 27679.904,
        "gM3": 27.679904,
        "lbFt3": 1728,
        "kgLitro": 27.679904,
        "ozGal": 231,
        "tonM3": 27.679904,
        "gMl": 27679.904,
        "lbIn3": 1
    },
     "voltio": {
        "voltio": 1,
        "milivoltio": 1000,
        "microvoltio": 1e+6,
        "nanovoltio": 1e+9,
        "picovoltio": 1e+12,
        "kilovoltio": 0.001,
        "megavoltio": 1e-6,
        "gigavoltio": 1e-9
    },
    "milivoltio": {
        "voltio": 0.001,
        "milivoltio": 1,
        "microvoltio": 1000,
        "nanovoltio": 1e+6,
        "picovoltio": 1e+9,
        "kilovoltio": 1e-6,
        "megavoltio": 1e-9,
        "gigavoltio": 1e-12
    },
    "microvoltio": {
        "voltio": 1e-6,
        "milivoltio": 0.001,
        "microvoltio": 1,
        "nanovoltio": 1000,
        "picovoltio": 1e+6,
        "kilovoltio": 1e-9,
        "megavoltio": 1e-12,
        "gigavoltio": 1e-15
    },
    "nanovoltio": {
        "voltio": 1e-9,
        "milivoltio": 1e-6,
        "microvoltio": 0.001,
        "nanovoltio": 1,
        "picovoltio": 1000,
        "kilovoltio": 1e-12,
        "megavoltio": 1e-15,
        "gigavoltio": 1e-18
    },
    "picovoltio": {
        "voltio": 1e-12,
        "milivoltio": 1e-9,
        "microvoltio": 1e-6,
        "nanovoltio": 0.001,
        "picovoltio": 1,
        "kilovoltio": 1e-15,
        "megavoltio": 1e-18,
        "gigavoltio": 1e-21
    },
    "kilovoltio": {
        "voltio": 1000,
        "milivoltio": 1e+6,
        "microvoltio": 1e+9,
        "nanovoltio": 1e+12,
        "picovoltio": 1e+15,
        "kilovoltio": 1,
        "megavoltio": 0.001,
        "gigavoltio": 1e-6
    },
    "megavoltio": {
        "voltio": 1e+6,
        "milivoltio": 1e+9,
        "microvoltio": 1e+12,
        "nanovoltio": 1e+15,
        "picovoltio": 1e+18,
        "kilovoltio": 1000,
        "megavoltio": 1,
        "gigavoltio": 0.001
    },
    "gigavoltio": {
        "voltio": 1e+9,
        "milivoltio": 1e+12,
        "microvoltio": 1e+15,
        "nanovoltio": 1e+18,
        "picovoltio": 1e+21,
        "kilovoltio": 1e+6,
        "megavoltio": 1000,
        "gigavoltio": 1
    },
    "m3": {
        "m3": 1,
        "litro": 1000,
        "cm3": 1e+6,
        "mililitro": 1e+6,
        "ft3": 35.3146667,
        "in3": 61023.7441,
        "yd3": 1.30795062,
        "galon": 264.172052
    },
    "litro": {
        "m3": 0.001,
        "litro": 1,
        "cm3": 1000,
        "mililitro": 1000,
        "ft3": 0.0353146667,
        "in3": 61.0237441,
        "yd3": 0.00130795062,
        "galon": 0.264172052
    },
    "cm3": {
        "m3": 1e-6,
        "litro": 0.001,
        "cm3": 1,
        "mililitro": 1,
        "ft3": 3.53146667e-5,
        "in3": 0.0610237441,
        "yd3": 1.30795062e-6,
        "galon": 0.000264172052
    },
    "mililitro": {
        "m3": 1e-6,
        "litro": 0.001,
        "cm3": 1,
        "mililitro": 1,
        "ft3": 3.53146667e-5,
        "in3": 0.0610237441,
        "yd3": 1.30795062e-6,
        "galon": 0.000264172052
    },
    "ft3": {
        "m3": 0.0283168466,
        "litro": 28.3168466,
        "cm3": 28316.8466,
        "mililitro": 28316.8466,
        "ft3": 1,
        "in3": 1728,
        "yd3": 0.037037037,
        "galon": 7.48051948
    },
    "in3": {
        "m3": 1.6387064e-5,
        "litro": 16.387064,
        "cm3": 16.387064,
        "mililitro": 16.387064,
        "ft3": 0.000578703704,
        "in3": 1,
        "yd3": 2.14334705e-5,
        "galon": 0.00432900433
    },
    "yd3": {
        "m3": 0.764554858,
        "litro": 764.554858,
        "cm3": 764554.858,
        "mililitro": 764554.858,
        "ft3": 27,
        "in3": 46656,
        "yd3": 1,
        "galon": 201.974026
    },
    "galon": {
        "m3": 0.0037854118,
        "litro": 3.7854118,
        "cm3": 3785.4118,
        "mililitro": 3785.4118,
        "ft3": 0.133680556,
        "in3": 231,
        "yd3": 0.0049511317,
        "galon": 1
    }
}

inputBox.addEventListener("input", updateResult)
unitCategory.addEventListener("change", updateResult)
resultCategory.addEventListener("change", updateResult)
borrarBtn.addEventListener("click", clearInput)

function updateResult(){
    const inputValue = parseFloat(inputBox.value)
    const inputCategoryVal = unitCategory.value
    const resultCategoryVal = resultCategory.value

    const convFactor = convFactors[inputCategoryVal][resultCategoryVal]
    resultBox.value = isNaN(inputValue) ? "" : inputValue * convFactor
}

function clearInput() {
    inputBox.value = "";
    resultBox.value = "";
}
function irLong(){
    window.location.href = "longitud.html"
}
function irVel(){
    window.location.href = "velocidad.html";
}
function irFuer(){
    window.location.href = "fuerza.html";
}
function irWork(){
    window.location.href = "trabajo.html";
}
function irMasa(){
    window.location.href = "masa.html";
}
function irTemp(){
    window.location.href = "temperatura.html";
}
function irTime(){
    window.location.href = "tiempo.html";
}
function irCarga(){
    window.location.href = "carga.html"
}
function irPoten(){
    window.location.href = "potencia.html"
}
function irDens(){
    window.location.href = "densidad.html"
}
function irDif(){
    window.location.href = "tension.html"
}
function irVol(){
    window.location.href = "volumen.html"
}
