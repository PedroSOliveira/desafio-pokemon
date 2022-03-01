
export type UserNavigationProps = {
    id?: string;
    username?: string;
    birthDate?: string;
}



export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            splash: undefined;
            login: undefined;
            user: UserNavigationProps;
        }
    }
}