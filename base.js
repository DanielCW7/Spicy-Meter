let spicy = document.getElementById('spicySlider');
let flame = document.getElementById('flame');
let wing = document.getElementById('wings');
let label = document.getElementById('wingName');
let gluten = document.getElementById('gf');

const wingList = [
    wing_1 = {
        name: 'Honey Mustard',
        image: 'images/HoneyMustard-Cutout.png',
        spicy: 0,
        desc: 'Our sweet & tangy blend of your favorite chicken sidekick!'
    },
    wing_2 = {
        name: 'Hickory BBQ',
        image: 'images/HickoryBBQ-Cutout.png',
        spicy: 10,
        desc: 'Sweet \'n tangy flavor'
    },
    wing_3 = {
        name: 'Asian Garlic',
        image: 'images/AsianGarlic-Cutout.png',
        spicy: 20,
        desc: 'Teriyaki glaze packed with garlic flavor'
    },
    wing_4 = {
        name: 'Garlic Parm',
        image: 'images/GarlicParm-Cutout.png',
        spicy: 30,
        desc: 'Our blend of garlic, herbs and smoked parmesan'
    },
    wing_5 = {
        name: 'Honey Blues',
        image: 'images/HoneyBlues-Cutout.png',
        spicy: 40,
        desc: 'Honey heat mixed with blue cheese'
    },
    wing_6 = {
        name: 'Honey Buffalo BBQ',
        image: 'images/HoneyBuffalo-Cutout.png',
        spicy: 50,
        desc: 'A tasty blend of honey heat and hickory BBQ'
    },
    wing_7 = {
        name: 'Lemon Pepper',
        image: 'images/LemonPepper-Cutout.png',
        spicy: 60,
        desc: 'A dose of zesty flavor'
    },
    wing_8 = {
        name: 'Sweet N\' Smoky',
        image: 'images/Sweet\'NSmoky-Cutout.png',
        spicy: 70,
        desc: 'A savory masterpiece of sweet and spice'
    },
    wing_9 = {
        name: 'Chipotle Ranch',
        image: 'images/ChipotleRanch-Cutout.png',
        spicy: 80,
        desc: 'Smoky \‘n smooth'
    },
    wing_10 = {
        name: 'Mild Buffalo',
        image: 'images/MildBuffalo-Cutout.png',
        spicy: 90,
        desc: 'All the buffalo flavor, just a touch of heat'
    },
    wing_11 = {
        name: 'Honey Heat',
        image: 'images/HoneyHeat-Cutout.png',
        spicy: 100,
        desc: 'Maple honey blended with our store made buffalo sauce'
    },
    wing_12 = {
        name: 'Red White N\' Blues',
        image: 'images/RedWhite\'NBlues-Cutout.png',
        spicy: 110,
        desc: 'Our blue cheese blended with medium buffalo'
    },
    wing_13 = {
        name: 'Buffalo Bayou',
        image: 'images/BuffaloBayou-Cutout.png',
        spicy: 120,
        desc: 'Buffalo with a spicy cajun Blast'
    },
    wing_14 = {
        name: 'Kick \'N Cajun',
        image: 'images/Kick\'NCajun-Cutout.png',
        spicy: 130,
        desc: 'Bring the cajun spice to the party'
    },
    wing_15 = {
        name: 'Shogun',
        image: 'images/Shogun-Cutout.png',
        spicy: 140,
        desc: 'Teriyaki with a tangy chili bite'
    },
    wing_16 = {
        name: 'Medium Buffalo',
        image: 'images/MediumBuffalo-Cutout.png',
        spicy: 150,
        desc: 'Our famous buffalo inspired masterpiece'
    },
    wing_17 = {
        name: 'Nashville Hot',
        image: 'images/NashvilleHot-Cutout.png',
        spicy: 160,
        desc: 'Our take on Music City’s chart-topping hit'
    },
    wing_18 = {
        name: 'Buffa-Rub',
        image: 'images/BuffARub-Cutout.png',
        spicy: 170,
        desc: 'That classic buffalo flare without the mess'
    },
    wing_19 = {
        name: 'Mango Habanero',
        image: 'images/MangoHabanero-Cutout.png',
        spicy: 180,
        desc: 'Sweet ‘n spicy with a Caribbean flare'
    },
    wing_20 = {
        name: 'Dirty Rub',
        image: 'images/DirtyRub-Cutout.png',
        spicy: 190,
        desc: 'A smoky ‘n spicy blend of WIO’s secret dry rub spices'
    },
    wing_21 = {
        name: 'Hot Buffalo',
        image: 'images/HotBuffalo-Cutout.png',
        spicy: 200,
        desc: 'Just the right amount of tongue tingling spice'
    },
    wing_22 = {
        name: 'Wings of Prey',
        image: 'images/WingsOfPrey-Cutout.png',
        spicy: 210,
        desc: 'Painfully delicious'
    },
]

