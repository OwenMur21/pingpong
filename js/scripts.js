function condition(){
for(count=1;count<=countTonumber;count++){
  if(count%3==0)&&(count%5==0){
  outPut+='pingpong';
}else if (count%5==0) {
  outPut+='pong';
}else if(count%3==0){
  outPut+='ping';
}else{
  outPut+=count.toString();
}
}
}
