$((function(){$(".oferta").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".ofert").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".popup .close").click((function(a){a.preventDefault(),$(".shadow").removeClass("active")}));let a,e=0,s=Math.floor(100*Math.random()+1),t=["Cкидка 10%","100 грн от Watsons","Промокод на 75 грн","Бесплатная доставка","50 грн от Uklon","Промокод на 200 грн","Книжка Y Publishing","Книжка от издателя","Футболка","Сертификат на 17 тыс грн"],c=Math.floor(100*Math.random()+1),r=11;switch(e=c>=70?1:c>=50?2:3,!0){case s<=40:a=t[0],r=0;break;case s>40&&s<=65:a=t[1],r=8;break;case s>65&&s<=75:a=t[2],r=5;break;case s>75&&s<=80:a=t[3],r=4;break;case s>80&&s<=85:a=t[4],r=9;break;case s>85&&s<=90:a=t[5],r=6;break;case s>90&&s<=94:a=t[6],r=2;break;case s>40&&s<=97:a=t[7],r=3;break;case s>40&&s<=99:a=t[8],r=1;break;case 100==s:a=t[9],r=7}let o=10;$(".first .accept").click((function(a){a.preventDefault(),$(".vars .first").removeClass("active"),1==e?(o=r,$(".vars .win").addClass("active")):$(".vars .second").addClass("active"),$(".roulette .main").css({transform:"rotate(-"+32.72727272727273*o+"deg)"})})),$(".vars .second button").click((function(a){a.preventDefault(),$(".vars .second").removeClass("active"),2==e?(o=r,$(".vars .win").addClass("active")):$(".vars .third").addClass("active")})),console.log(e)}));