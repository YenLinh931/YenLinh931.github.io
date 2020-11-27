const arr = [1,4,6,7,8,0,0,7,4,5,6,3,1];

const countElement = arr.reduce(function(value,index)
{
    if (index in value) {
        value[index]++;
    }
    else 
    {
        value[index]=1;
    }
    return value;
},{}
)

console.log(countElement);