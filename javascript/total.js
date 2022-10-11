function gst(priceperunit=0,quntity=0,CGST=0,SGST=0)
{
    var totalunits = priceperunit*quntity; //result is local variable
    var finalunits=totalunits/CGST/SGST;
    return finalunits;
}

