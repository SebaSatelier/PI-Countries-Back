const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('user', {
    id: {
        //ID autoincrementar, no Null y llave primaria
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            validate:{
                notEmpty : true
            }

        },
    email: {
        //Email de registo, valida que sea un email
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail : true,
                notEmpty : true
            }
        },
    password: {
        //Password no Null, y valida que tenga entre 6 y 10 caracteres y minimo 1 numero.
            type: DataTypes.STRING,
            validate : {
                is: /^(?=.*\d)(?=.*[a-zA-Z]).{6,30}$/,
                notEmpty : true
            }
        }
    });
}