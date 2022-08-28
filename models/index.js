const User = require('./User');
const Post = require('./post');
//create associations for more than one post
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };
