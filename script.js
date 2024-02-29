const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let array1 = [];
	let array2 = [];
	
	let sum = 0;
	for (let i=0;i<arr.length;i++){
	    sum+=arr[i];
	    if(sum<=n){
	        array2.push(arr[i]);
	    }
	    else{
	        sum=0;
	        array1.push(array2);
	        i=i-1;
	        array2=[];
	    }
	    if(i===arr.length-1){
	        array1.push(array2);
	    }
	}
	return array1;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
