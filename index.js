const introductionOutput = introduction("Aki");
const introductionOutput2 = introduction("Samip")

console.log(introductionOutput);
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introductionOutput2)
function introduction(name) {
    return `Hi, my name is ${name}.`

}
// Start off here.
const introLanguage = introductionWithLanguage("Aki" , "Ember.js")
const introLanguage2 = introductionWithLanguage("Samip" , "React")

console.log(introLanguage);
function introductionWithLanguage (name, language) {
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introLanguage2)
function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

const introLanguageO = introductionWithLanguageOptional ("Gracie")

console.log(introLanguageO)
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

const introLanguage1 = introductionWithLanguageOptional ("Gracie" , "Python")

console.log(introLanguage1)
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}