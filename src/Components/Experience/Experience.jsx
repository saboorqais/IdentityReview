import {createStyles, Card, Group, Switch, Text, Title, Grid, Button, Box, Stack} from '@mantine/core';
import {ExperienceCard} from "./ExperienceCard/ExperienceCard.jsx";
import {useState} from "react";

const useStyles = createStyles((theme) => ({
    card: {
        width:"100%",
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



export function Experience({}) {
    const {classes} = useStyles();
    const mainData = {
        "title": "Experience",
        "description": "",
        "data": [
            {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            }, {
                "image": "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                "organization": "Facebook",
                "title": "Software Engineer",
                "from_date": "Feb 2019",
                "to_date": "Feb 2021",
                "address": "0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7",
                "author": {
                    "name": "Elsa Brown",
                    "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
            },


        ]
    }
   const [data ,setData]= useState([...mainData.data].slice(0,4))

    const items = data.map((item) => (
        <>

            <Grid.Col span={6}>

                    <ExperienceCard data={item} verified={true}/>


            </Grid.Col>



        </>


    ));

    return (
        <Card shadow={"md"} withBorder radius="md"  className={classes.card}>
            <Stack spacing={15} >
                <Title size="xl" className={classes.title} weight={500}>
                    {data.title}
                </Title>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={15}>
                    {items}
                </Grid>

                <Box className={classes.wrapper}>

                    <Box className={classes.show}>

                        {
                            data.length===mainData.data.length?(
                                <Button fullWidth variant="light"  radius="md"

                                        onClick={()=>{
                                            setData(mainData.data.slice(0,4))
                                        }
                                        }>
                                    CLick to see less
                                </Button>
                            ):<Button fullWidth variant="light"  radius="md"

                                      onClick={()=>{
                                          setData(mainData.data)
                                      }
                                      }>
                                CLick to see more
                            </Button>
                        }
                    </Box>
                </Box>
            </Stack>
        </Card>
    );
}


