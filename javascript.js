let playerMarker = "X";
let gameEnd = false;

for (let i = 0; i<= 9; i++){
    document.getElementById(i.toString()).addEventListener("click", function(){
        if(this.innerHTML === "" & !gameEnd){
            this.innerHTML = playerMarker;
        }
    })
}