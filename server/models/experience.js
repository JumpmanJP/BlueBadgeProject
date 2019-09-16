module.exports = (sequelize, DataTypes) => {
    const experience = sequelize.define('experience', {
        locationOfExperience: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerOfExperience: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        reviewsOfExperience: {
            type: DataTypes.STRING,
            allowNull: true
        },
        likesOfExperience: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return experience;
}