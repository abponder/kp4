module.exports = function(sequelize, DataTypes) {
    const reviewCode = sequelize.define("reviewCode", {
        Region: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Strareaname: {
            type: DataTypes.STRING,
            allowNull: true
            },
        MRN: {
            type: DataTypes.STRING,
            allowNull: true
            },
        ORIG_CODE: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Aud_Recode: {
            type: DataTypes.STRING,
            allowNull: true
            },
        QA2AudCat: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Appeal: {
            type: DataTypes.STRING,
            allowNull: true
            },
        AppealReason: {
            type: DataTypes.STRING,
            allowNull: true
            },
        AppealDate: {
            type: DataTypes.DATE,
            allowNull: true
            },
        NonProviderIssue: {
            type: DataTypes.STRING,
            allowNull: true
            },
        ErrDesc: {
            type: DataTypes.STRING,
            allowNull: true
            },
        spec: {
            type: DataTypes.STRING,
            allowNull: true
            },
        aud_comments: {
            type: DataTypes.STRING,
            allowNull: true
            },
        p_random: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Provider_name: {
            type: DataTypes.STRING,
            allowNull: true
            },
        CPM_Id: {
            type: DataTypes.STRING,
            allowNull: true
            },
        mbr_type: {
            type: DataTypes.STRING,
            allowNull: true
            },
        month_desc: {
            type: DataTypes.STRING,
            allowNull: true
            },
        QA2Aud_Outcome: {
            type: DataTypes.STRING,
            allowNull: true
            },
        orig_qty: {
            type: DataTypes.STRING,
            allowNull: true
            },
        QA2Aud_Qty: {
            type: DataTypes.STRING,
            allowNull: true
            },
        codeDesc: {
            type: DataTypes.STRING,
            allowNull: true
            },
        contact_date: {
            type: DataTypes.DATE,
            allowNull: true
            },
        Unit_Discrepancy: {
            type: DataTypes.STRING,
            allowNull: true
            },
        VropiderLOS: {
            type: DataTypes.STRING,
            allowNull: true
            },
        FinalAuditorLOS: {
            type: DataTypes.STRING,
            allowNull: true
            },
        Changes: {
            type: DataTypes.STRING,
            allowNull: true
            },
        DueDate: {
            type: DataTypes.DATE,
            allowNull: true
            }
      });
          return reviewCode;
    };
    

