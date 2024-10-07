import './home.css'
// import wall from "../../photo/teeth-whitening-after-treatment.jpg"
import img1 from "../../photo/img1.jpeg"
import img11 from "../../photo/img11.jpeg"
import img2 from "../../photo/img2.jpeg"
import img22 from "../../photo/img22.jpeg"
import img3 from "../../photo/img3.jpeg"
import img33 from "../../photo/img33.jpeg"

import img4 from "../../photo/img4.jpeg"
import img44 from "../../photo/img44.jpeg"
import { useState } from 'react';



function Home() {

    const [visibleIndexes, setVisibleIndexes] = useState([].fill(false));
    
    const images = [
        { before: img3, after: img33 },
        { before: img2, after: img22 },
        { before: img11, after: img1 },
        { before: img44, after: img4 },
        { before: img44, after: img4 },
        { before: img44, after: img4 },
    ];
    
        const toggleImage = (index) => {
            setVisibleIndexes((prev) => {
                const newIndexes = [...prev];
                newIndexes[index] = !newIndexes[index];
                return newIndexes;
            });
        };

    
    const [currentIndex,setCurrentIndex] = useState(3)
    const sewr = [img1,img2,img3,img4,img11,img22,img33,img44]

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sewr.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sewr.length) % sewr.length);
    };

    return (
        <>
<div>
 
            <div className='main-page'>
                <div>
                    <h1>Dr. Clark Maged</h1>
                    <h3>Dentist specialized in dental surgery and cosmetic dentistry</h3>
                </div>
                <div className="cont">
                    {images.map((image, index) => (
                        <div className="pic" key={index} onClick={() => toggleImage(index)}>
                            <div>
                                <img className="img2" src={visibleIndexes[index] ? image.before:image.after } alt="" />
                            </div>
                            <div>
                                <p>{visibleIndexes[index] ? 'Before Visiting':'After Visiting' }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                    
    <div className='ayhaga'>
            <div className="nmsa">
            
            <div className='abl' onClick={prevImage}></div>
            
                <img className="img2" src={sewr[currentIndex]} alt='' />
            
            <div className='baed' onClick={nextImage}></div>
        
        </div>
    </div>
            
</div>
        </>
    );
};

export default Home