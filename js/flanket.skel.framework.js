/**
 * 플랭킷IT협동조합
 * 2020.07.24 자바스크립트 CSS 뼈대 프레임워크
 */
var flanket_css = flanket_css || new Function();

(function() {
    // CSS에 대한 정의
    var custom_css = document.createElement('style');
    custom_css.id = 'flanket_css';

    // IE 체크
    var is_msie = !!(navigator.userAgent.toLowerCase().indexOf('msie') != -1 || navigator.userAgent.toLowerCase().indexOf('trident') != -1);

    // 변수 정의
    this.is_running = false;
    this.is_margin = false;
    this.is_padding = false;
    this.is_width = false;
    this.is_position = false;
    this.is_fonts = false;

    // CSS 삽입
    flanket_css.prototype.inject = function(){
        if(this.is_running == true) return false;

        // 만약 IE를 사용한다면, blob으로 뿌리지 않고 페이지에 뿌려버림.
        if(is_msie){
            document.getElementsByTagName('head')[0].appendChild(custom_css);
        }else {
            // 만약 IE외의 브라우저를 사용한다면, blob에 집어넣어버림.
            var blob_element = new Blob([custom_css.innerText], {type: 'text/css'});

            blob_css = document.createElement('link');
            blob_css.rel = 'stylesheet';
            blob_css.href = window.URL.createObjectURL(blob_element);
            document.getElementsByTagName('head')[0].appendChild(blob_css);
        }

        this.is_running = true;
    };

    // 마진 css에 대한 정의
    flanket_css.prototype.margin = function(){
        if(this.is_margin == true) return false;
        var margin_txt = '';

        for(i=0; i<=100; i++){
            margin_txt += (".m-t-"+i+"{margin-top:"+i+"px}");
            margin_txt += (".m-l-"+i+"{margin-left:"+i+"px}");
            margin_txt += (".m-r-"+i+"{margin-right:"+i+"px}");
            margin_txt += (".m-b-"+i+"{margin-bottom:"+i+"px}");
        }

        if(is_msie){
            custom_css.innerText += margin_txt;
        }else {
            custom_css.append(margin_txt);
        }

        this.is_margin = true;
    };

    // 패딩 css에 대한 정의
    flanket_css.prototype.padding = function(){
        if(this.is_padding == true) return false;
        var padding_txt = '';

        for(i=0; i<=150; i++){
            padding_txt += (".p-t-"+i+"{padding-top:"+i+"px}");
            padding_txt += (".p-l-"+i+"{padding-left:"+i+"px}");
            padding_txt += (".p-r-"+i+"{padding-right:"+i+"px}");
            padding_txt += (".p-b-"+i+"{padding-bottom:"+i+"px}");
        }

        if(is_msie){
            custom_css.innerText += padding_txt;
        }else {
            custom_css.append(padding_txt);
        }

        this.is_padding = true;
    };

    // 포지션에 대한 정의
    flanket_css.prototype.width = function(){
        if(this.is_width == true) return false;
        var width_txt = '';

        for(i=0; i<=1200; i++){
            width_txt += (".w-"+i+"{width:"+i+"px}");
            width_txt += (".h-"+i+"{height:"+i+"px}");
        }

        for(i=0; i<=100; i++){
            width_txt += (".w-p-"+i+"{width:"+i+"%}");
            width_txt += (".h-p-"+i+"{height:"+i+"%}");
        }

        if(is_msie){
            custom_css.innerText += width_txt;
        }else {
            custom_css.append(width_txt);
        }
        this.is_width = true;
    };

    // 포지션
    flanket_css.prototype.position = function(){
        if(this.is_position == true) return false;
        var position_txt = '';

        for(i=0; i<=100; i++){
            position_txt += (".po-l-"+i+"{left:"+i+"px;}");
            position_txt += (".po-r-"+i+"{right:"+i+"px;}");
            position_txt += (".po-t-"+i+"{top:"+i+"px;}");
            position_txt += (".po-b-"+i+"{bottom:"+i+"px;}");
        }

        if(is_msie){
            custom_css.innerText += position_txt;
        }else {
            custom_css.append(position_txt);
        }
        this.is_position = true;
    };

    // 폰트 사이즈
    flanket_css.prototype.fonts = function(){
        if(this.is_fonts == true) return false;
        var fonts_txt = '';

        for(i=0; i<=50; i++){
            fonts_txt += (".f-size-"+i+"{font-size:"+i+"px;}");
        }
        for(i=0; i<=8; i++){
            fonts_txt += (".f-weight-"+i+"{font-weight:"+i+"00;}");
        }

        if(is_msie){
            custom_css.innerText += fonts_txt;
        }else {
            custom_css.append(fonts_txt);
        }
        this.is_fonts = true;
    };

})();