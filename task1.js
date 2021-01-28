/*const calc = createCalculator(10);

calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); // 100
*/

function calculate(){
    const calc = { createCalculator: 10};
     
    return {
        sum: function(n){
            calc.createCalculator += n;
      },
        mult: function(n){
            calc.createCalculator *= n;
        },
        sub: function(n){
            calc.createCalculator -= n;
        },
        div: function(n){
            calc.createCalculator /= n;
        },
        set: function(a){
            calc.createCalculator = a;
        },
        display: function(){
            console.log("Result: ", calc.createCalculator);
        },
      
        
    }
};
const calculator = calculate();
calculator.sum(5);
calculator.display()
calculator.mult(10);
calculator.display()
calculator.sub(40);
calculator.display()
calculator.div(10);
calculator.display()
calculator.set(100);
calculator.display()

