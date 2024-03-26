// function upperCase(str) {
//     return str.charAt(0).toUpperCase() + str.substring(1)sw
// }
// console.log(upperCase("my name is dera"));

// function capitalize(str) {
// let splittedStr = str.split(" ")
// const result = []
// for (let i = 0; i < splittedStr.length; i++) {
//     result.push(
//         (splittedStr[i][0].toUpperCase() + splittedStr[i].substring(1))
//     )
// }
//    return result.join(" ")
// }


// console.log(capitalize("i love javascript"));

// function firstCapital(str) {
//     let splittedStr = str.split(" ")
//     let result = []
//     for (let i = 0; i < splittedStr.length; i++) {
//         result.push(splittedStr[i][0].toUpperCase() + splittedStr[i].substring(1));
        
//     }
//     return result.join(" ")
// }
// console.log(firstCapital("my name is dera"));

function firstUpperCase(string) {
    let splittedString = string.split(" ")
    let container = []
    for (let i = 0; i < splittedString.length; i++) {
        container.push(splittedString[i][0].toUpperCase() + splittedString[i].substring(1));
        
    }
    return container.join(" ")
}
console.log(firstUpperCase("my name is ikechukwu"));