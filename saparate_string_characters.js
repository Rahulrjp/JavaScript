function saparate(str){
    let lowerCaseString = '';
    let numString = '';
    let upperCaseString = '';
    for(let i = 0 ; i < str.length ; i++){
        if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
            lowerCaseString += str.charAt(i)
        }
        else if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z'){
            upperCaseString += str.charAt(i);
        }
        else{
            numString += str.charAt(i);
        }
    }

    return [lowerCaseString , upperCaseString, numString];
    
}

console.log(saparate('1a2b3c'))