import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {HeaderMain} from "./Components/Header/Header.jsx";
import {Box, Container, Flex} from "@mantine/core";
import CardHeading from "./Components/CardHeading/CardHeading.jsx";
import {TableContent} from "./Components/TableOfContent/TableContent.jsx";

function App() {


    return (

<>
    <HeaderMain/>
    <Box display={"flex"}>
        <CardHeading/>

    </Box>
    <TableContent/>
</>


)
}

export default App
