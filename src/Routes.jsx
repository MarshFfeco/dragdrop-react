import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Board from './components/Board'

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Board /> } />
                <Route path='/teste2' element="" />
            </Routes>
        </Router>
    )
}