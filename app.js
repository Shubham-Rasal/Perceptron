class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.label = null;
    }

}

let perceptron = new Perceptron(20,0.5);

//make an array of points with correct data i.e training data
function makePoints(n) {
    let points = [];
    for (let i = 0; i < n; i++) {
        let x = Math.random() * 400;
        let y = Math.random() * 400;
        let point = new Point(x, y);
        point.label = x > y ? 1 : -1;

        points.push(point);
    }
    return points;
}

function makeGuessPoints(n) {

    let points = [];
    for (let i = 0; i < n; i++) {
        let x = Math.random() * 400;
        let y = Math.random() * 400;
        let point = new Point(x, y);
        point.label = perceptron.feedForward([x, y]);

        points.push(point);
    }
    return points;

}


function trainPerceptron(points) {
   points.forEach(point => {
         perceptron.train([point.x, point.y], point.label);
    });
}





const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;


//line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.stroke();
// drawGuessPoint();


//function to draw a point 
function drawPoint(x, y, label) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();

    if (label === 1) {
        ctx.fillStyle = `rgba(201, 3, 0,1)`;
        ctx.fill();
    }
    else {
        ctx.fillStyle = "green";
        ctx.fill();
    }

}


setInterval(() => {
let guessPoints = makeGuessPoints(100);
guessPoints.forEach(guessPoint => {
   
    drawPoint(guessPoint.x, guessPoint.y, guessPoint.label);
});
guessPoints = [];
console.log(perceptron.getWeights());

}, 300);


let points = makePoints(10);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {


trainPerceptron(points);
});