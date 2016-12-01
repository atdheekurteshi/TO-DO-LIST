$('ul').on('click','li',function(){
	$(this).toggleClass('completed')
	
});

$('ul').on('click','span',function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	});
	event.stopPropagation();
});
$('input[type="text"]').keypress(function(event){
	console.log(true);
	if(event.which===13)
	{
		var textEntered=$(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+ textEntered +'</li>');
	}

})
$('ul li:nth-child(2n)').css('background','#fcf7f7')	
