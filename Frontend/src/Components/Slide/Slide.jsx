import React, { useEffect } from 'react';
import './Slide.css';
import modul1 from '../../Assets/modul1.png'
import modul2 from '../../Assets/modul2.png'
import modul3 from '../../Assets/modul3.jpg'
// Pindah Page
import { Link } from 'react-router-dom'

const Slide = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const wrapper = document.querySelector(".wrapper");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false;
    let isAutoPlay = true;
    let startX;
    let startScrollLeft;
    let timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      // Cleanup event listeners when component unmounts
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className='wrapper'>
      <i id='left' className='fa-solid fa-angle-left'></i>
      <ul className='carousel'>
        <li className='card'>
          <div className='konten'>
          <div className='img'><img src={modul1} alt="img" draggable="false" /></div>
            <h2>Bagaimana cara membudidayakan ikan lele agar cepat panen</h2>
            <p>
              Agar menghasilkan panen yang melimpah dan segar perlu adanya
            </p>
            <Link to="/modul" >Baca Selengkapnya...</Link>
          </div>
        </li>
        <li className='card'>
          <div className='konten'>
          <div className='img'><img src={modul2} alt="img" draggable="false" /></div>
            <h2>Aqua Care: Jaga Kualitas Air Kolam Ikan Lele</h2>
            <p>
              Pelajari cara menjaga kualitas air kolam ikan 
              lele agar tetap sehat dan produktif dalam video 
              ini. Kami membahas pentingnya kualitas air, 
              faktor-faktor yang mempengaruhinya seperti pH, 
              suhu, oksigen terlarut, dan kandungan amonia.
            </p>
            <Link to="/modul2" >Baca Selengkapnya...</Link>
          </div>
        </li>
        <li className='card'>
          <div className='konten'>
            <div className='img'><img src={modul3} alt="img" draggable="false" /></div>
            <h2>Aqua Care: Solusi Cerdas untuk Manajemen Perikanan Modern</h2>
            <p>
              Aqua Care merevolusi manajemen perikanan dengan 
              teknologi canggih, termasuk pemantauan 
              real-time dan AI untuk pakan, air, serta 
              penyakit ikan. 
            </p>
            <Link to="/modul3" >Baca Selengkapnya...</Link>
          </div>
        </li>
      </ul>
      <i id='right' className='fa-solid fa-angle-right'></i>
    </div>
  );
};

export default Slide;
