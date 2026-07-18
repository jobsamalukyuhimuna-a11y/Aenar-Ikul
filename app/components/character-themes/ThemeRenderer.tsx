"use client";

import RoyalSideEffects from "./royal/RoyalSideEffects";
import DarkSideEffects from "./dark/DarkSideEffects";

type Props = {
  profileStyle?: string | null;
};

export default function ThemeRenderer({
  profileStyle,
}: Props) {

  console.log("================================");
  console.log("PROFILE STYLE =", profileStyle);
  console.log("================================");

  switch (profileStyle) {
    case "dark":
      return <DarkSideEffects />;

    case "royal":
      return <RoyalSideEffects />;

    default:
      return <RoyalSideEffects />;
  }
}