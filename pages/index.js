function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type='email' id='email'></input>
        </div>
        <div>
        <label htmlFor="feedback">Your Email Address</label>
          <textarea id='feedback' rows='5'></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;