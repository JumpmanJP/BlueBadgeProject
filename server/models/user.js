module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allownull: false
        },
        password: {
            type: DataTypes.STRING,
            allownull: false
        },
        experiencegiver: {
            type: DataTypes.BOOLEAN,
            allownull: false
        },
        experienceseeker: {
            type: DataTypes.BOOLEAN,
            allownull: false
        },
        favorites: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allownull: true
        }
    })
    return User;
}