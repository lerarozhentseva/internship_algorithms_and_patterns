const book = {};
book['apple']=0.67;
book['milk']=1.49;
book['avocado']=1.49;
console.log(book);

const voted = {};
function check (name) {
  if (voted[name]) {
    console.log('kick them out!');
  } else{
    voted[name]=true;
    console.log('let them vote!')
  }
}
check('mike');
check('mike');

