import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0 0.49803921568627"></fefuncr>
              <fefuncg type="table" tableValues="0 0.49803921568627"></fefuncg>
              <fefuncb type="table" tableValues="0 0.49803921568627"></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0 1"></fefuncr>
              <fefuncg type="table" tableValues="0 1"></fefuncg>
              <fefuncb type="table" tableValues="0 1"></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              ></fefuncr>
              <fefuncg type="table" tableValues="0 1"></fefuncg>
              <fefuncb
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              ></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0 1"></fefuncr>
              <fefuncg type="table" tableValues="0 0.27843137254902"></fefuncg>
              <fefuncb
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              ></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0 0"></fefuncr>
              <fefuncg type="table" tableValues="0 0.64705882352941"></fefuncg>
              <fefuncb type="table" tableValues="0 1"></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0.78039215686275 1"></fefuncr>
              <fefuncg type="table" tableValues="0 0.94901960784314"></fefuncg>
              <fefuncb
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              ></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              ></fefuncr>
              <fefuncg type="table" tableValues="0 1"></fefuncg>
              <fefuncb
                type="table"
                tableValues="0.44705882352941 0.4"
              ></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style="
        visibility: hidden;
        position: absolute;
        left: -9999px;
        overflow: hidden;
      "
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <fecolormatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></fecolormatrix>
            <fecomponenttransfer color-interpolation-filters="sRGB">
              <fefuncr type="table" tableValues="0.098039215686275 1"></fefuncr>
              <fefuncg type="table" tableValues="0 0.66274509803922"></fefuncg>
              <fefuncb
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              ></fefuncb>
              <fefunca type="table" tableValues="1 1"></fefunca>
            </fecomponenttransfer>
            <fecomposite in2="SourceGraphic" operator="in"></fecomposite>
          </filter>
        </defs>
      </svg>
      <a
        class="skip-link screen-reader-text"
        href="https://websitedemos.net/earth-store-02/#content"
        role="link"
        title="Skip to content"
      >
        Skip to content
      </a> */}
      <div className="hfeed site" id="page">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Main;
