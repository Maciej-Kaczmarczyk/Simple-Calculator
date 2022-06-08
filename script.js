/* A function that is called when the page is loaded. */
window.onload = function () {
    console.log("app started");
    calculator.init();
};

/* The above code is a calculator. */
let calculator = { 
    /* Declaring the variables buttons and input. */
    buttons: undefined,
    input: undefined,

   /* A function that is called when the page is loaded. */
    init: function () {
       /* Selecting the buttons and the input. */
        this.buttons = document.querySelectorAll(".button");
        this.input = document.getElementById("calculation");
        this.previous = document.getElementById("prev-calculation");

       /* Adding an event listener to all the buttons. */
        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

   /* A switch statement that is checking the value of the button that was clicked. */
    buttonClick: function (e) {
        let divHtmlText = e.target.innerHTML;
        console.log("Klik: " + divHtmlText);

        switch (divHtmlText) {
            case "=":
                calculator.evaluate();
            break;
            case "AC":
                calculator.clear();
            break;
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4":
            case "3":
            case "2":
            case "1":
            case "0":
            case "00":
            case "+":
            case "-":
            case "*":
            case "/": 
            case ",": 
            case "%": 
                calculator.addToInput(divHtmlText);
            break;
            case "√": 
                calculator.root();
            break;
        }

        
    },

   /* Adding the value of the button that was clicked to the input. */
    addToInput: function (str) {
        this.input.innerHTML += str;
    },

   /* Evaluating the input. */
    evaluate: function () {
        this.previous.innerHTML=calculator.input.innerHTML;
        let result = math.evaluate(calculator.input.innerHTML);
        calculator.setInput(result);
    },

   /* Calculating the root of the input. */
    root: function () {
        this.previous.innerHTML= "√" + calculator.input.innerHTML;
        let result = math.evaluate(calculator.input.innerHTML);
        let root = math.sqrt(result);
        calculator.setInput(parseInt(root * 10000000000) / 10000000000);
    },

   /* It clears the input. */
    clear: function () {
        calculator.setInput("");
    },

   /* It sets the input to the value of the button that was clicked. */
    setInput: function (str) {
        this.input.innerHTML = str;
    }
};