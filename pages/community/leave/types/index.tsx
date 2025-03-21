import { NextPage } from "next";
import { useRouter } from "next/router";

import ContentLayout from "~community/common/components/templates/ContentLayout/ContentLayout";
import ROUTES from "~community/common/constants/routes";
import { useTranslator } from "~community/common/hooks/useTranslator";
import LeaveTypesTable from "~community/leave/components/molecules/LeaveTypesTable/LeaveTypesTable";
import { LeaveTypeFormTypes } from "~community/leave/enums/LeaveTypeEnums";
import useProductTour from "~enterprise/common/hooks/useProductTour";
import { useCommonEnterpriseStore } from "~enterprise/common/store/commonStore";

const LeaveTypes: NextPage = () => {
  const translateText = useTranslator("leaveModule", "leaveTypes");

  const router = useRouter();

  const { ongoingQuickSetup } = useCommonEnterpriseStore((state) => ({
    ongoingQuickSetup: state.ongoingQuickSetup
  }));

  const { destroyDriverObj } = useProductTour();

  return (
    <>
      <ContentLayout
        title={translateText(["title"])}
        pageHead={translateText(["pageHead"])}
        primaryButtonText={translateText(["addLeaveBtnTxt"])}
        onPrimaryButtonClick={() => {
          router.push(
            ROUTES.LEAVE.ADD_EDIT_LEAVE_TYPES(LeaveTypeFormTypes.ADD)
          );
          destroyDriverObj();
        }}
        isDividerVisible
        id={{
          primaryBtn: "add-leave-type-btn"
        }}
        shouldBlink={{
          primaryBtn: ongoingQuickSetup.SETUP_LEAVE_TYPES
        }}
      >
        <LeaveTypesTable />
      </ContentLayout>
    </>
  );
};

export default LeaveTypes;
