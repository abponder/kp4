module.exports = function(sequelize, DataTypes) {
    const mbrTypeList = sequelize.define("mbrTypeList", {
        Mbr_type: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Mbr_type_grp: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Mbr_type_rpt_name: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Mbr_type_rpt_name2: {
            type: DataTypes.STRING,
            allowNull: true
            }
    });
    return mbrTypeList;
};




