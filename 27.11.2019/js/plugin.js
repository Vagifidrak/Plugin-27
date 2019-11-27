$(function($){
    $.fn.searchDrop=function(){
        let div=$("<div></div>")
        div.addClass("wrapDiv")
        for(var searchItem of arguments){
            div.html(div.html()+"<p>"+searchItem+"</p>")

        }
        let wrapDiv=$("<div></div>")
        wrapDiv.addClass("bottomWrap")
        this.wrap(wrapDiv)
        this.after(div)

        let marginLeft=this.css('marginLeft')
        marginLeft=ParsePx(marginLeft)

        let marginTop=this.css('marginTop')
        marginTop=ParsePx(marginTop)
        div.css({
            'left':marginLeft+"px",
            'top' :marginTop+this.outerHeight()+"px"
        })
        this.on('focus', function(){
            div.fadeIn()

        })
    }
}(jQuery))
function ParsePx(mesafe){
    return Number(mesafe.slice(0, mesafe.length -2))
}