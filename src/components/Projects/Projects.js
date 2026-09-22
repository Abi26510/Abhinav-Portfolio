import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import god from "../../Assets/Projects/god killer.png";
import face from"../../Assets/Projects/Ar Face.webp";
import ChatGPT from"../../Assets/Projects/ChatGpt.webp";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Creora Dev GPT"
              description={
                <>
                  Creora Dev AI is an AI-powered conversational web application developed as an intelligent digital assistant. The platform provides users with an interactive interface for communicating with an AI model through natural-language conversations. Its design focuses on delivering a simple, responsive, and user-friendly experience while demonstrating the integration of modern web technologies with AI capabilities.
         
                  <strong>Supported Platforms:</strong> <br />
                  💻 Web 
                </>
              }
                           
            />
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Metaverse Pun City 2"
              description={
                <>
                  Pun City 2 Tour is an exciting Metaverse experience that takes you and your friends on a virtual city adventure. Explore breathtaking landmarks, roam through interactive digital streets, and immerse yourself in a stunning virtual world—all while staying connected via seamless voice chat for real-time interactions. <br /><br />
          
                  <strong>Key Features:</strong> <br />
                  🌍 <strong>Virtual City Exploration</strong> – Discover a vast, interactive digital city with endless possibilities. <br />
                  🎤 <strong>Voice Chat Integration</strong> – Communicate effortlessly with friends while exploring together. <br />
                  🤝 <strong>Social Interaction</strong> – Meet, chat, and experience the Metaverse with others in a shared space. <br />
                  🎮 <strong>Engaging Environments</strong> – Enjoy a mix of realistic and creative landscapes, offering new surprises at every turn. <br /><br />
          
                  With Pun City Tour, you can dive into the Metaverse, explore new places, and create unforgettable memories—all from the comfort of your own device! <br /><br />
          
                  <strong>Supported Platforms:</strong> <br />
                  💻 Web | 🕶 Oculus | 📱 Mobile | 🖥 PC
                </>
              }
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatGPT}
              isBlog={false}
              title="Open Ai Chat Gpt unity integration"
              description={
                <>
                  This project focuses on integrating OpenAI's ChatGPT with Unity to create an interactive AI-driven chatbot with voice-based communication. The key components include: <br /><br />
          
                  <strong>Key Features:</strong> <br />
                  🧠 <strong>ChatGPT Integration</strong> – Using OpenAI's API to process user queries and generate dynamic responses. <br />
                  🎙 <strong>Voice Input (Optional)</strong> – Implementing speech recognition to allow users to speak instead of typing. <br />
                  🔊 <strong>Text-to-Speech (TTS) Output</strong> – Converting ChatGPT's responses into natural-sounding speech using Meta TTS solutions. <br />
                  🖥 <strong>User Interface</strong> – Designing an intuitive UI for text-based fallback and conversation history. <br /><br />
          
                  This integration enhances user interaction, making AI-driven conversations more engaging and accessible in Unity applications.
                  <strong>Supported platforms:</strong> <br /><br />
💻 Web | 🕶 Oculus | 📱 Mobile | 🖥 PC
                </>
              }
              
            />
          </Col>

         <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="Metaverse Fusion City"
    description={
      <>
        Fusion City Tour is a dynamic Metaverse experience that lets you embark on a virtual city tour with your friends. Join the adventure, explore different landmarks, and immerse yourself in the stunning virtual world, all while staying connected through voice chat to share the experience in real-time. <br /><br />

        <strong>Key Features:</strong> <br /><br />
        🌍 Virtual City Exploration – Roam around a fully interactive digital city with endless possibilities. <br /><br />
        🎤 Voice Chat Integration – Stay connected with friends using seamless voice communication during the tour. <br /><br />
        🤝 Social Interaction – Explore, discover, and chat with others in a shared, immersive Metaverse space. <br /><br />
        🎮 Engaging Environment – Experience a blend of realistic and creative landscapes, offering something new at every corner. <br /><br />

        With Fusion City Tour, you can dive into the Metaverse, discover new places, and create lasting memories with your friends—all from the comfort of your own space!<br /><br />

<strong>Supported platforms:</strong> <br /><br />
💻 Web | 🕶 Oculus | 📱 Mobile | 🖥 PC
      </>
    }
    
  />
</Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="VAK Hotel"
              description="Discover comfort and convenience at VAK Hotel, your perfect getaway destination. Our website offers an easy-to-navigate platform where you can explore a range of luxurious rooms, top-notch amenities, and exclusive deals designed to make your stay unforgettable. Whether you're traveling for business or leisure, we provide a seamless booking experience, ensuring a hassle-free stay from start to finish. Visit us today at hotel.creativedeveloper.in and book your next memorable escape with us!"
              
              
            />
          </Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="Metaverse Pun City 1"
    description={
      <>
        <strong>Welcome to Pun City Tour – Your Ultimate Metaverse Adventure!</strong> <br /><br />
        
        Step into Pun City Tour, a vibrant Metaverse experience where you and your friends can explore a dynamic virtual city together. Walk through stunning landscapes, visit iconic landmarks, and discover hidden gems—all while staying connected with real-time voice chat for an interactive social experience. <br /><br />

        <strong>Why You’ll Love It:</strong> <br />
        🚶‍♂️ <strong>Explore Freely</strong> – Wander through an immersive digital city designed for endless adventure. <br />
        🗣 <strong>Talk & Connect</strong> – Voice chat with friends in real time as you explore together. <br />
        🌟 <strong>Meet & Interact</strong> – Engage with other explorers and make new connections in the Metaverse. <br />
        🎭 <strong>A World of Surprises</strong> – Experience a mix of realism and creativity with unique environments. <br /><br />

        <strong>Play Anytime, Anywhere:</strong> <br />
        🔹 Available on:<br /> 💻 Web | 🕶 Oculus | 📱 Mobile | 🖥 PC
      </>
    }
    
  />
</Col>

          


         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="VR Interior painting"
              description={
                <>
                  Experience the future of interior design with VR Interior Painting! Our innovative approach allows you to visualize and customize your space before a single drop of paint is applied. <br /><br />
                  With immersive virtual reality technology, you can explore different colors, textures, and finishes in real-time, ensuring the perfect look for your home or office. <br /><br />
                  Say goodbye to guesswork and hello to confidence in your design choices. <br /><br />
                  Whether you're refreshing a single room or redesigning an entire space, VR Interior Painting brings your vision to life with precision and creativity. <br /><br />
                  See it. Love it. Paint it.
                </>
              }
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="VR Lab Inspection"
              description={
                <>
                  VR Lab Inspection is an innovative educational platform designed to teach students and professionals about laboratory equipment in an immersive virtual environment. Using virtual reality, this app enhances learning by allowing users to interact with lab instruments, understand their functions, and practice safe handling techniques—all without the risks of a real lab. <br /><br />
                  
                  <strong>Key Features:</strong> <br /><br />
                  🔬 Hands-on Virtual Experience – Engage with 3D models of lab equipment in a realistic VR setting. <br /><br />
                  📚 Comprehensive Learning Modules – Detailed instructions, interactive quizzes, and guided tutorials for each instrument. <br /><br />
                  🛠️ Safe & Risk-Free Training – Learn to operate equipment without real-world hazards. <br /><br />
                  🌍 Accessible Anytime, Anywhere – Train remotely without needing physical lab access.
                </>
              }              
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AR Interior Table Visualizer "
              description="The AR Interior Table Visualizer is a cutting-edge app designed to revolutionize the way you visualize and design your living spaces. Using Augmented Reality (AR) technology, this tool allows you to place and arrange virtual tables in your real-world environment, all through your smartphone or tablet. Whether you're shopping for furniture or experimenting with layout ideas, the AR Interior Table Visualizer makes it easy to see how a table will look and fit in any room, before making a purchase."
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={god}
              isBlog={false}
              title="God killer "
              description={<>
              God Killer is a thrilling third-person action-adventure game that follows a relentless warrior on a path of vengeance. After losing her family to the wrath of the gods, she embarks on a brutal journey to challenge their dominion, unravel ancient secrets, and forge her own destiny. With intense combat, immersive storytelling, and a world steeped in mythology, God Killer delivers an epic experience where revenge is just the beginning.
              </>
              }
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Mask"
              description={<>
              "Face Mask" is an innovative AR application built using the XR Interaction Toolkit, designed to bring real-time face tracking to life. Utilizing advanced augmented reality technology, the app seamlessly maps virtual masks, filters, and effects onto users' faces with high precision. Whether for fun, creative expression, or interactive experiences, Face Mask delivers a smooth and immersive AR experience, pushing the boundaries of face tracking technology.
              </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
