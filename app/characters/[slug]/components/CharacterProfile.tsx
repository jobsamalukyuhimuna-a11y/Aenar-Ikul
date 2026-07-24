import DarkProfile from "../themes/DarkTheme";
import RoyalProfile from "../themes/RoyalTheme";
import WarriorProfile from "../themes/WarriorTheme";
import DemonProfile from "../themes/DemonTheme";
import AncientProfile from "../themes/AncientTheme";
import CelestialProfile from "../themes/CelestialTheme";
import CorruptedProfile from "../themes/CorruptedTheme";

export type Character = {
  id: number;

  slug?: string | null;

  name?: string | null;

  title?: string | null;

  image?: string | null;

  description?: string | null;

  quote?: string | null;

  kingdom?: string | null;

  universe?: string | null;

  race?: string | null;

  status?: string | null;

  music?: string | null;

  profileStyle?: string | null;

  images?: {
    id: number;
    image: string;
  }[];
};

type Props = {
  character: Character;
};

export default function CharacterProfile({
  character,
}: Props) {
  const theme =
    character.profileStyle?.toLowerCase() ?? "dark";

  console.log("PROFILE STYLE =", theme);

  switch (theme) {
    case "royal":
      return (
        <RoyalProfile
          character={character}
        />
      );

    case "celestial":
      return (
        <CelestialProfile
          character={character}
        />
      );

    case "warrior":
      return (
        <WarriorProfile
          character={character}
        />
      );

    case "demon":
      return (
        <DemonProfile
          character={character}
        />
      );

    case "ancient":
      return (
        <AncientProfile
          character={character}
        />
      );

    case "corrupted":
      return (
        <CorruptedProfile
          character={character}
        />
      );

    case "dark":
    default:
      return (
        <DarkProfile
          character={character}
        />
      );
  }
} 