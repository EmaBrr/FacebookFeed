"use strict";

function getData(data) {

    let HTML = '';
    let cardBody = document.querySelector('.middle__part');

    if (Array.isArray(data)) {

        for (let i = 0; i < data.length; i++ ){

            HTML+= getList (data[i]);
        }

        return cardBody.innerHTML = HTML;
    } else {
        return console.log('Tai ne masyvas!')
    }
}

function getList(list) {

    let HTML = `<div class="card">
                    <div class="card__header">
                        <div class="img"><img src="./img/user.jpg" alt=""></div>
                        <div class="name__surname">
                            <p>${list.autorius.vardas} ${list.autorius.pavarde}</p>
                            <p class="date">${list.laikas}</p>
                        </div>
                        <div class="more"><p>...</p></div>
                    </div>
                    <div class="card__content">
                        <div class="content">${list.pranesimas.tekstas}</div>
                    </div>
                    <div class="card__footer">
                        <div class="card__footer1">
                            <div class="like__button"><button type="submit"><i class="far fa-thumbs-up"></i>Like</button></div>
                            <div class="like__button"><button type="submit"><i class="far fa-comments"></i>Comment</button></div>
                            <div class="like__button"><button type="submit"><i class="far fa-share-square"></i>Share</button></div>
                        </div>
                        <div class="card__footer2">
                            <div class="img"><img src="./img/user.jpg" alt=""></div>
                            <textarea name="Comment" id="" cols="30" rows="5" placeholder="Write your comment"></textarea>
                            <div class="emoji__row">
                                <i class="far fa-smile"></i>
                                <i class="fas fa-camera"></i>
                                <i class="far fa-image"></i>
                                <i class="far fa-share-square"></i>
                            </div>
                        </div>
                    </div>
                </div>`;

    return HTML;
}

getData(feed);