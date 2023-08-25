const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      }
    }, {
      underscored: true,
      timestamps: false
    });
  
    return Category;
  };
  
  module.exports = CategoryModel;