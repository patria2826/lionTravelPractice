interface User {
    name: string,
    age: number,
    weight?: number
}

interface MapUser {
    // [id: number]: User //An index signature parameter type must be 'string' or 'number'.
    [id: string]: User //An index signature parameter type must be 'string' or 'number'.
}

let u1: User = {
    name: "Ken",
    age: 10,
    weight: 30
}
let u2: User = {
    name: "Ben",
    age: 15
}

let m: MapUser = {
    kenny: u1, //type of the key(kenny) is string
    benny: u2
    // 0: u1,
    // 1: u2
}

console.log(m)
// console.log(m['kenny'])
// console.log(m[0])