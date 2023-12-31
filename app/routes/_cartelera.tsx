import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import HeaderMenuColored from "~/routes/header.comp";
export default function Layout() {
  return (
    <AppShell
      header={<HeaderMenuColored />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
          width: "100vw",
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
