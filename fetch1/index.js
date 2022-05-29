
       
            let data;
        async function product(){

            let search= document.getElementById("search").value;
            if(search===""|| search===undefined){
                search= "Avengers";
            }
            try{
                let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&s=${search}&apikey=d4cc32f5`);
                let data = await res.json();
                //console.log(data);
                
                showMovies(data);
            }
            catch(er){
                console.log("error:",er);
                 window.location.href= "error.html";
              // error();             
            }
           
        }
   product();


    function showMovies(data){
      //
      console.log("data:",data)

      let movies_data=document.getElementById("movie");

      movies_data.innerHTML="";

      data.Search.forEach(function(el){
        //   console.log(el);

          let div= document.createElement("div");
          div.setAttribute("id","box");

          let img_div= document.createElement("div");
          let image= document.createElement("img");
          image.src=el.Poster;
          img_div.append(image);
          img_div.setAttribute("id","img_div");
               
          let div1= document.createElement("div")
          div1.setAttribute("id","txt_div")
          let name= document.createElement("p");
          name.innerText= el.Title;
          
              let launch= document.createElement("p");
               launch.innerText= el.Year;
              let num= Math.round(Math.random()*10);
          let rate= document.createElement("div");
          rate.setAttribute("id","rate");
           let rating= document.createElement("span")
            rating.innerText= `${num}`;
             
              let star= document.createElement("img");
              star.src="https://tse3.mm.bing.net/th?id=OIP.j9Rad86nRn7qHTrG_ldbogHaHC&pid=Api&P=0&w=177&h=168";
          rate.append(rating,star);

          let pop= document.createElement("p");
          pop.innerText="Recomemded"

          if(num>8){
            div1.append(name,launch,rate,pop);
            div.append(img_div,div1);
            movies_data.append(div);
          }
          else{
            div1.append(name,launch,rate);
            div.append(img_div,div1);
            movies_data.append(div);
          }
            
      })
     
      
   }




