const prompt=require("prompt-sync")();
class fraction{
  constructor(num,den){
    this.num=num;
    this.den=den;
  };
}
function find_HCF(a,b){
  let HCF=1;
  for(let i=1;i<=a.den && i<=b.den ; i++){
    if( a.den%i==0 && b.den%i==0){
      HCF=i;
    } 
  }
  return HCF;
}
function input_fraction(){
    let num=parseFloat(prompt("enter numerator "));
    let den=parseFloat(prompt("enter denominator "));
    return new fraction(num,den);
  }
function  add_fraction(fract1,fract2,HCF){
    HCF=find_HCF(fract1,fract2);
    let result=new fraction;
    result.num=(fract1.num*fract2.den + fract2.num*fract1.den)/HCF;
    result.den=(fract1.den*fract2.den)/HCF;
    return result;
  }
function main(){
  let n=parseInt(prompt("enter number of fractions"));
  const a=[];
  for(let i=0;i<n;i++){
    a[i]=input_fraction();
  }
  let result=a[0];
  for(let i=1;i<n;i++){ 
  result=add_fraction(result,a[i]);
  }
    process.stdout.write(`${a[0].num}/${a[0].den} `);
  for(i=1;i<n;i++){
    process.stdout.write(` + ${a[i].num}/${a[i].den}`);
  }
  process.stdout.write(` = ${result.num} / ${result.den}`);
}
main();