import apimr from './mr';

export const Controllers = (app) => {//Todos los metodos
    app.use('/mr', apimr);//Los controladores establencen todos los metodos realizados y se mapea con tareasRouter
} 
