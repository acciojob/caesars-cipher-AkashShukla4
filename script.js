// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	var words = encodedStr.split(" ");
	for(var i = 0; i < words.length(); i++){
		var eword = words(i);
		var dword = " ";
		for(var j = 0; j < eword.length() ; j++){
			dword += lookup(eword(j));
		}
		decodedArr.push(dword);
	}
  return decodedArr.join();//return decodedArr
}

// You can test your code by running the above function and
// printing it to console by pressing the run button at the top.
// To run it with input 36, uncomment the following line

 console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
