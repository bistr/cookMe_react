var Utilities = (function() {

    var sendRequestPost = async function(url, data) {
        console.log(data);
        let promise = await fetch(url, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': ' d0d94ea0',
                    'x-app-key': 'c5e02317496f34f27f0ab52d6b132ebb',
                    'x-remote-user-id': '0'
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .catch(error => {return {"Error":error}});

        return promise;
    };

    var sendRequestGet = async function(url) {

        let promise = await fetch(url)
            .then(res => res.json())
            .catch(error => {return {"Error":error}});
        return promise;
    };


    return {
        sendRequestPost: sendRequestPost,
        sendRequestGet: sendRequestGet
    }

})();

export default Utilities;
