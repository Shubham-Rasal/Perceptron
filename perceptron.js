class Perceptron {
    constructor( bias) {
        
        this.weights = [ Math.random()*2 -1 , Math.random()*2 -1];

        this.bias = bias;
    }
    feedForward(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        sum += this.bias;
        return this.activate(sum);
    }

    activate(sum) {
        return sum > 0 ? 1 : -1;
    }


    train(inputs, target) {
        let guess = this.feedForward(inputs);
        let error = target - guess;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i];
        }
        this.bias += error;
    }

    getWeights() {
        return this.weights;
    }
}