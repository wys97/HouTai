/*initMenu();
function initMenu(){
	 $.ajax({  
	     url: domainName + "/api-b/menus/me",  
	     type:"get",  
	     async:false,
	     success:function(data){
	    	 if(!$.isArray(data)){
	    		 location.href = localStorage.getItem("loginUrl");
	    		 return;
	    	 }
	    	 var menu = $("#menu");
	    	 $.each(data, function(i,item){
	             var a = $("<a href='javascript:;'></a>");
	             
	             var css = item.css;
	             if(css!=null && css!=""){
	            	 a.append("<i aria-hidden='true' class='fa " + css +"'></i>");
	             }
	             a.append("<cite>"+item.name+"</cite>");
	             a.attr("lay-id", item.id);
	             
	             var url = item.url;
	             if(url != null && url != ''){
	            	 a.attr("data-url", url);
	             }
	             
	             var li = $("<li class='layui-nav-item'></li>");
	             if (i == 0) {
	            	 li.addClass("layui-nav-itemed");
	             }
	             li.append(a);
	             
	             //二级菜单
	             var child2 = item.child;
	             if(child2 != null && child2.length > 0){
	            	 $.each(child2, function(j,item2){
	            		 var ca = $("<a href='javascript:;'></a>");
                         ca.attr("data-url", item2.url);
                         ca.attr("lay-id", item2.id);
                         
                         var css2 = item2.css;
                         if(css2!=null && css2!=""){
                        	 ca.append("<i aria-hidden='true' class='fa " + css2 +"'></i>");
                         }
                         
                         ca.append("<cite>"+item2.name+"</cite>");
                         
                         var dd = $("<dd></dd>");
                         dd.append(ca);
                         
                         var dl = $("<dl class='layui-nav-child'></dl>");
                         dl.append(dd);
                         
                         li.append(dl);
	            	 });
	            }
	            menu.append(li);
	        });
	     }
	 });
}

// 登陆用户头像昵称
showLoginInfo();
function showLoginInfo(){
	$.ajax({
		type : 'get',
		url : domainName + '/api-u/users/current',
		async : false,
		success : function(data) {
			$(".admin-header-user span").text(data.nickname);
			
			var sex = data.sex;
			var url = data.headImgUrl;
			if(url == null || url == ""){
				if(sex == 1){
					url = "img/avatars/sunny.png";
				} else {
					url = "img/avatars/1.png";
				}
			}
			var img = $(".admin-header-user img");
			img.attr("src", url);
		}
	});
}

function logout(){
	$.ajax({
		type : 'get',
		url : domainName + '/sys/logout',
		success : function(data) {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
			location.href = localStorage.getItem("loginUrl");
		}
	});
}*/

var active;

