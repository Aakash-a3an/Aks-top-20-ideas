export const upvote = (id) => {
    // Use optional chaining if supported (ES6+)
    const votes = localStorage.getItem('votes') ?
                   JSON.parse(localStorage.getItem('votes')) :
                   { upvotes: [], downvotes: [] }; // Default values
  
    // Check for undefined with optional chaining (if supported)
    if (votes.upvotes?.indexOf(id) !== -1) {
      return false;
    }
  
    votes.upvotes.push(id);
  
    // Optional chaining for filtering downVotes (if supported)
    const downVotes = votes.downvotes?.filter(item => item !== id);
    votes.downvotes = downVotes;
  
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  };
  
  // Similar logic for downvote function with optional chaining (if supported):
  export const downvote = (id) => {
    const votes = localStorage.getItem('votes') ?
                   JSON.parse(localStorage.getItem('votes')) :
                   { upvotes: [], downvotes: [] };
  
    if (votes.downvotes?.indexOf(id) !== -1) {
      return false;
    }
  
    votes.downvotes.push(id);
    const upVotes = votes.upvotes?.filter(item => item !== id);
    votes.upvotes = upVotes;
  
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  };
  
  // Optional: Check for localStorage support and initialize votes if needed
  if (typeof localStorage !== 'undefined') {
    const initialVotes = localStorage.getItem('votes');
    if (!initialVotes) {
      localStorage.setItem('votes', JSON.stringify({ upvotes: [], downvotes: [] }));
    }
  }
  
  export const checkIsAlreadyUpVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes'));
    // Optional chaining (if supported)
    return votes?.upvotes?.find(item => item === id);
  };

  export const checkIsAlreadyDownVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes'));
    // Optional chaining (if supported)
    return votes?.downvotes?.find(item => item === id);
  };
  