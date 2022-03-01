interface Response {
    token: string;
    user: {
        email: string;
        password: string;
    }
}

export function signIn():Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'dijweo2genclshdlalsa2z',
                user: {
                    email: "admin",
                    password: "123"
                }
            })
        }, 1000);
    })
}