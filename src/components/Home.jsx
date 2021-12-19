import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="/img/model-s.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="/img/model-y.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/img/model-3.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="/img/model-x.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="/img/solar-panel.jpg"
        leftButton="ORDER NOW"
        rightButton="LEARN MORE"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="/img/solar-roof.jpg"
        leftButton="ORDER NOW"
        rightButton="LEARN MORE"
      />
         <Section
        title="Accessories"
        backgroundImg="/img/accessories.jpg"
        leftButton="SHOP NOW"
  
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
