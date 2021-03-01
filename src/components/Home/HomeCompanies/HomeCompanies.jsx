import React from "react";
import "./index.scss";
import acoa from "../../../assets/svg/ACOA.png";
import globalSkill from "../../../assets/svg/global_skills_square.png";
import nova from "../../../assets/svg/nova-scotia-2-logo.png";

export default function HomeCompanies() {
  return (
    <section className="app-container home-companies">
      <div className="app-wrapper image-text-holder">
        <div className="image-holder"></div>

        <p className="text-holder">
          The premise is simple: Leverage global tech talent through skilled
          immigration to create a platform that supports existing small
          businesses and acts as a training ground to re-skill the local
          population.
        </p>
      </div>
      <div className="app-wrapper company-logos _flex a-center">
        <div className="text">
          <p>With the support of</p>
        </div>
        <div className="logos">
          <img src={globalSkill} alt="" srcSet="" />
          <svg
            width="110"
            height="30"
            viewBox="0 0 110 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: "luminosity" }}>
              <path
                d="M20.1444 0.391735C14.4684 1.5706 10.8445 6.06775 10.8445 11.9184C10.8881 16.8085 12.8529 20.2141 16.7824 22.2225C18.6162 23.1394 19.5331 23.3141 23.0697 23.3141C26.4317 23.3141 27.6105 23.1394 29.3133 22.3535L31.3654 21.393V15.9353V10.4339H26.5626H21.7599V12.8353V15.2367H23.8993C25.9077 15.2367 26.0387 15.2803 26.2133 16.5465C26.4753 18.293 25.9077 18.7296 23.288 18.7296C19.2275 18.7296 16.7824 16.1972 16.7824 11.9621C16.7388 6.63535 21.6725 3.66636 26.8683 5.84944C27.7415 6.19873 28.4838 6.4607 28.5274 6.41704C28.8767 6.02408 30.4922 2.53115 30.4922 2.22552C30.4922 1.70158 26.65 0.479057 24.1613 0.217087C22.9824 0.129765 21.1486 0.173426 20.1444 0.391735Z"
                fill="#5E5E5E"
              />
              <path
                d="M36.8668 0.260763C36.7358 0.391748 36.6048 5.63114 36.6048 11.8311V23.0958H39.4428H42.2808V17.2888C42.2808 14.1452 42.4555 11.7001 42.6301 11.9621C42.8048 12.1804 45.2498 14.6254 48.0005 17.3325L53.0652 22.2226L51.2751 22.6592C47.5202 23.6197 47.4766 23.5761 53.7202 26.938C57.737 29.1648 59.9201 30.0817 60.7497 29.9943L61.9286 29.8633L59.4398 27.0253L56.9948 24.1873L58.7849 24.0563C59.7891 23.969 60.6187 23.7071 60.6187 23.4451C60.6187 23.1831 59.6581 21.8733 58.4356 20.4761L56.2525 17.9437V9.16774V0.391748H53.6328H51.0131V6.06776C51.0131 9.16773 50.8822 11.7438 50.7512 11.7438C50.6202 11.7438 47.6949 9.2114 44.2893 6.15508C37.609 0.0861168 37.3034 -0.175854 36.8668 0.260763Z"
                fill="#5E5E5E"
              />
              <path
                d="M0.147358 0.915676C0.0163731 1.22131 -0.0272885 6.41704 0.0163731 12.3987L0.147358 23.3141H2.76706H5.38675V11.9621V0.610044L2.85438 0.479059C1.10791 0.391737 0.278343 0.52272 0.147358 0.915676Z"
                fill="#5E5E5E"
              />
              <path
                d="M62.3652 11.6564C62.3652 17.8564 62.4525 23.0521 62.5398 23.1395C62.6271 23.2268 63.8933 23.2704 65.2905 23.1831L67.8229 23.0085L67.6919 11.7001L67.5609 0.39175H64.9849H62.3652V11.6564Z"
                fill="#5E5E5E"
              />
              <path
                d="M72.1454 1.003C72.0144 1.30863 71.9707 2.44383 72.058 3.49171L72.189 5.41282L75.551 5.54381L78.9566 5.67479L79.0439 14.4944L79.1749 23.3141H81.7073H84.2396L84.327 14.5818L84.4143 5.84944L87.8199 5.71845L91.1818 5.58747V3.01143V0.391735H81.7946C74.1538 0.391735 72.32 0.522718 72.1454 1.003Z"
                fill="#5E5E5E"
              />
              <path
                d="M95.6353 11.8311L95.7663 23.3141H102.752H109.738L109.869 20.8254L110 18.3367L105.503 18.2057L101.006 18.0747V16.1099V14.1451L105.066 14.0142L109.083 13.8832V11.7438V9.60434L105.066 9.47335L101.006 9.34237V7.5959V5.84944L105.503 5.71845L109.956 5.58747V3.01143V0.391735H102.752H95.548L95.6353 11.8311Z"
                fill="#5E5E5E"
              />
            </g>
          </svg>

          <img src={nova} alt="" srcSet="" />
          <img src={acoa} alt="" srcSet="" />
        </div>
      </div>
    </section>
  );
}
