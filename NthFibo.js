function fibo(n) {
	if(n==1) {
		return  0; 
	}
	if(n==2) {
		return 1;
	}
	return fibo(n-1)+fibo(n-2);
}
function getNthFib(n) {
  // Write your code here.
	return fibo(n);
}
console.log(getNthFib(8));