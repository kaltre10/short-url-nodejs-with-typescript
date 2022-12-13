import model from '../short/model';

const find = async (url:string) => {
    const urlOrigin = await model.findOne({ urlShort: url }); 
    click(urlOrigin?.id, urlOrigin?.click);
    return urlOrigin;
}

const click = async (id:string, click:number = 0) => {
    click++;
    const shortUpdate = model.findOneAndUpdate({_id: id}, { click }, { new: true});
    return shortUpdate;
}


export default {
    find,
    click
}