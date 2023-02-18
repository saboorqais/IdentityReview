import {
    createStyles,
    Card,
    Image,
    Avatar,
    Text,
    Group,
    Badge,
    Box,
    Popover,
    Button,
    Loader,
    Container, Flex
} from '@mantine/core';
import {Icon} from '@iconify/react';
import {useDisclosure} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontWeight: 700, fontFamily: `Greycliff CF, ${theme.fontFamily}`, lineHeight: 1.2,
    },

    body: {
        width: "70%",
    }, box: {
        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    }
}));

const data = {
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
}

export function LiscenseCertificationsCard({verified}) {
    const [opened, {close, open}] = useDisclosure(false);
    const {classes} = useStyles();
    return (<Card withBorder radius="md" p={20} className={classes.card}>
        <Group>
            <Image src={data.image} height={100} width={100} radius={"md"}/>
            <div className={classes.body}>
                <Box className={classes.box}>
                    <Text className={classes.title} mt="sm">
                        {data.title}
                    </Text>
                    {
                        (verified ? <Badge size="lg" radius="xl" color="red">
                           not verified
                        </Badge> : <Loader color="yellow">Verfiying</Loader>)
                    }


                </Box>

                <Group spacing="xs">


                    <Text size="sm" color="dimmed" weight={700}>
                        Issued:  {data.from_date}  </Text>



                </Group>
                <Group spacing="">
                    <Text size="sm" color="dimmed" weight={700}>
                    Expiry:  {data.to_date}
                    </Text>




                </Group>
                <Text transform="uppercase" color="dimmed" weight={700} size="sm">
                    {data.organization}
                </Text>
                <Group spacing="" width={300}>

                    <Popover withinPortal position="bottom" withArrow shadow="md" opened={opened}>
                        <Popover.Target>
                            <Text size="xs" color="dimmed" truncate onMouseEnter={open} onMouseLeave={close}  size="sm">
                                0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7
                            </Text>
                        </Popover.Target>
                        <Popover.Dropdown sx={{pointerEvents: 'none'}}>
                            <Text size="xs" color="dimmed" truncate>
                                0xb7bcfea0af6f76d5219d024bde453ccb102c47d18256efabbd4d5ea3471369b7
                            </Text>
                        </Popover.Dropdown>
                    </Popover>

                </Group>
                <Flex justify={"flex-end"}>
                    {verified?
                        <Button  color={"teal"}  size="sm" compact uppercase>
                            Verify
                        </Button>:""}

                </Flex>


            </div>


        </Group>
    </Card>);
}
