import './App.css';
import React from 'react';
import imgH1 from './img/features-1.svg';
import imgH2 from './img/features-2.svg';
import imgH3 from './img/features-3.svg';
import imgH4 from './img/features-4.svg';
import imgA1 from './img/about.jpg';
import imgA2 from './img/testimonials/testimonials-1.jpg';
import imgA3 from './img/testimonials/testimonials-2.jpg';
import imgA4 from './img/testimonials/testimonials-3.jpg';
import imgA5 from './img/testimonials/testimonials-4.jpg';
import imgA6 from './img/testimonials/testimonials-5.jpg';
import img33 from './img/why-us.jpg';
import imgT1 from './img/team/team-1.jpg';
import imgT2 from './img/team/team-2.jpg';
import imgT3 from './img/team/team-3.jpg';
import imgT4 from './img/team/team-4.jpg';
import imgT5 from './img/team/team-5.jpg';
import imgT6 from './img/team/team-6.jpg';

import {Routes, Route, Link} from 'react-router-dom';

const Nav=()=>{
  return(
 <header id="header" className="fixed-top d-flex align-items-center">
  <div className="container d-flex justify-content-between align-items-center">
    <div className="logo">
      <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    </div>
    <nav id="navbar" className="navbar">
      <ul>
      <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/About">About us</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Team">Team</Link></li>
        <li><Link to="/Contact-us">Contact us</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </div>
</header>


  )
};
const Footear=()=>{
return(<footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}><p />
  <div className="footer-newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        </div>
        <div className="col-lg-6">
          <form action method="post">
            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br />
            New York, NY 535022<br />
            United States <br /><br />
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
        </div>
        <div className="col-lg-3 col-md-6 footer-info">
          <h3>About Moderna</h3>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div className="social-links mt-3">
            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
)
};
const Home=()=>{
  return(
 <div>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Moderna</span></h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= Services Section ======= */}
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a href>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    {/* ======= Why Us Section ======= */}
    <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 video-box">
            <img src={img33}className="img-fluid" alt />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
    {/* ======= Features Section ======= */}
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <img src={imgH1} className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-4">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src={imgH2}className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <img src={imgH3} className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src={imgH4} className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>{/* End Features Section */}
  </main>{/* End #main */}
</div>
  )
};
const Aboutus=()=>{
  return(
 <main id="main">
  {/* ======= About Us Section ======= */}
  <section className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>About Us</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li>About Us</li>
        </ol>
      </div>
    </div>
  </section>{/* End About Us Section */}
  {/* ======= About Section ======= */}
  <section className="about" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={imgA1} className="img-fluid" alt />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bi bi-check2-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="bi bi-check2-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="bi bi-check2-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  </section>{/* End About Section */}
  {/* ======= Facts Section ======= */}
  <section className="facts section-bg" data-aos="fade-up">
    <div className="container">
      <div className="row counters">
        <div className="col-lg-3 col-6 text-center">
          <span className="purecounter" >232</span>
          <p>Clients</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <span className="purecounter" >521</span>
          <p>Projects</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <span className="purecounter" >1463</span>
          <p>Hours Of Support</p>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <span className="purecounter" >15</span>
          <p>Hard Workers</p>
        </div>
      </div>
    </div>
  </section>{/* End Facts Section */}
  {/* ======= Our Skills Section ======= */}
  <section className="testimonials" data-aos="fade-up">
    <div className="container">
      <div className="section-title">
        <h2>Tetstimonials</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="testimonials-carousel swiper">
        <div className="swiper-wrapper">
          <div className="testimonial-item swiper-slide">
            <img src={imgA2} className="testimonial-img" alt />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
          <div className="testimonial-item swiper-slide">
            <img src={imgA3} className="testimonial-img" alt />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
          <div className="testimonial-item swiper-slide">
            <img src={imgA4} className="testimonial-img" alt />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
          <div className="testimonial-item swiper-slide">
            <img src={imgA5} className="testimonial-img" alt />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
          <div className="testimonial-item swiper-slide">
            <img src={imgA6}className="testimonial-img" alt />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* End Ttstimonials Section */}
</main>
 )
};
const Services=()=>{
  return(
    
 <main id="main">
  {/* ======= Our Services Section ======= */}
  <section className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Our Services</h2>
        <ol>
        <li><Link to="/">Home</Link></li>
          <li>Our Services</li>
        </ol>
      </div>
    </div>
  </section>{/* End Our Services Section */}
  {/* ======= Services Section ======= */}
  <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
          <div className="icon-box icon-box-pink">
            <div className="icon"><i className="bx bxl-dribbble" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon-box icon-box-cyan">
            <div className="icon"><i className="bx bx-file" /></div>
            <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon-box icon-box-green">
            <div className="icon"><i className="bx bx-tachometer" /></div>
            <h4 className="title"><a href>Magni Dolores</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon-box icon-box-blue">
            <div className="icon"><i className="bx bx-world" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Services Section */}
  {/* ======= Why Us Section ======= */}
  <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 video-box">
          <img src={img33} className="img-fluid" alt />
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-fingerprint" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-gift" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Why Us Section */}
  {/* ======= Service Details Section ======= */}
  <section className="service-details">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="card">
            <div className="card-img">
              <img src="img/service-details-1.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Our Mission</a></h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="card">
            <div className="card-img">
              <img src="img/service-details-2.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Our Plan</a></h5>
              <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="card">
            <div className="card-img">
              <img src="img/service-details-3.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Our Vision</a></h5>
              <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
              <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="card">
            <div className="card-img">
              <img src="img/service-details-4.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Our Care</a></h5>
              <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
              <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Service Details Section */}
  {/* ======= Pricing Section ======= */}
  <section className="pricing section-bg" data-aos="fade-up">
    <div className="container">
      <div className="section-title">
        <h2>Pricing</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-4 box">
          <h3>Free</h3>
          <h4>$0<span>per month</span></h4>
          <ul>
            <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
            <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
            <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
            <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
            <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul>
          <a href="#" className="get-started-btn">Get Started</a>
        </div>
        <div className="col-lg-4 box featured">
          <h3>Business</h3>
          <h4>$29<span>per month</span></h4>
          <ul>
            <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
            <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
            <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
            <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
            <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
          </ul>
          <a href="#" className="get-started-btn">Get Started</a>
        </div>
        <div className="col-lg-4 box">
          <h3>Developer</h3>
          <h4>$49<span>per month</span></h4>
          <ul>
            <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
            <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
            <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
            <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
            <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
          </ul>
          <a href="#" className="get-started-btn">Get Started</a>
        </div>
      </div>
    </div>
  </section>{/* End Pricing Section */}
</main>

  )
};
const Team=()=>{
  return(

  <main id="main">
    {/* ======= Our Team Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Team</h2>
          <ol>
          <li><Link to="/">Home</Link></li>
            <li>Our Team</li>
          </ol>
        </div>
      </div>
    </section>{/* End Our Team Section */}
    {/* ======= Team Section ======= */}
    <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT1} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT2} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT3} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT4} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT5} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Niall Katz</h4>
                <span>Marketing</span>
                <p>Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img src={imgT6} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Demi Lewis</h4>
                <span>Financing</span>
                <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Team Section */}
  </main>
  )
};
const Contactus=()=>{
  return(
  <main id="main">
    {/* ======= Contact Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
          <li><Link to="/">Home</Link></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </section>{/* End Contact Section */}
    {/* ======= Contact Section ======= */}
    <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
    {/* ======= Map Section ======= */}
  
  </main>
  )
};


function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
       <Route  exact path="/" element={<Home />}   />
       <Route  path="/About" element={<Aboutus />}   />
       <Route  path="/Services" element={<Services />}   />
       <Route  path="/Team" element={<Team />}   />
       <Route  path="/Contact-us" element={<Contactus />}   />
     </Routes>
     <Footear />
    </div>
  );
}

export default App;
