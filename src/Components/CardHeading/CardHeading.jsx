import React from 'react';
import {
    Card,
    Box,
    Image,
    Text,
    Badge,
    Button,
    Group,
    createStyles,
    Avatar,
    Title,
    Container,
    Slider,
    Progress
} from '@mantine/core';
import image from '../../assets/60111.jpg'
import {useState} from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        width: "100%",
        display: "flex",
    }
    ,
    titleBox: {

        minWidth: "35%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"



    },
    progressBar:{
        backgroundColor:"#8A2BE2"
    }
}));

function CardHeading(props) {
    const {classes, cx} = useStyles();
    const [value, setValue] = useState(50);
    const [endValue, setEndValue] = useState(50);
    return (
        <Card
            m={10}
            className={classes.card} p="lg" radius="md" withBorder>
            <Box>
                <Avatar radius={"xl"} src={image} sx={{width: "200px", height: "200px"}}/>

            </Box>


            <Box ml={25}
                 className={classes.titleBox}
            >
                <Title>Hi Mubashir</Title>
                <Progress color={"#8A2BE2"}  value={84.31} mt="md" size="lg" />
                <Title mt={10} size={20}>Profile Strength: <Text span>Strong</Text></Title>


            </Box>


        </Card>
    );
}

export default CardHeading;
