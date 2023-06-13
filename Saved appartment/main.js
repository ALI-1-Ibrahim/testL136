const MYID = 124245

var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

var x = document.getElementById("XBTN");

var d = document.getElementById("div");

const savedpages = JSON.parse(localStorage.getItem("savedpages"));

window.onload = function(){   
  fetch('../database/profile.json')
.then(function(response) {
  
console.log(response)

return response.json();

})
.then(function(P) {
  profile = P
})
    document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""
  
      
      // document.getElementById("map").style.display = "none"
      // document.getElementById("map").style.width = "0%"
      // document.getElementById("map").style.height = "0%"
      // document.getElementById("map").style.position = "fixed"
      // document.getElementById("map").style.top = "50%"
      
      
      if (Dark=="true") {
      r.style.setProperty('--TitleParbackground-color', 'black');
      r.style.setProperty('--ATitleParbackground-color', 'black');
      r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
      r.style.setProperty('--Apartment', '#151515');
      r.style.setProperty('--FontColor', 'white');
      // r.style.setProperty('--IconColor','blue');
      r.style.setProperty('--IconColor','white');
  
      r.style.setProperty('--menu','black');
      r.style.setProperty('--BodyBackground','gray');
      r.style.setProperty('--PreloaderBackground','black');
      // map.setStyle('mapbox://styles/mapbox/dark-v11');
      document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"
  
  
    } else {
      r.style.setProperty('--TitleParbackground-color', '#526DA1');
      r.style.setProperty('--ATitleParbackground-color', '#526DA1');
      r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
      r.style.setProperty('--Apartment', '#eee');
      r.style.setProperty('--FontColor', '#526DA1');
      // r.style.setProperty('--IconColor','white');
      r.style.setProperty('--IconColor','#526DA1');
  
      r.style.setProperty('--menu','#526DA1');
      r.style.setProperty('--BodyBackground','white');
      r.style.setProperty('--PreloaderBackground','white');
      document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"
  
    }
    // document.body.style.flexDirection = "column";
    // document.body.style.alignItems = "center";
    document.getElementById("PreLoader").style.display="none";
     
  
      var pic = localStorage.getItem("pic")
     
    if (pic == null) {
          document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
      }
      else {
        
        document.getElementById("profilepic").src = pic;
      }
      
  
  
  
  
  
  
  
  
  
      var b = document.getElementById("MyPropertiesBody");

  if (savedpages!=null) {
    if (savedpages.length!=0) {
      
    
    
  
  
      fetch('../database/csvjson.json')
      .then(function(response) {
        
      console.log(response)
      
      return response.json();
      
      })
      .then(function(d) {
        
        SH = d;
        console.log(SH)
  
        d.forEach(({host_id,id,name,address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_reviews,furnished,gas})=>{
          for (let ss = 0; ss < savedpages.length; ss++) {
            console.log(savedpages)
          
          if (id==savedpages[ss]) {/////////////////////////////////this should be the user id
              var p = document.createElement("div")
              p.style.width="100%";
              p.style.height="15%";
              p.style.borderRadius="15px";
              p.style.marginTop="20px"
              p.style.padding="10px 10px"
              p.style.cursor="pointer"
              Dark=="true"?p.style.backgroundColor="#000000b3":p.style.backgroundColor="rgb(82 109 161 / 65%)";
              // Dark=="true"?p.style.backgroundColor="black":p.style.backgroundColor="#526DA1";
              p.style.Color="black";
              p.style.fontSize="30px"
              // var c = document.createElement("p")
              // c.setAttribute("lng-tag", 'lng-tag');
              // p.appendChild(c);
              p.innerHTML="<div style=\"display: flex;\"><p lng-tag=\"apartment id: \"></p> <p>&nbsp"+id+"</p></div><p>"+name+"</p>"
              b.appendChild(p)
              p.addEventListener('click',function(){
  
  
  
  
                
                var addresss = document.getElementById("addresss");
                var pricee = document.getElementById("pricee");
                var roomss = document.getElementById("roomss");
                var bathroomss = document.getElementById("bathroomss");
                var gass = document.getElementById("gass");
                var furnishedd = document.getElementById("furnishedd");
                var ApartmentImagess = document.getElementById("ApartmentImagesPar");
                var phonee = document.getElementById("phonee");

  
  
                // map.on('click', 'places', (e) => {
                  // map.on('click', function(e) {
                  //   var coordinates = e.lngLat;
                  // for (let i = 0; i < SH.length; i++) {
                  //   addresss.innerHTML = address;
                  //   pricee.innerHTML = price;
                  //   roomss.innerHTML = rooms;
                  //   var cDivimgs = ApartmentImagess.children;
             
                  // }
                  // addresss.innerHTML = address;
                  // pricee.innerHTML = price;
                  // roomss.innerHTML = rooms;
                  for (let iz = 0; iz < profile.length; iz++) {
                    if (host_id==profile[iz].id) {
                      phonee.innerHTML = profile[iz].phone
                      break
                    }        
                  }
                  addresss.innerHTML = neighbourhood;
                  pricee.innerHTML = price;
                  roomss.innerHTML = number_of_reviews;
                  bathroomss.innerHTML = number_of_reviews;
            
                  if (gas=="yes") {
                    gass.setAttribute("class", "fas fa-check");
                    gass.setAttribute("style", "cursor: auto;");
                    // gass.disabled = true;
                  } else {
                    gass.setAttribute("class", "fas fa-close");
                    gass.setAttribute("style", "cursor: auto;");
            
                    // gass.disabled = true;
            
                  }
                  if (furnished=="yes") {
                    furnishedd.setAttribute("class", "fas fa-check");
                    furnishedd.setAttribute("style", "cursor: auto;");
            
                    // furnishedd.disabled = true;
            
            
                  } else {
                    furnishedd.setAttribute("class", "fas fa-close");
                    furnishedd.setAttribute("style", "cursor: auto;");
            
                    // furnishedd.disabled = true;
            
            
                  }
                  // var cDivimgs = ApartmentImagess.children;
                  // for (var g = 0; g < cDivimgs.length; g++) {
                  //   //cDiv[g].style.transition = "visibility 0s";
                  //   // cDiv[g].style.visibility= "hidden";  //do styling here
                  //   cDivimgs[g].remove();
                  // }
                        ApartmentImagess.innerHTML="";
                        // console.log(imgs)
                      //  var images = imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
                      //  console.log(images)
                  for (let j = 0; j < imgs.length; j++) {
                    // console.log(imgs.length);
                    // console.log(j);
                    var img = document.createElement("img");
                    // var dvi = document.createElement("div")
                    img.setAttribute('src',imgs[j])
                    img.setAttribute('width','100%');//500px
                    img.setAttribute('height','100%');//200px
                    img.style.padding="10px"
                    // dvi.innerHTML = "lk;k"
                    // dvi.style.backgroundColor = "blue";
                    // dvi.style.padding = "10px";
                    
                    // dvi.setAttribute("width","200px");
                    // dvi.setAttribute("height","10px")
                    
                    ApartmentImagess.appendChild(img);
                    // ApartmentImagess.appendChild(dvi);
                    //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
                    
                  }
                  // });
                  
                  // if (d.style.display === "none") {
                  //   d.style.display = "block";
                  // } else {
                  //   d.style.display = "none";
                  // }
            
                  // if (d.style.width="0") {
                  //   d.style.width="57vw";
                  // } else {
                  //   d.style.width="0px";
                  // }
                  //x.style.display = "block";
                  // document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
                  addresss.style.transition = "width 0.5s";
                  pricee.style.transition = "width 0.5s";
                  roomss.style.transition = "width 0.5s";
                  
                  // function responsive(x) {
                  //   if (x.matches) { // If media query matches
                  //     document.getElementById("div").style.width="57vw";//570
                  //     document.getElementById("div").style.height="640px";//500//570
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='50%';
                      
                  //     } else {
                  //     document.getElementById("div").style.width="270px";//570
                  //     document.getElementById("div").style.height="560px";//500//570/420
                  //     addresss.style.width="182px";
                  //     pricee.style.width="56px";
                  //     roomss.style.width="56px";
                  //     ApartmentImagess.style.height='35%';
                  //     if (L=='ar') {
                  //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                  //     }
                  //   }
                  // }
            
                  // var x = window.matchMedia("(min-width: 600px)")
                  // responsive(x) 
                  // x.addListener(responsive)
            
            
                  // function responsive(x) {
                  //   if (x.matches) { // If media query matches
                  //     document.getElementById("divPar").style.width="57vw";//570
                  //     document.getElementById("divPar").style.height="85vh";//500//570/640
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='50%';
                      
                  //     } else {
                      
                  // function responsiv(y) {
                    
                  //   if (y.matches) { // If media query matches
                  //     console.log(y.matches)
                  //     document.getElementById("divPar").style.width="568px";//570
                  //     document.getElementById("divPar").style.height="78vh";//500//570
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='100%';
                      
                  //     } else {
                  //       console.log(y.matches)
                  //     document.getElementById("divPar").style.width="270px";//570
                  //     document.getElementById("divPar").style.height="86vh";//500//570
                  //     addresss.style.width="182px";
                  //     pricee.style.width="56px";
                  //     roomss.style.width="56px";
                  //     ApartmentImagess.style.height='34%';
                  //     if (L=='ar') {
                  //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                  //     }
                  //   }
                 
                  // }
            
                  // var y = window.matchMedia("(max-width: 800px) and (orientation : landscape)")
                  // responsiv(y) 
                  // y.addListener(function () {
            
                  //   if(document.getElementById("ApartmentTitleParPar").getAttribute("class")=="m-fadeIn"){
                  //   responsiv(y)
                  // }
                  // })
                  //   }
                  // }
            
                  // var x = window.matchMedia("(min-height: 700px")
                  // responsive(x) 
                  function responsive(x) {
                    if (x.matches) { // If media query matches
                      document.getElementById("divPar").style.width="57vw";//570
                      document.getElementById("divPar").style.height="85vh";//500//570
                      addresss.style.width="482px";
                      pricee.style.width="176px";
                      roomss.style.width="176px";
                      ApartmentImagess.style.height='50%';
                      } else {
                      document.getElementById("divPar").style.width="86vw";//570
                      document.getElementById("divPar").style.height="78vh";//500//570
                      addresss.style.width="182px";
                      pricee.style.width="56px";
                      roomss.style.width="56px";
                      ApartmentImagess.style.height='100%';//35%
                      if (L=='ar') {
                              document.getElementsByClassName("XBTNPar")[0].style.right = '86%'
                            }
                    }
                  }
              
                  var x = window.matchMedia("(min-width: 800px)")
                  responsive(x)
              
                  x.addListener(responsive)
            
            
                  //document.getElementById("div").style.top = screen.height + "px";
                  //addresss.display="block";
                  var cDivPar = document.getElementById('divPar').children;
                  for (var i = 0; i < cDivPar.length; i++) {
                      //cDivPar[i].style.transition = "visibility 10s";
                      //cDivPar[i].style.visibility= "visible";  //do styling here
                      cDivPar[i].setAttribute("class","m-fadeIn");
                  }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            cord = [longitude,latitude];
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
            
                // })
            
            // });
            
            
              // })
  
  
  
  
  
  
  
  
  
              })
          }
        }
      })
      
  
      if(L=='ar'){
        translate(L,'lng-tag');  
        document.body.dir="rtl" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingRight="0%"
        // document.getElementById("titlepadding").style.paddingLeft="8%"
  
      }else if(L==null){
        translate('en','lng-tag'); 
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }else{
        // translate('en','lng-tag'); 
        translate(L,'lng-tag');  
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }
      });
      
    }else{
      b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
    }
    
  }else{
    b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
  }
  
  
  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }else if(L==null){
    translate('en','lng-tag'); 
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }else{
    // translate('en','lng-tag'); 
    translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }
    }

    function XbtnPar(elm) {
      //document.getElementById(elm.addresssentNode.id).style.display="none"
      //x.style.display = "none";
      document.getElementById('divPar').style.height="0px";
      document.getElementById('divPar').style.width="0px";
      
       // console.log("ali");
       var cDivPar = document.getElementById('divPar').children;
           for (var i = 0; i < cDivPar.length; i++) {
               //cDivPar[i].style.transition = "visibility 0s";
               // cDivPar[i].style.visibility= "hidden";  //do styling here
               cDivPar[i].setAttribute("class","m-fadeOut");
           }
    //    var cDivimgs = ApartmentImagess.children; //ملهاش لازمة
    //    for (var g = 0; g < cDivimgs.length; g++) {
    //      //cDiv[g].style.transition = "visibility 0s";
    //      // cDiv[g].style.visibility= "hidden";  //do styling here
    //      cDivimgs[g].remove();
    //  }
     // document.getElementById("32.274186,30.607398").remove();
     }

     function GetToMe() {
      // var cord, url;
    
      // $("#map").on('click', function () {
        // coordinates = $('#coordinates').val();
        url         = "https://www.google.com.sa/maps/search/"+ cord[1]+","+cord[0] ;
      
        window.open(url, '_blank');
      // });
    }

    