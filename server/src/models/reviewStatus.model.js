
module.exports = function(sequelize, DataTypes) {
    const reviewStatus = sequelize.define("reviewStatus", {
        indexStatus: {
            type: DataTypes.INTEGER,
            allowNull: true
          }, 
        region: {
            type: DataTypes.STRING,
            allowNull: true
          },
        medicalCenter: {
            type: DataTypes.STRING,
            allowNull: true
          },          
        mbr_type: {
            type: DataTypes.STRING,
            allowNull: true
          },          
        specialty: {
            type: DataTypes.STRING,
            allowNull: true
          },          
        reviewType: {
            type: DataTypes.STRING,
            allowNull: true
          }, 
        CPM_Id: {
            type: DataTypes.STRING,
            allowNull: true
          },
        Provider_name: {
            type: DataTypes.STRING,
            allowNull: true
            },
        CPT_AccuracyRate: {
            type: DataTypes.STRING,
            allowNull: true
            },
        CPT_Audited: {
          type: DataTypes.STRING,
          allowNull: true
          },
        EM_Accuracy: {
          type: DataTypes.STRING,
          allowNull: true
          },
        EM_OneStepAccuracy: {
          type: DataTypes.STRING,
          allowNull: true
          },
        EM_Audited: {
          type: DataTypes.STRING,
          allowNull: true
          },
        ICD_AccuracyRate: {
          type: DataTypes.STRING,
          allowNull: true
          },
        DiagnosisAudited: {
          type: DataTypes.STRING,
          allowNull: true
          },
        CompositeAccuracyRate: {
          type: DataTypes.STRING,
            allowNull: true
            },
        MonthReported: {
          type: DataTypes.STRING,
            allowNull: true
            },
        DateDistributed: {
          type: DataTypes.DATE,
            allowNull: true
            },
        DueDate: {
          type: DataTypes.DATE,
            allowNull: true
            },
        AuditorAssigned: {
          type: DataTypes.STRING,
            allowNull: true
            },
        DateAuditorAssigned: {
          type: DataTypes.DATE,
            allowNull: true
            },
        FeedbackAuditor: {
          type: DataTypes.STRING,
            allowNull: true
            },
        DateReviewStarts: {
          type: DataTypes.DATE,
            allowNull: true
            },
        DateReviewEnds: {
          type: DataTypes.DATE,
            allowNull: true
            },
        StatusofFB: {
          type: DataTypes.STRING,
            allowNull: true
            },
        AppealsReason: {
          type: DataTypes.STRING,
            allowNull: true
            },
        FBnotProvided: {
          type: DataTypes.STRING,
            allowNull: true
            },
        NumOfAttempt: {
          type: DataTypes.STRING,
            allowNull: true
            },
        FirstFBAttemptDate: {
          type: DataTypes.DATE,
            allowNull: true
            },
        FirstFBAttemptMethod: {
          type: DataTypes.STRING,
            allowNull: true
            },
        EscalationTo: {
          type: DataTypes.STRING,
            allowNull: true
            },
        AuditorAssignedby: {
          type: DataTypes.STRING,
            allowNull: true
            },
        DateFB_Provided: {
          type: DataTypes.DATE,
            allowNull: true
            },
        DateFB_CompletedVariance: {
          type: DataTypes.DATE,
            allowNull: true
            },
        DateOfEscalation: {
          type: DataTypes.DATE,
            allowNull: true
            },
        DateAppeals: {
          type: DataTypes.DATE,
            allowNull: true
            },
        AppealApproved: {
          type: DataTypes.STRING,
            allowNull: true
            },
        Comments: {
          type: DataTypes.STRING,
            allowNull: true
            },
        CountOfEverything: {
          type: DataTypes.STRING,
            allowNull: true
            },
        CountOfComplete: {
          type: DataTypes.STRING,
            allowNull: true
            },
        CountOfIncomplete: {
          type: DataTypes.STRING,
            allowNull: true
            },
        CountOfInProgress: {
          type: DataTypes.STRING,
            allowNull: true
            },
        CountOfAppeal: {
          type: DataTypes.STRING,
            allowNull: true
            },
        BelowThreshold: {
          type: DataTypes.STRING,
            allowNull: true
            },
        FeedbackRequired: {
          type: DataTypes.STRING,
            allowNull: true
            },
        AttemptHistorical: {
          type: DataTypes.STRING,
            allowNull: true
            },
        FB_CompletedReason: {
          type: DataTypes.STRING,
            allowNull: true
            },
        ExtraFour: {
          type: DataTypes.STRING,
            allowNull: true
            },
        Extra5: {
          type: DataTypes.STRING,
            allowNull: true
            },
        Changes: {
          type: DataTypes.STRING,
            allowNull: true
            },
        VarDistToAsgn: {
          type: DataTypes.STRING,
            allowNull: true
            },
        VarAsgnToRevw: {
          type: DataTypes.STRING,
            allowNull: true
            },
        VarAsgntoComp: {
          type: DataTypes.STRING,
          allowNull: true
        },
        VarDistToComp: {
          type: DataTypes.STRING,
            allowNull: true
        }
      });
          return reviewStatus;
    };