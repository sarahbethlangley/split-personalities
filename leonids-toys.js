// const pollyPocket = {
//     id: 1,
//     name: "Polly Pocket",
//     manufacturer: "Good Toys",
//     toyType: "miniature doll"
//     inStock: true,
//     numberOfItems: 16,
//     aisle: 4,
//     price: 14.97
// }

// const doctorBarbie = {
//     id: 2,
//     name: "Dr. Barbie",
//     manufacturer: "Mattel",
//     toyType: "doll"
//     inStock: false,
//     numberOfItems: 0,
//     aisle: 4,
//     price: 12.97
// }

// const hotWheels = {
//     id: 3,
//     name: "Hot Wheels",
//     manufacturer: "Cool Cars",
//     toyType: "miniature toy cars"
//     inStock: true,
//     numberOfItems: 242,
//     aisle: 3,
//     price: 1.09
// }

const toys = [{
    id: 1,
    name: "Polly Pocket",
    manufacturer: "Good Toys",
    toyType: "miniature doll",
    inStock: true,
    numberOfItems: 16,
    aisle: 4,
    price: 14.97
},
 {
    id: 2,
    name: "Dr. Barbie",
    manufacturer: "Mattel",
    toyType: "doll",
    inStock: false,
    numberOfItems: 0,
    aisle: 4,
    price: 12.97
},
 {
    id: 3,
    name: "Hot Wheels",
    manufacturer: "Cool Cars",
    toyType: "miniature toy cars",
    inStock: true,
    numberOfItems: 242,
    aisle: 3,
    price: 1.09
}]

console.log(toys)


const newToys = {
    id: 4,
    name: "Scrabble",
    manufacturer: "BoardgamersUSA",
    toyType: "board game",
    inStock: true,
    numberOfItems: 12,
    aisle: 5,
    price: 22.23
}

const moreNewToys = {
    id: 5,
    name: "My Little Pony",
    manufacturer: "YayPonies",
    toyType: "action figure",
    inStock: true,
    numberOfItems: 6,
    aisle: 4,
    price: 12.23
}

toys.push(newToys)
toys.push(moreNewToys)

    
// for (const toy of toys) {

//     toy.price = toy.price + toy.price * .05

//     if (toy.id === 1) {
//         console.log(`The ${toy.name} costs ${toy.price}, and it's on aisle ${toy.aisle}`)
//     }
//     if (toy.id === 2) {
//         console.log(`The ${toy.name} costs ${toy.price}, and it's on aisle ${toy.aisle}`)
//     }
//     if (toy.id === 3) {
//         console.log(`The ${toy.name} costs ${toy.price}, and it's on aisle ${toy.aisle}`)
//     }
    
// }
const toyToFind = 5

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + toy.price * .05
        console.log(`The ${toy.name} costs ${toy.price}, and it's on aisle ${toy.aisle}`)

    }
}


console.log(toys)
