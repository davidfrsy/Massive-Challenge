import React, { useEffect } from 'react';
import './Slide.css';
import modul1 from '../../Assets/modul1.png'
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
            <div className='img'><img src="https://img.freepik.com/free-photo/wild-mouth-white-meal-seafood_1203-6019.jpg?t=st=1718265602~exp=1718269202~hmac=cfca9f575c6a640341f10d9557e66c24b9b7a1dbc34658a07c6e89d5046a45cc&w=996" alt="img" draggable="false" /></div>
            <h2>Kandungan Gizi dan Manfaat Ikan Bawal untuk Kesehatan</h2>
            <p>
              Ikan bawal mengandung berbagai nutrisi baik, 
              seperti asam lemak omega-3, vitamin dan mineral 
              penting, serta protein
            </p>
            <Link to="/modul" >Baca Selengkapnya...</Link>
          </div>
        </li>
        <li className='card'>
          <div className='konten'>
            <div className='img'><img src="https://img.freepik.com/free-photo/close-up-hand-holding-raw-fish_23-2148295207.jpg?t=st=1718265545~exp=1718269145~hmac=93a8f5bcda93770c18a530ee117a72fc74636c14df24cfedb0a0b7502875f778&w=900" alt="img" draggable="false" /></div>
            <h2>Ikan Nila: Sumber Protein Tinggi dan Gizi Seimbang untuk Kesehatan Keluarga</h2>
            <p>
              Ikan nila adalah ikan air tawar yang 
              populer di budidaya perikanan karena 
              pertumbuhannya yang cepat dan toleransinya 
              terhadap berbagai kondisi lingkungan.
            </p>
            <Link to="/modul" >Baca Selengkapnya...</Link>
          </div>
        </li>
      </ul>
      <i id='right' className='fa-solid fa-angle-right'></i>
    </div>
  );
};

export default Slide;
