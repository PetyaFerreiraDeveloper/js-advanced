const host = 'http://localhost3030'

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if(data != undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }


  try {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    if (response.status == 204) {
        return response
    } else {
        return response.json()
    }

    return response.json();
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

window.api = {
    request
}