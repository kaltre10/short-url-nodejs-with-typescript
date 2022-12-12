import model from './model';

const getShort = (id:string) => {
    const short = model.findOne({ _id: id });
    return short;
}

const getShorts = (user:string) => {
    const urlShorts = model.find({user});
    console.log(urlShorts)
    return urlShorts;
}

const insertShort = (user:string, url:string, urlShort:string) => {
    const insertShort = model.create({user, url, urlShort});
    return insertShort;
}

const updateShort = (id:string, url:string, urlShort:string) => {
    const short = model.findOneAndUpdate({ _id: id }, {url, urlShort}, { new: true});
    return short;
}

const deleteShort = (id:string) => {
    const short = model.findOneAndDelete({_id: id});
    return short;
}

const click = async (id:string) => {
    const short = await getShort(id);
    let click = short?.click || 0;
    click++;
    const shortUpdate = model.findOneAndUpdate({_id: id}, { click }, { new: true});
    return shortUpdate;
}


export default {
    getShorts,
    insertShort,
    updateShort,
    deleteShort,
    click
}