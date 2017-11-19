document.addEventListener("DOMContentLoaded", function() 
{

    var bandList = {
        name: ["METALICA", "NIRVANA", "COLDPLAY", "GREENDAY"],
        imgSrc: ["./assets/images/metalica.jpg", "./assets/images/nirvana.jpg",  "./assets/images/coldplay.jpg", "https://vignette.wikia.nocookie.net/music/images/c/c4/GreenDay.jpg/revision/latest?cb=20120417022920"],
        audioSrc: ["./assets/audio/metalica.mp3", "./assets/audio/nirvana.mp3",  "./assets/audio/coldplay.mp3", "./assets/audio/greenday.mp3"]
        }

    //reset global counters

    bandname = "";
    lettersGuessed = "";
    Bandindex = 0;
    numberOfwrongGuess = 6;
    userInput = [];
    wincount = 0;
    prevbandindex = -1;

    //new band variableset

    nextBand();

    document.onkeyup = function(event) {

        var v_userinput = event.key.toUpperCase();
        
        if(v_userinput=="BACKSPACE" ||v_userinput=="," ||v_userinput=="ENTER"||v_userinput=="TAB"||v_userinput=="SPACE")
        {
            return;
        }


        /*console.log(bandname.indexOf(v_userinput));*/

        //check if the letters has already been pressed.

        if (alreadyguessed.textContent.indexOf(v_userinput) != -1) {

            alert("Key has already been pressed before")
        } else {

            alreadyguessed.textContent = alreadyguessed.textContent + v_userinput + ",";

            if (bandname.indexOf(v_userinput) != -1) {

                userInput = userInput + event.key;
                /*                console.log("All User input" + userInput)*/
                printChars();

                //check if the word if fully matched 
                if (current.textContent == bandname) {
                    winner();
                    nextBand();
                }

            } else {

                numberOfwrongGuess = numberOfwrongGuess - 1;
                noofguess.textContent = numberOfwrongGuess;
                /*console.log('numberOfwrongGuess : ' + numberOfwrongGuess);*/
                if (numberOfwrongGuess == 0) {

                    alert("You are hanged, Game Reset !!!!");
                    wincount = 0;
                    nextBand();

                }
            }
        }
    }

    function getRandomBand() {

        Bandindex = Math.floor(Math.random() * bandList.name.length);
        return Bandindex;

    }

    function nextBand() 
    {

        //reset all counters

        lettersGuessed = "";
        bandname = "";
        Bandindex = 0;
        numberOfwrongGuess = 6;
        userInput = "";

        Bandindex = getRandomBand();

        bandname = bandList.name[Bandindex];
        win.textContent = wincount;
        noofguess.textContent = numberOfwrongGuess;
        current.textContent = "";
        alreadyguessed.textContent = ""

        console.log("Band Index : "+Bandindex);
        console.log("Band Name : "+bandname);
        printChars();

    }


    function printChars() 
    {

        var check = "";
        var blankItUp = "";
        localName= bandname.split("");
        //Metalica

        for (j = 0; j < localName.length; j++) {
            //scans all the elements in name 

            for (k = 0; k < userInput.length; k++) {

                if (localName[j] == userInput[k].toUpperCase()) {
                    check = "true";
                    break;
                } else {
                    check = "false";
                }
            }

            if (check == "true") {
                blankItUp = blankItUp + localName[j].toUpperCase()
            } else {
                blankItUp = blankItUp + " _ ";
            }
        }

        /*console.log(blankItUp);*/
        current.textContent = blankItUp.toUpperCase();
    }

    

    function winner() {
        wincount++;
        document.getElementById("picture").src = bandList.imgSrc[Bandindex];
        document.getElementById("band_name").textContent = bandname
        document.getElementById("audio").src = bandList.audioSrc[Bandindex];

    }
});