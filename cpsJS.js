
var x = 0;
var time = 0;

function beppam() {
    
    function clickerMain() {
        
        if (x == 0) {

            function increaseTimer() {
                time += 0.1;
                document.getElementById("timeLeft").innerHTML = (5 - time).toFixed(1).toString() + " sec"
            
                if (time < 5) {
                    setTimeout(increaseTimer, 100);
                }

                else if (time > 5) {
                    time = 5;
                    document.getElementById("timeLeft").innerHTML = "0.0 sec"
                }
            }
            
            increaseTimer();
            setTimeout(clickerMain, 1000)
        
        }
        
    }

    function onButtonClick() {
        x ++;
    }

    clickerMain();
    onButtonClick();

    if (time >= 5) {
        var result = (x/time).toFixed(1)
        alert(result);
        document.getElementById("result").innerHTML = result + " cps";
        x = 0;
        time = 0;
    }

}

