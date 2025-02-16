let myPromise = new Promise((resolve, reject) => {
    let mock = false;  // Change this to true/false to test
    if (mock) {
        resolve("All the best...!");
    } else {
        reject("You will be having the mock tomorrow");
    }
});

console.log(myPromise);

//! Consuming the promise
myPromise
    .then((data) => console.log("Resolved:", data))  // If resolved
    .catch((err) => console.log("Rejected:", err))  // If rejected
    .finally(() => console.log("Thank you...!"));   // Always runs

//! Fetching data using async/await
async function getData() {
    try {
        let result = await fetch('https://fakestoreapi.com/products');
        console.log("Response Object:", result);
        let data = await result.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

getData();


//!await :makes a function to wait for promise settlement

async function getData() {
    //fetch the data from the server
    let result = await fetch('https://fakestoreapi.com/products')
    console.log(result)
    let data = await result.json()
    console.log(data)  //array
    for(let obj of data) {
        //console.log(obj.title)

        let h2 = document.createElement('h2');
        h2.innerHTML = obj.title

        let pic = document.createElement('img')
        pic.src = obj.image

        document.body.append(h2,pic)
    }
}