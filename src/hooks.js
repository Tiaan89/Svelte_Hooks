//Hooks (handle, handleError and getSession)
//--You haveto resolve the request and return the result---
//handle runs on all requests

// export const handle = async ({ request, resolve }) => {
//    request.locals.userName = "Tiaan"
//     const response = await resolve(request)
//      response.auth = "good";
//
//     return {
//         ...reponse,
//      headers: {
//          ...response.headers,    
//          "hello-world": "hey programmer"
//          },
//     };
// };

//Updating apps 

export const handle = async ({event, resolve}) => {
    const response = await resolve(event)

    return {
        ...response,
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