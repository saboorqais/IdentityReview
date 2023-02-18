import {
    createStyles,
    Card,
    Group,
    Switch,
    Text,
    Title,
    Grid,
    Button,
    Box,
    Stack,
    Alert,
    Breadcrumbs, Anchor
} from '@mantine/core';
import {EducationCard} from "./ExperienceCard/EducationCard.jsx";
import * as PropTypes from "prop-types";


const useStyles = createStyles((theme) => ({
    card: {
        width: "100%",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    item: {

        '& + &': {
            borderTop: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
        },
    },

    switch: {
        '& *': {
            cursor: 'pointer',
        },
    },

    title: {
        lineHeight: 1,
    },
    show: {
        display: "flex",
        justifyContent: "center",
        width: "50%"

    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100%"

    },

}));

const data = {
    "title": "Education",
    "data": []
}

function IconAlertCircle(props) {
    return null;
}

IconAlertCircle.propTypes = {size: PropTypes.number};

export function Education({}) {
    const {classes} = useStyles();
    console.log(data.data.length === 0)
    const items = data.data.length != 0 ? data.data.map((item) => (
        <>

            <Grid.Col span={6}>

                <EducationCard verified={true}/>


            </Grid.Col>


        </>


    )) : (<Alert m={10} icon={<IconAlertCircle size={16}/>} title="No Data!" style={{width:"100%"}} >
        Kindly Add data
         <Anchor href="/">
            Click to go back
        </Anchor>
    </Alert>)

    return (
        <Card shadow={"md"} withBorder radius="md" className={classes.card}>
            <Stack spacing={15}>
                <Title size="xl" className={classes.title} weight={500}>
                    {data.title}
                </Title>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={15}>
                    {items}
                </Grid>


            </Stack>
        </Card>
    );
}