layui.use(['layer', 'element'], function() {
	var $ = layui.jquery,
	layer = layui.layer;
	var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    element.on('nav(demo)', function(elem){
      //layer.msg(elem.text());
    });
	
	  //触发事件  
	   active = {  
	       tabAdd: function(obj){
	    	 var lay_id = $(this).attr("lay-id");
	    	 var title = $(this).html() + '<i class="layui-icon" data-id="' + lay_id + '"></i>';
	         //新增一个Tab项  
	         element.tabAdd('admin-tab', {  
	           title: title,
	           content: '<iframe id="'+lay_id+'" src="' + $(this).attr('data-url') + '"></iframe>',
	           id: lay_id
	         });  
	         element.tabChange("admin-tab", lay_id);    
	       }, 
	       tabDelete: function(lay_id){
    	      element.tabDelete("admin-tab", lay_id);
    	   },
	       tabChange: function(lay_id){
	         element.tabChange('admin-tab', lay_id);
	       }  
	   };  
	   //添加tab  
	   $(document).on('click','a',function(){
	       if(!$(this)[0].hasAttribute('data-url') || $(this).attr('data-url')===''){
	    	   return;  
	       }
	       
	       var tabs = $(".layui-tab-title").children();
	       
	       var lay_id = $(this).attr("lay-id");
	       
	       for(var i = 0; i < tabs.length; i++) {
	           if($(tabs).eq(i).attr("lay-id") == lay_id) { 
	        	   active.tabChange(lay_id);
	        	   var url = $(this).attr('data-url');
	        	   reload(lay_id,url);
	               return;  
	           }    
	       } 
	       active["tabAdd"].call(this);  
	       resize();
	   }); 
	
	   $(window).on('resize', function() {  
	       var $content = $('.admin-nav-card .layui-tab-content');  
	       $content.height($(this).height() - 147);  
	       $content.find('iframe').each(function() {  
	           $(this).height($content.height());  
	       });  
	   }).resize();  
	   
	   //toggle左侧菜单  
	   $('.admin-side-toggle').on('click', function() {
	       var sideWidth = $('#admin-side').width();  
	       if(sideWidth === 200) {  
	           $('#admin-body').animate({  
	               left: '0'  
	           });
	           $('#admin-footer').animate({  
	               left: '0'  
	           });  
	           $('#admin-side').animate({  
	               width: '0'  
	           });  
	       } else {  
	           $('#admin-body').animate({  
	               left: '200px'  
	           });  
	           $('#admin-footer').animate({  
	               left: '200px'  
	           });  
	           $('#admin-side').animate({  
	               width: '200px'  
	               });  
	           }  
	       });
	   
	    //手机设备的简单适配
	    var treeMobile = $('.site-tree-mobile'),
	    shadeMobile = $('.site-mobile-shade');
	    treeMobile.on('click', function () {
	        $('body').addClass('site-mobile');
	    });
	    shadeMobile.on('click', function () {
	        $('body').removeClass('site-mobile');
	    });
	    
	    
});

function reload(id,url){
	   var $content = $('.admin-nav-card .layui-tab-content'); 
	   $content.find('iframe').each(function() {
		   if($(this)[0].id == id){
			   $(this)[0].src = url; 
		   }
    });  
}

//iframe自适应  
function resize(){ 
    var $content = $('.admin-nav-card .layui-tab-content');  
    $content.height($(this).height() - 147);  
    $content.find('iframe').each(function() {
        $(this).height($content.height());  
    });  
}  

function addTab(){
	//判断首页是否有打开
	var $content = $('.admin-nav-card .layui-tab-content');
	var flag = false;
	$content.find('iframe').each(function() {
		   if($(this)[0].id == 0){
			   flag = true;
		   }
    });
	if(flag){
		active.tabChange("0");
		reload("0","pages/statistics.html");
	}else{//打开新的首页tab页面
		var ca = $("<a href='javascript:;'></a>");
        ca.attr("data-url", "pages/statistics.html");
        ca.attr("lay-id", "0");
        
        var css2 = "fa-dashboard";
        if(css2!=null && css2!=""){
       	 ca.append("<i aria-hidden='true' class='fa " + css2 +"'></i>");
        }
        
        ca.append("<cite>&nbsp;首页&nbsp;</cite>");
        active["tabAdd"].call(ca[0]);
        resize();
	}
}

function linkTab(e){
	var lay_id = $(e).attr("lay_id");
	var data_url = $(e).attr("data_url");
	var name = $(e).attr("name");
	var icon = $(e).attr("icon");
	
	//判断标签页是否有打开
	var $content = $('.admin-nav-card .layui-tab-content',window.parent.document);
	var flag = false;
	$content.find('iframe').each(function() {
		   if($(this)[0].id == lay_id){
			   flag = true;
		   }
    });
	if(flag){
		window.parent.active.tabChange(lay_id);
		window.parent.reload(lay_id,data_url);
	}else{//打开新的tab页面
		var ca = $("<a href='javascript:;'></a>");
        ca.attr("data-url", data_url);
        ca.attr("lay-id", lay_id);
        
        ca.append("<i aria-hidden='true' class='fa " + icon +"'></i>");
        ca.append("<cite>"+name+"</cite>");
        window.parent.active["tabAdd"].call(ca[0]);
        window.parent.resize();
	}
}