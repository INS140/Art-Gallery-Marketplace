export default function ImageView(image){
    return(
       <div>
           <img style={{'width':'500px', 'height':'500px'}} src={image.pic} alt="Artist"/>
           <h2>{image.title}</h2>
           <p>{image.description}</p>
           <p>{image.artist}</p>
           <p>{image.year}</p>
       </div>
    )
   }
   