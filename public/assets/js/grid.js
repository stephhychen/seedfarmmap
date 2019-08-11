import { zones, zoneNames } from './static/zones.js';
import plantNames from './static/plants.js';
import substrateNames from './static/substrates.js';
import { xnum, ynum } from './static/constants.js';
import animation from './animation.js';
import { Plant, Substrate } from './static/classes.js';
var cells = new Array(xnum*ynum);

function getEntries(array, type, val) {
  return array.filter(function (el) {
    return el[type] === val;
  });
}

function rollDice() {
    var rand = Math.random();
    var level;

    if(rand < 0.8) level = 'high';
    else if(rand < 0.95) level = 'med';
    else level = 'low';

    return level;
}

function setDepth(zone) {
    var depth = (4-zone)/3*Math.random();
    var level;

    if(depth < 0.5) level = 'shallow';
    else if(depth < 0.8) level = 'med';
    else level = 'deep';

    return level;
}

function getFlowers(plant) {
    var today = new Date();
    plant.flower = true;

    //month +1 as zero index
    var flowering = plant.flowering.some(x => x === today.getMonth() + 1 );
    return flowering;
}

function getFruits(plant) {
    var today = new Date();
    plant.fruit = true;

    //month +1 as zero index
    var fruiting = plant.fruiting.some(x => x === today.getMonth() + 1 );
    return fruiting;
}

function getSubstrate(zone) {
    var entries = [];

    do{
        var level = rollDice();
        entries = getEntries(substrateNames, zone, level);
    }while (entries.length === 0)

    var substrateType = entries[Math.floor(Math.random()*(entries.length))];

    //set substrate depth: random but as a function of zone
    var depth = setDepth(zone);

    var substrate = new Substrate(substrateType.name, substrateType.arabic, substrateType.type, substrateType.personality, 
        substrateType.fertility, substrateType.depth, substrateType.symbol, substrateType.color, substrateType.speech )

    return substrate;
}

function getPlant(zone) {
    do{
        var level = rollDice();
        var entries = getEntries(plantNames, zone, level);
    } while (entries.length === 0)
    var plantType = entries[Math.floor(Math.random()*(entries.length))];
    //here create new plant

    var plant = new Plant(plantType.name, plantType.arabic, plantType.type, plantType.soil, plantType.water, plantType.temp, 
        plantType.personality, plantType.speech, plantType.symbol, plantType.color, plantType.flowering, plantType.flowercolor)

    if(plantType.notes) plant.notes = plantType.notes;
    if(plantType.latin) plant.latin = plantType.latin;

    return plant;
}

function showInfo (cellID) {
    var cell = cells[cellID];
    $('.infopanel').children().remove()
    $('.infopanel').toggle()
    
    $('.infopanel').html("<p style='padding:20px'> in " + cell.zoneName + "...</p>")

    var $substrateInfo =  $('<div/>', {
        class: 'infobox',
    }).appendTo('.infopanel')
    
    var $symbolInfo =  $('<p/>', {
        class: 'symbolinfo',
    })
    .appendTo($substrateInfo)
    .html(cell.substrate.name + "   " + "[" + cell.substrate.symbol + "]" + "<br>" +
     "<p class='artext' lang='ar'>" + cell.substrate.arabic + "</p>" + "<br>" +
        "a kind of " + cell.substrate.type)

    if(cell.plant){
        var $plantInfo = $('<div/>', {
            class: 'infobox',
        }).appendTo('.infopanel')

        var $symbolInfo =  $('<p/>', {
                class: 'symbolinfo',
        })
        .appendTo($plantInfo)
        .html(cell.plant.name + "   " + "[" + cell.plant.symbol + "]" + "<br>" +
            "<p class='artext' lang='ar'>" + cell.plant.arabic + "</p>" + "<br>" +
            "<i>" + cell.plant.latin + "</i>" + "</br>" + "a kind of " + cell.plant.type)
      
        if(cell.plant.notes !== '') $symbolInfo.append("</br> </br>" + cell.plant.notes)
      }

    if(cell.occupant){
        var $occupantInfo = $('<div/>', {
            class: 'infobox',
        }).appendTo('.infopanel')

        var $symbolInfo =  $('<p/>', {
                class: 'symbolinfo',
        })
        .appendTo($occupantInfo)
        .html(cell.occupant.name + "   " + "[" + cell.occupant.symbol + "]" + "<br>" +
            "<p class='artext' lang='ar'>" + cell.occupant.arabic + "</p>" + "<br>" +
            "</br>" + "a kind of " + cell.occupant.type)

    }

}

var generateGrid = new Promise( function(resolve, reject){
    //subdivide the document into 10x10 squares to use as co-ordinate system
    var squareSize = 18;
    var leftMargin = ($(document).width() - Math.floor($(document).width()/squareSize)*squareSize)/2;
    var topMargin = ($(document).height() - Math.floor($(document).height()/squareSize)*squareSize)/2;

    for(var j=0; j<ynum; j++){
        for(var i=0; i<xnum; i++){
            var zone = zones[j*xnum + i];
            var plant;
            var substrate = getSubstrate(zone);
            var symbol = substrate.symbol;
            var color = substrate.color;

            var cellObjects = {};
            cellObjects.zoneName = zoneNames[zone];
            cellObjects.substrate = substrate;

            var divClass = "square zone" + zone + " " + substrate.name.replace(/\s/g, '');

            if(Math.random() < substrate.fertility && zone !== 5){
                plant = getPlant(zone);
                symbol = plant.symbol;
                divClass = divClass + " " + plant.name.replace(/\s/g, '');
                
                cellObjects.plant = plant;

                var flower = getFlowers(plant);

                color = flower ? plant.flowercolor : plant["color"];
            }

            $('<div/>', {
                id: i+xnum*j,
                class: divClass,
                click: (function(){ showInfo(this.id) } )
            }).css({
            'width': squareSize,
            'height': squareSize,
            'left':squareSize*i+leftMargin+'px',
            'top':squareSize*j+topMargin+'px',
            'color': color,
            'position':'absolute',
            'text-align' : 'center',
            }).html(symbol)
            .appendTo( '#container' );
        
        cells[j*xnum + i] = cellObjects;
        }
    }

    resolve('generated grid!!'); 
})

generateGrid.then(function(value) {
    animation.runMainLoop();
});

export { cells };