const max = (A, B, C) => {

  // para retornar el numero mayor entre A,B,c primero  declaré una condición situando a A como mayor que los otros dos
  // me retornaría A en ese caso.
    if (A>B && A>C)
    return A;
    
    // el mismo ejercicio anterior lo hice con B si fuera mayor que A y C, para retornar B

    if (B>A && B>C)
    
    return B;
    
    // de lo contrario me retorna a C por descarte, aunque sea el menor
    
    else {
      return C;
    } 
    
    
    
    };
     module.exports = max;