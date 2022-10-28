function newLocationString(location){
    const words = location.split('.');
    words.splice(1,1);
    const joined_words = words.join('.')
    return joined_words
  }

  export default newLocationString