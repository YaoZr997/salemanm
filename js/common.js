/*javascript*/

//back返回上一页
$(function(){
	$('.goBack').click(function(){
		// window.history.back();
		window.history.go(-1);
	})
})

//selector
$(function(){
	$('.select').change(function(){
		var v = $(this).children('option:selected').text()
		$(this).siblings('input').val(v);
	})
})
