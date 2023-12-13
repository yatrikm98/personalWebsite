import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Form from "./components/Form";
import WorkExp from "./components/WorkExp";
const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <WorkExp/>
            <Projects />
            <Form />
            <Contact />
        </div>
    )
}

export default App;