use kp_audit;


SELECT Region, mbr_type, specialty, CPM_ID, Provider_name, StatusofFB 
FROM kp_audit.reviewstatuses
WHERE AuditorAssigned like "WILLIAMS;JANET";


SELECT Region, mbr_type, specialty, CPM_ID, Provider_name, StatusofFB 
FROM kp_audit.reviewstatuses
WHERE AuditorAssigned like "WILLIAMS;JANET" and StatusofFB like "In Progress";


SELECT Region, mbr_type, specialty, CPM_ID, Provider_name, StatusofFB 
FROM kp_audit.reviewstatuses
WHERE AuditorAssigned is Null or AuditorAssigned like "";




/* Queries below all related to Issues
===========================================================================

query for selecting list of issues/topics (before meeting w/ Dr.)
assigning each table to a letter like (a or b) to reduce typing
joins two tables with the field named "specialty" in table a to "AuditType" in table b
*/
SELECT b.specialty, a.AuditType, a.Topics
FROM topiclists as a
INNER JOIN reviewstatuses as b on b.specialty = a.AuditType;

/*
query for selecting the already previously chosen (Identified) issues     */
SELECT distinct b.indexStatus, b.issue, b.Identified, a.mbr_type, a.medicalCenter, a.CPM_Id, a.MonthReported
FROM kp_audit.reviewissuelogs as b
INNER JOIN kp_audit.reviewstatuses as a on a.indexStatus = b.indexStatus
WHERE b.indexStatus = "100101";

/*
query for appending newly chosen issues (Identified) . Note that the indexStatus should be 
equal to the one in the current view being displayed  */

INSERT INTO kp_audit.reviewissuelogs (indexStatus, audit_type, issue, Identified, discussed, createdAt, updatedAt) 
VALUES ("999101","TestMedPsych","EM-thisIsATestIssueTopic",1,0,now(),now());
	
    /* Check results 
		select * from reviewissuelogs where indexStatus like "999101";     */
		
   
/* 
query to delete record if un-selected by agent     */     
Delete from reviewissuelogs where indexStatus = "999101";
	
/* 
query to update a record from "0" not discussed to "1" discussed with Dr.     */     
UPDATE reviewissuelogs 
SET discussed = 1
WHERE indexStatus = "999101";


/* ===============================================================================================
test queries below ignore    */  
CREATE TABLE max_indexStatusTbl( max_indexStatusField VARCHAR(12) );
INSERT INTO kp_audit.max_indexStatusTbl ( max_indexStatusField) VALUES (999101);
SELECT max_indexStatusField FROM kp_audit.max_indexStatusTbl;
INSERT INTO kp_audit.max_indexStatusTbl ( max_indexStatusField) 
SELECT 1 + coalesce((SELECT max(max_indexStatusField) FROM kp_audit.max_indexStatusTbl), 0);



INSERT INTO kp_audit.reviewissuelogs (indexStatus, createdAt, updatedAt) 
SELECT max(indexStatus)+1, now(), now() FROM kp_audit.reviewissuelogs;
SELECT max(indexStatus) as indexStatus from kp_audit.reviewissuelogs;











