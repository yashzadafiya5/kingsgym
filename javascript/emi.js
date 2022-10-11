// P x R x (1+R)^N / [(1+R)^N-1] find emi


function emi(p,r,n)
{
    var emi=p*r*(1+r)*pow(emi,n)/[(1+r)*pow(emi,n-1)];
    console.log(emi);
}

var EMI=emi(1000000,0.006,1);