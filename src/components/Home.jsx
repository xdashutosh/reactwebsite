import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>

    <div className="home">
        <main>
            <h1>ASHU.TECH</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

<div className="home2">
<img src={vg} alt="graphics"/>

<div>
<p>we are your one and only solution to the teach problems
    you face everyat. we aew leading tech company whose aim is to increase the problem 
    solving ability in children.
</p>
</div>

</div>

<div className="home3" id="about">
  <div>
  <h1>who we are?</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus perspiciatis praesentium, in quod non aliquid veritatis alias cupiditate magnam fugit sapiente natus tempore nisi debitis voluptatem nobis dolor laborum mollitia eligendi. Deleniti minus ratione aut nam fuga. Dicta quod nesciunt repellat temporibus mollitia nisi esse quibusdam obcaecati. Ad quasi eum sequi debitis fuga veniam odio, velit expedita nostrum molestias.</p>

  </div>
</div>

  <div className="home4" id="brands">
<div>
  <h1>Brands</h1>
  <article>

    <div style={
      {animationDelay:"0.3s",}
    }>
      <AiFillGoogleCircle/>
      <p>Google</p>
    </div>

    <div style={
      {animationDelay:"0.5s",}
    }>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
    </div>

    <div style={
      {animationDelay:"0.7s",}
    }>
      <AiFillYoutube/>
      <p>Youtube</p>
    </div>

    <div style={
      {animationDelay:"0.9s",}
    }>
      <AiFillInstagram/>
      <p>Instagram</p>
    </div>
  </article>
</div>

  </div>

    </>
  );
}

export default Home
