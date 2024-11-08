let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            // Check if there is something to remove
            if (screenValue.length > 0) {
                // Remove the last character
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            }
        }
      
        // else if (buttonText == 'C') {
        //     screenValue = string.slice(0,-1);
        //     screen.value = screenValue;
        // }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
            else if (buttonText == '√') {
                screenValue = Math.sqrt(eval(screenValue)).toString();
                screen.value = screenValue;
    
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

