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
    contactForm = document.getElementById('contactForm')

if (document.getElementById('sendMail')) {
    document.getElementById('sendMail').addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        xhr.open('POST', '/send.php')
        xhr.responseType = 'JSON'
        xhr.send(new FormData(contactForm))
        
        xhr.onload = () => {
            console.log(xhr.response)
        }
    })
}