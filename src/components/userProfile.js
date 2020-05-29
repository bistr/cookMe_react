var UserProfile = (function() {
  var id = "";

  var getName = function() {
    return localStorage.getItem("user_id");
    // return id;    // Or pull this from cookie/localStorage
  };

  var setName = function(user_id) {
    id = user_id;
    localStorage.setItem('user_id', user_id);
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export default UserProfile;
