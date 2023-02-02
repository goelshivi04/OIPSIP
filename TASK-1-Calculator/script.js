let screen = document.getElementById("screen");

function display(n){
    screen.value += n;
}

function Calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    screen.value = "";
}

function del(){
    screen.value = screen.value.slice(0,-1);
}

function pow(){
    screen.value = Math.pow(screen.value,2);
}

function pi(){
    screen.value = 3.14;
}

function sqrt(){
    screen.value = Math.sqrt(screen.value);
}

