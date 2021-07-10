import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { SportsEsports, Home, Add } from "@material-ui/icons";

export const Navigation = () => {
  return (
    <BottomNavigation showLabels style={{ marginTop: "3rem" }}>
      <BottomNavigationAction label="Home" icon={<Home />} href="/" />
      <BottomNavigationAction label="New" icon={<Add />} href="/game/new" />
      <BottomNavigationAction
        label="Games"
        icon={<SportsEsports />}
        href="/game"
      />
    </BottomNavigation>
  );
};
