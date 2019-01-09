console.log('Starting app');

setTimeout(() => {
  console.log("First timeout");
},2000);

setTimeout(() => {
  console.log('Second Timeout');
},0);
console.log('Finishing app');
