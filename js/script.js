window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        infoContent = document.querySelector('.info'),
        content = document.getElementsByClassName('info-tabcontent fade');

    function hideTabContent(a) {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');

        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    }
    //showTabContent();
    infoContent.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }

            }
        }



    });


    // Timer
    let deadLine = '2020-06-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),

            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))),
            days = Math.floor((t / (1000 * 60 * 60)) / 24);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };


    }
    let daysElement = document.getElementById('timer'),
        span = document.createElement("SPAN");

    //console.log(document.getElementsByClassName('hours'));
    //daysElement.insertBefore(span, daysElement.span);
    daysElement.appendChild(span);
    span.innerHTML = ":";
    span = document.createElement("SPAN");
    span.setAttribute('class', 'days');
    daysElement.appendChild(span);



    console.log(daysElement);

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),

            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.hours < 10 && t.hours >= 0) {
                hours.textContent = ('0') + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if (t.minutes < 10 && t.minutes >= 0) {
                minutes.textContent = ('0') + t.minutes;
            } else {
                minutes.textContent = t.minutes;

            }
            if (t.seconds < 10 && t.seconds >= 0) {
                seconds.textContent = ('0') + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }

            if (t.days < 10 && t.days >= 0) {
                days.textContent = ('0') + t.days;
            } else {
                days.textContent = t.days;
            }


            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = ('00');
                minutes.textContent = '00';
                seconds.textContent = ('00');
                days.textContent = ('00');

            }
        }
    }

    setClock('timer', deadLine);

    // Modal
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.getElementsByClassName.display = 'block';
        this.classList.add('more-splash');
//document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function(){
overlay.style.display = 'none';
more.classList.remove('more-splash');
document.body.style.overflow = '';
    });

});