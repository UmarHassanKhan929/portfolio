import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { lightTheme } from "./components/Theme";
import { Switch, Route } from "react-router-dom";
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import MySkillPage from './components/MySkillPage';

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
