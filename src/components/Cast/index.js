import React from "react";
import { Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import RenderCard from "../RenderCard";
import GeneralLee from '../../images/cast/GeneralLee.jpeg';
import Takeshi from '../../images/cast/Takeshi.jpeg';
import Ramu from '../../images/cast/Ramu.jpeg';
import Shamu from '../../images/cast/shamu.jpeg';
import ChanguMangu from '../../images/cast/ChanguMangu.jpg';
import ChoosLee from '../../images/cast/ChoosLee.jpeg';
import SumoDoll from '../../images/cast/SumoDoll.jpeg';
import Shino from '../../images/cast/Shino.jpeg';
import JavedJaffery from '../../images/cast/Javed Jaffery.jpeg'

export default function Cast() {
    return(
        <Container>
            <Row>
                <RenderCard title={<>Hayato Tani a.k.a <i>General Lee</i></>} id="general" image={GeneralLee} cast>
                    The General who would lead the attack on the castle. His main role was to give a pep talk before the start, which was ably translated (xD) by Javed Jaffery, and doing small jobs like giving the ball to contestants in <HashLink to='/events/#Brige Ball'>Bridge Ball</HashLink> and cards in <HashLink to ='/events/#Skittles'>Skittles</HashLink>. Final Showdown was the only event in which he was an active participant.
                </RenderCard>
                <RenderCard title="Takeshi" image={Takeshi} cast>
                    Count Takeshi was the owner of the castle. To win the game, contestants had to defeat him in <HashLink to='/events/#Show Down'>Final Showdown</HashLink>.
                </RenderCard>
                <RenderCard title={<>Kibaji Tankobo a.k.a <i>Rangeela Ramu</i></>} id="ramu" image={Ramu} cast>
                    He was one of the most ruthless guards, whose face was enough to scare girls. He was mostly seen in <HashLink to='/events/#Honeycomb Maze'>Honeycomb Maze</HashLink>, where he would enjoy colouring contestants' face black.
                </RenderCard>
                <RenderCard title={<>Strong Kongou a.k.a <i>Ganja Shamu</i></>} id="shamu" image={Shamu} cast>
                    This bald headed guard was one of the most ruthless guards, who enjoyed tormenting contestants. He was often paired up with Ramu in <HashLink to='/events/#Honeycomb Maze'>Honeycomb Maze</HashLink>.
                </RenderCard>
                <RenderCard title={<>Shoji and Shoichi a.k.a <i>Changu Mangu</i></>} id="changu mangu" image={ChanguMangu} cast>
                    The real life twins were two of the most amiable guards in the show. They were mostly seen in <HashLink to='/events/#Rice Bowl Downhill'>Rice Bowl Downhill</HashLink>, where they would chant <i>"Donbura Donbura Donbura"</i> to which the participants would reply with <i>"Kokko Kokko Kokko"</i>, the meaning of which is explained <HashLink to="/about/#fun-facts">here</HashLink>. They were also seen in <HashLink to="/events/#Bridge Ball">Bridge Ball</HashLink>.
                </RenderCard>
                <RenderCard title={<>Michiru Jo a.k.a <i>Choos-Lee</i></>} id="choos lee" image={ChoosLee} cast>
                    He was another one of the most amiable guards. He was found in a variety of games, such as <HashLink to='/events/#Skittles'>Skittles</HashLink>, <HashLink to='/events/#Bridge Ball'>Bridge Ball</HashLink> and <HashLink to='/events/#Sumo Rings'>Sumo Rings</HashLink>. His funny antics often left the viewers amused. 
                </RenderCard>
                <RenderCard title="Konishiki Doll" image={SumoDoll} cast>
                    A guard dressed in a doll costume found in <HashLink to='/events/#Sumo Rings'>Sumo Rings</HashLink>. Contestants would jump up in joy on getting him as an opponent, as he was the easiest to defeat among all wrestlers because of the doll costume.
                </RenderCard>
                <RenderCard title="Shinoburyo" image={Shino} cast>
                    The strongest wrestler in <HashLink to='/events/#Sumo Rings'>Sumo Rings</HashLink> event. Drawing against him usually meant getting eliminated, as defeating this sumo wrestler was near impossible for contestants.
                </RenderCard>
                <RenderCard title="Javed Jaffery" image={JavedJaffery} cast>
                    The commentator of the show, who made watching it &times;100 times more interesting. He gave comical names almost all the characters in the show. He would often translate(xD) what they were speaking in Japanese for the viewers, by impersonating them. Despite there being so many episodes, people never got bored of his commentary as it always had something new and interesting.
                </RenderCard>
            </Row>
        </Container>
    )
}