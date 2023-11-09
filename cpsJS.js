
var x = 0;
var time = 0;
var maxTime = 5000;
var result = 0;

function inputLostFocus() {
    maxTime = document.getElementById("timeInput").value;
}

function veryMain() {
    
    function clickerMain() {
        
        if (x == 0) {

            function increaseTimer() {
                time += 10;
                document.getElementById("timeLeft").innerHTML = ((maxTime - time)/1000).toFixed(1).toString() + " sec"
            
                if (time < maxTime) {
                    setTimeout(increaseTimer, 10);
                }

                else if (time >= maxTime) {
                    time = maxTime;
                    result = (x/(maxTime/1000)).toFixed(1);
                    
                    document.getElementById("timeLeft").innerHTML = "0.0 sec";
                    document.getElementById("result").innerHTML = result + " cps";

                    alert(result);


                    x = 0;
                    time = 0;
                }
            }
            
            increaseTimer();
        
        } //runs only once
        
    }

    function onButtonClick() {
        x ++;
        if (x < 10) {
            document.getElementById("clicks").innerHTML = "0" + x + " clicks";
        }
        else if (x >= 10) {
            document.getElementById("clicks").innerHTML = x + " clicks";
        }
    }

    clickerMain();
    onButtonClick();

}

