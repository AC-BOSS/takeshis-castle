import React from "react";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import './about.css';
import map from '../../images/GameMap.jpg';

export default function About() {
    return(
        <Container className="about-container">
            <h1 className="text-center">About</h1>
            <p>
                Takeshi's Castle was a Japanese game show aired between 1986 and 1990 in Japan. Its Indian version, to which this page is dedicated, was aired on Pogo from 2005. The show featured around 100 contestants, lead by General Lee, vying to conquer the castle of Count Takeshi by going through the multiple challenges set by Shahi Guards. The player to defeat Takeshi was crowned the winner.
            </p>

            <h2>Location</h2>
            <p>
                Takeshi's Castle was filmed at TBS's Midoriyama Studios in Yokohama. The castle itself spanned about 14,000 sq. ft, roughly the size of a cricket stadium. The size of the entire game location was about 8,18,000 sq. ft. The cost of making the set was estimated at &#165; 100,000,000, which in today's date converts to about &#8377; 6,66,00,000.
                <img src={map} alt="map" />
            </p>

            <h2>Prizes</h2>
            <p>
                <strong>Winner:</strong> &#165; 1,000,000<br/>
                <strong>All participants of Show Down:</strong> &#165; 100,000<br/>
                <strong>Fighting Spirit Award:</strong> &#165; 100,000
            </p>
            <h2>Fun Facts</h2>
            <p id="fun-facts">
                <ul>
                    <li>A total of 8 contestants have won Takeshi's Castle. In comparison, 12 people have been to the moon!</li>
                    <li>The chants of <i>"Donbura Kokko"</i> in <HashLink to='/events/#Rice Bowl Downhill'>Rice Bowl Downhill</HashLink> are a reference to a scene in the popular Japanese fairy tale, Momotaro (Peach Boy). Donbura kokko is the sound made by a giant peach as it floats down the river. Momotaro bursts forth from inside the peach when an old lady and her husband try to eat it.</li>
                    <li>Injuries:
                        <ul>
                            <li>41 Broken Ribs</li>
                            <li>19 Broken Jaws</li>
                            <li>312 Bruised Chins</li>
                            <li>282 Bruised Shins</li>
                            <li>9 Knocked out</li>
                            <li>35 Concussions</li>
                            <li>276 Winded</li>
                            <li>2 Fractured Skulls</li>
                            <li>112 Black eyes</li>
                            <li>62 Torn muscles</li>
                        </ul>
                    </li>
                </ul>
            </p>
        </Container>
    )
}