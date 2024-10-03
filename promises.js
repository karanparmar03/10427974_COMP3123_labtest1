function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved: Success message after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected: Error message after 500ms");
        }, 500);
    });
}

// for example

resolvedPromise()
    .then(result => console.log(result)) 
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
