import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
	public num1:number;
	public num2:number;
	public result:number;

	addition() {
		this.result = this.num1 + this.num2
	}

	subtraction() {
		this.result = this.num1 - this.num2
	}

	multiplication() {
		this.result = this.num1 * this.num2
	}

	division() {
		this.result = (this.num1) / (this.num2)
	}
}
