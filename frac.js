const prompt = require('prompt-sync')();
class fraction
{
     constructor(num1,den1,num2,den2)
     {
         this.num1 = num1;
         this.den1 = den1; 
         this.num2 = num2;
         this.num2 = num2;         
         this.get_sum = 
           int i,hcf,lcm; 
           for (i=1;(i<=den1||i<=den2);i++)
    {
      if ((den1%i==0)&&(den2%i==0))
      {
        hcf=i;
      }
    }
  lcm=(den1*den2)/hcf;
  num1=num1*(lcm/den1);
  num2=num2*(lcm/den2);
  res_num=num1+num2;
  res_den=lcm;
     }
     get_sum()
     {
         return this.get_sum;
     }
}
function input()
{
 num1 = parseFloat(prompt('enter the numerator 1'));
 den1 = parseFloat(prompt('enter the demoninator 1'));
 num2 = parseFloat(prompt('enter the numerator 2'));
 den2 = parseFloat(prompt('enter the denominator 2'));
  return new fraction[num1,den1,num2,den2];  
}
function  main()
{
  let num1=0
  let den1=0
  let num2=0
  let den2=0
  [num1,den1,num2,den2]=
  let t = new fraction(num1, den1 , num2, den2);
  console.log('The properties of fraction are num 1=%f den 1 = %f num 2=%f den 2 = %f sum is res_num=%f,res_den=%f",t.num 1, t.den 1,t.num 2, t.den 2,t.res_num,t.res_den');
}