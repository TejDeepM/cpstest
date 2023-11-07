
var x = 0;
var time = 0;
var maxTime = 5000;

function inputLostFocus() {
    maxTime = document.getElementById("timeInput").value;
}

function veryMain() {
    
    function clickerMain() {
        
        if (x == 0) {

            function increaseTimer() {
                time += 0.1;
                document.getElementById("timeLeft").innerHTML = (maxTime/1000 - time).toFixed(1).toString() + " sec"
            
                if (time < maxTime/1000) {
                    setTimeout(increaseTimer, 100);
                }

                else if (time > maxTime/1000) {
                    time = maxTime;
                    document.getElementById("timeLeft").innerHTML = "0.0 sec"

                    var result = (x/(maxTime/1000)).toFixed(1)
                    alert(result);

                    document.getElementById("result").innerHTML = result + " cps";

                    x = 0;
                    time = 0;
                }
            }
            
            increaseTimer();
            setTimeout(clickerMain, 1000)
        
        }
        
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
<<<<<<< HEAD

    if (time >= 5) {
        var result = (x/time).toFixed(1)
        alert(result);
        document.getElementById("result").innerHTML = result + " cps";
        x = 0;
        time = 0;
    }

    document.getElementById("mainClickButton").background-color = rgb(50, 50, 50)

=======
>>>>>>> b6004f4 (Committed)
}

