//prompt for froyo flavors and inputs
const userInput = prompt("Please list flavors of froyo with commas in between. ex. coffee,strawberry,vanilla","coffee,strawberry,vanilla")

//insert user input into array of flavors
const array = userInput.split(',')

//build object to track flavors
//update object throughout tracking flavors
const flavors = (arr)=>{
    const emptyObject ={}
for(let i=0;i<arr.length;i++){
    const eachFlavor = arr[i]
    const currentArray = Object.keys(emptyObject)
    if(currentArray.includes(eachFlavor)){
        emptyObject[eachFlavor] ++
    }else{
        emptyObject[eachFlavor] =1
    }
}
return emptyObject
}
const objStr = JSON.stringify(flavors(array))
alert (objStr)
//use functions to organize


