console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", ()=>{
//=================================fetching dog images ============================================
    function getAndSetData(){
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(json =>dogImages(json["message"]))
        
    }
    getAndSetData();
//==============================Setting Dog Images==================================================
    const dogContainer = document.getElementById("dog-image-container")
    function dogImages(jSon){
        const dogArray = jSon;
        for(let i = 0; i< dogArray.length; i++){
            const dogImage = document.createElement("img");
            dogImage.src = dogArray[i]
            dogContainer.append(dogImage)
        }
    }

//================================Fetching Dog Breeds List=========================================
    function getAndSetDogBreeds(){
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=> res.json())
        .then(json=> setDogList(Object.keys(json["message"])))
    }
    getAndSetDogBreeds();
//===============================Populating the Dog List============================================
    const dogList = document.getElementById("dog-breeds");
    function setDogList(jSon){
        const dogArray = jSon;
        for(let i = 0; i< dogArray.length; i++){
            const dogBreedLi = document.createElement("li");
            dogBreedLi.innerText = dogArray[i]
            dogList.append(dogBreedLi)
//=====================================Font Color Change========================================
            dogBreedLi.addEventListener("click", ()=>{
                dogBreedLi.style.color = "red"
            })
        }
    }
//=============================== getting the dropdown target ======================================
const dropDownOptions = document.getElementById("breed-dropdown").options
for(let i = 0; i<dropDownOptions.length; i++){
    dropDownOptions[i].addEventListener("click", (e)=>{
        console.log("hi")
    })
}
console.log(dropDownOptions)



})
