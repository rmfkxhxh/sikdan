Handlebars.registerHelper("switch", function(value,options){		
    this.switch_value = value;
    var html = options.fn(this);
    delete this.switch_value;
    return html;
});
Handlebars.registerHelper("case", function(value,options){
    if(value == this.switch_value){
    	return options.fn(this);
    }
});

Handlebars.registerHelper("MORE", function(value,options){
    if(this.total > 20){
    	return options.fn(this);
    }else{
    	return options.inverse(this);
    }
});

var pageSize = 12;

var pageClickFlag = false;
var pageController;
var hashFlag = false;

var total = null;
var dataCnt = 0;
//var parameters = {sPage : 1, ePage : pageSize, frontChk : 'Y'};	
var parameters;

$(function(){
	$(window.onhashchange = function () {
		if(hashFlag){
			hashFlag = false;
		}else{
			var hashPage = window.location.hash;
			
			if(hashPage != null && hashPage != ""){
				var goHashPage = hashPage.replace("#page", "") * 1;
				pageController.fnPgUtilRead(goHashPage);
			}
		}
	});
	
	pageController = new pageController();
	 
	fnSetTemplate('dvDisplayListMainTemplate', $("#dvDisplayListMainTemplate")) ;
	fnSetTemplate('dvDisplayListTemplate', $("#dvDisplayListTemplate")) ;
	
	// 현대 장터 회원일때
	if(IS_SESSION == "Y" && SS_IS_HM_BUYER == "true"){
		$("#hmTab").show();
	}else{
		$("#hmTab").hide();
	}
	
	var companyType = (fnGetUrlParameter('companyType') == null)? "G" : fnGetUrlParameter('companyType');
	
	if(companyType == "G"){
		parameters = {sPage : 1, ePage : pageSize, frontChk : 'Y', COMPANY_TYPE : 'G'};
		$("#hmTab>li").toggleClass("tab-menu__list--on");
	}else if(companyType == "H"){
		parameters = {sPage : 1, ePage : pageSize, frontChk : 'Y', COMPANY_TYPE : 'H'};
		//$("#hmTab>li").toggleClass("tab-menu__list--on");	
	}
		
	getDisplayListData(parameters);
	
	//탭 클릭시
	$("#hmTab>li").on("click",function (){
		//alert($(this).children("a").attr("href"));
		location.href = $(this).children("a").attr("href");
	});
});

function getDisplayListData(){	 
	var hashPage = window.location.hash;
	
	if(hashPage == null || hashPage == ""){
		window.location.hash = '#page' + 1;
	}	
		
	pageController.initPage({
        url : '/display/getPromotions'
        ,params : parameters
        ,success : function (data){
        	console.log("data=====", data);
        	total = data.total;
        	
    		$('#dvDisplayListArea').empty();
    		fnDataBind( 'dvDisplayListMainTemplate' , data, $('#dvDisplayListArea'));        
    		
			if(total == 0){
				$('#pageNation').css("display","none");
			}else{
				$('#pageNation').css("display","");
	        	$.each(data.rows, function(){
	        		
	        		if(data.ogTitle != null) this.companyType = 'H';
	        		else this.companyType = 'G';
	        		
	                fnDataBind( 'dvDisplayListTemplate', this, $('#dvDisplayListMainArea'));
	            });
			}	    		
			$('#forDisplayId').attr("content",data.ogTitle);
			$('#forDisplayIdTitle').html(data.ogTitle);
			fflow.init();
			initEvent();
        },
        complete: function() {
        	$('.progress').remove();
        	
        }
    });
}

function fnPgUtilRead(data){
	hashFlag = true;
	window.location.hash = '#page' + data;	
	pageController.fnPgUtilRead(data);
}

function initEvent(){  

}
