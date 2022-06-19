const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/sheild.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)




















//all old code
//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)
//
//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)


//function newImage(url, left, bottom){
//    let object = document.createElement('img')
//    object.src = url
//    object.style.position = 'fixed'
//    object.style.left = left + 'px'
//    object.style.bottom = bottom + 'px'
//    document.body.append(object)
//    return object
//}
//
//
//function newImage(url){
//    let image = document.createElement('img')
//    image.src = url
//    document.body.append(image)
//    return image
//}
//
//function newItem(url){
//    let item = newImage(url)
//    item.addEventListener('click', () => {
//        item.remove()
//        let inventoryItem = document.createElement('img')
//        inventoryItem.src = url;
//        inventory.append(inventoryItem)
//    })
//    return item
//}
//
//newItem('assets/sword.png', 500, 555)
//newItem('assets/sheild.png', 165, 335)
//newItem('assets/staff.png', 600, 250)
//
//function newInventory(){
//    let inventory = document.createElement('div')
//    inventory.style.width = '100%'
//    inventory.style.height = '100px'
//    inventory.style.display = 'flex'
//    inventory.style.flexDirection = 'row'
//    inventory.style.alignItems = 'center'
//    inventory.style.justifyContent = 'space-evenly'
//    inventory.style.border = '2px solid black'
//    inventory.style.backgroundColor = 'brown'
//    document.body.append(inventory)
//    return inventory
//}
//
//function move(element){
//    element.style.position = 'fixed'
//
//    function moveToCoordinates(left, bottom){
//        element.style.left = left + 'px'
//        element.style.bottom = bottom + 'px'
//    }
//
//    return {
//        to: moveToCoordinates
//    }
//}
//
//const inventory = newInventory()
//
//move(inventory).to(0, 0)
//move(newImage('assets/green-character.gif')).to(100, 250)
//move(newImage('assets/tree.png')).to(200, 450)
//move(newImage('assets/pillar.png')).to(350, 250)
//move(newImage('assets/pine-tree.png')).to(450, 350)
//move(newImage('assets/crate.png')).to(150, 350)
//move(newImage('assets/well.png')).to(500, 575)
//move(newItem('assets/sword.png')).to(500, 555)
//move(newItem('assets/sheild.png')).to(165, 335)
//move(newItem('assets/staff.png')).to(600, 250)