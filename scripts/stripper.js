
const fs = require('fs')

// //async solution
// fs.readFile('./json/test.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     unproccessedJson = JSON.parse(jsonString); 
//     console.log(unproccessedJson)
// })

//sync solution
const jsonString = fs.readFileSync('./json/cards.json')
var unproccessedJson = JSON.parse(jsonString)

var strippedJson = []
for(cardId = 0 ; cardId < unproccessedJson.length; cardId++){
    let card = unproccessedJson[cardId]
    delete card.mtgo_id
    delete card.mtgo_foil_id
    delete card.tcgplayer_id
    delete card.cardmarket_id
    delete card.legalities
    delete card.games
    delete card.oversized
    delete card.promo
    delete card.promo_types
    delete card.reprint
    delete card.variation
    delete card.set_type
    delete card.set_uri
    delete card.set_search_uri
    delete card.scryfall_set_uri
    delete card.rulings_uri
    delete card.prints_search_uri
    delete card.collector_number
    delete card.digital
    delete card.story_spotlight
    delete card.related_uris
    strippedJson.push(card)
}

const jsonWriteString = JSON.stringify(strippedJson, null, 2)
fs.writeFileSync('./json/test.json', jsonWriteString)
