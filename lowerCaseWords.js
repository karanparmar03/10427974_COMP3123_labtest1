function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        }

        const lowerCasedWords = arr
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        resolve(lowerCasedWords);
    });
}
//for examples

lowerCaseWords([1, 'HELLO', 'World', true, 'JavaScript'])
    .then(result => console.log(result)) 
    .catch(error => console.log(error));
