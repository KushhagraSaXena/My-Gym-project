import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Our top workout sessions are designed to help you achieve your fitness goals. Whether you're aiming for weight loss, strength building, or improving endurance, we have a session tailored for you. Join us for expert guidance, motivation, and a community that pushes you to succeed.
        </p>
        <img src="img5.jpg" alt="Workout.jpg" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps are high-intensity programs that provide maximum results in a short amount of time. These bootcamps focus on full-body workouts that combine strength, agility, and cardiovascular training to push your limits and transform your fitness.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              A comprehensive bootcamp that focuses on building strength, improving muscular endurance, and enhancing overall fitness. Perfect for anyone looking to level up their strength training.
            </p>
          </div>
          <div>
            <h4>Fat-Burning HIIT Bootcamp</h4>
            <p>
              This bootcamp combines high-intensity interval training (HIIT) to help you burn fat quickly and efficiently. A perfect choice for those aiming to lose weight and boost their metabolism.
            </p>
          </div>
          <div>
            <h4>Endurance & Agility Bootcamp</h4>
            <p>
              Improve your stamina and agility with this fast-paced bootcamp. Designed for athletes or anyone looking to enhance their endurance, it focuses on cardiovascular fitness and agility training.
            </p>
          </div>
          <div>
            <h4>Core & Mobility Bootcamp</h4>
            <p>
              Focused on strengthening your core and improving flexibility, this bootcamp is ideal for anyone who wants to improve posture, reduce back pain, and increase overall mobility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSessions;
