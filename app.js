class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.label = null;
    }

}
let globalX = 1, globalY = 1;

//slider
var slider = document.getElementById("myRange");
var outputY = document.getElementById("demo");
outputY.innerHTML = slider.value; // Display the default slider value




// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    outputY.innerHTML = this.value;
    //   console.log(this.value);
    globalY = this.value / 10;
    //   console.log(globalY)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(0, 0, globalX, globalY);
}

var sliderX = document.getElementById("xRange");
var output = document.getElementById("xdemo");
output.innerHTML = sliderX.value;


sliderX.oninput = function () {
    output.innerHTML = this.value;
    console.log(this.value);
    globalX = this.value / 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(0, 0, globalX, globalY);
}


let perceptron = new Perceptron(20, 0.5);


//make an array of points with correct data i.e training data

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


function f(x) {
    let slope = globalY / globalX;
    console.log(slope);
    return slope * x;

}


function makePoints(n) {
    let points = [];
    for (let i = 0; i < n; i++) {
        let x = Math.random() * 400;
        let y = Math.random() * 400;
        let point = new Point(x, y);

        point.label = y > f(x) ? 1 : -1;

        points.push(point);
    }
    return points;
}



const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;


//line


const height = 400;
const width = 400;
function drawLine(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1 * 400, convertToCartesian(y1 * 400));
    ctx.lineTo(x2 * 400, convertToCartesian(y2 * 400));
    ctx.stroke();
    // drawGuessPoint();
}





function convertToCartesian(x) {
    return 400 - x;
}


//function to draw a point 
function drawPoint(x, y, label) {
    ctx.beginPath();
    ctx.arc(x, convertToCartesian(y), 5, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();

    if (label === 1) {
        ctx.fillStyle = `rgba(201, 3, 0,0.5)`;
        ctx.fill();
    }
    else {
        ctx.fillStyle = "rgba(2,164,16,0.5)";
        ctx.fill();
    }

}



const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    
    let points = makePoints(100);
    trainPerceptron(points);
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    drawLine(0, 0, globalX, globalY);
});





const startBtn = document.getElementById('start');
startBtn.addEventListener('click', (e) => {


    console.log('start');
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    drawLine(0, 0, globalX, globalY);
    setInterval(() => {
        let guessPoints = makeGuessPoints(100);
        guessPoints.forEach(guessPoint => {

            drawPoint(guessPoint.x, guessPoint.y, guessPoint.label);
        });
        console.log(perceptron.getWeights());
        
       


    }, 1000);
})


// drawLine(0, 0,x,y );