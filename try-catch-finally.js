//Try Catch Finally block
const denominator = 0, numerator = 100;

try {
    console.log('Try block:')
    console.log(numerator/denominator);
    console.log(a)
}
catch (error) {
    console.log('An error Occurred:')
    console.log('caught error:'+ error);
}
finally {
    console.log('Finally block will execute everytime no matter what...')
}
