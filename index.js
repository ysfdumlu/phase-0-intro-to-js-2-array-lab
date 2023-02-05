// Write your solution here!

// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function arraysFunction(){
        cats.length = 0;
  
        cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(ad){
    cats.push(ad)
    console.log(cats)
}

console.log(cats)
destructivelyAppendCat('Ralph')


function destructivelyPrependCat(ad){
    cats.unshift(ad)
    console.log(cats)
}

arraysFunction()
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}

arraysFunction()
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}

arraysFunction()
destructivelyRemoveFirstCat()

function appendCat(ad){
    const newCats = [
        ...cats.slice(0),
        ad
    ]    
    console.log(cats)
    console.log(newCats)
    return newCats
}
arraysFunction()
appendCat('Broom')

function prependCat(ad){
    const copyCats = [...cats]
    copyCats.unshift(ad)
    console.log(copyCats)
    console.log(cats)

    return copyCats
}

arraysFunction()
prependCat('Arnold')

function removeLastCat(){
    const copyCats = [...cats]
    copyCats.pop()
    console.log(copyCats)
    console.log(cats)

    return copyCats
}

arraysFunction()
removeLastCat()

function removeFirstCat(){
    const copyCats = [...cats]
    copyCats.shift()
    console.log(copyCats)
    console.log(cats)

    return copyCats
}

arraysFunction()
removeFirstCat()