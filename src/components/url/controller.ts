import store from './store';

const find = async (url:string) => {
    try {
        const short = await store.find(url);
        return short;
    } catch (error) {
        console.log(error);
    }
}

export default {
    find,
}