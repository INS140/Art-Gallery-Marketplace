import './css/images.css'
export default function ImageView(image) {
    return (
        //    <div>
        //        <img style={{'width':'500px', 'height':'500px'}} src={image.pic} alt="Artist"/>
        //        <h2>{image.title}</h2>
        //        <p>{image.description}</p>
        //        <p>{image.artist}</p>
        //        <p>{image.year}</p>
        //    </div>
        <div className='art-container'>
            <h1 className="text-light">TITLE</h1>        
            <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }} src='https://placekitten.com/200/200' className='center' alt="Image" />
            <p className="text-light view-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem sapien, maximus et vulputate quis, faucibus eu elit. Proin a tellus et nibh venenatis fermentum. Proin at neque condimentum lectus scelerisque facilisis ut eget ipsum. Mauris id eleifend leo. Aliquam suscipit tempor nibh, quis fermentum lectus finibus fringilla. Curabitur leo massa, volutpat quis nisl sed, accumsan ultricies lorem. Donec bibendum tempor mi eu pellentesque. Vivamus fermentum venenatis urna. Nulla placerat viverra lacus sit amet maximus. Integer laoreet orci ac dapibus congue. Suspendisse orci nibh, iaculis ut maximus at, maximus a magna.</p>        
            <h3 className="text-light">By Annie</h3>  
            {/* link to artist page     */}
            <h5 className="text-light">Size: 100x100</h5> 
            <h5 className="text-light">Year: 2022</h5>        
            <h5 className="text-light">Style: Modern</h5>        
            <h5 className="text-light">Price: $2450</h5>        
            <h5 className="text-light">Copy: 5</h5>        
            <h5 className="text-light">Sold: No</h5>      

        </div>
    )
}
