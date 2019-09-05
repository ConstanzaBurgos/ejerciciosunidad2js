const canDriveAndVote = (edad) => {

// acá solo determino que las personas que tiene 16 o más años puedes conducir, como si tienes 18 o más puedes votar
// al cumplir con ambas primicias, me retorna true, de lo contrario false

    if(edad>=16 && edad >=18)
    return true;
    
    else
    return false;
    
    };
    
    module.exports = canDriveAndVote;