/*
First: 1 cookie that provides a cookie per click
        setup requirements: variables, event-listener, for loop
 */

let count = 0;
const score = document.querySelector("#scoreId")
const store = document.querySelector("#storeId")
const clickCounter = document.querySelector("#cookiesCounter");
const button = document.querySelector("#bigCookie");
button.addEventListener("click", counterMouse);

function counterMouse() {
    count += 1;
    clickCounter.innerHTML = count + " Cookies";
    score.innerHTML = count;

    if (count === 10) {
        let multiplyCookie = document.createElement("button");
        multiplyCookie.setAttribute("id", "multiplierId")
        store.append(multiplyCookie);

        const multiplier = document.querySelector("#multiplierId");
        multiplier.addEventListener("click", multiply)

        function multiply() {
            clickCounter.innerHTML = (count += 2) + " Cookies";
        }


        /*const purchaser = document.querySelector("#multiplierId");
        purchaser.addEventListener("click", purchase);

        function purchase(){
            let purchased = (count-=20);
            score.innerHTML = purchased;

        }
*/

    }}