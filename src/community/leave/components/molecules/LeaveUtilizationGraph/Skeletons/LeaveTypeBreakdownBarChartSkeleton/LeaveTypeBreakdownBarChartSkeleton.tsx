import { Skeleton, Theme, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";

import LeaveTypeBreakdownMonthSelectorSkeleton from "~community/leave/components/molecules/LeaveUtilizationGraph/Skeletons/LeaveTypeBreakdownMonthSelectorSkeleton.tsx/LeaveTypeBreakdownMonthSelectorSkeleton";

import styles from "./styles";

const LeaveTypeBreakdownBarChartSkeleton = () => {
  const theme: Theme = useTheme();
  const classes = styles(theme);

  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.chartWrapper}>
        {[...Array(7)].map((_, index) => (
          <Box
            key={index}
            sx={{ ...classes.gridLine, bottom: `${(index / 6.5) * 100}%` }}
          />
        ))}
        <Stack sx={classes.barContainer}>
          {[...Array(12)].map((_, groupIndex) => (
            <Skeleton
              key={groupIndex}
              variant="rectangular"
              sx={classes.barSkeleton}
              animation="wave"
            />
          ))}
        </Stack>
      </Stack>
      <LeaveTypeBreakdownMonthSelectorSkeleton />
    </Stack>
  );
};

export default LeaveTypeBreakdownBarChartSkeleton;
