import { USER_BULK_HEADERS, DATE_FORMAT } from "./constants";

describe("USER_BULK_HEADERS", () => {
  it("should contain all expected headers", () => {
    const expectedHeaders = [
      "firstName",
      "middleName",
      "lastName",
      "gender",
      "birthDate",
      "nationality",
      "nin",
      "maritalStatus",
      "personalEmail",
      "phoneDialCode",
      "phone",
      "address",
      "addressLine2",
      "city",
      "country",
      "state",
      "postalCode",
      "linkedIn",
      "facebook",
      "instagram",
      "x",
      "bloodGroup",
      "allergies",
      "dietaryRestrictions",
      "tshirtSize",
      "name",
      "emergencyRelationship",
      "contactNoDialCode",
      "contactNo",
      "identificationNo",
      "workEmail",
      "employmentAllocation",
      "joinedDate",
      "teams",
      "primaryManager",
      "secondaryManager",
      "startDate",
      "endDate",
      "timeZone",
      "employeeType",
      "jobFamilyId",
      "jobTitleId",
      "ssn",
      "ethnicity",
      "eeo",
      "passportNo"
    ];
    expect(USER_BULK_HEADERS).toEqual(expectedHeaders);
  });

  it("should not contain duplicate headers", () => {
    const uniqueHeaders = new Set(USER_BULK_HEADERS);
    expect(uniqueHeaders.size).toBe(USER_BULK_HEADERS.length);
  });
});

describe("DATE_FORMAT", () => {
  it("should contain all expected date formats", () => {
    const expectedFormats = {
      YYYY_MM_DD_SLASH: "yyyy/MM/dd",
      YYYY_MM_DD_DASH: "yyyy-MM-dd",
      YYYY_M_D_SLASH: "yyyy/M/d",
      YYYY_M_D_DASH: "yyyy-M-d",
      MM_DD_YYYY_SLASH: "MM/dd/yyyy",
      MM_D_YYYY_DASH: "MM-d-yyyy",
      DD_MM_YYYY_SLASH: "dd/MM/yyyy",
      DD_MM_YYYY_DASH: "dd-MM-yyyy",
      MM_DD_YYYY_DASH: "MM-dd-yyyy",
      M_D_YYYY_SLASH: "M/d/yyyy",
      D_M_YYYY_SLASH: "d/M/yyyy",
      YYYY_DD_MM_SLASH: "yyyy/dd/MM",
      YYYY_DD_MM_DASH: "yyyy-dd-MM"
    };
    expect(DATE_FORMAT).toEqual(expectedFormats);
  });

  it("should have unique date format values", () => {
    const uniqueFormats = new Set(Object.values(DATE_FORMAT));
    expect(uniqueFormats.size).toBe(Object.values(DATE_FORMAT).length);
  });
});
