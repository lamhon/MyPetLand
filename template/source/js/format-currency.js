// Format currency VND
$(document).ready(() => {
    var num = $('.post-info__price').text();
    num = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(num);

    $('.post-info__price').text(num);
})
// End Format currency VND

// Vote star
function abstract(num){
    // Calculate integer of input value
    let integerNum = Math.floor(num);

    // Calculate decimal of input value
    let floatNum = num -  integerNum;

    // Calculate reminder of decimal value
    let phandu = floatNum.toFixed(1) * 10;

    if(phandu < 3){
        return Number.parseFloat(integerNum + '.0');
    } else if (phandu < 8){
        return Number.parseFloat(integerNum + '.5');
    }else{
        return ++integerNum;
    }
}

$(document).ready(() => {
    // Get value from HTML
    let rate = $('#vote').text();
    // Initial element (star font)
    let intFullStar = '<i class="fa-solid fa-star"></i>';
    let intHalfStar = '<i class="fa-solid fa-star-half-stroke"></i>';
    let intNoneStar = '<i class="fa-regular fa-star"></i>';

    // Calculate stars
    let stars = abstract(rate);

    // Calculate non stars
    let nonStar = 5 - Number.parseFloat(stars.toFixed(0));
    
    // Clear input field
    $('#vote').text("");

    // Append stars to HTMLElement
    for (let i = 0; i < Math.floor(stars); i++) {
        $('#vote').append(intFullStar);
    }
    if((stars - Math.floor(stars))*10 == 5){
        $('#vote').append(intHalfStar);
    }
    for(let i = 0; i < nonStar; i++) {
        $('#vote').append(intNoneStar);
    }
    
})
