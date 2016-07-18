
		var link = document.querySelector("#massege");
        var popup = document.querySelector(".about");
        var close = document.querySelector("#close");
        var btn1 = document.querySelector("#btn1");
        var btn2 = document.querySelector("#btn2");
        var btn3 = document.querySelector("#btn3");
        var sld1 = document.querySelector("#slider-1");
        var sld2 = document.querySelector("#slider-2");
        var sld3 = document.querySelector("#slider-3");
        btn1.addEventListener("click",function(event){
        	if(btn2.classList.contains("btn-gallery-active")){
        		btn2.classList.remove("btn-gallery-active");
        	}
        	if(btn3.classList.contains("btn-gallery-active")){
        		btn3.classList.remove("btn-gallery-active");
        	}
        	btn1.classList.add("btn-gallery-active");
        	if(sld2.classList.contains("slider-active")){
        		sld2.classList.remove("slider-active");
        	}
        	if(sld3.classList.contains("slider-active")){
        		sld3.classList.remove("slider-active");
        	}
        	sld1.classList.add("slider-active");
        });
        btn2.addEventListener("click",function(event){
        	if(btn1.classList.contains("btn-gallery-active")){
        		btn1.classList.remove("btn-gallery-active");
        	}
        	if(btn3.classList.contains("btn-gallery-active")){
        		btn3.classList.remove("btn-gallery-active");
        	}
        	btn2.classList.add("btn-gallery-active");
        	if(sld1.classList.contains("slider-active")){
        		sld1.classList.remove("slider-active");
        	}
        	if(sld3.classList.contains("slider-active")){
        		sld3.classList.remove("slider-active");
        	}
        	sld2.classList.add("slider-active");
        });
        btn3.addEventListener("click",function(event){
        	if(btn1.classList.contains("btn-gallery-active")){
        		btn1.classList.remove("btn-gallery-active");
        	}
        	if(btn2.classList.contains("btn-gallery-active")){
        		btn2.classList.remove("btn-gallery-active");
        	}
        	btn3.classList.add("btn-gallery-active");
        	if(sld1.classList.contains("slider-active")){
        		sld1.classList.remove("slider-active");
        	}
        	if(sld2.classList.contains("slider-active")){
        		sld2.classList.remove("slider-active");
        	}
        	sld3.classList.add("slider-active");
        });
        link.addEventListener("click", function(event) {
        popup.classList.add("about-show");
    });
        close.addEventListener("click", function(event){
        	popup.classList.remove("about-show")
        });
         window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("about-show")) {
            popup.classList.remove("about-show");
          }
        }
      });
