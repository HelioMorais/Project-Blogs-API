const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE
      },
      updated: {
        type: DataTypes.DATE
      }
    }, {
      underscored: true,
      tableName: 'blog_posts',
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated'
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(
        models.User, 
        {foreignKey: 'userId', as: 'user'}
      )
    }
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;