$((function(){$(".oferta").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".ofert").click((function(a){a.preventDefault(),$(".shadow").addClass("active")})),$(".popup .close").click((function(a){a.preventDefault(),$(".shadow").removeClass("active")})),$(".first .accept").click((function(a){a.preventDefault(),$(".vars .first").addClass("hidden")}));let a,e=0,c=Math.floor(100*Math.random()+1),s=["Cкидка 10%","100 грн от Watsons","Промокод на 75 грн","Бесплатная доставка","50 грн от Uklon","Промокод на 200 грн","Книжка Y Publishing","Книжка от издателя","Футболка","Сертификат на 17 тыс грн"],t=Math.floor(100*Math.random()+1),r=0;switch(e=t>=70?1:t>=50?2:3,!0){case c<=40:a=s[0],r=0;break;case c>40&&c<=65:a=s[1],r=8;break;case c>65&&c<=75:a=s[2],r=5;break;case c>75&&c<=80:a=s[3],r=4;break;case c>80&&c<=85:a=s[4],r=9;break;case c>85&&c<=90:a=s[5],r=6;break;case c>90&&c<=94:a=s[6],r=2;break;case c>40&&c<=97:a=s[7],r=3;break;case c>40&&c<=99:a=s[8],r=1;break;case 100==c:a=s[9],r=7}}));