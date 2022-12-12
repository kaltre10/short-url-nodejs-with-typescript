import model from './model';

const register = (email:string, password:string) => {
    const user = model.create({email, password});
    return user;
}

const getUser = async (email:string) => {
    const user = await model.findOne({email});
    return user;
}

export default {
    register,
    getUser
}
