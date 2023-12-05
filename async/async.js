// // Callback
// function one(callback) {
//     setTimeout(() => {
//         console.log("Load")
//         callback();
//     }, 5000)
// }

// function two(callback) {
//     setTimeout(() => {
//         console.log("Sort")
//         callback();
//     }, 3000)
// }

// function three(callback) {
//     setTimeout(() => {
//         console.log("Print")
//         callback();
//     }, 2000)
// }

// one(() => {
//     two(() => {
//         three(() => {
//             console.log("Done.")
//         })
//     })
// })

function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Load')
            resolve(1);
        }, 5000)
    })
}
function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sort")
            resolve(1);
        }, 3000)
    })
}
function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Print")
            resolve(1);
        }, 2000)
    })
}

// Then
// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done.")
//         })
//     })
// }) 

// Async Await
async function run() {
    await one();
    await two();
    await three();
}

run();

