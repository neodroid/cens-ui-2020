import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  ArrowDiv,
  FormContent,
  ArrowDownLang,
  DropDown,
  Dropbtn,
  DropDownContent,
  TextButton,
} from "./CFIDropdownElements";

function Menu1({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        <TextButton>Resilient infrastructure & city systems</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        -Preparation of climate resilience plans based on present and future
        city vulnerabilities;
        <br />
        <br /> -Adapting buildings to make them more resilient to climate
        challenges <br />
        <br /> – particularly to natural disasters; <br />
        <br /> -How water supply & sanitation systems can be resilient to
        climate shocks? <br />
        <br />
        -Resilient urban transportation infrastructure;
      </DropDownContent>
    </DropDown>
  );
}
function Menu2({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        <TextButton>Nature-based solutions</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        Biophilic Design, Urban Wetlands, Urban Forests, Urban Green Space,
        Rivers, Floodplains, and more...
        <br />
        <br />
        -How can the ecological footprint of a project be reduced, and its
        beneficial environmental effects maximized?
        <br />
        <br />
        -Cost effective nature-based solution for water resource and stormwater
        management;
        <br />
        <br />
        -How to solve urban heat island problems on high-density built up areas?
        <br />
        <br />
        -Buildings as cities vital carbon sinks;
      </DropDownContent>
    </DropDown>
  );
}
function Menu3({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        <TextButton>High tech construction/advanced materials</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        Digitalization, robotics, 3D printing, artificial intelligence, and
        more...
        <br />
        <br />
        -How could new techniques and digital tools in construction help tackle
        climate challenges?
        <br />
        <br />
        -Use of innovative and eco-friendly materials, with an emphasis on
        cradle-to-cradle cycles, minimizing the consumption of water, and
        reducing waste;
        <br />
        <br />
        -Modular, prefabricated and offsite construction technology;
      </DropDownContent>
    </DropDown>
  );
}
function Menu4({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        <TextButton>Judging Criteria</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        Innovation: Is the solution innovative and original?
        <br />
        <br />
        Relevancy: Identify the problem clearly that is relevant to the
        situation
        <br />
        <br />
        Feasibility: The scalability and sustainability of the implementation
        <br />
        <br />
        Impact: Articulation of the solution and potential impact it will have
        on society
      </DropDownContent>
    </DropDown>
  );
}

const CFIDropdown = () => {
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">cens</Icon> */}

        <FormContent>
          <Form action="#">
            <Menu1 />
            <Menu2 />
            <Menu3 />
            <Menu4 />
            {/* <FormH1>Register your team!</FormH1> */}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default CFIDropdown;
