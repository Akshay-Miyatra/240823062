let a=121,sum=0,b,z=a
while(a>0)
{
  b=a%10
  sum=sum*10+b
  a=parseInt(a/10)
}
console.log(sum)
if(z==sum){
  console.log("palindrome number",sum)
}
else{
  console.log("not a palindrome number",sum)
}