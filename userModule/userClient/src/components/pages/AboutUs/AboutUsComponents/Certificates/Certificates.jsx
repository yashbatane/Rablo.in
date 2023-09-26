import React from 'react'
import "./Certificatescss.css"; 
import { ImageSlider } from '../../../../GlobalComponents/miniComponents/ImageSlider/ImageSlider';
import img1 from "./../Image/c1.webp";
import img2 from "../Image/c2.webp";
import img3 from "../Image/c3.webp";
import img4 from "../Image/c4.webp";
import img5 from "../Image/c5.webp";

const images = [img1, img2, img3, img4, img5];

const Certificates = () => {
  return (
    <div className="containsCertificates">
      <div className="OurCertificatesHeading">Our Certificates</div>
      <hr></hr>
      <div className="certificatescontainer">
        <ImageSlider images={images} />
        <div className="aboutcompany">
          <p className="aboutcompanyintro">
            Hometuition Inc. is a learning platform Certified by StartUpIndia
            and MSME. We provide Home Tuition through online and offline modes,
            all around Lucknow. Our dedicated team works to build the gap
            between students and professional Home Tutors.
          </p>
          <div className="acheivements">
            <div className="acheivement">
              <i class="acheivementIcon fa-solid fa-circle-check"></i>
              <p>Certificate of recognition</p>
            </div>
            <div className="acheivement">
              <i class="acheivementIcon fa-solid fa-circle-check"></i>
              <p> Certificate of Incorporation</p>
            </div>
            <div className="acheivement">
              <i class="acheivementIcon fa-solid fa-circle-check"></i>
              <p> Udyam Registration Certificate (MSME)</p>
            </div>
            <div className="acheivement">
              <i class="acheivementIcon fa-solid fa-circle-check"></i>
              <p> Certificate by StartinUP</p>
            </div>
            <div className="acheivement">
              <i class="acheivementIcon fa-solid fa-circle-check"></i>
              <p> Certificate bu Justdail 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
