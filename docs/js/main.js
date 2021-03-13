$(document).ready(function(){
    $('.reviews__slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src=\"img/slide-prev.svg\">","<img src=\"img/slide-next.svg\" >"],
        responsive: {
            0: {
                nav: false,
            },
            1000: {
                nav: true,
            }
        }
    });
    $("[data-link='scroll']").mPageScroll2id({
        offset: 90,
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
    });
    //Определяем колличество крепежей на кнопках
    function btn_items(){
        $('.btn').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 30);

            //Сначала очищаем кнопки от крепежей
            $(this).find('.btn__items').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.btn__items').append('<div class="btn__item"></div>');
                i++;
            }
    
        });
        
    }
    btn_items();
    $(window).resize(function(){
        btn_items();
    });
    //ENDОпределяем колличество крепежей на кнопках
    
    //Определяем колличество крепежей на новинках
    function new__item__fasteners() {
        $('.new__item').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 208);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.new__item__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.new__item__fasteners').append('<div class="new__item__fastener"></div>');
                i++;
            }
    
        });
    }
    new__item__fasteners();
    $(window).resize(function(){
        new__item__fasteners();
    });
    //END Определяем колличество крепежей на новинках


    //Определяем колличество крепежей на новинках
    function about__info__fasteners() {
        $('.about__info').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 256);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.about__info__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.about__info__fasteners').append('<div class="about__info__fastener"></div>');
                i++;
            }
    
        });
    }
    about__info__fasteners();
    $(window).resize(function(){
        about__info__fasteners();
    });
    //END Определяем колличество крепежей на новинках
    // Определяем колличество крепежей на ассортименте
    function assort__item__fasteners() {
        $('.assort__item').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 149);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.assort__item__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.assort__item__fasteners').append('<div class="assort__item__fastener"></div>');
                i++;
            }
    
        });
    }
    assort__item__fasteners();
    $(window).resize(function(){
        assort__item__fasteners();
    });
    //END Определяем колличество крепежей на ассортименте
    // Определяем колличество крепежей на форме
    function formblock__form__fasteners() {
        $('.formblock__form').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 146);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.formblock__form__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.formblock__form__fasteners').append('<div class="formblock__form__fastener"></div>');
                i++;
            }
    
        });
    }
    formblock__form__fasteners();
    $(window).resize(function(){
        formblock__form__fasteners();
    });
    //END Определяем колличество крепежей на форме
    // Определяем колличество крепежей на готовых решениях
    function ready__item__fasteners() {
        $('.ready__item').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 208);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.ready__item__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.ready__item__fasteners').append('<div class="ready__item__fastener"></div>');
                i++;
            }
    
        });
    }
    ready__item__fasteners();
    $(window).resize(function(){
        ready__item__fasteners();
    });
    //END Определяем колличество крепежей на готовых решениях
    // Определяем колличество крепежей на слайдах
    function reviews__slide__fasteners() {
        $('.reviews__slide').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 120);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.reviews__slide__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.reviews__slide__fasteners').append('<div class="reviews__slide__fastener"></div>');
                i++;
            }
    
        });
    }
    reviews__slide__fasteners();
    $(window).resize(function(){
        reviews__slide__fasteners();
    });
    //END Определяем колличество крепежей на слайдах
    // Определяем колличество крепежей на о компании
    function about__company__text__fasteners() {
        $('.about-company__text').each(function(i, el){
            var btnwidth = $(el).width();
            var itemscount = Math.round(btnwidth / 146);
    
            //Сначала очищаем новинки от крепежей
            $(this).find('.about-company__text__fasteners').html('');
            
            //Затем добавляем нужное колличество крепежей
            var i = 1;
            while (i <= itemscount) { 
                console.log( i );
                $(this).find('.about-company__text__fasteners').append('<div class="about-company__text__fastener"></div>');
                i++;
            }
    
        });
    }
    about__company__text__fasteners();
    $(window).resize(function(){
        about__company__text__fasteners();
    });
    //END Определяем колличество крепежей на о компании
});
