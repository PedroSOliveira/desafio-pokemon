import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/Auth";

import { Alert } from "react-native";

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isLogging: boolean;
  loading: boolean;
  user: object | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<object | null>(null);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert("Login", "Campos vazios!!");
    }

    const response = await auth.signIn();
    const { user, token } = response;

    if (email !== user.email || password !== user.password) {
      return Alert.alert("Login", "Crendenciais inválidas!");
    }

    setUser(user);

    await AsyncStorage.setItem("@POKAuth:user", JSON.stringify(user));
    await AsyncStorage.setItem("@POKAuth:token", token);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => setUser(null));
  };

  const loadStorageData = async () => {
    const storagedUser = await AsyncStorage.getItem("@POKAuth:user");
    const storagedToken = await AsyncStorage.getItem("@POKAuth:token");

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, isLogging: !!user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
