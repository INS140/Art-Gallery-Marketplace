import './css/images.css'

export default function ImageView({image}) {
    return (
        <div className='art-container'>
            <h1 className="text-light">{image.title}</h1>        
            <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }} src={image.pic} className='center' alt="Image" />
            <h3 className="text-light">{image.artist}</h3>  
                {/* image .artist is artist id,  */}
        </div>
    )
}
