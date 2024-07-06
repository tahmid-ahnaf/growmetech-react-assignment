import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentState {
  [key: string]: boolean;
}

const departmentsData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default function Component2() {
  const [departmentState, setDepartmentState] = React.useState<DepartmentState>(
    {}
  );

  const handleDepartmentChange = (
    department: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const subDepartments =
      departmentsData.find((d) => d.department === department)
        ?.sub_departments || [];
    setDepartmentState((prevState) => ({
      ...prevState,
      ...subDepartments.reduce(
        (acc, sub) => ({
          ...acc,
          [`${department}-${sub}`]: event.target.checked,
        }),
        {}
      ),
      [department]: event.target.checked,
    }));
  };

  const handleSubDepartmentChange = (
    department: string,
    subDepartment: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartmentState((prevState) => ({
      ...prevState,
      [`${department}-${subDepartment}`]: event.target.checked,
    }));
  };

  const isDepartmentChecked = (department: string): boolean => {
    const subDepartments =
      departmentsData.find((d) => d.department === department)
        ?.sub_departments || [];
    return subDepartments.every(
      (sub) => departmentState[`${department}-${sub}`]
    );
  };

  const isDepartmentIndeterminate = (department: string): boolean => {
    const subDepartments =
      departmentsData.find((d) => d.department === department)
        ?.sub_departments || [];
    const checkedSubDepartments = subDepartments.filter(
      (sub) => departmentState[`${department}-${sub}`]
    );
    return (
      checkedSubDepartments.length > 0 &&
      checkedSubDepartments.length < subDepartments.length
    );
  };

  const [departmentOpenStates, setDepartmentOpenStates] = React.useState<
    Record<string, boolean>
  >({});

  const toggleVisibility = (department: string) => () => {
    setDepartmentOpenStates((prevStates) => ({
      ...prevStates,
      [department]: !prevStates[department],
    }));
  };

  return (
    <div>
      {departmentsData.map(({ department, sub_departments }) => (
        <Box key={department} sx={{ mb: 2 }}>
          <Button onClick={toggleVisibility(department)}>
            {departmentOpenStates[department] ? (
              <MenuIcon></MenuIcon>
            ) : (
              <MenuOpenIcon></MenuOpenIcon>
            )}
          </Button>
          <FormControlLabel
            label={department}
            control={
              <Checkbox
                checked={isDepartmentChecked(department)}
                indeterminate={isDepartmentIndeterminate(department)}
                onChange={(event) => handleDepartmentChange(department, event)}
              />
            }
          />
          {departmentOpenStates[department] ? (
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {sub_departments.map((subDepartment) => (
                <FormControlLabel
                  key={subDepartment}
                  label={subDepartment}
                  control={
                    <Checkbox
                      checked={
                        !!departmentState[`${department}-${subDepartment}`]
                      }
                      onChange={(event) =>
                        handleSubDepartmentChange(
                          department,
                          subDepartment,
                          event
                        )
                      }
                    />
                  }
                />
              ))}
            </Box>
          ) : (
            ""
          )}
        </Box>
      ))}
    </div>
  );
}
