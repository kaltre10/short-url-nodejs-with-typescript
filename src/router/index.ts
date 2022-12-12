import { Router } from 'express';
import { readdirSync } from 'fs';

const dataPath = readdirSync(__dirname);
const cleanPath = (path:string) => path.split('.').shift();
const route = Router();

dataPath.forEach(path => {
    if(path === 'index.ts') return;
    let pathRouter =  cleanPath(path);
    import(`./${pathRouter}`)
        .then(module => route.use(`/api/${pathRouter}`, module.default) );
})

export default route;