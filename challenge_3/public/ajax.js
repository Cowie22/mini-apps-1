
const fetchUsers = (callback) => {
  $.get('http://localhost:6969/users', (data) => {
    callback(null, data);
  })
}


export default fetchUsers;