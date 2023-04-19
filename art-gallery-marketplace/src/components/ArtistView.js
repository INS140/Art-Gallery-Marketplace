import './css/artistpage.css'
import ArtCarousel from "./Carousel.js";
import CommissionForm from './CommissionForm';

export default function ArtistView(artist) {
    return (
        <div>
            <h1 className="text-light" style={{ textAlign: 'center' }}>Lorraine Ortiz</h1>        
            <img style={{ 'border-radius': '50%', 'margin-left': 'auto', 'margin-right': 'auto' }} src='https://placekitten.com/200/200' class='center' alt="Artist" />
            <p className="text-light" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem sapien, maximus et vulputate quis, faucibus eu elit. Proin a tellus et nibh venenatis fermentum. Proin at neque condimentum lectus scelerisque facilisis ut eget ipsum. Mauris id eleifend leo. Aliquam suscipit tempor nibh, quis fermentum lectus finibus fringilla. Curabitur leo massa, volutpat quis nisl sed, accumsan ultricies lorem. Donec bibendum tempor mi eu pellentesque. Vivamus fermentum venenatis urna. Nulla placerat viverra lacus sit amet maximus. Integer laoreet orci ac dapibus congue. Suspendisse orci nibh, iaculis ut maximus at, maximus a magna.</p>        
            <h3 className="text-light" style={{ textAlign: 'center' }}>Art Style: Contemporary</h3>        
            <h3 className="text-light" style={{ textAlign: 'center' }}>Commission wage: $500-50,000</h3>        
            <h2 className="text-light" style={{ textAlign: 'center' }}>Lorraine's Images</h2>        
            <ArtCarousel/>
            <CommissionForm/>
        </div>
    )
}
