console.log("hola mundo esto anda?")
/* const api_key="5183000ac12d7f78e1f2353e8405470e" */

const traerPelis = categoria=> {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5183000ac12d7f78e1f2353e8405470e')
    .then(res=>res.json())
    .then(data=>{
        console.log (data)
        /* const ul = document.querySelector('peliculas') */; 
       for (i=0;i<data.results.length;i++){
       /*  (data.results[i].title) */;
         if(i < 5){
  console.log(data.results[i].title)
        }
       }
    })
  }
  
        
    
  
    traerPelis("popular")