$(function(){
    $("nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $("nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    let currentIndex = 0; //현재 이미지
    $(".sliderWrap").append($(".slider").first().clone(true)); //첫번째 이미지를 복사해서 마지막에 추가

    setInterval(() => {
        currentIndex++;     //혅재 이미지를 1씩 추가
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);   //이미지 애니메이션

        if(currentIndex == 3){  //마지막 이미지
            setTimeout(() => {
                $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션 정지
                currentIndex = 0;   //현재 이미지 초기화
            }, 700);
        }
    }, 3000);

})

