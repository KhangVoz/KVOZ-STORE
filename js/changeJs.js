var numberS = document.getElementsByClassName('container')[0].clientWidth;
var ChangeSlide = document.getElementsByClassName('change-slide')[0];
var Change = 0;
var Max= numberS*2;
function Next(){
	if(Change<Max) Change+=numberS;
	else Change=0;
	ChangeSlide.style.marginLeft = '-' + Change +'px';
};
function Back(){
	if(Change==0) Change = Max;
	else Change-=numberS;
	ChangeSlide.style.marginLeft = '-' + Change +'px';
};
setInterval(function(){
	Next();
}, 3000);
