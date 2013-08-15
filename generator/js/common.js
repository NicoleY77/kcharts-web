KISSY.use("overlay",function(S,Overlay){
	var $ = S.all,E = S.Event;
	E.delegate(document,"click",".attr-name",function(e){
		var	$tgt =$(e.currentTarget),$attrDetail = $tgt.next(".attr-detail");
		$tgt.all(".triangle").toggleClass("up")
		//$attrDetail.slideDown(0.2).siblings(".attr-detail").slideUp(0.1);
		if(!$attrDetail) return;
		if($attrDetail.hasClass("isdown")){
			$attrDetail.slideUp(0.2).removeClass("isdown");
		}else{
			$attrDetail.slideDown(0.3).addClass("isdown");
		}
		//$tgt.addClass("attr-name-highlight").siblings(".attr-name").removeClass("attr-name-highlight");
	});
	$("#J_MoreConfig").on("click",function(e){
		e.preventDefault();
		if(!$(e.target).hasClass("isshow")){
			var $J_Scroll = $(".scroll-wrapper");
			var h = $J_Scroll.outerHeight();
			$("#J_MoreCfgPanel").show();
			S.one(".scroll-wrapper").animate({scrollTop:h+30},1,'easeOut')
			$(e.target).addClass("isshow").html("收起更多配置");
		}else{
			$("#J_MoreCfgPanel").hide();
			$(e.target).removeClass("isshow").html("展开更多配置");
		}
		
	})



	$("#J_BtnSetData").on("click",function(e){
		e.preventDefault();
		pop();
	})

	function pop(){
		var o = new Overlay.Dialog({
			width:750,
			height:400,
			bodyContent:$("#J_series")[0],
			headerContent:"<div class='kc-title'>填充数据</div>"
		});
		o.center();
		o.show();

	}
});