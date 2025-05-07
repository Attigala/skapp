import { BulkUploadUser } from "~community/people/types/UserBulkUploadTypes";

import useUserBulkValidation from "./useUserBulkValidation";

describe("useUserBulkValidation", () => {
  const { isArrayOfUsersValid, isCsvValid } = useUserBulkValidation();

  const validUser: BulkUploadUser = {
    firstName: "John",
    middleName: "A",
    lastName: "Doe",
    gender: "Male",
    birthDate: "1990-01-01",
    nationality: "American",
    nin: "123456789",
    maritalStatus: "Single",
    personalEmail: "john.doe@example.com",
    phoneDialCode: "+1",
    phone: "1234567890",
    address: "123 Main St",
    city: "New York",
    country: "USA",
    state: "NY",
    linkedIn: "https://linkedin.com/in/johndoe",
    facebook: "https://facebook.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    x: "https://x.com/johndoe",
    name: "Jane Doe",
    emergencyRelationship: "Spouse",
    contactNoDialCode: "+1",
    contactNo: "0987654321",
    identificationNo: "EMP123",
    workEmail: "john.doe@work.com",
    employmentAllocation: "Full-Time",
    joinedDate: "2022-01-01",
    primaryManager: "manager@example.com",
    secondaryManager: "secondary@example.com",
    startDate: "2022-01-01",
    endDate: "2023-01-01",
    passportNo: "A1234567"
  };

  const invalidUser: BulkUploadUser = {
    ...validUser,
    firstName: "", // Invalid: empty first name
    personalEmail: "invalid-email", // Invalid: malformed email
    phone: "123", // Invalid: phone number too short
    joinedDate: "invalid-date" // Invalid: malformed date
  };

  it("should validate a valid user", () => {
    const result = isArrayOfUsersValid([validUser]);
    expect(result).toBe(true);
  });

  it("should invalidate an invalid user", () => {
    const result = isArrayOfUsersValid([invalidUser]);
    expect(result).toBe(false);
  });

  it("should validate an array of valid users", () => {
    const result = isArrayOfUsersValid([validUser, validUser]);
    expect(result).toBe(true);
  });

  it("should invalidate an array with at least one invalid user", () => {
    const result = isArrayOfUsersValid([validUser, invalidUser]);
    expect(result).toBe(false);
  });

  it("should validate a CSV with correct headers", () => {
    const validCsv = [validUser];
    expect(isCsvValid(validCsv)).toBe(false);
  });

  it("should invalidate a CSV with incorrect headers", () => {
    const invalidCsv = [{ invalidHeader: "value" }];
    expect(isCsvValid(invalidCsv as any)).toBe(false);
  });
});
