import { Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { IconName } from "~community/common/types/IconTypes";
import {
  mergeSx,
  removeInvalidEmailSearchCharacters,
  removeSpecialCharacters,
  validateEnvelopeSearch
} from "~community/common/utils/commonUtil";

import Icon from "../../atoms/Icon/Icon";
import styles from "./styles";

interface Props {
  placeHolder?: string;
  fullWidth?: boolean;
  setSearchTerm?: (value: string) => void;
  value?: string | null;
  label?: string;
  labelStyles?: SxProps;
  searchBoxStyles?: SxProps;
  paperStyles?: SxProps;
  autoFocus?: boolean;
  name?: string;
  "data-testid"?: string;
  isSearchIconVisible?: boolean;
}

const SearchBox: FC<Props> = ({
  placeHolder = "Search",
  fullWidth = true,
  setSearchTerm,
  value = "",
  label,
  labelStyles,
  searchBoxStyles,
  paperStyles,
  autoFocus = false,
  name = "search",
  "data-testid": testId,
  isSearchIconVisible = true
}) => {
  const theme: Theme = useTheme();

  const classes = styles(theme);
  const [searchValue, setSearchValue] = useState<string | null>(value);
  const emailAllowedSearchNames = ["contactSearch"];
  const isEnvelopeSearch = name === "envelopeSearch";
  const allowEmailCharacters = emailAllowedSearchNames.includes(name);

  useEffect(() => {
    if (value) {
      if (isEnvelopeSearch) {
        setSearchValue(validateEnvelopeSearch(value));
      } else if (allowEmailCharacters) {
        setSearchValue(removeInvalidEmailSearchCharacters(value, ""));
      } else {
        setSearchValue(removeSpecialCharacters(value, ""));
      }
    }
  }, [value, name, allowEmailCharacters, isEnvelopeSearch]);

  const searchHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const inputValue = e.target.value?.trimStart();

    if (isEnvelopeSearch) {
      const validatedValue = validateEnvelopeSearch(inputValue);
      setSearchValue(validatedValue);
      if (setSearchTerm) {
        setSearchTerm(validatedValue.trim());
      }
    } else if (allowEmailCharacters) {
      const trimmedValue = removeInvalidEmailSearchCharacters(inputValue, "");
      setSearchValue(trimmedValue);
      if (setSearchTerm) {
        setSearchTerm(
          removeInvalidEmailSearchCharacters(e.target.value?.trim(), "")
        );
      }
    } else {
      const trimmedValue = removeSpecialCharacters(inputValue, "");
      setSearchValue(trimmedValue);
      if (setSearchTerm) {
        setSearchTerm(removeSpecialCharacters(e.target.value?.trim(), ""));
      }
    }
  };

  return (
    <>
      {label && (
        <Typography lineHeight={1.5} sx={mergeSx([classes.label, labelStyles])}>
          {label}
        </Typography>
      )}
      <Paper elevation={0} sx={mergeSx([classes.paper, paperStyles])}>
        <InputBase
          sx={mergeSx([classes.inputBase, searchBoxStyles])}
          placeholder={placeHolder}
          inputProps={{
            "aria-label": "search google maps",
            "data-testid": testId
          }}
          fullWidth={fullWidth}
          onChange={searchHandler}
          value={searchValue}
          autoFocus={autoFocus}
          name={name}
          autoComplete="off"
        />
        {isSearchIconVisible && <Icon name={IconName.SEARCH_ICON} />}
      </Paper>
    </>
  );
};

export default SearchBox;
