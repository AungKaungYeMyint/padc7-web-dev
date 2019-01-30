
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {      
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */
      const array = oldName.split(" ");
      const albert = array[0].slice(0,1).concat(array[0].slice(1).toLowerCase());
      let einstein = array[1].slice(0,1).toUpperCase();
      einstein = " ".concat(einstein.concat(array[1].slice(1).toLowerCase()));
      // einstein = " ".concat(einstein);
      oldName = albert.concat(einstein);
      return oldName;
    }
    console.log(nameFormatter(name));