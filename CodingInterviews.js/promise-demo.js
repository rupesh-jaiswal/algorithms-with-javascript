function f1 (n, callback) {
    setTimeout(() => {
        callback(n);
    }, 1000);
}

function f2 (n, callback) {
    setTimeout(() => {
        callback(n*2);
    }, 1000);
}
function f3 (n, callback) {
    setTimeout(() => {
        callback(n*3);
    }, 1000);
}
function f4 (n, callback) {
    setTimeout(() => {
        callback(n*4);
    }, 1000);
}

function callback (n) {
    console.log(n);
    return f1(n, callback);
}

// f1(5, (n) => {
//     console.log(n);
//     f2(n, (n) => {
//         console.log(n)
//         f3(n, (n) => {
//             console.log(n)
//             f4(n, (n) => {
//                 console.log(n)
//             })
//         })
//     })
// });

// promise

const promise = (n, callback = () => {}) => {
    return new Promise((resolve, reject) => {
        callback(n, (n) => {
            console.log(n);
            resolve(n);
        });
    });
};


// promise(5, f1)
//     .then((n) => promise(n, f2))
//     .then((n) => promise(n, f3))
//     .then((n) => promise(n, f4));

// async await
(async () => {
    const val1 = await promise(5, f1);
    const val2 = await promise(val1, f2);
    const val3 = await promise(val2, f3);
    const val4 = await f10(await promise(val3, f4));
})();

const f10 = async (n) => promise(n*10, f1);




