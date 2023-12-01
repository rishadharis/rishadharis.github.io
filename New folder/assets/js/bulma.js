// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
$('.clicked').click(function(){
    attribute = $(this).data('detail')
    console.log(attribute)
    if(attribute=="indosatweb") {
        $("#indosatwebdashboard").addClass('is-active')
    }
})
$('.close').click(function(){
    $('.modal').removeClass('is-active')
})