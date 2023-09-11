let colors = ['#EFF7F6', '#E6F4F2', '#D3EFEB', '#C0E9E4', '#AEE4DE', '#9BDED7', '#88D9D0', '#92DCD3', '#7FD6CC', '#72D2C8', '#63CEC2'];
let earnings = [10000, 20000, 30000, 35000, 37000, 40000, 42000, 45000, 55000, 60000, 150000]


const canvas = document.getElementById("canvas");
canvas.width = 1100;
canvas.height = 1100;
const ctx = canvas.getContext("2d");
draw();
function draw() {
    // this is a 100% of the total amount 
    let totalEarnings = 0;
    earnings.forEach((element) => {
        totalEarnings += element
    })

    // how many curves shall our shape produce ! 
    let curvesNumber = 11;

    // where the arc should start from ! 
    let startPoint = 0;
    let endPoint = 0;
    let earningValuePercentage = 0; // 0% 
    let earningsValueInPI = 0; // 0 
    const spaceBetweenArcs = 0.003;

    for (let i = 0; i < curvesNumber; i++) {
        earningValuePercentage = (earnings[i] * 100) / totalEarnings;
        earningsValueInPI = (earningValuePercentage * 2) / 100;
        endPoint += earningsValueInPI;

        ctx.beginPath();
        ctx.arc(250, 250, 200, (Math.PI * startPoint), (Math.PI * endPoint), false);
        ctx.lineWidth = 60;
        ctx.strokeStyle = colors[i];
        ctx.stroke();

        startPoint = endPoint + spaceBetweenArcs;

    }
}


