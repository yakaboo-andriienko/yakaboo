$((function(){$(".oferta").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".ofert").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".popup .close").click((function(a){a.preventDefault(),$(".shadow").removeClass("active")}));let a,e=360/11,s=0,t=Math.floor(100*Math.random()+1),r=["Cкидка 10%","100 грн от Watsons","Промокод на 75 грн","Бесплатная доставка","50 грн от Uklon","Промокод на 200 грн","Книжка Y Publishing","Книжка от издателя","Футболка","Сертификат на 17 тыс грн"],c=Math.floor(100*Math.random()+1),o=11;switch(s=c>=70?1:c>=50?2:3,!0){case t<=40:a=r[0],o=0;break;case t>40&&t<=65:a=r[1],o=8;break;case t>65&&t<=75:a=r[2],o=5;break;case t>75&&t<=80:a=r[3],o=4;break;case t>80&&t<=85:a=r[4],o=9;break;case t>85&&t<=90:a=r[5],o=6;break;case t>90&&t<=94:a=r[6],o=2;break;case t>40&&t<=97:a=r[7],o=3;break;case t>40&&t<=99:a=r[8],o=1;break;case 100==t:a=r[9],o=7}let n=10;$(".first .accept").click((function(a){a.preventDefault(),$(".vars .first").removeClass("active"),1==s?(n=o,$(".vars .win").addClass("active")):$(".vars .second").addClass("active"),$(".roulette .main").css({transform:"rotate(-"+n*e+"deg)"})})),$(".vars .second button").click((function(a){a.preventDefault(),$(".vars .second").removeClass("active"),2==s?(n=o,$(".vars .win").addClass("active")):(n+=22,$(".vars .third").addClass("active")),$(".roulette .main").css({transform:"rotate(-"+n*e+"deg)"})})),$(".vars .third button").click((function(a){a.preventDefault(),$(".vars .third").removeClass("active"),3==s?(n=o+44,$(".vars .win").addClass("active")):console.log("error"),$(".roulette .main").css({transform:"rotate(-"+n*e+"deg)"})})),console.log(s)}));