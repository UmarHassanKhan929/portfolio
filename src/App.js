import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { lightTheme } from "./pages/Theme";
import { Switch, Route } from "react-router-dom";
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import MySkillPage from './pages/MySkillPage';

function App() {
    return (
        <>
            <GlobalStyles />

            <ThemeProvider theme={lightTheme}>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/about" component={AboutPage}/>
                  <Route exact path="/workexperience" component={WorkExperience}/>
                  <Route exact path="/projects" component={Projects}/>
                  <Route exact path="/skills" component={MySkillPage}/>
                  
                </Switch>
            </ThemeProvider>
        </>
    );
}

export default App;
