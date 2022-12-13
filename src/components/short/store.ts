import model from './model';

const getShorts = (user:string) => {
    const urlShorts = model.find({user});
    console.log(urlShorts)
    return urlShorts;
}

const insertShort = (user:string, url:string, urlShort:string) => {
    const insertShort = model.create({user, url, urlShort});
    return insertShort;
}

const deleteShort = (id:string) => {
    const short = model.findOneAndDelete({_id: id});
    return short;
}


export default {
    getShorts,
    insertShort,
    deleteShort,
}