import mongoose from 'mongoose';
import config from '../config';

const startDB = async () => {
    try {
        await mongoose.connect(config.db.url);
        console.log(`DATA BASE RUNNING`);
      } catch (error) {
        console.log(`Error DB ${error}`);
      }
}

export = startDB;