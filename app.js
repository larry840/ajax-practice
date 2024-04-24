const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// 1. return Promise object
// 2. pending的delay秒 => fulfilled
// 3. 若delay < 0 => rejected
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject("delay不得小於0");
        } else {
            setTimeout(() => {
                resolve(person + "起床！");
            }, delay);
        }
    });
}

/*
// promise object的寫法
button.addEventListener("click", e => {
    let promiseObject = alarm(name.value, delay.value);
    promiseObject
        .then(message => {
            output.innerHTML = message;
        })
        .catch(e => {
            output.innerHTML = e;
        });
});
*/

// async的寫法
button.addEventListener("click", async () => {
    try {
        let result = await alarm(name.value, delay.value);
        output.innerHTML = result;
    } catch (e) {
        output.innerHTML = e;
    }
});
