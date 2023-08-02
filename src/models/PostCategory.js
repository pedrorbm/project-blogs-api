module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    postId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'post_categories',
  })

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};
