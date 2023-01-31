import React from "react";
// import "./Hero.css";

// const Hero = () => {
// return (
//   <div className="hero-container">
//     <div className="hero-text-wrapper">
//       {/* <h1 className="hero1-h1"> I'm Britny</h1> */}

//       <h2 className="hero2-h2">
//         Web developer and Marine Veteran specializing in assisting small/mid
//         sized bussiness owners as they transition their services to online
//         platforms. For more information, visit the
//         <span>
//           <a className="hero-a" href="#contact">
//             Contact Page
//           </a>
//         </span>
//         .
//       </h2>
//     </div>
//     <div className="img-container">
//       <h1 className="hero1-h1"> I'm Britny</h1>
//       <img className="hero-img" src={img} alt="Britny" />
//     </div>
//   </div>
// );
// };

// export default Hero;
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Hero.css";
import img from "../../images/BL4.jpeg";

export default function FixedContainer() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container sx={{ bgcolor: "#a2a392", height: 390, marginTop: 6 }}>
        <Box
          sx={{
            bgcolor: "#eeebe7",
            // height: 200,
            // width: 320,
            borderRadius: 360,
            float: "right",
            marginTop: 2,
            marginRight: 22,
            position: "relative",
          }}
        >
          <img className="hero-img" src={img} alt="Britny" />
        </Box>
        <h2 className="hero2-h2">
          Web developer and Marine Veteran specializing in assisting small/mid
          sized bussiness owners as they transition their services to online
          platforms. For more information, visit the
          <span>
            {" "}
            <a className="hero-a" href="#contact">
              Contact Page
            </a>
          </span>
          .
        </h2>
      </Container>
    </React.Fragment>
  );
}
