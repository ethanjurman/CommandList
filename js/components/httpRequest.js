export default (url,callback) => {
  var req = new XMLHttpRequest();
  req.open('GET',url);
  req.onload = () => {
    if (req.status >= 200 && req.status < 400) {
      callback(req.response);
    }
  };
  req.send();
}
