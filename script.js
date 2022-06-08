window.onload = function () {
    console.log("app started");
    calculator.init();
};

let calculator = { 
    buttons: undefined,
    input: undefined,

    init: function () {
        this.buttons = document.querySelectorAll(".button");
        //console.log(this.buttons);
        this.input = document.getElementById("calculation");
        this.previous = document.getElementById("prev-calculation");

        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

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

    addToInput: function (str) {
        this.input.innerHTML += str;
    },

    evaluate: function () {
        this.previous.innerHTML=calculator.input.innerHTML;
        let result = math.evaluate(calculator.input.innerHTML);
        calculator.setInput(result);
    },

    root: function () {
        this.previous.innerHTML= "√" + calculator.input.innerHTML;
        let result = math.evaluate(calculator.input.innerHTML);
        let root = math.sqrt(result);
        calculator.setInput(parseInt(root * 10000000000) / 10000000000);
    },

    clear: function () {
        calculator.setInput("");
    },

    setInput: function (str) {
        this.input.innerHTML = str;
    }
};