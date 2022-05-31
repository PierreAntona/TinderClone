import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
