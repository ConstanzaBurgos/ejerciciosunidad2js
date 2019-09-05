const countVowels = (str) => {  // el str corresponde a una palabra a analizar bajo el enunciado
    const vowels = 'aeiou';  //delcaro variable con estas cinco condiciones a contar
    let counter = 0; // contador desde 0

    //primer for : mi variable i parte desde 0; si i es menor al a la longitud de mi str, i va ser concaternado como 1
    // de la misma forma en simultaneo con el conteo de las vowels, mi variable j, al recorrer la palabra si encuentra una vocal en la posicion, el contador sumara 1
    for (let i = 0; i < str.length; i += 1 ) {
        for (let j = 0; j < vowels.length; j +=1 ) {
          if (str[i] === vowels[j]) {  // por eso si coincide el analisis de i y j, son iguales, o sea hay vocal, el contador sumara 1
            counter += 1;
          }
        }
      }
    
      return counter;
    };
    
    