/*
First: 1 cookie that provides a cookie per click
        setup requirements: variables, event-listener, for loop
 */

    let count = 0;
    let click = 1;
    let autoClick = 1;

    let clickMultiply = 2;
    let clickMultiCost = 50;

    let autoMultiply = 2;
    let autoCost = 100;

    const perStair = document.querySelector("#cookiesClick");
    const score = document.querySelector("#scoreDisplay");
    const autoClicked = document.querySelector("#autoBtn");
    const multiplierClicked = document.querySelector("#multiplyBtn");
    const store = document.querySelector("#storeId");
    const counterClicked = document.querySelector("#cookiesCounter");
    const button = document.querySelector("#bigCookie");

    button.addEventListener("click", counterMouse);

    function counterMouse() {
        count = count + click;
        counterClicked.innerHTML = count + " Cookies";
    }
// doubling the amount of cookies after the multiplier is clicked
    multiplierClicked.addEventListener("click", function () {
        if ((count <= clickMultiCost) > 0) { // the alert has to come first in the if statement
            alert("You ain't got the dough yet!")
        } else {
            count = count - clickMultiCost; //cost of purchase is substracted from the count
            click = click * clickMultiply;
            perStair.innerHTML = click + " per stair";
            counterClicked.innerHTML = count + " Cookies";
        }

    })

    autoClicked.addEventListener("click", function autoClicker() {
        if ((count <= autoCost) > 0) { // the alert has to come first in the if statement
            alert("You ain't got the dough yet!");
            return;
        }

        else
            count = count - autoCost; //cost of purchase is substracted from the count
            perStair.innerHTML = click + " per stair";
        {setInterval (function() {
            counterClicked.innerHTML = count++ + " Cookies";
        },1000)
        }
    })




/*const purchaser = document.querySelector("#multiplierId");
purchaser.addEventListener("click", purchase);

function purchase(){
    let purchased = (count-=20);
    score.innerHTML = purchased;

}
*/
