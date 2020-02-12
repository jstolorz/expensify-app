const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)

const address = ['aa','bb','cc','dd']

const [,city,state] = address

console.log(`You are in ${address[1]} ${address[2]}`)
console.log(`You are in ${city} ${state}`)

const items = ['Coffee (hot)','2.00','2.50']

const [coffe,,price] = items

console.log(`A medium ${coffe} costs ${price}`)