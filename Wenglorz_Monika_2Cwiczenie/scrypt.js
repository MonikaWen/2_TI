 $('ul#menu li a').click(function() {
      var podstrona = $(this).attr('href');
      $('#content').html('Ładuję...');
      $('#content').load('pages/'+podstrona);
      return false;
   });
   
	setInterval(function(){
		$('.naglowek').css("color","#f9ffc9")},1000);
	setInterval(function(){
		$('.naglowek).css("color","#AB6930")},2000);
	

