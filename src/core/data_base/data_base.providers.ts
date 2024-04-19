import * as mongoose from 'mongoose';

export const databaseProviders = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<typeof mongoose> => {
    try {
      await mongoose.connect(process.env.db);
      console.log('Conexión a la base de datos establecida correctamente.');
      return mongoose;
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw error;
    }
  },
};
