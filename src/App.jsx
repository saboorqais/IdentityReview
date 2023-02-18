import './App.css'
import {HeaderMain} from "./Components/Header/Header.jsx";
import {Grid, Group} from "@mantine/core";
import CardHeading from "./Components/CardHeading/CardHeading.jsx";
import Viewable from "./Components/Viewable/Viewable.jsx";
import {Analytics} from "./Components/Analytics/Analytics.jsx";
import {Experience} from "./Components/Experience/Experience.jsx";
import {Education} from "./Components/Education/Education.jsx";
import {
    LiscenseCertifications,
} from "./Components/liscenseCertifications/LiscenseCertifications.jsx";


function App() {


    return (

        <>

            <HeaderMain/>
            <Grid ml={80} mr={80} >
                <Grid.Col span={10}>
                    <Group>
                        <CardHeading/>
                        <Viewable/>
                        <Experience/>
                        <Education/>
                        <LiscenseCertifications/>
                    </Group>

                </Grid.Col>

            </Grid>


        </>


    )
}

export default App
