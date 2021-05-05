var ls = ls || {};
ls.plugin = ls.plugin || {};
 
/**
 * Динамическая подгрузка блоков
 */
ls.plugin.simpletpl = (function ($) {
 
    this.options = {
 
    };
 
    this.iPageCurr=1;
    this.iCountPage=3;
 
    this.init = function(iCountPage){
        this.iCountPage=iCountPage;
    };
 
    this.page = function(iPage) {
        var margin=744*(iPage-1);
        //$('#slider-hidden').css({'margin-left':'-'+margin+'px'});
 
        $('#slider-hidden').animate({
            'margin-left':'-'+margin+'px'
        });
 
        $('#simple-topictop-nav-page-'+this.iPageCurr).removeClass('active');
        $('#simple-topictop-nav-page-'+iPage).addClass('active');
        this.iPageCurr=iPage;
        return false;
    }
 
    this.next = function() {
        var iPageNext=this.iPageCurr+1;
        if (iPageNext>this.iCountPage) {
            iPageNext=this.iCountPage;
        }
        this.page(iPageNext);
        return false;
    }
 
    this.prev = function() {
        var iPageNext=this.iPageCurr-1;
        if (iPageNext<1) {
            iPageNext=1;
        }
        this.page(iPageNext);
        return false;
    }   
    var that = this;
    function setTime()
    {
        that.next();
        setTimeout(setTime, 2000);
    }
    setTimeout(setTime, 2000); // Установка таймера вызова переключения слайда. Интервал 2 секунды 
    return this;
}).call(ls.plugin.simpletpl || {},jQuery);