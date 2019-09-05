const countVowels = (str) => {
    const vowels = 'aeiou';
    let counter = 0;

    for (let i = 0; i < str.length; i += 1 ) {
        for (let j = 0; j < vowels.length; j +=1 ) {
          if (str[i] === vowels[j]) {
            counter += 1;
          }
        }
      }
    
      return counter;
    };
    
    