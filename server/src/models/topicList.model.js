module.exports = function(sequelize, DataTypes) {
    const topicList = sequelize.define("topicList", {

        AuditType: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Topics: {
            type: DataTypes.STRING,
            allowNull: true
            },
        IdX: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Completed: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Active: {
            type: DataTypes.STRING,
            allowNull: true
            }
    });
        return topicList;
};
