"use strict";

function getData(data) {
  let HTML = "";
  let cardBody = document.querySelector(".middle__part");

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      HTML += getList(data[i]);
    }

    return (cardBody.innerHTML = HTML);
  } else {
    return console.log("Tai ne masyvas!");
  }
}

function getList(list) {
  let HTML = `<div class="card">
                    <div class="card__header">
                        <div class="img"><img src="./img/${
                          list.autorius.avataras ?? "user_default.png"
                        }" alt=""></div>
                        <div class="name__surname">
                            <p>${list.autorius.vardas} ${
    list.autorius.pavarde
  }</p>
                            <p class="date">${timeDifference(list.laikas)}</p>
                        </div>
                        <div class="more"><p>...</p></div>
                    </div>
                    <div class="card__content">
                        <div class="content">${showMore(list.pranesimas.tekstas)}</div>
                         ${getGalery(list.pranesimas.paveiksliukai)}
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

function timeDifference(previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var current = new Date().getTime() / 1000;

  // return current;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000).toString() + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute).toString() + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour).toString() + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay).toString() + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth).toString() + " months ago";
  } else {
    return Math.round(elapsed / msPerYear).toString() + " years ago";
  }
}

function getGalery(arrayGalery) {
  if (arrayGalery === 0) {
    return "";
  } else {
      let output = ''
    //   for (let index = 0; index < arrayGalery.length; index++) {
    //       output +=  `<div class="galery"><img src="./img/${arrayGalery[index]}" alt=""></div>`
    //   }
    //   return output;

    arrayGalery.forEach(element => {
        output += `<div class="galery"><img src="./img/${element}" alt=""></div>`
    });
    return output;
  }
};

function showMore(text){
    console.log(text);
}

getData(feed);
