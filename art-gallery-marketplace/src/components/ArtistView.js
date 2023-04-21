import './css/artistpage.css'
import ArtCarousel from "./Carousel.js";
import CommissionForm from './CommissionForm';
import Navbar from './Navbar'

export default function ArtistView(artist) {
    return (
        <div className='artist-container'>
            <h1 className="text-light">Lorraine Ortiz</h1>        
            <img style={{ 'borderRadius': '50%', 'marginLeft': 'auto', 'marginRight': 'auto' }} src='https://placekitten.com/200/200' className='center' alt="Artist" />
            <p className="text-light view-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem sapien, maximus et vulputate quis, faucibus eu elit. Proin a tellus et nibh venenatis fermentum. Proin at neque condimentum lectus scelerisque facilisis ut eget ipsum. Mauris id eleifend leo. Aliquam suscipit tempor nibh, quis fermentum lectus finibus fringilla. Curabitur leo massa, volutpat quis nisl sed, accumsan ultricies lorem. Donec bibendum tempor mi eu pellentesque. Vivamus fermentum venenatis urna. Nulla placerat viverra lacus sit amet maximus. Integer laoreet orci ac dapibus congue. Suspendisse orci nibh, iaculis ut maximus at, maximus a magna.</p>        
            <h3 className="text-light">Art Style: Contemporary</h3>        
            <h3 className="text-light">Commission wage: $500-50,000</h3>        
            <h2 className="text-light">Lorraine's Images</h2>
            <ArtCarousel />
            <CommissionForm/>
        </div>
    )
}
