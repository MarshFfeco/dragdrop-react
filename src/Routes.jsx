import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from './components/Board'

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={ 
                    <DndProvider backend={HTML5Backend} >
                        <Board /> 
                    </DndProvider>
                } />
            </Routes>
        </Router>
    )
}