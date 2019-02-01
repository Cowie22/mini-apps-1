
const postAjax = (newUser, callback) => {
  $.ajax('http://localhost:6969/users', {
    type: 'POST',
    data: JSON.stringify(newUser),
    contentType: 'application/json',
    success: () => callback(null),
    error: (err) => console.log(err),
  });
}

export default postAjax