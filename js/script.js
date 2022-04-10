$('.burger, .nav_link').click(function() {
    $('.burger').toggleClass('active');
    $('.nav_wr').toggleClass('active');
});
  
$('.social_number').click(function() {
    $('.social_phone').toggleClass('active');
});
  
$('.social_number').click(function() {
    $('.social_number').toggleClass('active');
});
  
// $('.gradient-button-send, .button-send-more').click(function() {
//     $('.button-send, .gradient-button-send, .button-send-more').toggleClass('active');
// });
  
$('.click_btn').click(function() {
    $('.visibility, .button_style_vis, .none_vis').toggleClass('active');
});
  
$(".nav_link, .arrow_link, .gradient-button, .block_list_vert").mPageScroll2id({
    scrollSpeed: 500,
    offset: 70
});

let xhr = new XMLHttpRequest(),
    contactForm = document.getElementById('contactForm'),
    sendMail = document.getElementById('sendMail'),
    sendMailAgain = document.getElementById('sendMailAgain')

if (sendMail) {
    sendMail.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        xhr.open('POST', '/send.php')
        xhr.responseType = 'JSON'
        xhr.send(new FormData(contactForm))
        
        xhr.onload = () => {
            let res = JSON.parse(xhr.response)

            if (res.result != undefined && res.result == true) {
                sendMail.classList.remove('gradient-button-send')
                sendMail.classList.add('button-send', 'active')

                let currentText = sendMail.innerText

                sendMail.innerText = sendMail.dataset.toggleText
                sendMail.dataset.toggleText = currentText
                sendMailAgain.classList.add('active')
            }
            else {
                alert('Some form error!')
            }
        }
    })
}
if (sendMailAgain) {
    sendMailAgain.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        sendMail.classList.remove('button-send', 'active')
        sendMail.classList.add('gradient-button-send')

        let currentText = sendMail.innerText

        sendMail.innerText = sendMail.dataset.toggleText
        sendMail.dataset.toggleText = currentText
        sendMailAgain.classList.remove('active')
    })
}