import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "@remix-run/react";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: "filled", color: "yellow" })
      .background,
    borderBottom: 0,
  },

  inner: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: "dark" }).background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export default function HeaderMenuColored() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const items = headerLinks.links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        color="yellow"
        key={item.link}
        onClick={() => navigate(item.link)}
      >
        {item.label}{" "}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={() => navigate(link.link)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={"auto"} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <img
            src={"/miticket.png"}
            style={{ paddingTop: "0rem", marginRight: "20rem" }}
          />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}

const headerLinks = {
  links: [
    {
      link: "/",
      label: "Cartelera",
    },
    {
      link: "/estrenos",
      label: "Estrenos",
    },
    {
      link: "/historial",
      label: "Historial",
    },
    {
      link: "#2",
      label: "Perfil",
      links: [
        {
          link: "/1",
          label: "1",
        },
        {
          link: "/2",
          label: "2",
        },
        {
          link: "/3",
          label: "3",
        },
      ],
    },
  ],
};
