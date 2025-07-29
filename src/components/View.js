
import '../css/view.css'
function View() {
  return (
    <div className="homepage-container">
      <div className="text-section">
        <h1>Welcome to ChatGPT</h1>
        <p>
          ChatGPT is an AI developed by OpenAI that interacts in a conversational way, making it possible to answer follow-up questions, admit mistakes, and more.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://i.postimg.cc/qqR7MbC0/7020028.jpg"
          alt="ChatGPT Illustration"
        />
      </div>
      
    </div>
    
  )
}

export default View