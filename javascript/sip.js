function sip(monthlysip,yearlyrate,years)
{
    var MR = yearlyrate/12/100;
    var M = years * 12;
    var FV = monthlysip * ((((1 + MR)**(M))-1) * (1 + MR))/MR;
    return FV;
}