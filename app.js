
class Perceptron{
    constructor(inputs, weights, bias){
        this.inputs = inputs;
        this.weights = weights;
        this.bias = bias;

    }

     weightedSum(inputs, weights){
        let sum = 0;
        for(let i = 0; i < 2; i++){
            sum += inputs[i] * weights[i];
        }
        return sum;
    }
    
    
     activate(sum)
    {
        return sum > 0 ? 1 : -1;
    }
    
     
      guess(){
        let sum = this.weightedSum(this.inputs, this.weights);
        return this.activate(sum + this.bias);
    }
    
    
 
   
    
}


let p = new Perceptron([1,9.5], [1,1], 0);
console.log(p.guess())


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.label = null;
    }
}



let w1 = 0 ,w2 = 0;
let weights = {w1,w2};


//label each point as above or below the line   
function labelPoint(point){
    if(point.y < point.x){
        point.label = "above";
    }
    else{
        point.label = "below";
    }
}


//make an array of points
function makePoints(n){
    let points = [];
    for(let i = 0; i < n; i++){
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let point = new Point(x, y);
        labelPoint(point);
        points.push(point);
    }
    return points;
}



const points = makePoints(10);
console.log(points);
















const canvas =  document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


canvas.width = 400;
canvas.height = 400;


//line
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();


//function to draw a point 
function drawPoint(x,y){
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);

    ctx.stroke();
    ctx.fill();
//    if(x>y)
//    {
//     ctx.fillStyle="red";
//     ctx.fill();
//    }
//    else{
//     ctx.fillStyle="green";
//     ctx.fill();
//    }

}

for(let i=0;i<100;i++){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    drawPoint(x,y);
}



