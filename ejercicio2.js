const evenOrOdd = (n) => {

  // reconozo que un numero par es par por el 2, voy de 2 en dos contando, entonces
  //para que se cumpla esta primicia, el residuo de n al hacerlo por 2 debe ser igual a 0, para que sea par
  // y si es par retora 0, de lo contrario retorna 1
    
  if (n%2===0)  
    return 0;
    
    else
    return 1;
    
    };
    
    module.exports = evenOrOdd;