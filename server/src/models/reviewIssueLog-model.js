module.exports = function(sequelize, DataTypes) {
    const reviewIssueLog = sequelize.define("reviewIssueLog", {
    indexStatus: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
    audit_type: {
        type: DataTypes.STRING,
        allowNull: true
        },
    issue_id: {
        type: DataTypes.STRING,
        allowNull: true
        },
    issue: {
        type: DataTypes.STRING,
        allowNull: true
        },
    not_required: {
        type: DataTypes.STRING,
        allowNull: true
        },
    Identified: {
        type: DataTypes.STRING,
        allowNull: true
        },
    discussed: {
        type: DataTypes.STRING,
        allowNull: true
        }
    });
    return reviewIssueLog;
};