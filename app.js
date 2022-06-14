

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.label = null;
    }

}



let perceptron = new Perceptron(10);
let points = makePoints(100);

//call perceptron.guess() on each point
function guess(point) {
    let inputs = [point.x, point.y];
    return perceptron.feedForward(inputs);
}

document.addEventListener("click",(e)=>{
    console.log(e)
    points.forEach(point => {
        perceptron.train([point.x, point.y], point.label);
                drawGuessPoint();
    });

})



//make an array of points
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



function makeGuessPoint(n){
    
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


let guessPoints = makeGuessPoint(100); 






const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


canvas.width = 400;
canvas.height = 400;


//line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.stroke();


//function to draw a point 
function drawPoint(x, y,label) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
    
       if(label === 1)
       {
        ctx.fillStyle="red";
        ctx.fill();
       }
       else {
        ctx.fillStyle="green";
        ctx.fill();
       }

}

// points.forEach(point => {
//     drawPoint(point.x, point.y, point.label);

// });
function drawGuessPoint(){

    guessPoints.forEach(point => {
        drawPoint(point.x, point.y, point.label);
    
    });
}




