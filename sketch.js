var weight = [35,38,42,45,43,34,36,41,48,32];

for (i=0;i<weight.length;i++)
{
  console.log(weight[i])

}

function cal_avg()
{
  var sum =0;
  
  for (i=0;i<weight.length;i++)
  {
    sum +=weight[i];

  }
  console.log(sum)
  var avg= sum/weight.length;
  console.log(avg)
}

cal_avg();
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

