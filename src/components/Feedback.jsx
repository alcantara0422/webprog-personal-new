import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import '../styles/Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // Polling interval in milliseconds (3 seconds)
  const POLLING_INTERVAL = 3000;

  // Function to fetch comments from the database
  const fetchComments = async () => {
    try {
      console.log('Fetching comments...');
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err) {
      console.error('Error fetching comments:', err);
      setError('Failed to load comments');
    }
  };

  useEffect(() => {
    // Initial fetch when component mounts
    fetchComments();
    
    // Set up polling interval to regularly fetch comments
    const pollingInterval = setInterval(() => {
      fetchComments();
    }, POLLING_INTERVAL);
    
    // Clean up interval when component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('comments')
        .insert([{
          name: name.trim(),
          comment: comment.trim(),
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      // Clear form
      setName('');
      setComment('');
      
      // Fetch comments immediately after successful submission
      fetchComments();
    } catch (err) {
      console.error('Error submitting comment:', err);
      setError('Failed to submit comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="feedback" className="section">
      <h1 className="section-title">Feedback</h1>
      <div className="feedback-container-flex">
        <div className="feedback-form-side">
          <div className="feedback-form-wrapper">
            <h2 className="section-subtitle">Share Your Thoughts</h2>
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-input"
                  placeholder=" "
                  disabled={isSubmitting}
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              <div className="form-group">
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="form-input"
                  rows="4"
                  placeholder=" "
                  disabled={isSubmitting}
                ></textarea>
                <label htmlFor="comment" className="form-label">Your Comment</label>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </div>
        </div>

        <div className="comments-side">
          <h2 className="section-subtitle">What People Say</h2>
          <div className="comments-grid">
            {comments.length === 0 ? (
              <p className="no-comments">Be the first to leave a comment!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment-card">
                  <div className="comment-header">
                    <h3 className="comment-name">{comment.name}</h3>
                    <span className="comment-date">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>
                  <p className="comment-text">{comment.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
