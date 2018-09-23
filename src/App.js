import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import audio from './audio/audio'
import $ from "jquery";

class App extends Component {
    constructor(props) {
        super(props);
        const that = this;
        that.chosenStyle = "style1";
    }

    componentDidMount() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const audio = document.getElementById('myAudio');
        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaElementSource(audio);
        const frequencyData = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.getByteFrequencyData(frequencyData);
        const that = this;

        const draw = {
            style1 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#191919";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                const center_x = canvas.width / 2;
                const center_y = canvas.height / 2;

                let intensity = 0;
                let bar_x_term = 0;
                let bar_y_term = 0;
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + item + ", " + i + ", " + item + ")";
                    const rads = Math.PI * 2 / 200;
                    const bar_height = Math.min(99999, Math.max((item * 2.5 - 200), 0));
                    const bar_width = bar_height * 0.02;

                    bar_x_term = center_x + Math.cos(rads * i) * item;
                    bar_y_term = center_y + Math.sin(rads * i) * item;

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(center_x, center_y);
                    ctx.lineTo(bar_x_term, bar_y_term);
                    ctx.stroke();

                    intensity = +bar_height;

                });
            },
            style2 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#191919";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + item + ", " + i + ", " + i + ")";

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(canvas.width / 2, 0);
                    ctx.lineTo(i, (canvas.width - item));
                    ctx.stroke();

                });
            },
            style3 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#191919";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + i + ", " + item + ")";

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(i, canvas.height);
                    ctx.lineTo(i, (canvas.height - item));
                    ctx.stroke();

                })
            },
            style4 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                const center_x = canvas.width / 2;
                const center_y = canvas.height / 2;

                let bar_x_term = 0;
                let bar_y_term = 0;
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + item + ", " + Math.floor(Math.random() * 256) + ", " + i + ")";
                    const lineColor1 = "rgb(" + i + ", " + Math.floor(Math.random() * 256) + ", " + item + ")";
                    const lineColor2 = "rgb(" + item + ", " + i + ", " + i + ")";
                    const lineColor3 = "rgb(" + i + ", " + item + ", " + i + ")";

                    const rads = Math.PI * 2 / 100;

                    bar_x_term = center_x + Math.cos(rads * i) * item * i;
                    bar_y_term = center_y + Math.sin(rads * i) * item * i;

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(center_x * 2, center_y * 2);
                    ctx.lineTo(bar_x_term / 2, bar_y_term);
                    ctx.stroke();


                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor1;
                    ctx.beginPath();
                    ctx.moveTo(0, center_y * 2);
                    ctx.lineTo(bar_x_term * 2, bar_y_term);
                    ctx.stroke();

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor2;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(bar_x_term * 2, bar_y_term);
                    ctx.stroke();

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = lineColor3;
                    ctx.beginPath();
                    ctx.moveTo(center_x * 2, 0);
                    ctx.lineTo(bar_x_term * 2, bar_y_term);
                    ctx.stroke();
                });
            },
            style5 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                const center_x = canvas.width / 2;
                const center_y = canvas.height / 2;

                let intensity = 0;
                let bar_x_term = 0;
                let bar_y_term = 0;
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + i + ", " + Math.floor(Math.random() * 256) + ", " + item + ")";
                    const rads = Math.PI * 2 / 200;
                    const bar_height = Math.min(99999, Math.max((item * 2.5 - 200), 0));
                    const bar_width = bar_height * 0.02;

                    bar_x_term = center_x + Math.cos(rads * i) * item * i;
                    bar_y_term = center_y + Math.sin(rads * i) * item * i;

                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.arc(center_x, center_y, item, 0, 2 * Math.PI);
                    ctx.stroke();

                    intensity = +bar_height * 5;

                });
            },
            style6 : function(arr) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                const center_x = canvas.width / 2;
                const center_y = canvas.height / 2;

                let intensity = 0;
                let bar_x_term = 0;
                let bar_y_term = 0;
                arr.forEach(function(item, i) {
                    const lineColor = "rgb(" + i + ", " + Math.floor(Math.random() * 256) + ", " + item + ")";
                    const rads = Math.PI * 2 / 200;
                    const bar_height = Math.min(99999, Math.max((item * 2.5 - 200), 0));
                    const bar_width = bar_height * 0.02;

                    bar_x_term = center_x + Math.cos(rads * i) * item * i;
                    bar_y_term = center_y + Math.sin(rads * i) * item * i;

                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.arc(bar_x_term, bar_y_term, i, 0, 2 * Math.PI);
                    ctx.stroke();

                    intensity = +bar_height * 5;

                });
            }
        };


        const renderFrame = function() {
            requestAnimationFrame(renderFrame);
            // update data in frequencyData
            analyser.getByteFrequencyData(frequencyData);
            // render frame based on values in frequencyData
            draw[that.chosenStyle](frequencyData);
        };

        const audioplay = function() {
            renderFrame();
            var currentSong = 0;
            $("#myAudio")[0].src = $("#playlist li a")[0];
            $("#myAudio")[0].play();
            $("#playlist li a").click(function(e) {
                debugger
                e.preventDefault();
                $("#myAudio")[0].src = this;
                $("#myAudio")[0].play();
                $("#playlist li").removeClass("current-song");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-song");


            });

            $("#styleList li a").click(function(e) {
                e.preventDefault();
                $("#styleList li").removeClass("current-style");
                $(this).parent().addClass("current-style");
            });

            $("#myAudio")[0].addEventListener("ended", function() {
                currentSong++;
                if(currentSong === $("#playlist li a").length) {
                    currentSong = 0;
                }

                $("#playlist li").removeClass("current-song");
                $("#playlist li :eq(" + currentSong + ")").parent().addClass("current-song");
                $("#myAudio")[0].src = $("#playlist li a")[currentSong].href;
                $("#myAudio")[0].play();
            })
        };
        audioplay();
    }

    renderList() {
        return <div>
            <ul id="playlist">
                <li>
                    <a href={audio.panda}>Designer-Panda</a>
                </li>
                <li>
                    <a href={audio.four}>JJ -Still</a>
                </li>
                <li>
                    <a href={audio.gangsta}>Kehlani-Gangsta</a>
                </li>
                <li>
                    <a href={audio.five}>Marilyn Manson-Sweet Dreams</a>
                </li>
                <li>
                    <a href={audio.sea}>Okean Elzi-YA tak hochu</a>
                </li>
            </ul>
        </div>
    }

    renderStyle() {
        return <ul id="styleList">
            <li className="current-style">
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style1";
                }}>Star style</a>
            </li>
            <li>
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style2";
                }}>Pyramid style</a>
            </li>
            <li>
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style3";
                }}> Wave style </a>
            </li>
            <li>
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style4";
                }}> Disco style</a>
            </li>
            <li>
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style5";
                }}>Vinyl style</a>
            </li>
            <li>
                <a href="#" onClick={e => {
                    const that = this;
                    that.chosenStyle = "style6";
                }}> Bow style</a>
            </li>
        </ul>;
    }

    render() {
        const that = this;
        return (
            <div className="App">
                {that.renderList()}
                <div>
                    <audio id="myAudio" style={{width : "100%", margin : "20px 0"}} controls/>
                    <canvas id="canvas" height="500" width="800"/>
                </div>
                {that.renderStyle()}
            </div>
        );
    }
}

export default App;
