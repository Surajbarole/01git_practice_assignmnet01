let str="madam"
let bag=""
let ans="No"
for(let i=str.length-1;i>=0;i--){  
   bag=bag+str[i]
  }
bag==str ? ans="Yes":ans;
console.log(ans)
