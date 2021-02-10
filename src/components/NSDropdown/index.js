import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  ArrowDownLang,
  ArrowDiv,
  FormWrap,
  Icon,
  FormContent,
  TextButton,
  DropDown,
  Dropbtn,
  DropDownContent,
} from "./CFIDropdownElements";

function Menu1({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      {/* <Dropbtn>Chamber 1: Infrastructure & Disaster Risk Reduction</Dropbtn> */}
      <Dropbtn>
        <TextButton>
          Chamber 1: Infrastructure & Disaster Risk Reduction
        </TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        In parallel with the development of human society, cities have undergone
        improvement related to adaptation in response to disasters that have
        occurred. Unfortunately, the pace at which city adaptation takes place
        is not as rapid as changes in today's environment due to climate change.
        In this chamber, we will together bring our ideas on improving cities’
        resilience to the ever-growing problems of climate change.
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
      {/* <Dropbtn>Chamber 2: Resource Use & Waste Management</Dropbtn> */}
      <Dropbtn>
        <TextButton>Chamber 2: Resource Use & Waste Management</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        Waste management is a major global issue that governments face daily.
        Excessive use of raw materials leads to the overproduction of waste,
        which has had a detrimental effect on our environment. Waste reduction
        and valorization need to be taken to the next level. This chamber will
        invite us to plan future waste management in the construction industry
        through a circular economy based on the principles of designing out
        waste and pollution.
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
      {/* <Dropbtn>Chamber 3: Nature and Biodiversity</Dropbtn> */}
      <Dropbtn>
        <TextButton>Chamber 3: Nature and Biodiversity</TextButton>

        <ArrowDiv>
          <ArrowDownLang />
        </ArrowDiv>
      </Dropbtn>
      <DropDownContent>
        Historically, city development has focused primarily on “grey”
        infrastructure, increasingly disrupting cities’ natural systems which
        put communities at greater risks linked to climate change. This results
        in various problems many cities are facing, ranging from air pollution,
        water supply and quality, land subsidence, and flooding. That is why in
        this chamber, we will visualize a world that is shifting from grey to
        blue and green, solving problems using nature-based solutions.
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
      <Dropbtn>Judging Criteria:</Dropbtn>
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

const NSDropdown = () => {
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">cens</Icon> */}

        <FormContent>
          <Form action="#">
            <Menu1 />
            <Menu2 />
            <Menu3 />
            {/* <FormH1>Register your team!</FormH1> */}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default NSDropdown;
