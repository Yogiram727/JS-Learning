const movie={
    title:'a',
    releaseYear:2024,
    rating:4.5,
    director:'b'
};

showProperties(movie); //argument movie passed to the function showProperties

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key]==='string')
        console.log(key,obj[key]);
    }
      
 }
 