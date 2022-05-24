function Move(){

     this.pzflag = false;

     this.L = 0;

     this.T = 0;


    this.StopPzMove = function(){

      this.pzflag = true;


    }




   this.StartNormalMove = function(ob,json,fn){

      clearInterval(ob.timer);

       var self = this;
       
      ob.timer = setInterval(function(){

         var icur = 0;

         var ispeed = 0;

         var flag = true;

        for(var p in json){

        	var target = json[p];

           if(p=="opacity"){

             icur =Math.round(self.css(ob,p)*100);


           }

           else{

             icur = parseInt(self.css(ob,p));


           }

          ispeed = (target-icur)/8;


          ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);

          if(icur!=target){

            if(p=="opacity"){
            
               ob.style.opacity=(icur+ispeed)/100;

               ob.style.filter = "alpha(opacity="+(icur+ispeed)+")";


             }
           else{

              ob.style[p] = icur+ispeed+"px";

           }
            
            flag = false;
   

          }
         
       }

       if(flag){

          clearInterval(ob.timer);

         fn&&fn();


       }




      },30);






   }


   this.StartTXMove = function(ob,json,fn){

          clearInterval(ob.timer);

          var self = this;

          var icur  =0;

         

       var txspeed = {};


       for(var p in json){

           txspeed[p] = 0;
          }




       ob.timer = setInterval(function(){
           var flag = true;
          
          for(var  p in json){

             var target = json[p];

             if(p=="opacity"){

               icur = Math.round(self.css(ob,p)*100);
             }

             else{

               icur = parseInt(self.css(ob,p));


             }

           txspeed[p]+=(target-icur)/7;

           txspeed[p]*= 0.75;


           if(!(Math.abs(txspeed[p])<1&&Math.abs(target-icur)<1)){


              flag = false;

              if(p=="opacity"){

              ob.style.opacity = (icur+txspeed[p])/100;


              ob.style.filter = "alpha(opacity="+(icur+txspeed[p])+")";

            


              }

              else{


              ob.style[p] = icur+txspeed[p]+"px";


              }



              }


             




      



          }
           

 if(flag){
                 


               clearInterval(ob.timer);

              
               if(p=="opacity"){

                ob.style.opacity = target/100;

                ob.style.filter = "alpha(opacity="+target+")";

               txspeed[p]=0;

               }

               else{


                ob.style[p] = target+"px";

                alert(target);


                txspeed[p] = 0;


               }

              fn&&fn();


              }




       },30);
          }



     this.StartPZMove = function(ob,container,speedx,speedy){
   
         this.pzflag = false;

        clearInterval(ob.timer);


        var self = this;


        ob.timer = setInterval(function(){



          self.L = ob.offsetLeft+speedx;


         self.T  =ob.offsetTop+speedy;

        

        if(container==document.documentElement||container==document.body){

   


          if(self.L>container.clientWidth-ob.offsetWidth){

             slef.L = container.clientWidth-ob.offsetWidth;

             speedx = -1*speedx;


          }

        else  if(slef.L<0){

           self.L = 0;

           speedx = -1*speedx;


         }

         if(self.T>container.clientHeight-ob.offsetHeight){


              self.T = container.clientHeight-ob.offsetHeight;

              speedy = -1*speedy;



         }

         else if(self.T<0){

              self.T = 0;

              speedy = -1*speedy;

         }

        

         ob.style.left = self.L+"px";

         ob.style.top = self.T+"px";

      }

      else{

           var width = container.offsetWidth;

      

           var height = container.offsetHeight;

        

         if(self.L>width-ob.offsetWidth){

              self.L = width-ob.offsetWidth;

             speedx = -1*speedx;

         }

         else if(self.L<0){

            self.L = 0;

            speedx = -1*speedx;
         

         }

         if(self.T>height-ob.offsetHeight){

           self.T = height-ob.offsetHeight;

           speedy = -1*speedy;

         }

         else if(self.T<0){

           self.T = 0;

          speedy = -1*speedy;

         }




        ob.style.left = self.L+"px";


        ob.style.top = self.T+"px";


        if(self.pzflag){


         clearInterval(ob.timer);



        }


        


      }




        },30);


}

   this.StartZYLTMove =function(ob,container){


      clearInterval(ob.timer);

        var speed = 0;

        var T = 0;

       var Height = 0;

       if(container==document.documentElement||container==document.body){


          Height = container.clientHeight;


       }

       else{
        
         Height = container.offsetHeight;

       }

      ob.timer = setInterval(function(){

          

       
     speed = speed+5;

           T = ob.offsetTop+speed;
     

        

   


        if(T>Height-ob.offsetHeight){

          T = Height-ob.offsetHeight;

            speed = -1*speed;

           speed=Math.round(speed)*0.75;

        }

          

      


        if(Math.abs(speed)<1&&Math.abs(Height-T-ob.offsetHeight)<1){

            T = Height-ob.offsetHeight;

            speed = 0;

            clearInterval(ob.timer);


        }

        ob.style.top = T+"px";








        








       },30);




   }

   this.now = function(){

     return new Date().getTime();


   }


   this.StartTimeMove = function(ob,json,times,fx,fn){

          clearInterval(ob.timer);
     
        var jcur = {};

        var self = this;

       for(var p in json){

            jcur[p]=0;


           if(p=="opacity"){

            jcur[p] = Math.round(this.css(ob,p))*100;   
         
           }

           else{

           jcur[p] =parseInt(this.css(ob,p));


           }
      }

      var start = self.now();

     ob.timer = setInterval(function(){


         var change  = self.now();


       var t = times-Math.max(0,start-change+times);


         for(var p in json){


            var value = self.Tween[fx](t,jcur[p],json[p]-jcur[p],times);

           if(p=="opacity"){

             ob.style.opacity = value/100; 


             ob.style.filter = "alpha(opacity="+value+")";  
           

           }

         

           else{

               ob.style[p] = value+"px";

           }



         }

         if(t==times){


           clearInterval(ob.timer);

           fn&&fn();

         }





      







     },13);












   }





   this.CallOffset = function(ob){
         var x = 0; var y = 0;


         while(ob!=null){

            x = x+ob.offsetLeft;

            y = y+ob.offsetTop;

            ob = ob.offsetParent;


         }

      return {x:x,y:y};

        






   }


   this.css = function(ob,attr){

     if(ob.currentStyle){

        return ob.currentStyle[attr];

     }

     else{

         return getComputedStyle(ob,false)[attr];



     }


   }

   this.Tween = {
  linear: function (t, b, c, d){  //匀速
    return c*t/d + b;
  },
  easeIn: function(t, b, c, d){  //加速曲线
    return c*(t/=d)*t + b;
  },
  easeOut: function(t, b, c, d){  //减速曲线
    return -c *(t/=d)*(t-2) + b;
  },
  easeBoth: function(t, b, c, d){  //加速减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t + b;
    }
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInStrong: function(t, b, c, d){  //加加速曲线
    return c*(t/=d)*t*t*t + b;
  },
  easeOutStrong: function(t, b, c, d){  //减减速曲线
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
    if ((t/=d/2) < 1) {
      return c/2*t*t*t*t + b;
    }
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
    if (t === 0) { 
      return b; 
    }
    if ( (t /= d) == 1 ) {
      return b+c; 
    }
    if (!p) {
      p=d*0.3; 
    }
    if (!a || a < Math.abs(c)) {
      a = c; 
      var s = p/4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
    if (t === 0) {
      return b;
    }
    if ( (t /= d) == 1 ) {
      return b+c;
    }
    if (!p) {
      p=d*0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },    
  elasticBoth: function(t, b, c, d, a, p){
    if (t === 0) {
      return b;
    }
    if ( (t /= d/2) == 2 ) {
      return b+c;
    }
    if (!p) {
      p = d*(0.3*1.5);
    }
    if ( !a || a < Math.abs(c) ) {
      a = c; 
      var s = p/4;
    }
    else {
      var s = p/(2*Math.PI) * Math.asin (c/a);
    }
    if (t < 1) {
      return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
          Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    }
    return a*Math.pow(2,-10*(t-=1)) * 
        Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
  },
  backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
    if (typeof s == 'undefined') {
       s = 1.70158;
    }
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  backOut: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 3.70158;  //回缩的距离
    }
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  }, 
  backBoth: function(t, b, c, d, s){
    if (typeof s == 'undefined') {
      s = 1.70158; 
    }
    if ((t /= d/2 ) < 1) {
      return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    }
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
    return c - this['bounceOut'](d-t, 0, c, d) + b;
  },       
  bounceOut: function(t, b, c, d){
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
    }
    return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
  },      
  bounceBoth: function(t, b, c, d){
    if (t < d/2) {
      return this['bounceIn'](t*2, 0, c, d) * 0.5 + b;
    }
    return this['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
  }
}




}