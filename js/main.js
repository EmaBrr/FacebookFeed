"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.middle__part')

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++){

            HTML += getList(data[i]);
        }
        return sectionBody.innerHTML = ''
    }
    else {
        return console.log('Tai ne masyvas')
    }
    
}

function getList () {

    let HTML = `
    `;

    return HTML;

}

getData(feed);