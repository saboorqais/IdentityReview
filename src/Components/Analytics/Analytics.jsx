import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    cardFor: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        width:"100%"
    },

    label: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        lineHeight: 1,
    },

    lead: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 1,
    },

    inner: {
        display: 'flex',
        [theme.fn.smallerThan(350)]: {
            flexDirection: 'column',
        },
    },

    ring: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',

        [theme.fn.smallerThan(350)]: {
            justifyContent: 'center',
            marginTop: theme.spacing.md,
        },
    },
}));

const data ={
    "title": "Analytics",
    "completed": 1887,
    "total": 2334,
    "stats": [
        {
            "value": 447,
            "label": "Impressions"
        },
        {
            "value": 76,
            "label": "Profile Visit"
        }
    ]
}

export function Analytics({ title, completed, total, stats }) {
    const { classes, theme } = useStyles();

    const items =data.stats.map((stat) => (
        <div key={stat.label}>
            <Text className={classes.label}>{stat.value}</Text>
            <Text size="xs" color="dimmed">
                {stat.label}
            </Text>
        </div>
    ));

    return (
        <Card mt={10} ml={10} withBorder shadow={"sm"} radius="lg" className={classes.cardFor}>
            <div className={classes.inner}>
                <div>
                    <Text size="xl" className={classes.label}>
                        {data.title}
                    </Text>
                    <div>
                        <Text className={classes.lead} mt={30}>
                            {completed}
                        </Text>
                        <Text size="xs" color="dimmed">
                            Completed
                        </Text>
                    </div>
                    <Group mt="lg">{items}</Group>
                </div>

                <div className={classes.ring}>
                    <RingProgress
                        roundCaps
                        thickness={6}
                        size={150}
                        sections={[{ value: (data.completed / data.total) * 100, color: theme.primaryColor }]}
                        label={
                            <div>
                                <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                                    {((data.completed / data.total) * 100).toFixed(0)}%
                                </Text>
                                <Text align="center" size="xs" color="dimmed">
                                    Completed
                                </Text>
                            </div>
                        }
                    />
                </div>
            </div>
        </Card>
    );
}
