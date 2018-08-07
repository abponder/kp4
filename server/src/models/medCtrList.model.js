module.exports = function(sequelize, DataTypes) {
    const medCtrList = sequelize.define("medCtrList", {
        region:  {
            type: DataTypes.STRING,
            allowNull: true
            },
        medicalCenter:  {
            type: DataTypes.STRING,
            allowNull: true
            },
        abbrv:  {
                type: DataTypes.STRING,
                allowNull: true
                }
    });
    return medCtrList;
};