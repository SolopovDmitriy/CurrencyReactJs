import React, { Component } from 'react';
import './AnalogClock.scss';
import $ from 'jquery';
class AnalogClock extends Component {
    constructor(props) {
        super(props);
        this.TikTok();
    }
    TikTok() {
        // $(document).ready(function () {
        $(function() {
            var secHandPosDeg = 360 / 60; // 360 градусов / 60 делений = 6 градусов одно деление
            var minHandPosDeg = 360 / 60;
            var hourHandPosDeg = 360 / 12;

            var time = new Date();
            var currentSecHand = time.getSeconds();
            var currentMinHand = time.getMinutes();
            var currentHouHand = time.getHours();

            setHandPosition(currentSecHand, currentMinHand, currentHouHand);
            startMoving();

            function setHandPosition(secDeg, minDeg, hovDeg) {
                var remainHovDeg = (hourHandPosDeg * hovDeg) + (minDeg * 0.5);
                $('.clock-hands-box .sec-hand').css('transform', 'rotate(' + secHandPosDeg * secDeg + 'deg)');
                $('.clock-hands-box .min-hand').css('transform', 'rotate(' + minHandPosDeg * minDeg + 'deg)');
                $('.clock-hands-box .hour-hand').css('transform', 'rotate(' + remainHovDeg + 'deg)');
            }

            function startMoving() {
                var currentSec = currentSecHand;
                var currentMin = currentMinHand;
                var currentHov = currentHouHand * hourHandPosDeg + (currentMinHand * 0.5);
                setInterval(function () {
                    var nowTime = new Date();

                    currentSec += 1;
                    $('.clock-hands-box .sec-hand').css('transform', 'rotate(' + currentSec * secHandPosDeg + 'deg)');

                    if (nowTime.getSeconds() === 0) {
                        currentMin += 1;
                        $('.clock-hands-box .min-hand').css('transform', 'rotate(' + currentMin * minHandPosDeg + 'deg)');

                        currentHov += 0.5;
                        $('.clock-hands-box .hour-hand').css('transform', 'rotate(' + currentHov + 'deg)');
                    }
                }, 1000);
            }
        });
    }

    render() {
        return (
            <div class="clock-outer">
                <div class="clock-inner">
                    <div class="mins-box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="clock-hands-box">
                        <span class="hour-hand"></span>
                        <span class="min-hand"></span>
                        <span class="sec-hand"></span>
                    </div>
                    <div class="center-dot"></div>
                </div>
            </div>
        )
    }
}

export default AnalogClock;