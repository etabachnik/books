import {ApiGateway as httpGateway} from "./apiGateway";

export const GetBooks = async () => {
    try
    {
        const booksDto = await httpGateway.get("/");
        return booksDto;
    }
    catch(e){
        ///put to logger
    }
}

export  const addBook = async ({ name, author }) => {
    try{
        const bookAddDto = await httpGateway.post("/books", { name, author });
        return bookAddDto && bookAddDto.status === "ok" ? true : false;
    }
    catch(e){
        ///put to logger
    }
}

export  const addPrivateBook = async ({ name, author }) => {
    try{
    const bookAddDto = await httpGateway.post("/books", { name, author });
    return bookAddDto && bookAddDto.status === "ok" ? true : false;
    }
    catch(e){
        ///put to logger
    }
}


export  const addUser = async ({ name, email }) => {
    try{
        const userAddToken = await httpGateway.post("/user", { name, email });
        if(!localStorage.getItem('token'))
        {
            localStorage.setItem('token',token);
        }
        return userAddToken && userAddToken.status === "ok" ? true : false; ;
        }
    catch(e){
        ///put to logger
        return null;
    }
}

