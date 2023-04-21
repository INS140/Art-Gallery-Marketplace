import Footer from "./Footer";
import ImageView from "./ImageView";
import './css/images.css'
export default function ArtGallery() {
    //for loop for each images
    // for(let x=0;x<image.count;x++){
    //     return <ImageView/>
    // }
    return (
        <div>
            <h1>Art Gallery</h1>
            <div className="grid-container bg-dark" >
                {/* on click, show image full screen */}
                
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
                <div className="m-5">
                    <img src='https://placekitten.com/200/200' alt="iamge" />
                    <div className='centered'>TITLE</div>
                </div>
            </div>
            <ImageView/>

        </div>
    )
}