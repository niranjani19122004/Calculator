// Access the input element with the correct ID
let input = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string); 
                input.value = string;   
            } catch (error) {
                input.value = "Error";
            }
        } else if (buttonText === 'AC') {
            string = "";                
            input.value = string;       
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1); 
            input.value = string;
        } else {
            string += buttonText;        
            input.value = string;       
        }
    });
});
