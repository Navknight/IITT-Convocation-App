import { Redirect, router, useFocusEffect } from "expo-router";
import React, { useEffect } from "react";

export default function Redir() {
  return <Redirect href="/(tabs)/home" />;
}
