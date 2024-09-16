"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupsButton = () => {
  return (
    <>

      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button size="sm">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
      </InputGroup>
    </>
  );
};

export default InputGroupsButton;
