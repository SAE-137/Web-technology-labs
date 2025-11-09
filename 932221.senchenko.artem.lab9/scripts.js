class Calculator {
    constructor(prevEl, currEl) {
        this.previousOperand = prevEl;
        this.currentOperand = currEl;
        this.clear();
    }

    clear() {
        this.prevText = '';
        this.currText = '0';
        this.operation = null;
        this.justCalculated = false;
        this.updateDisplay();
    }

    delete() {
        if (this.currText === 'Error') {
            this.clear();
            return;
        }
        if (this.justCalculated) {
            this.clear();
            return;
        }
        this.currText = this.currText.length > 1 ? this.currText.slice(0, -1) : '0';
        this.updateDisplay();
    }

    appendNumber(num) {
        if (this.currText === 'Error') {
            this.clear();
        }
        if (this.justCalculated) {
            this.currText = num;
            this.prevText = '';
            this.justCalculated = false;
        } else if (this.currText === '0') {
            this.currText = num;
        } else {
            this.currText += num;
        }
        this.updateDisplay();
    }

    chooseOperation(op) {
        if (this.currText === 'Error') return;

        if (this.justCalculated) {
            this.prevText = this.currText + ' ' + this.getOpSymbol(op);
            this.currText = '0';
            this.justCalculated = false;
            this.updateDisplay();
            return;
        }

        const last = this.prevText.trim();
        if (last && ['+', '-', '*', '/'].includes(last.slice(-1))) {
            this.prevText = last.slice(0, -1) + this.getOpSymbol(op);
        } else {
            this.prevText = this.currText + ' ' + this.getOpSymbol(op);
            this.currText = '0';
        }
        this.updateDisplay();
    }

    getOpSymbol(op) {
        const map = { '+': '+', '-': '-', '*': '*', '/': '/' };
        return map[op] || op;
    }

    compute() {
        if (!this.prevText || this.currText === 'Error') return;

        const expression = this.prevText.replace(/\s/g, '') + this.currText;
        const result = this.evaluate(expression);

        if (result === 'Error' || !isFinite(result)) {
            this.currText = 'Error';
            this.prevText = '';
        } else {
            this.currText = parseFloat(result).toString();
            this.prevText = '';
        }
        this.justCalculated = true;
        this.updateDisplay();
    }

    evaluate(expr) {
        if (!/^[\d+\-*/.()]+$/.test(expr)) return 'Error';
        try {
            const res = Function('return ' + expr)();
            return isFinite(res) ? res : 'Error';
        } catch {
            return 'Error';
        }
    }

    appendDecimal() {
        if (this.currText === 'Error') {
            this.clear();
            this.currText = '0.';
        } else if (this.justCalculated) {
            this.currText = '0.';
            this.prevText = '';
            this.justCalculated = false;
        } else if (!this.currText.includes('.')) {
            this.currText += this.currText === '0' ? '.0' : '.';
            if (this.currText === '.') this.currText = '0.';
        }
        this.updateDisplay();
    }

    updateDisplay() {
        this.previousOperand.textContent = this.prevText;
        this.currentOperand.textContent = this.currText;
    }
}

let calc;

document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById('prev-operand');
    const curr = document.getElementById('curr-operand');
    calc = new Calculator(prev, curr);

    document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const value = btn.dataset.value || btn.dataset.op || btn.textContent;

            switch (action) {
                case 'number': calc.appendNumber(value); break;
                case 'decimal': calc.appendDecimal(); break;
                case 'operation': calc.chooseOperation(value); break;
                case 'clear': calc.clear(); break;
                case 'backspace': calc.delete(); break;
                case 'equals': calc.compute(); break;
            }
        });
    });
});