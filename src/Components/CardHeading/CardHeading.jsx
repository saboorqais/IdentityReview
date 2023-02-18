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
    Progress,

} from '@mantine/core';
import image from '../../assets/60111.jpg'
import {useState} from 'react';

import {TiTick} from "react-icons/ti";

const useStyles = createStyles((theme) => ({
    card: {
        marginTop:"10px",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }
    ,
    titleBox: {

        maxWidth: "65%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"


    },
    progressBar: {
        backgroundColor: "#8A2BE2"
    },
    headerIconBox: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    badge: {
        display: "flex"
    },
    button :{

        display:"flex",
        direction:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    wrapper:{
        width:"100%",
        display:"flex",
        direction:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
}));
import {Carousel} from '@mantine/carousel';

function CardHeading(props) {
    const {classes, cx} = useStyles();
    const [value, setValue] = useState(50);
    const [endValue, setEndValue] = useState(50);
    const avatar = (
        <Avatar
            alt="Avatar for badge"
            size={24}
            mr={5}
            src={image}
        />
    );
    const tick = (
        <div style={{}}>
            <TiTick size={20}/>
        </div>

    )

    return (
        <Card

            className={classes.card} p="lg" radius="md" withBorder
            display={'flex'}
            direction={"column"}
        >
            <Box className={classes.headerIconBox}>
                <Box>
                    <Avatar radius={100} src={image} sx={{width: "150px", height: "150px"}}/>

                </Box>
                <Box>
                    <Badge sx={{paddingLeft: 0}} size="lg" color="teal" leftSection={avatar} >
                        Verified
                    </Badge>

                </Box>
            </Box>
            <Box display={"flex"} direction={"row"} className={classes.wrapper}>
                <Box ml={25}
                     className={classes.titleBox}
                >
                    <Title>Abdul Saboor</Title>
                    <Text>Software Engineering Student at National University of Sciences and Technology (NUST)</Text>
                </Box>
                <Box className={classes.button}>
                    <Button  radius={"lg"}>Open to</Button>
                    <Button ml={10}  radius={"lg"} variant={"outline"}>Add Section</Button>
                </Box>
            </Box>


        </Card>
    );
}

export default CardHeading;


//
// import React from 'react';
// import {
//     Card,
//     Box,
//     Image,
//     Text,
//     Badge,
//     Button,
//     Group,
//     createStyles,
//     Avatar,
//     Title,
//     Container,
//     Slider,
//     Progress
// } from '@mantine/core';
// import image from '../../assets/60111.jpg'
// import {useState} from 'react';
//
// const useStyles = createStyles((theme) => ({
//     card: {
//         width: "100%",
//         display: "flex",
//     }
//     ,
//     titleBox: {
//
//         minWidth: "35%",
//         display:"flex",
//         flexDirection:"column",
//         justifyContent:"center"
//
//
//
//     },
//     progressBar:{
//         backgroundColor:"#8A2BE2"
//     }
// }));
//
// function CardHeading(props) {
//     const {classes, cx} = useStyles();
//     const [value, setValue] = useState(50);
//     const [endValue, setEndValue] = useState(50);
//     return (
//         <Card
//             m={10}
//             className={classes.card} p="lg" radius="md" withBorder>
//             <Box>
//                 <Avatar radius={"xl"} src={image} sx={{width: "200px", height: "200px"}}/>
//
//             </Box>
//
//
//             <Box ml={25}
//                  className={classes.titleBox}
//             >
//                 <Title>Hi Mubashir</Title>
//                 <Progress color={"#8A2BE2"}  value={84.31} mt="md" size="lg" />
//                 <Title mt={10} size={20}>Profile Strength: <Text span>Strong</Text></Title>
//
//
//             </Box>
//
//
//         </Card>
//     );
// }
//
// export default CardHeading;
