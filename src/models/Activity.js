const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', {
    id: {
        //ID autoincremetal, no Null y llava primaria.
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            validate: {
                notEmpty : true
            }

        },
    name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty : true
            }
        },
    dificulty: {
        //Dificultad debe estar en 1 y 5
            type: DataTypes.INTEGER,
            validate : {
                min: 1,
                max: 5,
                notEmpty : true
            }
        },
    duration: {
            type: DataTypes.FLOAT,
            validate: {
                notEmpty : true
            }
        },
    season: {
        //Temporada, valida que sea una de las 4 estaciones del año.
            type: DataTypes.STRING,
            validate : {
                isIn : [['Summer', 'Autumn', 'Winter', 'Spring']],
                notEmpty : true
            }
        },
    image:{
            type: DataTypes.STRING
    }
    });
};