//--to resolve the request and return the result---
export const handle = async ({ request, resolve }) => {
    const response = await resolve(request)

    return {
        ...reponse,
    };
};

export const getSession = (request) => {
    return {
        user: {
            id: "dfhhjf",
            name: "Tiaan",
            access: "admin",
        },
    };
};