import model from '../short/model';

const find = async (url:string) => {
    const urlOrigin = model.findOne({ urlShort: url }); 
    return urlOrigin;
}


export default {
    find
}