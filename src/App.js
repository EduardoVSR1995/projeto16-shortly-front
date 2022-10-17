import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './parts/UserContext';
import ResetStyled from './reset/reset';
import styled from 'styled-components';
import CreatCont from './CreatCont';
import { useState } from "react";
import Initial from './Initial';
import Shortly from './Shortly';
import Enter from './Enter';

export default function App() {
    const [user, setUser] = useState([]); 
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <ResetStyled />
                <Wrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Initial />} />
                            <Route path="/signup" element={<CreatCont />} />
                            <Route path='/signin' element={<Enter/>} />
                            <Route path='/Shortly' element={<Shortly />} />
                            {/*<Route path='/Novo-recebido' element={<NewValue optional={true} />} /> 
                            <Route path='/Editar-entrada' element={<ModifiValue optional={true} />} /> 
                            <Route path='/Editar-saida' element={<ModifiValue optional={false} />} />  */}
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </UserContext.Provider>
        </>
    );
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center ;
    height: 100vh;
`;