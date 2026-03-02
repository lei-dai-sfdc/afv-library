public with sharing class MaintenanceRequestUpdatePriorityAction {
  /**
   * Updates the Priority__c field on a Maintenance_Request__c record.
   * Validates against allowed picklist values.
   */
  @InvocableMethod
  public static List<UpdateResult> updatePriority(
    List<UpdateRequest> requests
  ) {
    if (requests == null || requests.isEmpty() || requests[0] == null) {
      throw new AuraHandledException('Input is required');
    }

    UpdateRequest req = requests[0];
    if (req.recordId == null) {
      throw new AuraHandledException('recordId is required');
    }
    if (String.isBlank(req.priority)) {
      throw new AuraHandledException('priority is required');
    }

    // Normalize priority input (trim and case-insensitive match)
    String input = req.priority.trim();
    Set<String> allowed = new Set<String>{
      'Low',
      'Medium',
      'High',
      'Emergency'
    };
    // Try to map case-insensitive matches to canonical labels
    String canonical = null;
    for (String a : allowed) {
      if (a.equalsIgnoreCase(input)) {
        canonical = a;
        break;
      }
    }
    if (canonical == null) {
      throw new AuraHandledException(
        'Invalid priority. Allowed values: Low, Medium, High, Emergency'
      );
    }

    try {
      // Field-level security check for Priority__c
      if (
        !Schema.SObjectType.Maintenance_Request__c.fields.Priority__c.isUpdateable()
      ) {
        throw new AuraHandledException(
          'Insufficient field permissions to update Priority'
        );
      }
      Maintenance_Request__c recordToUpdate = new Maintenance_Request__c(
        Id = req.recordId,
        Priority__c = canonical
      );
      update recordToUpdate;

      UpdateResult result = new UpdateResult();
      result.recordId = req.recordId;
      result.priority = canonical;
      result.message = 'Priority updated';
      return new List<UpdateResult>{ result };
    } catch (DmlException d) {
      throw new AuraHandledException(
        'Failed to update priority: ' + d.getDmlMessage(0)
      );
    } catch (Exception e) {
      throw new AuraHandledException(
        'Failed to update priority: ' + e.getMessage()
      );
    }
  }

  public class UpdateRequest {
    @InvocableVariable
    public Id recordId;

    @InvocableVariable
    public String priority;
  }

  public class UpdateResult {
    @InvocableVariable
    public Id recordId;

    @InvocableVariable
    public String priority;

    @InvocableVariable
    public String message;
  }
}
