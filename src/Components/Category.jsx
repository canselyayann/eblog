import React from 'react'



export default function Category() {
  return (
    <div>
      <section className="eblog-top-category-area">
        <div className="container">
            <div className="section-title-area">
                <h3 className="section-title text-center">Top Category</h3>
            </div>
            <div className="section-inner">
                <div className="swiper tp-trendingSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="category-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/category/category-07.jpg" alt=""/>
                                    </a>
                                    <div className="content-area">
                                        <p className="title">Life Style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="category-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/category/category-08.jpg" alt=""/>
                                    </a>
                                    <div className="content-area">
                                        <p className="title">Life Style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="category-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/category/category-09.jpg" alt=""/>
                                    </a>
                                    <div className="content-area">
                                        <p className="title">Life Style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="category-wrapper">
                                <div className="image-area">
                                    <a href="#">
                                        <img src="/images/category/category-10.jpg" alt=""/>
                                    </a>
                                    <div className="content-area">
                                        <p className="title">Life Style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination2"></div>
        </div>
    </section>
    </div>
  )
}