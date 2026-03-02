public with sharing class MaintenanceRequestListAction {
  /**
   * Lists open Maintenance_Request__c records for Agentforce.
   * Returns key fields with security enforced.
   */
  @InvocableMethod
  public static List<MaintenanceRequestRecord> listOpen(
    List<ListRequest> requests
  ) {
    Integer maxResults = 200;
    if (requests != null && !requests.isEmpty()) {
      Integer candidate = requests[0] != null ? requests[0].maxResults : null;
      if (candidate != null) {
        if (candidate < 1) {
          candidate = 1;
        }
        if (candidate > 200) {
          candidate = 200;
        }
        maxResults = candidate;
      }
    }

    try {
      List<Maintenance_Request__c> records = [
        SELECT
          Id,
          Name,
          Title__c,
          Priority__c,
          Status__c,
          Type__c,
          Date_Requested__c,
          Estimated_Cost__c,
          Property__r.Name,
          Tenant__r.Name,
          Assigned_Worker__r.Name
        FROM Maintenance_Request__c
        WHERE Status__c = 'Open'
        WITH SECURITY_ENFORCED
        ORDER BY Date_Requested__c DESC, CreatedDate DESC
        LIMIT :maxResults
      ];

      List<MaintenanceRequestRecord> out = new List<MaintenanceRequestRecord>();
      for (Maintenance_Request__c mr : records) {
        MaintenanceRequestRecord r = new MaintenanceRequestRecord();
        r.recordId = mr.Id;
        r.requestNumber = mr.Name;
        r.title = mr.Title__c;
        r.priority = mr.Priority__c;
        r.status = mr.Status__c;
        r.type = mr.Type__c;
        r.dateRequested = mr.Date_Requested__c;
        r.estimatedCost = mr.Estimated_Cost__c;
        r.propertyName = mr.Property__r != null ? mr.Property__r.Name : null;
        r.tenantName = mr.Tenant__r != null ? mr.Tenant__r.Name : null;
        r.assignedWorkerName = mr.Assigned_Worker__r != null
          ? mr.Assigned_Worker__r.Name
          : null;
        out.add(r);
      }
      return out;
    } catch (Exception e) {
      // Surface a safe error for Agentforce/Flow
      throw new AuraHandledException(
        'Unable to list maintenance requests: ' + e.getMessage()
      );
    }
  }

  public class ListRequest {
    @InvocableVariable
    public Integer maxResults;
  }

  public class MaintenanceRequestRecord {
    @InvocableVariable
    public Id recordId;

    @InvocableVariable
    public String requestNumber;

    @InvocableVariable
    public String title;

    @InvocableVariable
    public String priority;

    @InvocableVariable
    public String status;

    @InvocableVariable
    public String type;

    @InvocableVariable
    public Date dateRequested;

    @InvocableVariable
    public Decimal estimatedCost;

    @InvocableVariable
    public String propertyName;

    @InvocableVariable
    public String tenantName;

    @InvocableVariable
    public String assignedWorkerName;
  }
}
