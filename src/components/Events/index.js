import React from "react";
import { Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import RenderCard from '../RenderCard';
import skippingStones from '../../images/events/SkippingStones.jpg';
import bridgeBall from '../../images/events/BridgeBall.png';
import KnockKnock from '../../images/events/KnockKnock.jpeg';
import BiteTheBun from '../../images/events/BiteTheBun.jpeg';
import HoneycombMaze from '../../images/events/HoneycombMaze.jpg';
import HighRollers from '../../images/events/HighRollers.jpeg';
import SlipWay from '../../images/events/slipWay.jpeg';
import Skittles from '../../images/events/skittles.jpg';
import ShowDown from '../../images/events/ShowDown.jpeg';
import RiceBowlDownHill from '../../images/events/riceBowlDownHill.png';
import SumoRings from '../../images/events/SumoRings.jpg';

export default function Events() {
    return(
        <Container>
            <Row>
                <RenderCard title="Bite the Bun" image = {BiteTheBun} video = "https://www.youtube.com/embed/KkfokjAEsO8?start=79&end=178">
                    One of the first events of each episode. Buns wrapped in plastic are hung from wires using clips. Contestants with their hands tied behind their backs compete to grab the buns with their mouths. Number of buns are less than number of contestants, and those who get the buns prgress to next round. Naturally, the plastic may have the saliva of others on it, fondly pointed out by Javed Jaffery.
                </RenderCard>
                <RenderCard title="Knock Knock" image = {KnockKnock}>
                One of the first events of each episode. Contestants have to pass 10 sets of 8 doors to reach the pit of powder. Out of the 8 doors, only 2 are of paper and rest have wooden plank or net behind them to slow down the contestants. Once they reach the powder pit, they have to search for pink ball buried in the pit. The number of balls are less than the number of contestants, and those who get the ball progress to the next round.
                </RenderCard>
                <RenderCard title="Bridge Ball" image = {bridgeBall} video="https://www.youtube.com/embed/3ybTTlJHlQQ?start=1008&end=1247">
                    Contestants have to first obtain the golden ball from General at start of a wobbly bridge, and then cross the bridge as Changu Mangu fire incredibly high velocity balls at their body in a bid to knock them off the bridge. Contestant is eliminated if they fall off. If they drop the golden ball, they have to go back to start of bridge to get another from General.
                </RenderCard>
                <RenderCard title="High Rollers" image={HighRollers} video="https://www.youtube.com/embed/Sa3Qskk-ejA?start=732&end=869">
                    Contestants have to cross a lake by jumping over rollers suspended over the lake. It is incredibly hard to keep one's balance on these rollers, resulting in epic fails.
                </RenderCard>
                <RenderCard title="Honeycomb Maze" image={HoneycombMaze} video="https://www.youtube.com/embed/QmXM2ySPJF4?start=450&end=617">
                    Contestants have to enter and find their way to the end, avoiding the guards Rangeela Ramu and Ganja Shamu. If the contestants get caught, their face is gleefully coloured black by the Ramu-Shamu. Also, some doors open to water, on entering which one loses the game as well.
                </RenderCard>
                <RenderCard title="Rice Bowl Downhill" image={RiceBowlDownHill} video="https://www.youtube.com/embed/Tns-XzGD3x8?start=152end=107">
                    Contestants sit inside a rice bowl at top of a smooth, artificial hill. Changu-Mangu push the rice bowl down, and the contestant has to remain inside the bowl at all times, till it reaches the platform at the end of the hill and a small pond. If the contestant falls out off the bowl, he is eliminated. Changu-Mangu would often chant <i>"Donbura Donbura Donbura"</i>, to which the contestants would reply with <i>"Kokko Kokko Kokko"</i>. Meaning of this is explained <HashLink to="/about/#fun-facts">here</HashLink>. Sometimes, Choos-Lee would be present instead of Changu-Mangu.
                </RenderCard>
                <RenderCard title="Show Down" image={ShowDown} video="https://www.youtube.com/embed/2z3GayyR0IA?start=1163&end=1278">
                    This is the final challenge of the game. Contestants and the guards ride on motorised carts. In this version, contestants and guards have water guns with which they have to aim at paper rings on front of each other's cards. Contestant/guard gets disqualified if his ring is torn. If the contestants get <HashLink to="/cast/#Takeshi">Takeshi</HashLink>, they win. That however, is not an easy task, as his cart is quite faster than opponents. Also, contestants' water guns are usually no match to that of the guards. Sometimes, there are laser guns instead of water guns and they have to aim at laser sensors on the carts.
                </RenderCard>
                <RenderCard title="Skipping Stones" image = {skippingStones} video="https://www.youtube.com/embed/dKiDvlRTW8Y?start=630&end=705">
                    Contestants have to cross the lake by jumping over stones. Beware, some stones sink when trodden on!
                </RenderCard>
                <RenderCard title="Skittles" image={Skittles} video="https://www.youtube.com/embed/iTsexkg62sY?start=593&end=712">
                    10 contestants at a time line up like skittles in a bowling game, wearing skittle costume, while a guard rolls a large bowling ball at them from a height. The costume restricts the movement of legs, making it incredibly hard to maintain balance on being hit by the ball. The contestants who are able to stay on their feet win the game. The positions are decided by drawing cards from General's hands prior to the game.
                </RenderCard>
                <RenderCard title="Slip Way" image={SlipWay} video="https://www.youtube.com/embed/iTsexkg62sY?start=427&end=562">
                    Contestants have to run and lay on a surfboard, imparting enough momentum to get the board to touch the green arrow, but not too much that the board falls over into water. If the contestant can't reach the mark, Ganja Shamu appears from underwater to push the contestant into water.
                </RenderCard>
                <RenderCard title="Sumo Rings" image={SumoRings} video="https://www.youtube.com/embed/KkfokjAEsO8?start=357&end=492">
                    Contestants have to take out a ball from a box without looking. They get a guard to wrestle with corresponding to the colour of the ball they take out.
                </RenderCard>
            </Row>
        </Container>
    )
}