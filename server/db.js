const Sequelize = require('sequelize');

const sequelize = new Sequelize('blueBadgeProject', 'postgres', 'Programming360', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to blueBadgeProject');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;