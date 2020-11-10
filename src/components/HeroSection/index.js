import React, { useState, useEffect } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, sethover] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [years, setYears] = useState(0);
  const [yearsInDays, setYearsInDays] = useState(0);
  const [gapDays, setGapDays] = useState(0);

  const onHover = () => {
    sethover(!hover);
  };

  var countDownDate = new Date("Jan 1, 2028 19:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds

      setYears(Math.floor(distance / (1000 * 60 * 60 * 24 * 365)));

      setDays(
        Math.floor(distance / (1000 * 60 * 60 * 24) - years * 365) - 2555
      );

      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroP>WE MUST ACHIEVE ZERO EMISSION IN:</HeroP>
        <HeroH1>
          {years} Years {days} Days {hours}h : {minutes}m : {seconds}s
        </HeroH1>
        <HeroBtnWrapper>
          <Button
            to="register"
            primary="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
