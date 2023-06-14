import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Form from "./components/Form";

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Form />
            <Contact />
        </div>
    )
}

export default App;