import React from 'react'
import backrods from './images/backroads.jpg'
import spf from './images/spf.jpg'
import elderly from './images/elderly.jpg'
import MovieReviewer from './images/movieReviewer.png';

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
    <h2 className="heading">Latest <span>Projects</span></h2>

    <div className="portfolio-container">
                {/* <!-- 1st project  --> */}

      {/* <!-- <div className="portfolio-box">
        <img src="./images/socialgram.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Socialgram - Social Media Website</h4>
          <p>
            Implemented a site with Login, Register, Follow, Unfollow, Like
            and Post features
          </p>
          <a target="_blank" href="https://socialgram-by-vivek.netlify.app/"
            ><i className="bx bx-link-external"></i
          ></a>
        </div>
      </div> --> */}

                    {/* 2nd project   */}

      <div className="portfolio-box">
        <img src={backrods} alt="" />

        <div className="portfolio-layer">
          <h4>Backroads Tour Website</h4>
          <p>Made a site to browse through different tours</p>
          <a
            target="_blank"
            href="https://backroads-tour-travel-site.netlify.app/" rel="noopener noreferrer"
            ><i className="bx bx-link-external"></i
          ></a>
        </div>
      </div>

                     {/* 3rd project  */}
      <div className="portfolio-box">
        <img src={spf} alt="" />
        <div className="portfolio-layer">
          <h4>Shortest Path Finder Algorithm</h4>
          <p>
            Built a site to showcase the implementation of Dijkstra's
            algorithm
          </p>
          <a target="_blank" href="https://spf-project.netlify.app/" rel="noopener noreferrer"
            ><i className="bx bx-link-external"></i
          ></a>
        </div>
      </div>

                 {/* <!-- 4th project    --> */}

      <div className="portfolio-box">
        <img src={elderly} alt="box" />
        <div className="portfolio-layer">
          <h4>Elderly - Old Age Ecommerce Website</h4>
          <p>A Shopping site for Old Age People</p>
          <a target="_blank" href="https://elderly-ecommerce.netlify.app/"  rel="noopener noreferrer"
            ><i className="bx bx-link-external"></i
          ></a>
        </div>
      </div>

                 {/* <!-- 5th project   --> */}

      <div className="portfolio-box">
        <img src={MovieReviewer} alt="MovieReviewer" />
        <div className="portfolio-layer">
          <h4>Movie Reviewer Website</h4>
          <p>A site to review your favourite movie or series</p>
          <a target="_blank" href="https://movie-reviewer-site.netlify.app/" rel="noopener noreferrer"
            ><i className="bx bx-link-external"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PortfolioSection
