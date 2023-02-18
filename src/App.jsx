import './App.css'
import {HeaderMain} from "./Components/Header/Header.jsx";
import {Group} from "@mantine/core";
import CardHeading from "./Components/CardHeading/CardHeading.jsx";
import Viewable from "./Components/Viewable/Viewable.jsx";
import {Experience} from "./Components/Experience/Experience.jsx";
import {Education} from "./Components/Education/Education.jsx";
import {LiscenseCertifications} from "./Components/liscenseCertifications/LiscenseCertifications.jsx";
function App() {


    return (

        <>

            <HeaderMain/>


                    <Group ml={180} mr={180}>
                        <CardHeading/>
                        <Viewable/>
                        <Experience/>
                        <Education/>
                        <LiscenseCertifications/>
                    </Group>



        </>


    )
}

export default App
