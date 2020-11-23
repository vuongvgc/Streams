import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
const PageOne = () => {
    return(
        <div>
            PageOne
            <Link to="/pagetwo">Page Two</Link>
        </div>
    )
}
const PageTwo = () => {
    return(
        <div>
            PageTwo
            <button>Click me</button>
            <Link to="/">Page One</Link>

        </div>
    )
}
const App = () => {
    return(
       <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
       </div>
    )
}
export default App;