function adjustSpicy() {

    let hot = spicy.value;

    if(hot <= 50) {
        flame.style.background = 'linear-gradient(0deg, rgba(251,255,0,1) 0%, rgba(255,178,4,1) 100%)';
        flame.style.animationDuration = '1.5s';
        
    } else if (hot >= 51 && hot <= 150 ) { 
        flame.style.background = 'linear-gradient(0deg, rgba(251,255,0,1) 0%, rgba(255,4,4,1) 100%)';
        flame.style.animationDuration = '.5s';

    } else {
        flame.style.background = 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(158,81,0,1) 100%)'; 
        flame.style.animationDuration = '.3s';
    }


    if (hot <= 10 ) {
        wing.setAttribute("src", wingList[0].image);
        label.innerText = wingList[0].name;
        gluten.style.display = 'none'
    } 
    else if(hot >= 11 && hot <= 20 ) {
        wing.setAttribute("src", wingList[1].image);
        label.innerText = wingList[1].name;
        wing.style.backgroundImage = wingList[1].image;
        gluten.style.display = 'none'
    } 
    else if (hot >= 21 && hot <= 30 ) {
        wing.setAttribute("src", wingList[2].image);
        label.innerText = wingList[2].name;
        gluten.style.display = 'none'
    } 
    else if (hot >= 31 && hot <= 40 ) {
        wing.setAttribute("src", wingList[3].image);
        label.innerText = wingList[3].name;
        gluten.style.display = 'none'
    } 
    else if (hot >= 41 && hot <= 50 ) {
        wing.setAttribute("src", wingList[4].image);
        label.innerText = wingList[4].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 51 && hot <= 60 ) {
        wing.setAttribute("src", wingList[5].image);
        label.innerText = wingList[5].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 61 && hot <= 70 ) {
        wing.setAttribute("src", wingList[6].image);
        label.innerText = wingList[6].name;
        gluten.style.display = 'none'
    } 
    else if (hot >= 71 && hot <= 80 ) {
        wing.setAttribute("src", wingList[7].image);
        label.innerText = wingList[7].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 81 && hot <= 90 ) {
        wing.setAttribute("src", wingList[8].image);
        label.innerText = wingList[8].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 91 && hot <= 100 ) {
        wing.setAttribute("src", wingList[9].image);
        label.innerText = wingList[9].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 101 && hot <= 110 ) {
        wing.setAttribute("src", wingList[10].image);
        label.innerText = wingList[10].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 111 && hot <= 120 ) {
        wing.setAttribute("src", wingList[11].image);
        label.innerText = wingList[11].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 121 && hot <= 130 ) {
        wing.setAttribute("src", wingList[12].image);
        label.innerText = wingList[12].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 131 && hot <= 140 ) {
        wing.setAttribute("src", wingList[13].image);
        label.innerText = wingList[13].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 141 && hot <= 150 ) {
        wing.setAttribute("src", wingList[14].image);
        label.innerText = wingList[14].name;
        gluten.style.display = 'none'
    } 
    else if (hot >= 151 && hot <= 160 ) {
        wing.setAttribute("src", wingList[15].image);
        label.innerText = wingList[15].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 161 && hot <= 170 ) {
        wing.setAttribute("src", wingList[16].image);
        label.innerText = wingList[16].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 171 && hot <= 180 ) {
        wing.setAttribute("src", wingList[17].image);
        label.innerText = wingList[17].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 181 && hot <= 190 ) {
        wing.setAttribute("src", wingList[18].image);
        label.innerText = wingList[18].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 191 && hot <= 200 ) {
        wing.setAttribute("src", wingList[19].image);
        label.innerText = wingList[19].name;
        gluten.style.display = 'block'
    }
    else if (hot >= 201 && hot <= 210 ) {
        wing.setAttribute("src", wingList[20].image);
        label.innerText = wingList[20].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 211 && hot <= 220 ) {
        wing.setAttribute("src", wingList[21].image);
        label.innerText = wingList[21].name;
        gluten.style.display = 'block'
    } 
    else if (hot >= 221 && hot <= 230 ) {
        wing.setAttribute("src", wingList[22].image);
        label.innerText = wingList[22].name;
        gluten.style.display = 'block'
    } 
    else {  return  }   
}