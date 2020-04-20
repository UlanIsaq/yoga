import {
    newExpression
} from "@babel/types";

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    function requestCurrency() {
        return new Promise(function (resolve, reject) {
            request.addEventListener('readystatechange', function () {
                if (request.readyState === 4 && request.status == 200) {
                    let data = JSON.parse(request.response);
                        resolve(data);
                   // inputUsd.value = inputRub.value / data.usd;
                } else {
                    //inputUsd.value = "Что-то пошло не так!";
                    reject();
                }
            });
        });
    }
    requestCurrency().then(function(data){ inputUsd.value = inputRub.value / data.usd; }).catch(() =>{inputUsd.value = "Что-то пошло не так!";})

});