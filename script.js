function insert(num){
    document.querySelector(".number-screen").innerHTML += num
}

function back(){
    let screen = document.querySelector(".number-screen").innerHTML;
    document.querySelector(".number-screen").innerHTML = screen.substring(0, screen.length -1);
}

function clean(){
    document.querySelector(".number-screen").innerHTML = ""
}

function result(){
    let result = document.querySelector(".number-screen").innerHTML;
    if (result){
        document.querySelector(".number-screen").innerHTML = eval(result);
    } else{
        document.querySelector(".number-screen").innerHTML = ""
    }
}