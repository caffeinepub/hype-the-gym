import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type MembershipForm = {
    id : Nat;
    fullName : Text;
    phone : Text;
    email : Text;
    selectedPlan : Text;
    preferredStartDate : Text;
    message : ?Text;
    submissionTime : Int;
  };

  type FreeTrialForm = {
    id : Nat;
    fullName : Text;
    phone : Text;
    email : Text;
    preferredDateTime : Text;
    preferredProgram : Text;
    notes : ?Text;
    submissionTime : Int;
  };

  let membershipForms = List.empty<MembershipForm>();
  let freeTrialForms = List.empty<FreeTrialForm>();
  var nextId = 1;

  public shared ({ caller }) func submitMembershipForm(fullName : Text, phone : Text, email : Text, selectedPlan : Text, preferredStartDate : Text, message : ?Text) : async () {
    if (fullName.isEmpty() or phone.isEmpty() or email.isEmpty() or selectedPlan.isEmpty() or preferredStartDate.isEmpty()) {
      Runtime.trap("All fields except message are required");
    };

    let form : MembershipForm = {
      id = nextId;
      fullName;
      phone;
      email;
      selectedPlan;
      preferredStartDate;
      message;
      submissionTime = Time.now();
    };

    membershipForms.add(form);
    nextId += 1;
  };

  public shared ({ caller }) func submitFreeTrialForm(fullName : Text, phone : Text, email : Text, preferredDateTime : Text, preferredProgram : Text, notes : ?Text) : async () {
    if (fullName.isEmpty() or phone.isEmpty() or email.isEmpty() or preferredDateTime.isEmpty() or preferredProgram.isEmpty()) {
      Runtime.trap("All fields except notes are required");
    };

    let form : FreeTrialForm = {
      id = nextId;
      fullName;
      phone;
      email;
      preferredDateTime;
      preferredProgram;
      notes;
      submissionTime = Time.now();
    };

    freeTrialForms.add(form);
    nextId += 1;
  };

  public query ({ caller }) func getAllMembershipForms() : async [MembershipForm] {
    membershipForms.toArray();
  };

  public query ({ caller }) func getAllFreeTrialForms() : async [FreeTrialForm] {
    freeTrialForms.toArray();
  };
};
