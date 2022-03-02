function conversionDegree(degree) {
    const regex = /^([-+]?[0-9]*[CF]{1})$/g; // Reference: https://regexr.com/
    const found = degree.match(regex); // Check if the degree param matches the regex

    // if null return error message
    if (found === null) {
        return "Wrong format. Please type temperature followed by the scale C (Celsius) or Fahrenheit (F). e.g.: 33C or -30C";
    }

    const validDegreeUnits = ["C", "F"]; // Valid degree units
    const degreeUnit = degree.charAt(degree.length - 1); // Unit degree
    let convertedUnit;

    // Converting degree units
    if(degreeUnit === validDegreeUnits[0]){
        convertedUnit = validDegreeUnits[1];
    } else  {convertedUnit = validDegreeUnits[0];}

    // Check if the degreeUnit is valid
    if(!validDegreeUnits.includes(degreeUnit)){
        throw new Error('Degree unit not identified!');
    }

    let temperature = degree.toUpperCase().replace(degreeUnit,''); // Get the temperature
    let conversion;

    // Defines the formula based on the degreeUnit
    switch (degreeUnit) {
        case "C":
            conversion = celsius => celsius * 9/5 + 32;
            break;

        case "F":
            conversion = fahrenheit => (fahrenheit - 32) * 5/9;
            break;

        default:
            throw new Error('Degree unit not identified!');
            break;
    }

    return conversion(temperature).toFixed(2) + convertedUnit;
}