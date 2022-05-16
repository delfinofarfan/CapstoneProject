import html from "html-literal";
import bioPic from "../../assets/img/profilepicture.jpeg";

export default () => html`
  <section>
    <h1>ABOUT US</h1>
    <p id="about">
      Farfan Fantasy Football was created by myself, Delfino Farfan. I'm a
      graduate of Texas A&M University, and studied Leadership Education and
      Development with a minor in Sports Management. I've enjoyed football since
      I was introduced to the game at a young age, but now I find myself viewing
      the sport more often than I play it. As a spectator I crave interaction,
      and Fantasy Football has allowed me to feel more connected to the game I
      enjoy so much! I soon realized that I was not as competitive as I had
      hoped to be, and my biggest shortcoming was not properly evaluating
      talent. I found I was unable to properly evaluate talent due to a lack of
      available time. Although I enjoy Fantasy Football it couldn't be
      prioritized over other responsibilities (ex.lawn work, job, kids, etc.)
      and that's when Farfan Fantasy Football was born. Farfan Fantasy Football
      was created to help Fantasy Football players that want an advantage over
      their league mates, but can't pour through the film/data themselves.
      Farfan Fantasy Football provides the best of both world and has scores for
      incoming rookies based on both film and metrics.
    </p>
    <img src="${bioPic}" alt="me" />
  </section>
`;
