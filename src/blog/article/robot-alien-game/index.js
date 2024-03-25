import MainImage from "./media/screenshot1.jpg";
import playerImage from "./media/player.png";
import aliensImage from "./media/aliens.png";
import robotsImage from "./media/robots.png";

const Body = () => {
  return (
    <article>
      <p>
        RSG is an action-strategy game, currently in development, about robots
        and aliens.
      </p>
      <h2>The Plot</h2>
      <img
        src={playerImage}
        alt="player character concept art"
        className="to-scale-image"
      />
      <p>
        You play as a roboticist named Soan, who arrived for his first day of
        work on a space station to find that it was being taken over by strange
        and hostile aliens.
      </p>

      <img
        src={robotsImage}
        alt="robot concept art"
        className="to-scale-image"
      />
      <p>
        Soan has some powerful weapons at his disposal, but his true weapon is
        his knowledge of robotics. He knows that there are a number of robots in
        operation at the station, but soon realizes that the aliens have secured
        most of the station. His challenge is to fight his way through it, room
        by room, finding robots and recruiting them for the cause.
      </p>

      <img
        src={aliensImage}
        alt="alien concept art"
        className="to-scale-image"
      />
      <h2>Gameplay</h2>
      <p>
        Each robot needs a power source, and there are a limited amount of
        rechargeable batteries on the station. This means that sometimes the
        robots can’t all fight at once and Soan has to be smart about which ones
        to bring into each battle.
      </p>
      <p>
        Each robot has a handful of major modes that can be adjusted during
        battle to control their overall strategy in the fight, and they also
        have a slew of fine-tuning settings that can be tinkered with to
        emphasize certain behaviors. Robots are built to excel at different
        jobs. Some robots are better at combat, while others are able to provide
        support such as repairing or recharging other robots on the team.
      </p>
      <p>
        Each room represents a descrete encounter, so the player can take time
        to form a battle plan in terms of which robots to use and how to
        configure them. Curiously, although the aliens are hostile, they are not
        particularly malicious–if they win a fight, they’ll let Soan and his
        team flee, fully recover, and try again.
      </p>
      <p></p>
      <h2>Technical Information</h2>
      <ul>
        <li>Development is using Java using Libgdx.</li>
        <li>
          The game engine and graphics engine are programmed from scratch.
        </li>
      </ul>
      <h3>AI</h3>
      <p>
        Both robots and aliens make decisions using an AI model built on{" "}
        <a href="https://en.wikipedia.org/wiki/A*_search_algorithm">
          A* Pathfinding
        </a>
        . AI agents run a routine that which:
      </p>

      <ul>
        <li>For each accessible destination square:</li>
        <ul>
          <li>For each ability that can be used from the square:</li>
          <ul>
            <li>
              For each target that the ability can be used on from that square:
            </li>
            <ul>
              <li>
                Calculate a score based on factors such as travel distance,
                travel risk, range, target value, current energy, current
                health, etc.
              </li>
            </ul>
            <li>Save the target with the highest score.</li>
          </ul>
          <li>Save the ability/target combo with the highest score.</li>
        </ul>
        <li>
          Choose the destination/ability/target combo with the highest score and
          use this as an action plan.
        </li>
      </ul>
    </article>
  );
};

export const data = {
  title: "About Robosector Gamma",
  mainImage: MainImage,
  mainImageAlt: "Screenshot of Robosector Gamma game",
  caption:
    "An arcade-strategy game where you play as a roboticist who must defend a space station from mysterious invaders.",
  subTitle: "",
  author: "Bryce Huhtala",
  authorLink: "/",
  publishDate: "11/11/2022",
  body: <Body />,
};

// export const Card = props => {
// 	return (
// 		<div className='blog'>
// 			<BlogCard
// 				mainImage={MainImage}
// 				caption={data.caption}
// 				title={data.title}
// 				subTitle={data.subTitle}
// 				author={data.author}
// 				authorLink={data.authorLink}
// 				publishDate={data.publishDate}
// 				body={<Body />}
// 			/>
// 		</div>
// 	);
// };
